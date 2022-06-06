import React from "react";
import { Outlet, Navigate, Routes, Route } from "react-router-dom";
// import { Login } from "./auth/Login";
// import { Register } from "./auth/Register";
import { CardList } from "./cards/CardList";
import { CardDetails } from "./cards/CardDetails";
import "../App.css";

export const ApplicationViews = (
  {
    // isAuthenticated,
    // setAuthUser,
    // getLoggedInUser,
    // clearUser,
  }
) => {
  // const PrivateOutlet = () => {
  //   return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  // };

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<PrivateOutlet />}> */}
        <Route path="/" element={<CardList />}></Route>
        <Route path="/:cardId/details" element={<CardDetails />}></Route>
        {/* </Route> */}

        {/* <Route path="/login" element={<Login setAuthUser={setAuthUser} />} />
        <Route
          path="/register"
          element={<Register setAuthUser={setAuthUser} />}
        /> */}
      </Routes>
    </>
  );
};
