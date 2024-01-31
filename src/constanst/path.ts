import { IPath } from "@/type/path";

export enum CPath {
  HOME = "/",
  MENU = "/menu",
  ABOUT = "/about",
  CONTACT = "/contact",
  SIGNIN = "/sign-in",
  SIGNUP = "/sign-up",
}

export const CPathList: IPath[] = [
  {
    id: 1,
    name: "home",
    icon: "test",
    path: CPath.HOME,
  },
  {
    id: 2,
    name: "menu",
    icon: "test",
    path: CPath.MENU,
  },
  {
    id: 3,
    name: "about",
    icon: "test",
    path: CPath.ABOUT,
  },
  {
    id: 4,
    name: "contact",
    icon: "test",
    path: CPath.CONTACT,
  },
];
