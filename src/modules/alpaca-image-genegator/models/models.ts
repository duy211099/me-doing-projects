export enum ECatalog {
  Accessories = 'Accessories',
  Background = 'Background',
  Ears = 'Ears',
  Eyes = 'Eyes',
  Hair = 'Hair',
  Leg = 'Leg',
  Mouth = 'Mouth',
  Neck = 'Neck',
}

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
