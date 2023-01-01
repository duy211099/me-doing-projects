import { createEmotionCache, MantineProvider } from '@mantine/core'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const myCache = createEmotionCache({
    key: 'mantine',
    // to run mantine after tailwind preflight (button background: transparent)
    // https://stackoverflow.com/questions/72083381/load-mantine-styles-after-tailwind-preflight
    prepend: false,
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <MantineProvider emotionCache={myCache} theme={{}}>
            <App />
        </MantineProvider>
    </React.StrictMode>,
)
