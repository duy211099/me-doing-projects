import { Chip } from '@mantine/core'
import { useAlpacaStore } from '../../../stores/store'
import { AssetData } from '../data'

export const AlpacaStyle = () => {
  const { alpaca, selectedCatalog, setAlpacaAccessory } = useAlpacaStore((state) => state)

  return (
    <div>
      <div>Style</div>
      <div className="flex flex-wrap gap-2">
        {AssetData[selectedCatalog].map((item, index) => (
          <Chip onChange={() => setAlpacaAccessory(index)} checked={index == alpaca[selectedCatalog]} key={index}>
            {item.name}
          </Chip>
        ))}
      </div>
    </div>
  )
}
