import React, { Fragment} from 'react';
import Product from '../../components/Product';

import './index.scss';
import { gql, useQuery } from '@apollo/client';
import Header from '../../components/Header';
import { Pokemon } from '../../types/pokemon';

const GET_POKEMON_QUERY = gql`
  query {
    allPokemon{
      id
      name
      types{
        name
      }
      sprites {
        front_default
        front_shiny
      }
    }
  }
`


const Home: React.FC = () => {
  const {data} = useQuery<{ allPokemon: Pokemon[]}>(GET_POKEMON_QUERY);
  
  return (
    <main>
      {data && data?.allPokemon.map((pokemon: Pokemon) => (
        <Product 
          key={pokemon.name}
          id={pokemon.id}
          name={pokemon.name}
          types={pokemon.types}
          sprites={pokemon.sprites}
        />
      ))}
      </main>
  );
}

export default Home;