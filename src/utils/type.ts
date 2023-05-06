export interface AppTypeInitialState {
  toasts: string[];
  userInfo: undefined | { email: string };
  currentPokemonTab: string;
}
export interface PokemonTypeInitialState {
  allPokemon: undefined | GenericPokemonType[];
  randomPokemons: undefined | GeneratedPokemonType[];
  compareQueue: GeneratedPokemonType[];
  userPokemons: UserPokemonsType[];
  currentPokemon: undefined | currentPokemonType;
}

export interface GenericPokemonType {
  name: string;
  url: string;
}

export interface UserPokemonsType extends GeneratedPokemonType {
  firebaseId?: string;
}

export interface GeneratedPokemonType {
  name: string;
  id: number;
  image: string;
  types: PokemonTypeInterface[];
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

export interface currentPokemonType {
  id: number;
  name: string;
  types: PokemonTypeInterface[];
  image: string;
  // stats: pokemonStatsType[];
  encounters: string[];
  evolutionLevel: number;
  evolution: { level: number; pokemon: { name: string; url: string } }[];
  pokemonAbilities: { abilities: string[]; moves: string[] };
}
