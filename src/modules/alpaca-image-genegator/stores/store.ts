import { createRef } from 'react'
import create from 'zustand'
import { Alpaca, ECatalog } from '../models/models'
import { AssetData } from '../screens/AlpacaScreen/data'

interface AlpacaState {
    alpaca: Alpaca
    selectedCatalog: ECatalog
    exportRef: React.RefObject<HTMLDivElement>
    selectCatalog: (value: ECatalog) => void
    setAlpacaAccessory: (index: number) => void
    randomAlpacaAccessory: () => void
}

export const useAlpacaStore = create<AlpacaState>((set) => ({
    alpaca: {
        Accessories: 0,
        Background: 0,
        Ears: 0,
        Eyes: 0,
        Hair: 0,
        Leg: 0,
        Mouth: 0,
        Neck: 0,
    },
    selectedCatalog: ECatalog.Accessories,
    exportRef: createRef<HTMLDivElement>(),
    selectCatalog: (value: ECatalog) => set({ selectedCatalog: value }),
    setAlpacaAccessory: (index: number) => {
        set((state) => {
            const result = state.alpaca
            result[state.selectedCatalog] = index

            return { ...state, alpaca: result }
        })
    },
    randomAlpacaAccessory: () => {
        set((state) => {
            const result = state.alpaca

            Object.keys(result).forEach((key) => {
                const catalog = <ECatalog>key
                const maxLength = AssetData[catalog].length
                console.log('tom', catalog, maxLength, Math.floor(Math.random() * maxLength))
                result[catalog] =  Math.floor(Math.random() * maxLength)
            })

            console.log('rs', result)

            return { ...state, alpaca: result }
        })
    },
}))
