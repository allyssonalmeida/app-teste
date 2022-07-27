export interface Type {
  name: string;
}

export interface Sprite {
  front_default: string;
  front_shiny: string;
}

export interface Pokemon {
  id: number;
  name: string;
  types: Type[]
  sprites: Sprite
}

export interface ProductItem {
  id: number
  name: string
  sprite: string | undefined
  price: number
}