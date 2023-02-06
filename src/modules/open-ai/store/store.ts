import create from 'zustand'
import { EInputField, Form } from '../models/models'
import { Configuration, ListModelsResponse, OpenAIApi } from 'openai'

interface OpenAiState {
    form: Form
    response: string
    getResponse: () => void
    setForm: (key: EInputField, value: string) => void
    models: ListModelsResponse
    getModels: () => void
}

export const useOpenAiStore = create<OpenAiState>((set) => ({
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
    response: '',
    getResponse: () => {},
    models: null,
    getModels: async () => {
        const configuration = new Configuration({
            apiKey: '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',
        })
        const openai = new OpenAIApi(configuration)
        const models = await (await openai.listModels()).data

        set((state) => {
            return { ...state, models }
        })
    },
}))
