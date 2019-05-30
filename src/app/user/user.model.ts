export interface User {
  id: string;
  username: string;
  title: string;
  password: string;
  fullName: string;
  displayName: string;
  avatar: string;
  status: Status;
}

export enum Status{
  Novice,
  Warrior,
}
