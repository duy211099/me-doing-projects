import { Box, Button, Center, Paper, TextInput, Text, Anchor, Textarea } from '@mantine/core'
import { useEffect, useState } from 'react'
import { EInputField } from '../../models/models'
import { useOpenAiStore } from '../../store/store'

function Demo() {
    const { form, setForm, getModels } = useOpenAiStore((state) => state)
    const { apiKey, prompt } = form

    const [response, setResponse] = useState('')

    useEffect(() => {
        getModels()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        const endpoint = `https://api.openai.com/v1/engines/text-davinci-003/completions`
        const query = {
            prompt: prompt,
            max_tokens: 100,
            n: 1,
            stop: '',
            temperature: 0.5,
        }
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(query),
        })
        const data = await response.json()
        setResponse(data.choices[0].text)
    }

    return (
        <Center>
            <Box m={'sm'} sx={{ minWidth: 600 }}>
                <Anchor href="https://platform.openai.com/account/api-keys" target="_blank">
                    Get API Token
                </Anchor>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        withAsterisk
                        value={apiKey}
                        label="API Token"
                        onChange={(event) => {
                            setForm(EInputField.ApiKey, event.target.value)
                        }}
                    />
                    <Textarea
                        withAsterisk
                        value={prompt}
                        label="Prompt"
                        onChange={(event) => setForm(EInputField.Prompt, event.target.value)}
                        mt="sm"
                        autosize
                    />
                    <Button mt="sm" type="submit">
                        Submit
                    </Button>
                </form>
                <p>Response: </p>
                <Paper shadow="xs" p="md">
                    <Text>{response}</Text>
                </Paper>
            </Box>
        </Center>
    )
}

export default Demo
