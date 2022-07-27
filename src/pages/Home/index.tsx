import React, { Fragment, Suspense } from 'react';
import Product from '../../components/Product';

import './index.scss';
import { gql, useQuery } from '@apollo/client';
import { Pokemon } from '../../types/pokemon';
import Loading from '../../components/Loading';

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
  const { loading, data } = useQuery<{ allPokemon: Pokemon[] }>(GET_POKEMON_QUERY);

  return (
    <main>
      <Loading />
      {/* {loading ? (<Loading />) : (
        <Fragment>
        { data?.allPokemon.map((pokemon: Pokemon) => (
          <Product
            key={pokemon.name}
            id={pokemon.id}
            name={pokemon.name}
            types={pokemon.types}
            sprites={pokemon.sprites}
          />
        ))}
        </Fragment>
      )} */}
    </main>
  );
}

export default Home;