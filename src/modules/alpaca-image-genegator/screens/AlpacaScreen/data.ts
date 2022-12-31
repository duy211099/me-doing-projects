import { ECatalog, Asset } from "../../models/models";

export const AssetData: Asset = {
  [ECatalog.Accessories]: [
    {
      name: 'Earings',
      path: 'assets/alpaca/accessories/earings.png',
    },
    {
      name: 'Flower',
      path: 'assets/alpaca/accessories/flower.png',
    },
    {
      name: 'Glasses',
      path: 'assets/alpaca/accessories/glasses.png',
    },
    {
      name: 'Headphone',
      path: 'assets/alpaca/accessories/headphone.png',
    },
  ],
  [ECatalog.Background]: [
    {
      name: 'Blue 50',
      path: 'assets/alpaca/backgrounds/blue50.png',
    },
    {
      name: 'Blue 60',
      path: 'assets/alpaca/backgrounds/blue50.png',
    },
    {
      name: 'Blue 70',
      path: 'assets/alpaca/backgrounds/blue50.png',
    },
  ],
  [ECatalog.Ears]: [
    {
      name: 'Default',
      path: 'assets/alpaca/ears/default.png',
    },
    {
      name: 'Tilt Backward',
      path: 'assets/alpaca/ears/tilt-backward.png',
    },
    {
      name: 'Tilt Forward',
      path: 'assets/alpaca/ears/tilt-forward.png',
    },
  ],
  [ECatalog.Eyes]: [
    {
      name: 'Angry',
      path: 'assets/alpaca/eyes/angry.png',
    },
    {
      name: 'Default',
      path: 'assets/alpaca/eyes/default.png',
    },
    {
      name: 'Naughty',
      path: 'assets/alpaca/eyes/naughty.png',
    },
    {
      name: 'Panda',
      path: 'assets/alpaca/eyes/panda.png',
    },
    {
      name: 'Smart',
      path: 'assets/alpaca/eyes/smart.png',
    },
    {
      name: 'Star',
      path: 'assets/alpaca/eyes/star.png',
    },
  ],
  [ECatalog.Hair]: [],
  [ECatalog.Leg]: [],
  [ECatalog.Mouth]: [],
  [ECatalog.Neck]: [],
}
export { ECatalog };

