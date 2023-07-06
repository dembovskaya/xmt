import React from "react";
import { HeadlineSec } from "../../../shared/headline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box } from "@mui/material";

const Block10 = () => {
  return (
    <Card
      sx={{
        display: "flex",
        height: "510px",
        borderRadius: "0px",
        backgroundColor: "#d3d3d3"
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
      <CardContent
        sx={{
          pl: "120px",
          pt: "120px",
          width: "860px",
        }}
      >
        <Grid
          sx={{
            pb: "56px",
          }}
        >
          <HeadlineSec
            subtitle={`Your Reliable Ally`}
            textStart={`When `}
            textHighlighted={`Trust Matters`}
            textEnd={`, Choose Us`}
          />
        </Grid>
        <Grid
          sx={{
            display: "grid",
            alignItems: "flex-start",
            gridTemplateRaws: "1fr 1fr 1fr 1fr",
            gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr",
          }}
        >
          <Grid>
            <Typography sx={{ fontSize: "80px", fontFamily: "Manrope" }}>10</Typography>
            <Typography
              component="div"
              variant="h6"
              sx={{
                width: "170px",
              }}
            >
              Years with Adobe
            </Typography>
          </Grid>
          <Grid sx={{ px: "56px", pt: "70px" }}>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.779 0.5H22L10.221 17.5H0L11.779 0.5Z"
                fill="#F04E36"
              />
            </svg>
          </Grid>
          <Grid>
            <Typography sx={{ fontSize: "80px", fontFamily: "Manrope" }}>100%</Typography>
            <Typography
              component="div"
              variant="h6"
              sx={{
                width: "170px",
              }}
            >
              Certified Team
            </Typography>
          </Grid>
          <Grid sx={{ px: "56px", pt: "70px" }}>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.779 0.5H22L10.221 17.5H0L11.779 0.5Z"
                fill="#F04E36"
              />
            </svg>
          </Grid>
          <Grid>
            <Typography sx={{ fontSize: "80px", fontFamily: "Manrope"  }}>70%</Typography>
            <Typography
              component="div"
              variant="h6"
              sx={{
                width: "170px",
              }}
            >
              Senior Specialists
            </Typography>
          </Grid>
          <Grid sx={{ px: "56px", pt: "70px" }}>
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.779 0.5H22L10.221 17.5H0L11.779 0.5Z"
                fill="#F04E36"
              />
            </svg>
          </Grid>
          <Grid>
            <Typography sx={{ fontSize: "80px", fontFamily: "Manrope"  }}>50%</Typography>
            <Typography
              component="div"
              variant="h6"
              sx={{
                width: "170px",
              }}
            >
              Some numbers
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      </Box>
    </Card>
  );
};

export default Block10;
