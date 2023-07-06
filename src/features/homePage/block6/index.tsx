import React, {useState} from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { ButtonOutlinedLight } from "../../../shared/button/button";

const Block6 = () => {
  const [isShown, setIsShown] = useState(false);
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
      {isShown && (<Box sx={{ flexGrow: 1 }}>
        <Grid
          sx={{
            pl: "120px",
            pb: "105px",
            pt: "102px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={3} sx={{ width: "150px" }}>
              <Typography component="div" variant="h3" color="primary.light">
                Let's discuss your project!
              </Typography>
            </Grid>
            <Grid
              item
              xs={9}
              sx={{ flexDirection: "row", display: "flex", flexWrap: "wrap" }}
            >
              <Grid sx={{ pl: "155px" }}>
                <Typography
                  component="div"
                  variant="h5"
                  color="primary.light"
                  sx={{ flexWrap: "wrap", pb: "17px" }}
                >
                  Step 1 / 2
                </Typography>
                <Grid sx={{ display: "flex", flexWrap: "nowrap" }}>
                  <TextField
                    type="text"
                    placeholder="First Name *"
                    sx={{ pr: "16px", width: "290px" }}
                    onChange={() => {}}
                  />
                  <TextField
                    type="text"
                    placeholder="Last Name *"
                    sx={{ pr: "16px", width: "290px" }}
                    onChange={() => {}}
                  />
                  <ButtonOutlinedLight text={"next"} onClick={() => {}} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>)}
    </Card>
  );
};

export default Block6;
