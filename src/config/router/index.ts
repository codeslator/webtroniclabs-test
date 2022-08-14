import { ParentRoute } from "../../global/interfaces";
import { TestLayout } from "../../views/layouts";
import { PATH } from "../navigation";

export const routes: ParentRoute[] = [
  {
    path: PATH.ROOT,
    Layout: TestLayout,
    children: []
  }
]