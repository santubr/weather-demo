export class User {
  email: string;
  password: string;
}

export interface State {
  user: User | null;
  isAuthenticated: boolean;
  errorMessage: string;
}

export const initialState: State = {
  user: null,
  isAuthenticated: false,
  errorMessage: null
};
