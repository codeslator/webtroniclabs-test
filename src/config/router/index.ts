import { ParentRoute } from "../../global/interfaces";
import { TestLayout } from "../../views/layouts";
import { LoginPage } from "../../views/pages";
import { PATH, ROUTES } from "../navigation";

export const routes: ParentRoute[] = [
  {
    path: PATH.ROOT,
    Layout: TestLayout,
    children: [
      {
        Component: LoginPage,
        path: ROUTES.LOGIN,
      }
    ]
  }
]