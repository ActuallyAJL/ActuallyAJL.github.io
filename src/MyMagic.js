import React, { useState } from "react";
import { ApplicationViews } from "./components/ApplicationViews";
import "./MyMagic.css";

export const MyMagic = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   sessionStorage.getItem("mm_user") !== null
  // );

  // const setAuthUser = (user) => {
  //   sessionStorage.setItem("mm_user", JSON.stringify(user));
  //   setIsAuthenticated(sessionStorage.getItem("mm_user") !== null);
  // };

  // const clearUser = () => {
  //   sessionStorage.clear();
  //   setIsAuthenticated(sessionStorage.getItem("mm_user") !== null);
  // };

  // const getLoggedInUser = () => {
  //   const thisUserId = parseInt(sessionStorage.getItem("mm_user"));
  //   return thisUserId;
  // };

  return (
    <>
      <ApplicationViews
      // setAuthUser={setAuthUser}
      // clearUser={clearUser}
      // isAuthenticated={isAuthenticated}
      // setIsAuthenticated={setIsAuthenticated}
      // getLoggedInUser={getLoggedInUser}
      />
    </>
  );
};
