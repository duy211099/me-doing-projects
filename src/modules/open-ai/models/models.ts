export enum EInputField {
    ApiKey = 'apiKey',
    Prompt = 'prompt',
}

export const InputFields = Object.values(EInputField)

export type Form = {
    [key in EInputField]: string
}
