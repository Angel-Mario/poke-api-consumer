import { cardButton, cardTheme } from "./card-aspects";

export const QUERY_POKEMON_LIST =
  '{"query":"{\\n  pokemon_v2_pokemon(order_by: {id: asc}) {\\n    id\\n    name\\n    pokemon_v2_pokemontypes {\\n      pokemon_v2_type {\\n        id\\n      }\\n    }\\n  }\\n}","variables":null}';

export const QUERY_POKEMON_DETAILS = (id: string) => {
  console.log(id, "id");
  return {
    query: `query queryDetails {\n  pokemon_v2_pokemon(where: {id: {_eq: ${id}}}) {\n    id\n    name\n    height\n    weight\n    pokemon_v2_pokemonabilities {\n      pokemon_v2_ability {\n        name\n      }\n    }\n    pokemon_v2_pokemonspecy {\n      pokemon_v2_pokemonegggroups {\n        pokemon_v2_egggroup {\n          name\n        }\n      }\n      pokemon_v2_evolutionchain {\n        pokemon_v2_pokemonspecies {\n          name\n          id\n        }\n      }\n    }\n    pokemon_v2_pokemoncries {\n      cries(path: "latest")\n    }\n    pokemon_v2_pokemonstats {\n      base_stat\n      pokemon_v2_stat {\n        name\n      }\n    }\n    pokemon_v2_pokemonmoves {\n      pokemon_v2_move {\n        name\n        power\n        pp\n        id\n      }\n    }\n  }\n}\n\n`,
    variables: null,
    operationName: "queryDetails",
  };
};

// {
//   "query": "query MyQuery($_eq: Int = 1) {\n  pokemon_v2_pokemon(where: {id: {_eq: $_eq}}) {\n    id\n    name\n    height\n    weight\n    pokemon_v2_pokemonabilities {\n      pokemon_v2_ability {\n        name\n      }\n    }\n    pokemon_v2_pokemonspecy {\n      pokemon_v2_pokemonegggroups {\n        pokemon_v2_egggroup {\n          name\n        }\n      }\n      pokemon_v2_evolutionchain {\n        pokemon_v2_pokemonspecies {\n          name\n          id\n        }\n      }\n    }\n    pokemon_v2_pokemoncries {\n      cries(path: \"latest\")\n    }\n    pokemon_v2_pokemonstats {\n      base_stat\n      pokemon_v2_stat {\n        name\n      }\n    }\n    pokemon_v2_pokemonmoves {\n      pokemon_v2_move {\n        name\n        power\n        pp\n        id\n      }\n    }\n    pokemon_v2_pokemontypes {\n      type_id\n    }\n  }\n}\n",
//   "variables": null,
//   "operationName": "MyQuery"
// }

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
    // Just One type if there are two selected types
    console.log(
      selectedType,
      pokemonType1,
      pokemonType2,
      "efectividad ",
      getEffectiveness(pokemonType1, selectedType),
    );
    return getEffectiveness(pokemonType1, selectedType);
  } else {
    // Multiply if there are two selected types
    return (
      getEffectiveness(pokemonType1, selectedType) *
      getEffectiveness(pokemonType2, selectedType)
    );
  }
};

export function getDamageName(result: number): string {
  if (result == 1) {
    return "dmg_normal";
  }
  if (result < 1) {
    return "dmg_resist";
  }
  if (result < 0.5) {
    return "dmg_resist2";
  }
  if (result == 0) {
    return "dmg_immune";
  }
  if (result > 1) {
    return "dmg_weak";
  }
  if (result > 2) {
    return "dmg_weak2";
  }
  return "";
}

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
      theme: cardTheme["ground"],
      button: cardButton["ground"],
      link: `/types`,
    },
  ],
};

// query MyQuery($_eq: Int = 1) {
//   pokemon_v2_pokemon(where: {id: {_eq: $_eq}}) {
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
//         }
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
//     pokemon_v2_pokemonmoves {
//       pokemon_v2_move {
//         name
//         power
//         pp
//         id
//       }
//     }
//     pokemon_v2_pokemontypes {
//       type_id
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
