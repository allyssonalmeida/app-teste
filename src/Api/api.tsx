import BaseAPI from "./Config";

export const getAllPokemon = async(limit = 10) => {
  return BaseAPI.get(`/pokemon?limit=${limit}`)
}

export const getPokemonData = (pokemon: string) => {
  return BaseAPI.get(`/pokemon/${pokemon}`)
}