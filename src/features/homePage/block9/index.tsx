import React from "react";
import Box from "@mui/material/Box";
// @ts-ignore
import domainExpertise from "../block5/domainExpertise.png";
import Grid from "@mui/material/Grid";
import { ButtonTextList } from "../../../shared/button/button";
import { solutionsList } from "../block3";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// @ts-ignore
import Banner from "./banner.png";
import { HeadlineThird } from "../../../shared/headline";
import Typography from "@mui/material/Typography";

const Block5 = () => {
  return (
    <Card
      sx={{
        display: "flex",
        height: "1133px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <Grid
              sx={{
                height: "284px",
                backgroundImage: `url(${Banner})`,
                borderBottom: "2px solid #fff",
                opacity: 0.9,
              }}
            >
              <Grid sx={{ pl: "40px", pt: "134px", pr: "100px" }}>
                <HeadlineThird
                  subtitle={`#EXPERIENCE MANAGER`}
                  textStart={`Automotive Brand Ensures Digital Consistency Across Sites and Markets`}
                />
              </Grid>
            </Grid>
            <Grid sx={{ height: "282px" }}>
              <Grid
                sx={{
                  height: "282px",
                  backgroundImage: `url(${Banner})`,
                  opacity: 0.9,
                }}
              >
                <Grid sx={{ pl: "40px", pt: "134px", pr: "100px" }}>
                  <HeadlineThird
                    subtitle={`#EXPERIENCE MANAGER`}
                    textStart={`News and Lifestyle Sites Draw Millions of Visitors to Rising Media Brand`}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ height: "566px", borderLeft: "2px solid #FFF", opacity: 0.9 }}
          >
            <Box
              component="img"
              sx={{
                height: 566,
                width: 760,
              }}
              src={Banner}
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ height: "566px", borderTop: "2px solid #fff", opacity: 0.9, backgroundImage: `url(${Banner})`  }}
          >

          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              height: "282px",
              borderTop: "2px solid #fff",
              borderLeft: "2px solid #fff",
              opacity: 0.9,
            }}
          >
            <Grid sx={{ height: "282px", backgroundImage: `url(${Banner})` }}>
              <Grid sx={{ pl: "40px", pt: "133px", pr: "100px" }}>
                <HeadlineThird
                  subtitle={`#PLACEHOLDER PRODUCT`}
                  textStart={`Placeholder Case Study About One of Our Clients From Another Industry`}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default Block5;
