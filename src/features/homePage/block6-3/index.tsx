import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { ButtonOutlinedLight } from "../../../shared/button/button";

const Block63 = () => {
  return (
    <Card
      sx={{
        display: "flex",
        height: "319px",
        background:
          "linear-gradient(90deg, rgba(240,78,54,1) 0%, rgba(97,94,252,1) 100%)",
        borderRadius: "0px"
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          sx={{
              display: 'flex',
              justifyContent: "center",
            pb: "105px",
            pt: "102px",
          }}
        >
          <Grid sx={{
              justifyContent: "center",
          }}>
              <Typography sx={{
                  pl: "60px",
              }} component="div" variant="h3" fontFamily="Manrope" color="primary.light">
                  Success!
              </Typography>
              <Typography component="div" fontSize="24px" fontFamily="Manrope" color="primary.light">
                  We will contact you by email
              </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default Block63;
