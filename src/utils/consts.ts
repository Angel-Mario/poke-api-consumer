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
      children: "Type Charts",
      theme: cardTheme["ground"],
      button: cardButton["ground"],
      link: `/types`,
    },
  ],
};

// '{"query":"{\\n  pokemon_v2_pokemon(order_by: {id: asc}) {\\n    id\\n    name\\n    pokemon_v2_pokemontypes {\\n      pokemon_v2_type {\\n        id\\n      }\\n    }\\n  }\\n}","variables":null}';

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
//   }
// }

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
