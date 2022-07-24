import React, { Fragment, useEffect, useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { Sprite, Type } from '../../types/pokemon';
import Breadcrumb from '../../components/Breadcrumb';

import './index.scss';
import { usePrice } from '../../Hooks';
import Price from '../../components/Price';

const GET_POKEMON_BY_ID = gql`
  query GetPokemonById ($id: Int!){
    pokemon(id: $id) {
      id
      name
      weight
      height
      sprites {
        front_shiny
        front_default
      }
      pokedex_entries {
        description
      }
      abilities {
        name
      }
      types {
        name
      }
      base_stats {
        hp
        attack
        defense
        special_attack
        special_defense
        speed
      }
    }
  }
`

interface GetPokemonByIDResponse {
  pokemon: {
    id: number
    name: string
    height: number
    weight: number
    sprites: Sprite
    types: Type[]
    base_stats: {
      hp: number
      attack: number
      defense: number
      special_attack: number
      special_defense: number
      speed: number
    }
    abilities: [
      ability: {
        name: string
      }
    ]
    pokedex_entries: [{
      description: string
    }]
  }
}

const Product: React.FC = () => {
  const [currentImg, setCurrentImg] = useState<string>();

  const {id} = useParams<{id: string}>();
  const { data } = useQuery<GetPokemonByIDResponse>(GET_POKEMON_BY_ID, {
    variables: {id: Number(id)}
  });

  useEffect(() => {
    setCurrentImg(data?.pokemon.sprites.front_default);
    console.log(data)
  },[data])

  return (
    <Fragment>
      {data && 
        <main>
          <Breadcrumb product={data?.pokemon.name}/>
          <div className="product">
            <section className="product__image">
              <div className="product__frame">
                <img src={currentImg} alt={data?.pokemon.name} />
              </div>
              <div className="product__badges">
                {data.pokemon.types.map(type => (
                  <span className={`type type--${type.name}`}>{type.name}</span>
                ))}
              </div>
            </section>
            <section className="product__info">
              <div className="product__title">
                {data?.pokemon.name}
              </div>
              <div className="product__abilities">
                <strong>Abilities: </strong>
                {data?.pokemon.abilities.map(ability => (
                  <span className="product__ability">{ability.name}</span>
                ))}
              </div>
              <div className="product__description">
                <strong>About: </strong>
                {data?.pokemon.pokedex_entries[0].description}
              </div>
              <div className="stats">
                <strong className="stats__title">Base Status</strong>
                <ul>
                  <li className="stats__item">
                    <strong>HP:</strong>
                    <div style={{ width: data?.pokemon.base_stats.hp+'%' }}/>
                  </li>
                  <li className="stats__item">
                    <strong>Attack:</strong>
                    <div style={{ width: data?.pokemon.base_stats.attack+'%' }}/>
                  </li>
                  <li className="stats__item">
                    <strong>defense:</strong>
                    <div style={{ width: data?.pokemon.base_stats.defense+'%' }}/>
                  </li>
                  <li className="stats__item">
                    <strong>Special Attack:</strong>
                    <div style={{ width: data?.pokemon.base_stats.special_attack+'%' }}/>
                  </li>
                  <li className="stats__item">
                    <strong>Special Defense:</strong>
                    <div style={{ width: data?.pokemon.base_stats.special_defense+'%' }}/>
                  </li>
                  <li className="stats__item">
                    <strong>Speed:</strong>
                    <div style={{ width: data?.pokemon.base_stats.speed+'%' }}/>
                  </li>
                </ul>
              </div>
              <div className="product__buy">
                <Price type="product__price" pokemon={data?.pokemon.name} />
                <button>I choose you!</button>
              </div>
            </section>
          </div>
        </main>
      }
    </Fragment>
  );
}

export default Product;