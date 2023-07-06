import React from "react";
import Box from "@mui/material/Box";
// @ts-ignore
import domainExpertise from "../block5/domainExpertise.png";
import Grid from "@mui/material/Grid";
import {ButtonTextList} from "../../../shared/button/button";
import {solutionsList} from "../block3";

const Block5 = () => {
  return <Box sx={{ display: "flex", height: "655px", backgroundImage: `url(${domainExpertise})` }}></Box>;
};

export default Block5;
