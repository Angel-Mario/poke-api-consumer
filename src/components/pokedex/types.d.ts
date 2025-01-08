export interface PokemonListItemData {
  id: number;
  name: string;
  pokemon_v2_pokemontypes: [
    {
      pokemon_v2_type: {
        id: number;
      };
    },
    {
      pokemon_v2_type: {
        id: number;
      };
    },
  ];
  pokemon_v2_pokemonspecy: {
    pokemon_v2_pokemonspeciesflavortexts: {
      pokemon_v2_version: {
        id: number;
      };
    }[];
  };
}
export interface PokemonListItemDataList {
  data: DataList;
}

export interface DataList {
  pokemon_v2_pokemon: PokemonListItemData[];
}

export interface PokemonListItemDetails {}

export type PokemonId = Pick<PokemonListItemData, "id">;
export type PokemonName = Pick<PokemonListItemData, "name">;
export type PokemonTypes = Pick<PokemonListItemData, "pokemon_v2_pokemontypes">;

export type PokemonListData = PokemonListItemData[];

export interface PokemonListItemDetails {
  data: Data;
}

export interface Data {
  pokemon_v2_pokemon: PokemonV2Pokemon[];
}

export interface PokemonV2Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  pokemon_v2_pokemonabilities: PokemonV2Pokemonability[];
  pokemon_v2_pokemonspecy: PokemonV2PokemonPokemonV2Pokemonspecy;
  pokemon_v2_pokemoncries: PokemonV2Pokemoncry[];
  pokemon_v2_pokemonstats: PokemonV2Pokemonstat[];
  pokemon_v2_pokemonmoves: PokemonV2Pokemonmove[];
  pokemon_v2_pokemontypes: FluffyPokemonV2Pokemontype[];
}

export interface PokemonV2Pokemonability {
  pokemon_v2_ability: PokemonV2;
}

export interface PokemonV2 {
  name: string;
}

export interface PokemonV2Pokemoncry {
  cries: string;
}

export interface PokemonV2Pokemonmove {
  pokemon_v2_move: PokemonV2Move;
  level: number;
  move_id: number;
}

export interface PokemonV2Move {
  name: string;
  power: number | null;
  pp: number;
  move_damage_class_id: number;
  type_id: number;
  generation_id: number;
  pokemon_v2_moveeffect: PokemonV2Moveeffect;
}

export interface PokemonV2Moveeffect {
  pokemon_v2_moveeffecteffecttexts: PokemonV2Moveeffecteffecttext[];
}

export interface PokemonV2Moveeffecteffecttext {
  short_effect: string;
}

export interface PokemonV2PokemonPokemonV2Pokemonspecy {
  pokemon_v2_pokemonegggroups: PokemonV2Pokemonegggroup[];
  pokemon_v2_evolutionchain: PokemonV2Evolutionchain;
  pokemon_v2_pokemonspeciesflavortexts: PokemonV2Pokemonspeciesflavortext[];
  pokemon_v2_pokemonspeciesnames: PokemonV2Pokemonspeciesname[];
}

export interface PokemonV2Evolutionchain {
  pokemon_v2_pokemonspecies: PokemonV2PokemonspecyElement[];
  id: number;
}

export interface PokemonV2PokemonspecyElement {
  name: string;
  id: number;
  evolves_from_species_id: number | null;
  pokemon_v2_pokemonevolutions: PokemonV2Pokemonevolution[];
  pokemon_v2_pokemons: PokemonV2PokemonspecyPokemonV2Pokemon[];
}

export interface PokemonV2Pokemonevolution {
  evolution_item_id: number | null;
  time_of_day: TimeOfDay;
  held_item_id: null;
  id: number;
  min_level: null;
  needs_overworld_rain: boolean;
  pokemon_v2_item: PokemonV2Item | null;
  pokemon_v2_gender: null;
}

export interface PokemonV2Item {
  id: number;
  name: string;
}

export enum TimeOfDay {
  Day = "day",
  Empty = "",
  Night = "night",
}

export interface PokemonV2PokemonspecyPokemonV2Pokemon {
  id: number;
  pokemon_v2_pokemontypes: PurplePokemonV2Pokemontype[];
}

