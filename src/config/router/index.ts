import { ParentRoute } from "../../global/interfaces";
import { AuthLayout, HomeLayout, TestLayout } from "../../views/layouts";
import { HomePage, LoginPage } from "../../views/pages";
import { PATH, ROUTES } from "../navigation";

export const routes: ParentRoute[] = [
  {
    path: PATH.ROOT,
    Layout: HomeLayout,
    children: [
      {
        Component: HomePage,
        path: ROUTES.HOME,
      }
    ]
  },
  {
    path: PATH.ROOT,
    Layout: AuthLayout,
    children: [
      {
        Component: LoginPage,
        path: ROUTES.LOGIN,
      }
    ]
  },
]