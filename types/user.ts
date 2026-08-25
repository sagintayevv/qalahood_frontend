export type Role = "user" | "admin";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: Role;
}
