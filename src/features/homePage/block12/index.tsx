import React, { useRef, useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
// @ts-ignore
import Office from "./Office.jpg";
import { ButtonText } from "../../../shared/button/button";
const Block12 = () => {
  const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    const [isShown3, setIsShown3] = useState(false);
  // const handleClick = () => {
  //   setIsShown((current) => !current);
  // };
  return (
    <Card sx={{ display: "flex", height: "820px", borderRadius: "0px" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={2}
          sx={{
            pt: "70px",
            pl: "120px",
            flexWrap: "nowrap",
              width: '1200px',
          }}
        >
          <Grid item>
              <Box
                component="img"
                sx={{
                  width: 394,
                  height: 348,
                  backgroundColor: "primary.dark",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    height: 224,
                  },
                }}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                src={Office}
              />
              <Typography sx={{ fontSize: "14px", pt: "34px" }}>
                13 May 2007
              </Typography>
              <Typography

                sx={{
                  fontSize: "24px",
                  fontWeight: "500",
                }}
              >
                Axamit Team Set to Join Adobe Summit 2023 for Inspiration and
                Networking
              </Typography>
              {isShown && (
                <><Typography>
                  The world’s largest digital experience conference is back in
                  action. This time, it’s both virtual and live and hosted in
                  the bustling city of Las Vegas on March 21–23, 2023.{" "}
                </Typography>
                  <ButtonText onClick={() => {}} text={`Learn More `}/></>
              )}
          </Grid>
            <Grid item >
                    <Box
                        component="img"
                        sx={{
                            width: 394,
                            height: 348,
                            backgroundColor: "primary.dark",
                            "&:hover": {
                                backgroundColor: "primary.main",
                                height: 224,
                            },
                        }}
                        src={Office}
                        onMouseEnter={() => setIsShown2(true)}
                        onMouseLeave={() => setIsShown2(false)}
                    />
                    <Typography sx={{ fontSize: "14px", pt: "34px" }}>
                        13 May 2007
                    </Typography>
                    <Typography

                        sx={{
                            fontSize: "24px",
                            fontWeight: "500",
                        }}
                    >
                        Adobe Analytics vs Google Analytics: Why Adobe Is Better for Your Business
                    </Typography>
                    {isShown2 && (
                        <><Typography>
                            The world’s largest digital experience conference is back in
                            action. This time, it’s both virtual and live and hosted in
                            the bustling city of Las Vegas on March 21–23, 2023.{" "}
                        </Typography>
                            <ButtonText onClick={() => {}} text={`Learn More `}/></>
                    )}
            </Grid>
            <Grid item >
                    <Box
                        component="img"
                        sx={{
                            width: 394,
                            height: 348,
                            mr: "24px",
                            backgroundColor: "primary.dark",
                            "&:hover": {
                                backgroundColor: "primary.main",
                                height: 224,
                            },
                        }}
                        src={Office}
                        onMouseEnter={() => setIsShown3(true)}
                        onMouseLeave={() => setIsShown3(false)}
                    />
                    <Typography sx={{ fontSize: "14px", pt: "34px" }}>
                        13 May 2007
                    </Typography>
                    <Typography

                        sx={{
                            fontSize: "24px",
                            fontWeight: "500",
                        }}
                    >
                        AEM Features: What Is New in 2022
                    </Typography>
                    {isShown3 && (
                        <>
                        <Typography>
                            The world’s largest digital experience conference is back in
                            action. This time, it’s both virtual and live and hosted in
                            the bustling city of Las Vegas on March 21–23, 2023.{" "}
                        </Typography>
                        <ButtonText onClick={() => {}} text={`Learn More `}/></>
                    )}
            </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default Block12;
