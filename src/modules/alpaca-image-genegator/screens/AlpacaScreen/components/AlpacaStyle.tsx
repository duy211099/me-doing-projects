import { Chip, Title } from '@mantine/core'
import { useAlpacaStore } from '../../../stores/store'
import { AssetData } from '../data'

export const AlpacaStyle = () => {
    const { alpaca, selectedCatalog, setAlpacaAccessory } = useAlpacaStore((state) => state)

    return (
        <div>
            <Title className="py-4" order={2}>
                Style
            </Title>
            <div className="flex flex-wrap gap-4">
                {AssetData[selectedCatalog].map((item, index) => (
                    <Chip
                        variant="filled"
                        size="lg"
                        onChange={() => setAlpacaAccessory(index)}
                        checked={index == alpaca[selectedCatalog]}
                        key={index}
                    >
                        {item.name}
                    </Chip>
                ))}
            </div>
        </div>
    )
}
