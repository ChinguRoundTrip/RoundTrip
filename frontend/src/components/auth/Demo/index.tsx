import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../store/session";
import { AppDispatch } from "../../../store";

export default function Demo() {
  const dispatch: AppDispatch = useDispatch();
  const demoLogin = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const username = "jon";
    const password = "snow";
    try {
      dispatch(login(username, password));
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <button className="demo-button" onClick={demoLogin}>
      Demo
    </button>
  );
}
