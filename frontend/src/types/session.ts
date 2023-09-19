// types and interfaces

export interface User {
  user: {
    email: string;
    id: string;
    password: string;
    username: string;
  };
}

export enum SessionActionTypes {
  SET_USER = "session/SET_USER",
  REMOVE_USER = "session/REMOVE_USER",
}

export interface SetUserAction {
  type: SessionActionTypes.SET_USER;
  payload: User;
}

export interface RemoveUserAction {
  type: SessionActionTypes.REMOVE_USER;
}

export type SessionAction = SetUserAction | RemoveUserAction;

export interface SessionState {
  user: User | null;
}

// actions and reducer

export const setUser = (user: User): SetUserAction => ({
  type: SessionActionTypes.SET_USER,
  payload: user,
});

export const removeUser = (): RemoveUserAction => ({
  type: SessionActionTypes.REMOVE_USER,
});

export const initialState: SessionState = { user: null };

export const sessionReducer = (
  state: SessionState = initialState,
  action: SessionAction
): SessionState => {
  switch (action.type) {
    case SessionActionTypes.SET_USER:
      return { user: action.payload };
    case SessionActionTypes.REMOVE_USER:
      return { user: null };
    default:
      return state;
  }
};
