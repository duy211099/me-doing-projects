import { Box, Button, Center, Group, Input, NumberInput, Paper, TextInput, Text, Anchor, Textarea } from '@mantine/core'
import React, { useState } from 'react'

function Demo() {
    const [input, setInput] = useState('')
    const [apiKey, setApiKey] = useState('')
    const [response, setResponse] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const endpoint = `https://api.openai.com/v1/engines/text-davinci-002/completions`
        const query = {
            prompt: input,
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
            <Box sx={{ minWidth: 600 }}>
                <Anchor href="https://platform.openai.com/account/api-keys" target="_blank">
                    Get API Token
                </Anchor>
                <form onSubmit={handleSubmit}>
                    <TextInput
                        withAsterisk
                        value={apiKey}
                        label="API Token"
                        onChange={(event) => {
                            setApiKey(event.target.value)
                        }}
                    />
                    <Textarea withAsterisk value={input} label="Prompt" onChange={handleChange} mt="sm" autosize/>
                    <Button mt="sm" type="submit">
                        Submit
                    </Button>
                </form>
                <p>Response: </p>
                <Paper shadow="xs" p="md">
                    <Text className="whitespace-pre">{response}</Text>
                </Paper>
                <div></div>
            </Box>
        </Center>
    )
}

export default Demo
