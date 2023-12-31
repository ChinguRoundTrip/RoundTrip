import React, { useState } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
import LoginFormModal from "../auth/Login/LoginFormModal";
import SignUpFormModal from "../auth/SignUp/SignUpFormModal";
import { useSelector } from "react-redux";
import { AppDispatch, RootStateType } from "../../store";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { useNavigate } from "react-router-dom";

import "./NavBar.css";

export default function Navbar() {
  const dispatch: AppDispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const user = useSelector(
    (state: RootStateType) => state.session.user
  );
  const navigate = useNavigate();

  console.log("user::", user);

  const onLogout = async () => {
    // e.preventDefault();
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="h-[80px] w-[100%] bg-green">
      <div className="flex items-center justify-between px-5">
        <Link to="/dashboard">
          <img
            src="/RoundTrip.png"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex items-center gap-3">
          {!user && (
            <div className="flex items-center gap-3">
              <LoginFormModal />
              <SignUpFormModal />
            </div>
          )}
          <div className="flex items-center gap-3">
            {user && (
              <>
                <h3 className="welcome-title">
                  Hello, {user?.user.username}!
                </h3>
                <Hamburger toggled={isOpen} toggle={setOpen} />
              </>
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="flex fixed flex-col justify-center bg-[#a6cfd5] w-[100%]">
          <Link
            to="/"
            className="hover:text-white text-lg text-right"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/trips"
            className="hover:text-white text-lg text-right"
            onClick={() => setOpen(false)}
          >
            Trips
          </Link>
          <Link
            to="/search"
            className="hover:text-white text-lg text-right"
            onClick={() => setOpen(false)}
          >
            Search
          </Link>
          <Link
            to="/"
            className="hover:text-white text-lg text-right"
            onClick={onLogout}
          >
            Logout
          </Link>
        </div>
      )}
    </div>
  );
}
