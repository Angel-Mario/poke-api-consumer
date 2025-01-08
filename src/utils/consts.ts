import { cardButton, cardTheme } from "./card-aspects";

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

export const QUERY_POKEMON_DETAILS = (id: string) => {
  console.log(id, "id");
  return {
    query: `query queryDetails {\n  pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {
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
      pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}}, limit: 1) {
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
    pokemon_v2_pokemonmoves(order_by: {level: asc_nulls_last}, where: {pokemon_v2_move: {generation_id: {_eq: 1}}, _not: {level: {_eq: 0}}}, distinct_on: level) {
      pokemon_v2_move {
        name
        power
        pp
        pokemon_v2_moveflavortexts(where: {language_id: {_eq: 9}}, limit: 1) {
          flavor_text
        }
        move_damage_class_id
        type_id
      }
      level
      move_id
    }
    pokemon_v2_pokemontypes {
      type_id
    }
  }
}\n\n`,
    variables: null,
    operationName: "queryDetails",
  };
};

export const POKETYPES: { [key: number]: string } = {
  0: "undefined",
  1: "normal",
  2: "fighting",
  3: "flying",
  4: "poison",
  5: "ground",
  6: "rock",
  7: "bug",
  8: "ghost",
  9: "steel",
  10: "fire",
  11: "water",
  12: "grass",
  13: "electric",
  14: "psychic",
  15: "ice",
  16: "dragon",
  17: "dark",
  18: "fairy",
  19: "stellar",
  1001: "unknown",
  1002: "shadow",
};

