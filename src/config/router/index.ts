import { ParentRoute } from "../../global/interfaces";
import { MainLayout } from "../../views/layouts";
import { HomePage, LoginPage, PokemonPage } from "../../views/pages";
import { PATH, ROUTES } from "../navigation";

export const routes: ParentRoute[] = [
  {
    path: PATH.ROOT,
    Layout: MainLayout,
    children: [
      {
        Component: HomePage,
        path: ROUTES.HOME,
      },
      {
        Component: PokemonPage,
        path: ROUTES.POKEMON,
      },
      {
        Component: LoginPage,
        path: ROUTES.LOGIN,
      }
    ]
  },
]