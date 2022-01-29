import React from "react";
import { Route } from "react-router";
import Dashboard from "../components/Dashboard";
import Download from "../components/Download";
import SideBar from "../components/SideBar";

function Profile() {
  return (
    <>
      <SideBar />
      <Route path="/profile/dashboard" component={Dashboard} />
      <Route path="/profile/download" component={Download} />
    </>
  );
}

export default Profile;
