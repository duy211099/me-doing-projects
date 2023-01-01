import { AspectRatio, Button } from '@mantine/core'
import classNames from 'classnames'
import html2canvas from 'html2canvas'
import { Catalogs, ECatalog } from '../../../models/models'
import { useAlpacaStore } from '../../../stores/store'
import { AssetData } from '../data'

export const AlpacaImage = () => {
    const { alpaca, randomAlpacaAccessory, exportRef } = useAlpacaStore((state) => state)

    const saveImage = async () => {
        if (!exportRef?.current) return

        const canvas = await html2canvas(exportRef?.current)
        const data = canvas.toDataURL('image/jpg')
        const link = document.createElement('a')

        link.href = data
        link.download = `alpaca_${new Date().toLocaleDateString()}`

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return (
        <>
            <AspectRatio ref={exportRef} ratio={1} className="pointer-events-none select-none">
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
                <Button onClick={async () => await saveImage()}>Download</Button>
            </div>
        </>
    )
}
