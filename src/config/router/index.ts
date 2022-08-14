import { ParentRoute } from "../../global/interfaces";
import { MainLayout } from "../../views/layouts";
import { HomePage, LoginPage, PokemonPage, TodosPage } from "../../views/pages";
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
      },
      {
        Component: TodosPage,
        path: ROUTES.TODOS,
      },
    ]
  },
]