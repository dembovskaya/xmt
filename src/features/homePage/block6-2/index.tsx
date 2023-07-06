import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
  ButtonContainedForm,
  ButtonOutlinedLight,
} from "../../../shared/button/button";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

const Block62 = () => {
  return (
    <Card
      sx={{
        display: "flex",
        height: "608px",
        background:
          "linear-gradient(90deg, rgba(240,78,54,1) 0%, rgba(97,94,252,1) 100%)",
        borderRadius: "0px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          sx={{
            pl: "310px",
            pb: "105px",
            pt: "100px",
          }}
        >
          <Grid container spacing={2}>
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
                  Step 2 / 2
                </Typography>
                <Grid sx={{ display: "flex", flexWrap: "nowrap" }}>
                  <TextField
                    type="text"
                    placeholder="Email *"
                    sx={{ pr: "16px", width: "290px" }}
                    onChange={() => {}}
                  />
                  <TextField
                    type="text"
                    placeholder="Phone"
                    sx={{ pr: "16px", width: "290px" }}
                    onChange={() => {}}
                  />
                </Grid>
                <Grid>
                  <TextField
                    type="text"
                    multiline={true}
                    rows={4}
                    placeholder="Describe your project *"
                    sx={{ pr: "16px", pt: "19px", width: "597px" }}
                    onChange={() => {}}
                  />
                </Grid>
                <FormGroup sx={{ mt: "35px" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        defaultChecked
                        sx={{
                          color: "#FFF",
                          "&.Mui-checked": {
                            color: "#FFF",
                          },
                        }}
                      />
                    }
                    label="I agree to Privacy Policy"
                  />
                </FormGroup>
                <Grid sx={{display: 'flex', mt: '45px', justifyContent: 'flex-end'}}>
                    <Grid sx={{mr: '16px'}}>
                  <ButtonOutlinedLight text={"back"} onClick={() => {}} />
                    </Grid>
                    <Grid sx={{mr: '16px'}}>
                  <ButtonContainedForm text={"send"} onClick={() => {}} />
                    </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default Block62;
