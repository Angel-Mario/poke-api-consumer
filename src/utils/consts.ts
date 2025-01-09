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

export const generationVersion = {
  pokemon_v2_generation: [
    {
      id: 1,
      pokemon_v2_versiongroups: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    },
    {
      id: 2,
      pokemon_v2_versiongroups: [
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    },
    {
      id: 3,
      pokemon_v2_versiongroups: [
        {
          id: 5,
        },
        {
          id: 6,
        },
        {
          id: 7,
        },
        {
          id: 12,
        },
        {
          id: 13,
        },
      ],
    },
    {
      id: 4,
      pokemon_v2_versiongroups: [
        {
          id: 8,
        },
        {
          id: 9,
        },
        {
          id: 10,
        },
      ],
    },
    {
      id: 5,
      pokemon_v2_versiongroups: [
        {
          id: 11,
        },
        {
          id: 14,
        },
      ],
    },
    {
      id: 6,
      pokemon_v2_versiongroups: [
        {
          id: 15,
        },
        {
          id: 16,
        },
      ],
    },
    {
      id: 7,
      pokemon_v2_versiongroups: [
        {
          id: 17,
        },
        {
          id: 18,
        },
        {
          id: 19,
        },
      ],
    },
    {
      id: 8,
      pokemon_v2_versiongroups: [
        {
          id: 20,
        },
        {
          id: 21,
        },
        {
          id: 22,
        },
        {
          id: 23,
        },
        {
          id: 24,
        },
      ],
    },
    {
      id: 9,
      pokemon_v2_versiongroups: [
        {
          id: 25,
        },
        {
          id: 26,
        },
        {
          id: 27,
        },
      ],
    },
  ],
};

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
//       pokemon_v2_pokemonspeciesflavortexts(limit: 1, order_by: {pokemon_v2_version: {id: asc}}) {
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
//       pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}, pokemon_v2_version: {id: {_eq: 1}}}) {
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
//     pokemon_v2_pokemonmoves(order_by: {level: asc_nulls_last}, where: {pokemon_v2_move: {generation_id: {_eq: 1}}, _not: {level: {_eq: 0}}, pokemon_v2_versiongroup: {id: {_eq: 1}}}) {
//       pokemon_v2_move {
//         name
//         power
//         pp
//         move_damage_class_id
//         type_id
//         generation_id
//         pokemon_v2_moveeffect {
//           pokemon_v2_moveeffecteffecttexts {
//             short_effect
//           }
//         }
//       }
//       level
//       move_id
//     }
//     pokemon_v2_pokemontypes {
//       type_id
//     }
//   }
// }

//index + 1
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
