import { AspectRatio, Button } from '@mantine/core'
import classNames from 'classnames'
import { Catalogs, ECatalog } from '../../../models/models'
import { useAlpacaStore } from '../../../stores/store'
import { AssetData } from '../data'

export const AlpacaImage = () => {
    const { alpaca, randomAlpacaAccessory } = useAlpacaStore((state) => state)

    return (
        <>
            <AspectRatio ratio={1} className="pointer-events-none select-none">
                <img className="z-10" key={'nose'} alt={'nose'} src={'assets/alpaca/nose.png'} />
                {Catalogs.map((catalog) => {
                    const index = alpaca[catalog]
                    const item = AssetData[catalog][index]

                    return (
                        <img
                            className={classNames({
                                'z-20': catalog == ECatalog.Mouth,
                                'z-30': catalog == ECatalog.Eyes,
                            })}
                            key={catalog}
                            alt={item.name}
                            src={item.path}
                        />
                    )
                })}
            </AspectRatio>
            <div className="flex gap-2 py-4">
                <Button onClick={() => randomAlpacaAccessory()}>Random</Button>
                <Button>Download</Button>
            </div>
        </>
    )
}