export interface PurplePokemonV2Pokemontype {
  pokemon_v2_type: PokemonV2Type;
}

export interface PokemonV2Type {
  id: number;
}

export interface PokemonV2Pokemonegggroup {
  pokemon_v2_egggroup: PokemonV2;
}

export interface PokemonV2Pokemonspeciesflavortext {
  flavor_text: string;
}

export interface PokemonV2Pokemonspeciesname {
  genus: string;
}

export interface PokemonV2Pokemonstat {
  base_stat: number;
  pokemon_v2_stat: PokemonV2;
}

export interface FluffyPokemonV2Pokemontype {
  type_id: number;
}

// export interface PokemonV2Pokemon {
//   id: number;
//   name: string;
//   height: number;
//   weight: number;
//   pokemon_v2_pokemonabilities: PokemonV2Pokemonability[];
//   pokemon_v2_pokemonspecy: PokemonV2PokemonPokemonV2Pokemonspecy;
//   pokemon_v2_pokemoncries: PokemonV2Pokemoncry[];
//   pokemon_v2_pokemonstats: PokemonV2Pokemonstat[];
//   pokemon_v2_pokemonmoves: PokemonV2Pokemonmove[];
//   pokemon_v2_pokemontypes: FluffyPokemonV2Pokemontype[];
// }

// export interface PokemonV2Pokemonability {
//   pokemon_v2_ability: PokemonV2;
// }

// export interface PokemonV2 {
//   name: string;
// }

// export interface PokemonV2Pokemoncry {
//   cries: string;
// }

// export interface PokemonV2Pokemonmove {
//   pokemon_v2_move: PokemonV2Move;
//   level: number;
//   move_id: number;
// }

// export interface PokemonV2Move {
//   name: string;
//   power: number | null;
//   pp: number;
//   pokemon_v2_moveflavortexts: PokemonV2Flavortext[];
//   move_damage_class_id: number;
//   type_id: number;
// }

// export interface PokemonV2Flavortext {
//   flavor_text: string;
// }

// export interface PokemonV2PokemonPokemonV2Pokemonspecy {
//   pokemon_v2_pokemonegggroups: PokemonV2Pokemonegggroup[];
//   pokemon_v2_evolutionchain: PokemonV2Evolutionchain;
//   pokemon_v2_pokemonspeciesflavortexts: PokemonV2Flavortext[];
//   pokemon_v2_pokemonspeciesnames: PokemonV2Pokemonspeciesname[];
// }

// export interface PokemonV2Evolutionchain {
//   pokemon_v2_pokemonspecies: PokemonV2PokemonspecyElement[];
//   id: number;
// }

// export interface PokemonV2PokemonspecyElement {
//   name: string;
//   id: number;
//   evolves_from_species_id: number | null;
//   pokemon_v2_pokemonevolutions: PokemonV2Pokemonevolution[];
//   pokemon_v2_pokemons: PokemonV2PokemonspecyPokemonV2Pokemon[];
// }

// export interface PokemonV2Pokemonevolution {
//   evolution_item_id: null;
//   time_of_day: string | null;
//   held_item_id: null;
//   id: number;
//   min_level: number | null;
//   needs_overworld_rain: boolean;
//   pokemon_v2_item: null | PokemonV2Item;
//   pokemon_v2_gender: null;
// }

// export interface PokemonV2Item {
//   id: number;
//   name: string;
// }

// export interface PokemonV2PokemonspecyPokemonV2Pokemon {
//   id: number;
//   pokemon_v2_pokemontypes: PurplePokemonV2Pokemontype[];
// }

// export interface PurplePokemonV2Pokemontype {
//   pokemon_v2_type: PokemonV2Type;
// }

// export interface PokemonV2Type {
//   id: number;
// }

// export interface PokemonV2Pokemonegggroup {
//   pokemon_v2_egggroup: PokemonV2;
// }

// export interface PokemonV2Pokemonspeciesname {
//   genus: string;
// }

// export interface PokemonV2Pokemonstat {
//   base_stat: number;
//   pokemon_v2_stat: PokemonV2;
// }

// export interface FluffyPokemonV2Pokemontype {
//   type_id: number;
// }
