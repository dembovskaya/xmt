import React, {useLayoutEffect, useRef} from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, CardContent, Collapse, Divider, Typography } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ButtonFooter } from "../../../shared/button/button";
import Card from "@mui/material/Card";

const Block14 = () => {
  const [open, setOpen] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
    const handleClick2 = () => {
        setOpen2(!open2);
    };
  const list = ["Center of Excellence", "Vacancies", "Adobe Community"];
  const list2 = [
    "About us",
    "Our Team",
    "Adobe Partner",
    "News and Events",
    "Case Studies",
  ];
  const list3 = [
    "Adobe Experience Manager",
    "Adobe Analytics",
    "Adobe Campaign",
    "Adobe Target",
    "Adobe Commerce",
    "Marketo Engage",
    "Adobe Audience Manager (DMP)",
    "Adobe Real-time CDP",
    "Launch Tag Management (DTM)",
    "Workfront",
    "Adobe Experience Platform",
  ];
  const list4 = ["+1 (438) 383-6878", "info@axamit.com"];
  return (
    <Card
      sx={{
        display: "flex",
        height: "556px",
        backgroundColor: "primary.main",
        px: "120px",
        pt: "72px",
        borderRadius: "0px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <CardContent
          sx={{
            display: "flex",
            height: "420px",
            borderBottom: "2px solid #4E4F52",
          }}
        >
          <Grid container spacing={2} sx={{ flexWrap: "nowrap" }}>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "270px",
                mr: "50px",
              }}
            >
              <Typography
                sx={{
                  pl: "4px",
                  color: "#C3C4C6",
                  pb: "14px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Career
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {list.map((value) => (
                  <ButtonFooter onClick={() => {}} text={value} key={value} />
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "270px",
                mr: "50px",
              }}
            >
              <Typography
                sx={{
                  pl: "4px",
                  color: "#C3C4C6",
                  pb: "14px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Company
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {list2.map((value) => (
                  <ButtonFooter onClick={() => {}} text={value} key={value} />
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "270px",
                mr: "50px",
              }}
            >
              <Typography
                sx={{
                  pl: "4px",
                  color: "#C3C4C6",
                  pb: "14px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Services
              </Typography>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {list3.map((value) => (
                  <ButtonFooter onClick={() => {}} text={value} key={value} />
                ))}
              </Grid>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                width: "270px",
                mr: "50px",
              }}
            >
              <Typography
                sx={{
                  pl: "4px",
                  color: "#C3C4C6",
                  pb: "14px",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
              >
                Contacts
              </Typography>
              <ButtonFooter
                text={"Montreal, Canada"}
                onClick={handleClick}
                endIcon={open ? <ExpandLess /> : <ExpandMore />}
              />
              <Collapse in={open} timeout="auto" unmountOnExit sx={{pl: '4px'}}>
                <Typography sx={{fontSize: '12px', width: '157px', color:'#C3C4C6'}}>
                  1 Place du Commerce Suite: 420 Montreal, QC, Canada
                </Typography>
                  <Typography sx={{fontSize: '12px', width: '137px', color:'#C3C4C6'}}>
                      H3E 1A2
                  </Typography>
              </Collapse>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                {list4.map((value) => (
                  <ButtonFooter onClick={() => {}} text={value} key={value} />
                ))}
              </Grid>
              <ButtonFooter
                text={"USA, New York"}
                onClick={handleClick2}
                endIcon={open2 ? <ExpandLess /> : <ExpandMore />}
              />
              <Collapse in={open2} timeout="auto" unmountOnExit sx={{pl: '4px'}}>
                  <Typography sx={{fontSize: '12px', width: '157px', color:'#C3C4C6'}}>
                      1 Place du Commerce Suite: 420 Montreal, QC, Canada
                  </Typography>
                  <Typography sx={{fontSize: '12px', width: '137px', color:'#C3C4C6'}}>
                      H3E 1A2
                  </Typography>
              </Collapse>
            </Grid>
          </Grid>
        </CardContent>
        <Grid container sx={{ pt: "40px" }}>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
            }}
          >
            <svg
              width="97"
              height="20"
              viewBox="0 0 166 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M79.6255 0.7109C78.8861 0.236967 78.1467 0 77.4535 0C76.7603 0 76.0209 0.236967 75.2814 0.7109C74.5882 1.13744 74.0799 1.65877 73.664 2.22749L61.3711 19.763H68.6729L77.3611 7.48815L79.2558 10.4265L78.9323 10.9479L75.3277 16.019H82.8605L85.2636 19.763H93.2586L81.1968 2.22749C80.7809 1.61137 80.2725 1.13744 79.6255 0.7109Z"
                fill="#F04E36"
              />
              <path
                d="M61.0477 0.236328H53.3762L46.629 7.48751L39.7893 0.236328H32.1641L41.5917 10.1889L32.6262 19.7624H40.1128L46.629 12.7956L53.0527 19.7624H60.5856L51.6201 10.1889L61.0477 0.236328Z"
                fill="#F04E36"
              />
              <path
                d="M122.513 0.7109C121.912 0.236967 121.173 0 120.341 0C119.093 0 118.031 0.758294 117.106 2.27488L111.283 11.9905L105.507 2.27488C104.582 0.758294 103.519 0 102.272 0C101.44 0 100.747 0.236967 100.1 0.7109C99.4988 1.18483 99.0829 1.80095 98.8518 2.46445L93.9531 19.7156H100.423L102.872 9.47867L108.233 18.2938C108.51 18.7678 108.973 19.1943 109.573 19.5261C110.174 19.8578 110.775 20 111.422 20C112.67 20 113.64 19.4313 114.333 18.2938L119.694 9.52607L122.19 19.763H128.66L123.761 2.51185C123.53 1.80095 123.114 1.18483 122.513 0.7109Z"
                fill="#F04E36"
              />
              <path
                d="M135.775 0.236328H129.906V19.7624H135.775V0.236328Z"
                fill="#F04E36"
              />
              <path
                d="M141.552 0.236328L137.023 6.25529H148.253V19.7624H154.169V6.25529H161.424L166 0.236328H141.552Z"
                fill="#F04E36"
              />
              <path
                d="M18.3007 0.7109C17.5612 0.236967 16.8218 0 16.1286 0C15.4354 0 14.696 0.236967 13.9566 0.7109C13.2634 1.13744 12.755 1.65877 12.3391 2.22749L0 19.763H7.30178L15.99 7.48815L17.8847 10.4265L17.5612 10.9479L14.0028 16.019H21.5356L23.9388 19.763H31.9337L19.8719 2.22749C19.5022 1.61137 18.9477 1.13744 18.3007 0.7109Z"
                fill="#F04E36"
              />
            </svg>
            <Typography
              sx={{
                fontSize: "12px",
                pl: "8px",
                pt: "2px",
                fontFamily: "Manrope",
              }}
            >
              © 2005-2023 Axamit, Inc.
            </Typography>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            ></Grid>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "270px",
              justifyContent: "flex-end",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: "Manrope",
                pr: "30px",
                color: "#C3C4C6",
              }}
            >
              Privacy Policy
            </Typography>
            <Typography
              sx={{
                fontSize: "12px",
                fontFamily: "Manrope",
                color: "#C3C4C6",
              }}
            >
              Terms of Service
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default Block14;
