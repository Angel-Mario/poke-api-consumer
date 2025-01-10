export const QUERY_POKEMON_LIST = {
  query: `query MyQuery {
    pokemon_v2_pokemon(order_by: {id: asc}) {
      id
      name
      pokemon_v2_pokemontypes {
        pokemon_v2_type{
          id
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonspeciesflavortexts(limit: 1, order_by: {pokemon_v2_version: {id: asc}}) {
          pokemon_v2_version {
            id
          }
        }
      }
    }
  }`,
  variables: null,
  operationName: "MyQuery",
};

export const QUERY_MOVES_LIST = {
  query: `query MyQuery {
    pokemon_v2_move {
      id
      name
      power
      pp
      move_damage_class_id
      type_id
      generation_id
      pokemon_v2_moveeffect {
        pokemon_v2_moveeffecteffecttexts {
          short_effect
        }
      }
    }
  }`,
  variables: null,
  operationName: "MyQuery",
};

export const QUERY_POKEMON_DETAILS = (
  id: string,
  version: number,
  generation: number,
) => {
  return {
    query: `query queryDetails {
    pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {
      id
      name
      height
      weight
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_pokemonegggroups {
          pokemon_v2_egggroup {
            name
          }
        }
        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies {
            name
            id
            evolves_from_species_id
            pokemon_v2_pokemonevolutions {
              evolution_item_id
              time_of_day
              held_item_id
              id
              min_level
              needs_overworld_rain
              pokemon_v2_item {
                id
                name
              }
              pokemon_v2_gender {
                id
                name
              }
            }
            pokemon_v2_pokemons {
              id
              pokemon_v2_pokemontypes {
                pokemon_v2_type {
                  id
                }
              }
            }
          }
          id
        }
        pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}, pokemon_v2_version: {id: {_eq: ${version}}}}) {
          flavor_text
        }
        pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 9}}) {
          genus
        }
      }
      pokemon_v2_pokemoncries {
        cries(path: "latest")
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemonmoves(order_by: {level: asc_nulls_last}, where: {pokemon_v2_move: {generation_id: {_eq: ${generation}}}, _not: {level: {_eq: 0}}, pokemon_v2_versiongroup: {id: {_eq: ${version}}}}) {
        pokemon_v2_move {
          name
          power
          pp
          move_damage_class_id
          type_id
          generation_id
          pokemon_v2_moveeffect {
            pokemon_v2_moveeffecteffecttexts {
              short_effect
            }
          }
        }
        level
        move_id
      }
      pokemon_v2_pokemontypes {
        type_id
      }
    }
  }
  `,
    variables: null,
    operationName: "queryDetails",
  };
};
