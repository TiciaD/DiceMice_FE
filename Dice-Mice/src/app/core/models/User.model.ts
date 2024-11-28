import { ROLES_CONSTANTS } from "../constants/Roles";

export type User = {
  username: string;
  email: string;
  avatar: string;
  role: ROLES_CONSTANTS;
}