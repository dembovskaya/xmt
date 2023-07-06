import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ButtonContained, ButtonHeadBar } from "../../shared/button/button";
import Grid from "@mui/material/Grid";
import { Menu, MenuItem } from "@mui/material";

const HeadBar = () => {
  const pages = [
    "About Us",
    "Our Team",
    "Adobe Partner",
    "News and Events",
    "Center of Experience",
    "Adobe Community",
    "Vacancies",
  ];
  const settings = [
    "Adobe Experience Manager",
    "Adobe Analytics",
    "Adobe Campaign",
    "Adobe Target",
    "Adobe Commerce",
    "Marketo Engage",
    "Adobe Audience Manager (DMP)",
    "Adobe Real-Time CDP",
    "Launch Tag Management (DTM)",
    "Workfront",
    "Adibe Experience Platform",
  ];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElSec, setAnchorElSec] = useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLInputElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuSec = (event: React.MouseEvent<HTMLInputElement>) => {
    setAnchorElSec(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorElSec(null);
  };

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        flexGrow: 1,
        justifyContent: "center",
        position: "fixed",
        height: "92px",
      }}
    >
      <Toolbar sx={{ flexDirection: "row" }}>
        <Grid sx={{ display: "flex", pl: "120px" }}>
          <Typography variant="h4">
            <svg
              width="166"
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
          </Typography>
        </Grid>
        <Grid sx={{ display: "flex", pl: "170px" }}>
          <ButtonHeadBar
            endIcon={<KeyboardArrowDownIcon />}
            text={"Adobe Experience Cloud"}
            onClick={handleMenu}
          />
          <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleClose}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <ButtonHeadBar text={"Industries"} onClick={() => {}} />
          <ButtonHeadBar text={"Case Studies"} onClick={() => {}} />
          <ButtonHeadBar
            endIcon={<KeyboardArrowDownIcon />}
            text={"Company"}
            onClick={handleMenuSec}
          />
          <Menu
            anchorEl={anchorElSec}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElSec)}
            onClose={handleClose}
          >
            {pages.map((pages) => (
              <MenuItem key={pages} onClick={handleClose}>
                <Typography textAlign="center">{pages}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <ButtonHeadBar text={"Blog"} onClick={() => {}} />
        </Grid>
        <Grid sx={{ display: "flex", pl: "26px" }}>
          <ButtonContained text={"Contact Us"} onClick={() => {}} />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default HeadBar;
