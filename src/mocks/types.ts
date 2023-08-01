export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface LoginBody {
  username: string;
}
export interface LoginResponse {
  username: string;
  firstName: string;
}
