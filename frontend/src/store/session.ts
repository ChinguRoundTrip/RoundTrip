import { setUser, removeUser } from "../types/session";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";

export const authenticate =
  () => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await fetch("/api/auth/", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        if (data.errors) return;
        dispatch(setUser(data));
      }
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

export const login =
  (username: string, password: string) =>
  async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await fetch(
        "http://localhost:8080/users/login",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data));
        return null;
      } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ["An error occurred. Please try again."];
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

export const logout = () => async (dispatch: Dispatch<AnyAction>) => {
  try {
    const response = await fetch(
      "http://localhost:8080/users/sign-out",
      {
        method: "POST",
        credentials: "include",
      }
    );

    if (response.ok) dispatch(removeUser());
  } catch (error) {
    console.error("Logout error:", error);
  }
};

export const signUp =
  (
    username: string,
    email: string,
    password: string,
    repeatPassword: string
  ) =>
  async (dispatch: Dispatch<AnyAction>) => {
    try {
      const response = await fetch(
        "http://localhost:8080/users/sign-up",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
            repeatPassword,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        dispatch(setUser(data));
        return null;
      } else if (response.status < 500) {
        const data = await response.json();
        if (data.errors) {
          return data.errors;
        }
      } else {
        return ["An error occurred. Please try again."];
      }
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  };
