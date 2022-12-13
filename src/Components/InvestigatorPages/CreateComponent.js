import React from "react";
import Demo from "./Demo.js";
import VS from "./VS.js";
import AEs from "./AEs.js";

const components = {
  Demo: Demo,
  VS: VS,
  AEs: AEs,
};

export default function CreateComponent(props) {
  var ItemComponent = components[props.item];
  return (
    <ItemComponent currentVisit={props.visit} currentPatient={props.patient} />
  );
}
