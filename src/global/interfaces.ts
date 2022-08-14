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