const rawData = [
  [1, 1, 1, 1, 1, 0.5, 1, 0, 0.5, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [2, 1, 0.5, 0.5, 1, 2, 0.5, 0, 2, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5],
  [1, 2, 1, 1, 1, 0.5, 2, 1, 0.5, 1, 1, 2, 0.5, 1, 1, 1, 1, 1],
  [1, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 0, 1, 1, 2, 1, 1, 1, 1, 1, 2],
  [1, 1, 0, 2, 1, 2, 0.5, 1, 2, 2, 1, 0.5, 2, 1, 1, 1, 1, 1],
  [1, 0.5, 2, 1, 0.5, 1, 2, 1, 0.5, 2, 1, 1, 1, 1, 2, 1, 1, 1],
  [1, 0.5, 0.5, 0.5, 1, 1, 1, 0.5, 0.5, 0.5, 1, 2, 1, 2, 1, 1, 2, 0.5],
  [0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 1],
  [1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5, 0.5, 1, 0.5, 1, 2, 1, 1, 2],
  [1, 1, 1, 1, 1, 0.5, 2, 1, 2, 0.5, 0.5, 2, 1, 1, 2, 0.5, 1, 1],
  [1, 1, 1, 1, 2, 2, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 1, 0.5, 1, 1],
  [1, 1, 0.5, 0.5, 2, 2, 0.5, 1, 0.5, 0.5, 2, 0.5, 1, 1, 1, 0.5, 1, 1],
  [1, 1, 2, 1, 0, 1, 1, 1, 1, 1, 2, 0.5, 0.5, 1, 1, 0.5, 1, 1],
  [1, 2, 1, 2, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 0.5, 1, 1, 0, 1],
  [1, 1, 2, 1, 2, 1, 1, 1, 0.5, 0.5, 0.5, 2, 1, 1, 0.5, 2, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 0.5, 1, 1, 1, 1, 1, 1, 2, 1, 0],
  [1, 0.5, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 0.5, 0.5],
  [1, 2, 1, 0.5, 1, 1, 1, 1, 0.5, 0.5, 1, 1, 1, 1, 1, 2, 2, 1],
];

// function to get the effectiveness of one or two types:
export const getEffectiveness = (pokemontype: number, against: number) => {
  return rawData[against][pokemontype];
};

// function to get the effectiveness of one or two types against all types:
export const getEffectivenessAgainstType = (
  selectedType: number,
  pokemonType1: number,
  pokemonType2: number,
) => {
  if (pokemonType2 == -1) {
    return getEffectiveness(pokemonType1, selectedType);
  } else {
    // Multiply if there are two selected types
    return (
      getEffectiveness(pokemonType1, selectedType) *
      getEffectiveness(pokemonType2, selectedType)
    );
  }
};

export const HeadArticles: {
  data: { children: string; theme: string; button: string; link: string }[];
} = {
  data: [
    {
      children: "Pokedex",
      theme: cardTheme["grass"],
      button: cardButton["grass"],
      link: `/pokemon`,
    },
    {
      children: "Moves",
      theme: cardTheme["fire"],
      button: cardButton["fire"],
      link: `/moves`,
    },
    {
      children: "Abilities",
      theme: cardTheme["water"],
      button: cardButton["water"],
      link: `/abilities`,
    },
    {
      children: "Items",
      theme: cardTheme["electric"],
      button: cardButton["electric"],
      link: `/items`,
    },
    {
      children: "Locations",
      theme: "#9f5bba",
      button: "#b784cb",
      link: `/locations`,
    },
    {
      children: "Types",
      theme: "#ca8179",
      button: "#d7a09a",
      link: `/types`,
    },
  ],
};

// query MyQuery {
//   pokemon_v2_pokemon(order_by: {id: asc}) {
//     id
//     name
//     pokemon_v2_pokemontypes {
//       pokemon_v2_type{
//         id
//       }
//     }
//     pokemon_v2_pokemonspecy {
//       pokemon_v2_pokemonspeciesflavortexts(limit: 1) {
//         pokemon_v2_version {
//           id
//         }
//       }
//     }
//   }
// }

// query MyQuery {
//   pokemon_v2_pokemon(where: {id: {_eq: 133}}) {
//     id
//     name
//     height
//     weight
//     pokemon_v2_pokemonabilities {
//       pokemon_v2_ability {
//         name
//       }
//     }
//     pokemon_v2_pokemonspecy {
//       pokemon_v2_pokemonegggroups {
//         pokemon_v2_egggroup {
//           name
//         }
//       }
//       pokemon_v2_evolutionchain {
//         pokemon_v2_pokemonspecies {
//           name
//           id
//           evolves_from_species_id
//           pokemon_v2_pokemonevolutions {
//             evolution_item_id
//             time_of_day
//             held_item_id
//             id
//             min_level
//             needs_overworld_rain
//             pokemon_v2_item {
//               id
//               name
//             }
//             pokemon_v2_gender {
//               id
//               name
//             }
//           }
//           pokemon_v2_pokemons {
//             id
//             pokemon_v2_pokemontypes {
//               pokemon_v2_type {
//                 id
//               }
//             }
//           }
//         }
//         id
//       }
//       pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}}, limit: 1) {
//         flavor_text
//       }
//       pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 9}}) {
//         genus
//       }
//     }
//     pokemon_v2_pokemoncries {
//       cries(path: "latest")
//     }
//     pokemon_v2_pokemonstats {
//       base_stat
//       pokemon_v2_stat {
//         name
//       }
//     }
//     pokemon_v2_pokemonmoves(order_by: {level: asc_nulls_last}, where: {pokemon_v2_move: {generation_id: {_eq: 1}}, _not: {level: {_eq: 0}}}, distinct_on: level) {
//       pokemon_v2_move {
//         name
//         power
//         pp
//         pokemon_v2_moveflavortexts(where: {language_id: {_eq: 9}}, limit: 1) {
//           flavor_text
//         }
//         move_damage_class_id
//         type_id
//       }
//       level
//       move_id
//     }
//     pokemon_v2_pokemontypes {
//       type_id
//     }
//   }
// }

const versions = {
  data: {
    pokemon_v2_version: [
      {
        id: 1,
        name: "red",
      },
      {
        id: 2,
        name: "blue",
      },
      {
        id: 3,
        name: "yellow",
      },
      {
        id: 4,
        name: "gold",
      },
      {
        id: 5,
        name: "silver",
      },
      {
        id: 6,
        name: "crystal",
      },
      {
        id: 7,
        name: "ruby",
      },
      {
        id: 8,
        name: "sapphire",
      },
      {
        id: 9,
        name: "emerald",
      },
      {
        id: 10,
        name: "firered",
      },
      {
        id: 11,
        name: "leafgreen",
      },
      {
        id: 12,
        name: "diamond",
      },
      {
        id: 13,
        name: "pearl",
      },
      {
        id: 14,
        name: "platinum",
      },
      {
        id: 15,
        name: "heartgold",
      },
      {
        id: 16,
        name: "soulsilver",
      },
      {
        id: 17,
        name: "black",
      },
      {
        id: 18,
        name: "white",
      },
      {
        id: 19,
        name: "colosseum",
      },
      {
        id: 20,
        name: "xd",
      },
      {
        id: 21,
        name: "black-2",
      },
      {
        id: 22,
        name: "white-2",
      },
      {
        id: 23,
        name: "x",
      },
      {
        id: 24,
        name: "y",
      },
      {
        id: 25,
        name: "omega-ruby",
      },
      {
        id: 26,
        name: "alpha-sapphire",
      },
      {
        id: 27,
        name: "sun",
      },
      {
        id: 28,
        name: "moon",
      },
      {
        id: 29,
        name: "ultra-sun",
      },
      {
        id: 30,
        name: "ultra-moon",
      },
      {
        id: 31,
        name: "lets-go-pikachu",
      },
      {
        id: 32,
        name: "lets-go-eevee",
      },
      {
        id: 33,
        name: "sword",
      },
      {
        id: 34,
        name: "shield",
      },
      {
        id: 35,
        name: "the-isle-of-armor",
      },
      {
        id: 36,
        name: "the-crown-tundra",
      },
      {
        id: 37,
        name: "brilliant-diamond",
      },
      {
        id: 38,
        name: "shining-pearl",
      },
      {
        id: 39,
        name: "legends-arceus",
      },
      {
        id: 40,
        name: "scarlet",
      },
      {
        id: 41,
        name: "violet",
      },
      {
        id: 42,
        name: "the-teal-mask",
      },
      {
        id: 43,
        name: "the-indigo-disk",
      },
    ],
  },
};
export const GAME_VERSIONS: string[] = [
  "red",
  "blue",
  "yellow",
  "gold",
  "silver",
  "crystal",
  "ruby",
  "sapphire",
  "emerald",
  "firered",
  "leafgreen",
  "diamond",
  "pearl",
  "platinum",
  "heartgold",
  "soulsilver",
  "black",
  "white",
  "colosseum",
  "xd",
  "black-2",
  "white-2",
  "x",
  "y",
  "omega-ruby",
  "alpha-sapphire",
  "sun",
  "moon",
  "ultra-sun",
  "ultra-moon",
  "lets-go-pikachu",
  "lets-go-eevee",
  "sword",
  "shield",
  "the-isle-of-armor",
  "the-crown-tundra",
  "brilliant-diamond",
  "shining-pearl",
  "legends-arceus",
  "scarlet",
  "violet",
  "the-teal-mask",
  "the-indigo-disk",
];
