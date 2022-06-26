import React from "react";
import Details from "./Details/Details";
import Menu from "./Menu/Menu";

export default function Design() {
  return (
    <div style={{ display: "flex",width:"100%" }}>
      <Menu style={{width:"300vh"}}/>
      <Details />
    </div>
  );
}
