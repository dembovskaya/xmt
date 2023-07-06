import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ButtonOutlinedLight } from "../../../shared/button/button";
import { Headline } from "../../../shared/headline";
// @ts-ignore
import banner from './banner.png'
const Block1 = () => {
  return (
    <Card
      sx={{ display: "flex", height: "798px", backgroundImage: `url(${banner})`, borderRadius: '0px' }}
    >
      <Box sx={{ flexGrow: 1}}>
      <Grid
        sx={{ height: "438px", ml: "120px", mt: "159px", mr: "500px" }}
      >
        <Headline
          subtitle={`Adobe Solution Partner`}
          textStart={`Impactful `}
          textHighlighted={`Adobe Consulting Services `}
        />
        <Headline
            textEnd={"for Visionary Businesses"}
        />
        <Typography
          variant="h5"
          color="#C3C4C6"
          sx={{ pr: "161px", pt: "20px", pb: "40px" }}
        >
          We help you use advanced marketing technology to unlock sustainable growth through remarkable customer experiences.
        </Typography>
        <ButtonOutlinedLight
          onClick={() => {}}
          text={"let's talk"}
        />
      </Grid>
      </Box>
    </Card>
  );
};

export default Block1;
