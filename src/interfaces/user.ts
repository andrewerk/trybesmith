export interface User {
  id: number,
  username: string,

}

export interface AddUser extends User{
  classe: string,
  level: number,
  password: string
}