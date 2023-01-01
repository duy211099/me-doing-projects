import { Title } from '@mantine/core'
import { AlpacaAccessory, AlpacaImage, AlpacaStyle } from './components'

export const AlpacaScreen = () => {
    return (
        <div className="p-8">
            <Title className="py-4" order={1}>
                Alpaca Generator
            </Title>
            <section className="flex justify-between">
                <aside className="basis-5/12">
                    <AlpacaImage />
                </aside>
                <aside className="basis-7/12 flex flex-col items-center">
                    <div className="px-12">
                        <AlpacaAccessory />
                        <AlpacaStyle />
                    </div>
                </aside>
            </section>
        </div>
    )
}
