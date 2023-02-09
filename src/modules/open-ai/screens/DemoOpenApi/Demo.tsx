import { Box, Button, Center, Paper, TextInput, Text, Anchor, Textarea, LoadingOverlay } from '@mantine/core'
import { useState } from 'react'
import { EInputField } from '../../models/models'
import { useOpenAiStore } from '../../store/store'

function Demo() {
    const { form, setForm, getModels, completion, getCompletion, getEmbedding } = useOpenAiStore((state) => state)
    const { apiKey, prompt } = form

    const [isLoading, setIsLoading] = useState(false)

    return (
        <Center>
            <LoadingOverlay visible={isLoading} overlayBlur={1} />
            <Box m={'sm'} sx={{ width: 800 }}>
                <Anchor href="https://platform.openai.com/account/api-keys" target="_blank">
                    Get API Token
                </Anchor>
                {/* <Button onClick={async () => await getModels()}>Get Models</Button> */}
                <form>
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
                    <Button
                        mt="sm"
                        onClick={() => {
                            ;async (e) => {
                                e.preventDefault()
                                setIsLoading(true)
                                await getCompletion()
                                setIsLoading(false)
                            }
                        }}
                    >
                        Submit
                    </Button>

                    <Button
                        onClick={async () => {
                            setIsLoading(true)
                            await getEmbedding()
                            setIsLoading(false)
                        }}
                        m='sm'
                    >
                        Get getEmbedding
                    </Button>
                </form>
                <p>Response: </p>
                <Paper shadow="xs" p="md">
                    <Text>{completion}</Text>
                </Paper>
            </Box>
        </Center>
    )
}

export default Demo
