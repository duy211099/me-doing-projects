import { Chip } from '@mantine/core'
import { Catalogs } from '../../../models/models'
import { useAlpacaStore } from '../../../stores/store'

export const AlpacaAccessory = () => {
  const { selectedCatalog, selectCatalog } = useAlpacaStore((state) => state)

  return (
    <div>
      <p>Accessorize The Alpaca&#39;s</p>
      <div className="flex flex-wrap gap-2">
        {Catalogs.map((catalog, index) => (
          <Chip
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
