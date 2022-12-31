import { Chip } from '@mantine/core'
import { AssetData, ECatalog } from './data'
import { useAlpacaStore } from '../../stores/store'

export const AlpacaScreen = () => {
  const { alpaca, selectedCatalog, selectCatalog } = useAlpacaStore((state) => state)

  const catalogArray = Object.values(ECatalog);

  return (
    <div className="p-8">
      <header>Alpaca Generator</header>
      <section className="flex justify-between">
        <aside>
          <div>Alpaca Image</div>
          <img id="imgHome" src="assets/alpaca/accessories/flower.png" alt=""></img>
          <div>
            <button>Random</button>
            <button>Download</button>
          </div>
        </aside>
        <aside>
          <div>
            <p>Accessorize The alpaca&#39;s</p>
            <div className="flex flex-wrap gap-2">
              {catalogArray.map((_, index) => (
                <Chip
                  onChange={() => {
                    selectCatalog(_)
                  }}
                  checked={_ == selectedCatalog}
                  key={index}
                >
                  {_}
                </Chip>
              ))}
            </div>
          </div>
          <div>Style</div>
          <div className="flex flex-wrap gap-2">
            {AssetData[selectedCatalog].map((_, index) => (
              <Chip checked={index == alpaca[selectedCatalog]} key={index}>
                {_.name}
              </Chip>
            ))}
          </div>
        </aside>
      </section>
    </div>
  )
}
