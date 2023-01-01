import { Chip, Title } from '@mantine/core'
import { Catalogs } from '../../../models/models'
import { useAlpacaStore } from '../../../stores/store'

export const AlpacaAccessory = () => {
    const { selectedCatalog, selectCatalog } = useAlpacaStore((state) => state)

    return (
        <div>
            <Title className="py-4" order={2}>
                Accessorize The Alpaca&#39;s
            </Title>
            <div className="flex flex-wrap gap-4">
                {Catalogs.map((catalog, index) => (
                    <Chip
                        variant="filled"
                        size="lg"
                        onChange={() => {
                            selectCatalog(catalog)
                        }}
                        checked={catalog == selectedCatalog}
                        key={index}
                    >
                        {catalog}
                    </Chip>
                ))}
            </div>
        </div>
    )
}
