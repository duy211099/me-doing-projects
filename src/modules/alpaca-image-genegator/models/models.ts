export enum ECatalog {
  Background = 'Background',
  Ears = 'Ears',
  Hair = 'Hair',
  Neck = 'Neck',
  Leg = 'Leg',
  Mouth = 'Mouth',
  Eyes = 'Eyes',
  Accessories = 'Accessories',
}

export const Catalogs = Object.values(ECatalog)

export type Alpaca = {
  [key in ECatalog]: number
}

export type Item = {
  name: string
  path: string
}

export type Asset = {
  [key in ECatalog]: Item[]
}
