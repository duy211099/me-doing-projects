import create from 'zustand'
import { Alpaca, ECatalog } from '../models/models'

interface AlpacaState {
  alpaca: Alpaca
  selectedCatalog: ECatalog
  selectCatalog: (value: ECatalog) => void
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
  selectCatalog: (value: ECatalog) => set({ selectedCatalog: value }),
}))
