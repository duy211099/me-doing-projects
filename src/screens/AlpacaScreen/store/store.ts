import create from 'zustand'
import { Assets } from '../data'

interface AlpacaState {
  selectedItem: { name: string; items: { name: string; path: string }[] }
  selectItem: (index: number) => void
}

export const useAlpacaStore = create<AlpacaState>((set) => ({
  selectedItem: Assets[0],
  selectItem: (index: number) => set({ selectedItem: Assets[index] }),
}))