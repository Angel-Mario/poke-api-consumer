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
  pokemon_v2_pokemontypes: PokemonV2Pokemontype[];
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
}

export interface PokemonV2Move {
  name: string;
  power: number | null;
  pp: number;
  id: number;
}

export interface PokemonV2PokemonPokemonV2Pokemonspecy {
  pokemon_v2_pokemonegggroups: PokemonV2Pokemonegggroup[];
  pokemon_v2_evolutionchain: PokemonV2Evolutionchain;
}

export interface PokemonV2Evolutionchain {
  pokemon_v2_pokemonspecies: PokemonV2PokemonspecyElement[];
}

export interface PokemonV2PokemonspecyElement {
  name: string;
  id: number;
}

export interface PokemonV2Pokemonegggroup {
  pokemon_v2_egggroup: PokemonV2;
}

export interface PokemonV2Pokemonstat {
  base_stat: number;
  pokemon_v2_stat: PokemonV2;
}

export interface PokemonV2Pokemontype {
  type_id: number;
}
