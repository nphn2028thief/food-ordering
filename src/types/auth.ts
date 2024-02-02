export interface ISignUp {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ISignIn {
  email: string;
  password: string;
}

export interface IMessage {
  message: string;
}

export interface ISignInResponse {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
}

export interface IUser {
  _id: string;
  displayName: string;
  email: string;
  refreshToken: string;
}
