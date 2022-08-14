import { FC } from 'react';
import { JSXComponent, LazyComponent } from './types';

export interface ChildRoute {
  to?: string;
  path: string;
  Component: LazyComponent | JSXComponent | FC;
  // children?: RouteChild[];
}

export interface ParentRoute {
  path?: string;
  Layout: LazyComponent | JSXComponent | FC;
  children: ChildRoute[];
}

export interface Todo {
  userId: number;
  id?: number;
  title: string;
  completed: boolean;
}

export interface Pokemon {
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  sprites: Sprites;
  types: Type[];
}

export interface Sprites {
  back_default: string;
  back_female: any;
  back_shiny: string;
  back_shiny_female: any;
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
  other: Other;
}

export interface Other {
  dream_world: DreamWorld;
  home: Home;
  "official-artwork": OfficialArtwork;
}

export interface DreamWorld {
  front_default: string;
  front_female: any;
}

export interface Home {
  front_default: string;
  front_female: any;
  front_shiny: string;
  front_shiny_female: any;
}

export interface OfficialArtwork {
  front_default: string;
}

export interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}
