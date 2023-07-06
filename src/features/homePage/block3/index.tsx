import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { HeadlineSec } from "../../../shared/headline";
import {
  ButtonOutlinedDark,
  ButtonText,
  ButtonTextList,
} from "../../../shared/button/button";
// @ts-ignore
import AEM from "./AEM.png";
// @ts-ignore
import AA from "./AA.png";
// @ts-ignore
import AT from "./AT.png";
// @ts-ignore
import AC from "./AC.png";
// @ts-ignore
import AL from "./AL.png";
// @ts-ignore
import ME from "./ME.png";
// @ts-ignore
import AEP from "./AEP.png";
// @ts-ignore
import AW from "./AW.png";

export interface ISolutionsList {
  desc: string;
  label: any;
}

export const solutionsList: ISolutionsList[] = [
  {
    desc: "Adobe Experience Manager",
    label: AEM,
  },
  {
    desc: "Adobe Analytics",
    label: AA,
  },
  {
    desc: "Adobe Target",
    label: AT,
  },
  {
    desc: "Adobe Campaign",
    label: AC,
  },
  {
    desc: "Adobe Launch",
    label: AL,
  },
  {
    desc: "Marketo Engage",
    label: ME,
  },
  {
    desc: "Adobe Experience Platform",
    label: AEP,
  },
  {
    desc: "Adobe Workfront",
    label: AW,
  },
];

const Block3 = () => {
  const points = [
    "Build a robust AEM architecture",
    "Migrate content from legacy CMS",
    "Integrate AEM into your infrastructure",
    "Ensure security and privacy compliance",
    "Optimize for performance and traffic",
  ];

  return (
    <Card
      sx={{
        display: "flex",
        height: "1206px",
        pt: "140px",
        borderRadius: "0px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Grid sx={{ pt: "272px", pl: "120px", width: "585px" }}>
              <Typography component="div" variant="h4" sx={{ pb: "32px" }}>
                Adobe Experience Manager
              </Typography>
              <Typography component="div" fontSize="24px" sx={{ pb: "28px" }}>
                You innovate with AEM, we do the heavy lifting for you:
              </Typography>
              {points.map((value) => (
                <Grid sx={{ display: "flex", pb: "16px" }}>
                  <Grid>
                    <svg
                      width="16"
                      height="24"
                      viewBox="0 0 16 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.46022 6H15.8015L7.34124 18H0L8.46022 6Z"
                        fill="#F04E36"
                      />
                    </svg>
                  </Grid>
                  <Typography sx={{ pl: "12px" }}>{value}</Typography>
                </Grid>
              ))}
              <Typography
                component="div"
                variant="subtitle1"
                sx={{ pb: "32px" }}
              >
                Making your vision a reality is easier than you think with our
                support.
              </Typography>
              <ButtonOutlinedDark
                text={"view aem services"}
                onClick={() => {}}
              />
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid sx={{ pb: "64px", pl: "60px" }}>
              <HeadlineSec
                subtitle={`Axamit Services`}
                textStart={`Every Benefit of `}
                textHighlighted={`Adobe Solutions `}
                textEnd={`at Your`}
              />
              <HeadlineSec textEnd={`Fingertips`} />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              {solutionsList.map(({ label, desc }) => (
                <Grid
                  sx={{
                    display: "flex",
                    mb: "32px",
                    pl: "56px",
                    borderLeft: "4px solid #F8F8F8",
                    "&:active": {
                      borderLeft: "4px solid #F04E36",
                    },
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      height: 50,
                      width: 50,
                      pr: "20px",
                    }}
                    src={label}
                  />
                  <ButtonTextList onClick={() => {}} text={desc} key={desc} />
                </Grid>
              ))}
              <Grid sx={{ mt: "10px", pl: "56px" }}>
                <ButtonText
                  text={"Adobe Experience Cloud"}
                  onClick={() => {}}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};
export default Block3;
