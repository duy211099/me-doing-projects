import { AspectRatio, Chip } from '@mantine/core'
import { AssetData } from './data'
import { useAlpacaStore } from '../../stores/store'
import { ECatalog } from '../../models/models'

export const AlpacaScreen = () => {
  const { alpaca, selectedCatalog, selectCatalog, setAlpacaAccessory } = useAlpacaStore((state) => state)

  const catalogArray = Object.values(ECatalog)

  return (
    <div className="p-8">
      <header>Alpaca Generator</header>
      <section className="flex justify-between">
        <aside className="basis-6/12">
          <AspectRatio ratio={1} className='pointer-events-none select-none'>
            {catalogArray.map((catalog) => {
              const index = alpaca[catalog]
              const item = AssetData[catalog][index]

              return <img className='' key={catalog} alt={item.name} src={item.path} />
            })}
            <img className="" key={'nose'} alt={'nose'} src={'assets/alpaca/nose.png'} />
          </AspectRatio>
          <div>
            <button>Random</button>
            <button>Download</button>
          </div>
        </aside>
        <aside className="basis-7/12 flex flex-col justify-center items-center">
          <div className='w-2/3 pb-24'>
            <div>
              <p>Accessorize The Alpaca&#39;s</p>
              <div className="flex flex-wrap gap-2">
                {catalogArray.map((catalog, index) => (
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
            <div>
              <div>Style</div>
              <div className="flex flex-wrap gap-2">
                {AssetData[selectedCatalog].map((item, index) => (
                  <Chip
                    onChange={() => setAlpacaAccessory(index)}
                    checked={index == alpaca[selectedCatalog]}
                    key={index}
                  >
                    {item.name}
                  </Chip>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}
