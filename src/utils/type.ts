export interface AppTypeInitialState {}
export interface PokemonTypeInitialState {
  allPokemon: undefined | GenericPokemonType[];
}

export interface GenericPokemonType {
  name: string;
  url: string;
}

export interface GeneratedPokemonType {
  name: string;
  id: number;
  image: string;
  type: PokemonTypeInterface[];
}

export interface PokemonTypeInterface {
  [key: string]: {
    image: string;
    resistance: string[];
    strength: string[];
    weakness: string[];
    vulnerable: string[];
  };
}
