import create from 'zustand'
import { EInputField, Form } from '../models/models'
import {
    Configuration,
    CreateEmbeddingResponseDataInner,
    ListModelsResponse,
    OpenAIApi,
    OpenAIApiAxiosParamCreator,
} from 'openai'
import similarity from 'compute-cosine-similarity'
import { csv } from 'd3-fetch'

interface OpenAiState {
    form: Form
    completion: string
    getCompletion: () => void
    getEmbedding: () => void
    setForm: (key: EInputField, value: string) => void
    models: ListModelsResponse
    getModels: () => void
}

export const useOpenAiStore = create<OpenAiState>((set, get) => ({
    form: {
        [EInputField.ApiKey]: '',
        [EInputField.Prompt]: '',
    },
    setForm: (key, value) => {
        set((state) => {
            return {
                ...state,
                form: {
                    ...state.form,
                    [key]: value,
                },
            }
        })
    },
    completion: '',
    getCompletion: async () => {
        console.log('duy get().form.apiKey', get().form.apiKey)
        const configuration = new Configuration({
            apiKey: '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',
            // apiKey: get().form.apiKey,
            organization: 'org-nIzCKuSo4jE6uGdOnRFG0Sws',
        })
        const openai = new OpenAIApi(configuration)

        const rsp = await openai.createCompletion({
            model: 'ada:ft-harahaha-2023-02-08-08-30-43',
            // model: 'text-davinci-003',
            prompt: get().form.prompt,
            max_tokens: 100,
            n: 1,
            stop: '',
            temperature: 0.5,
        })

        set((state) => {
            return { ...state, completion: rsp.data.choices[0].text }
        })
    },
    getEmbedding: async () => {
        const configuration = new Configuration({
            apiKey: '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',
            organization: 'org-nIzCKuSo4jE6uGdOnRFG0Sws',
        })
        const openai = new OpenAIApi(configuration)

        const embeddingRsp = await openai.createEmbedding({
            model: 'text-embedding-ada-002',
            input: get().form.prompt,
        })

        const embeddingPrompt = embeddingRsp.data.data[0].embedding

        const fileData = await csv('assets/openai/embedded_khai_niem.csv')

        const context = fileData
            .map((item) => {
                const embedding = item['ada_embedding'].slice(1, -1).split(',')
                // const abc = Object.keys(demo).map((key) => demo[key]);

                const result = similarity(embedding, embeddingPrompt)

                return { ...item, result }
            })
            .sort((a, b) => {
                if (a.result > b.result) {
                    return -1
                }
                if (a.result < b.result) {
                    return 1
                }
                // a must be equal to b
                return 0
            })[0]

        console.log('duy soc nau', context)

        const header = `Answer the question as truthfully as possible using the provided context, and if the answer is not contained within the text below, say "I don't know."\n\nContext:\n`
        const prompt = header + context?.context + "\n\n Q: " + get().form.prompt + "\n A:"

        console.log('duy 123 ', prompt)
        
        const rsp = await openai.createCompletion({
            // model: 'ada:ft-harahaha-2023-02-08-08-30-43',
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens: 1024,
            n: 1,
            stop: '',
            temperature: 0.5,
        })

        set((state) => {
            return { ...state, completion: rsp.data.choices[0].text }
        })
    },
    models: null,
    getModels: async () => {
        const configuration = new Configuration({
            apiKey: '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',
        })
        const openai = new OpenAIApi(configuration)
        const models = (await openai.listModels()).data

        set((state) => {
            return { ...state, models }
        })
    },
}))
