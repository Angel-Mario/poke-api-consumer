export interface MovesListBase {
  data: Data;
}

export interface Data {
  pokemon_v2_move: PokemonV2Move[];
}

export interface PokemonV2Move {
  id: number;
  name: string;
  power: number | null;
  pp: number | null;
  move_damage_class_id: number;
  type_id: number;
  generation_id: number;
  pokemon_v2_moveeffect: PokemonV2Moveeffect | null;
}

export interface PokemonV2Moveeffect {
  pokemon_v2_moveeffecteffecttexts: PokemonV2Moveeffecteffecttext[];
}

export interface PokemonV2Moveeffecteffecttext {
  short_effect: string | undefined;
}
