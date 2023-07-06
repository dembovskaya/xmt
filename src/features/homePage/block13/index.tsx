import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {
    ButtonOutlinedDark,
    ButtonOutlinedLight,
    ButtonTextList,
} from "../../../shared/button/button";
import Box from "@mui/material/Box";
import { HeadlineSec } from "../../../shared/headline";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
// @ts-ignore
import BDM from "./BDM.png";

const Block13 = () => {
  return (
    <Card sx={{ display: "flex", height: "1020px", borderRadius: "0px", backgroundColor: "#d3d3d3" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} sx={{ pt: "120px" }}>
          <Grid item xs={8}>
            <Grid sx={{ pl: "120px", width: "850px" }}>
              <HeadlineSec
                subtitle={`Leave Us a Message`}
                textStart={`Great Experiences Live Here— `}
                textHighlighted={`Get In Touch `}
                textEnd={`With Our`}
              />
              <HeadlineSec textEnd={`Consultants`} />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                pl: "120px",
                pt: "40px",
              }}
            >
              <TextField
                type="text"
                placeholder="Name"
                sx={{ width: "690px", pb: "16px" }}
                onChange={() => {}}
              />
              <Grid>
                <TextField
                  type="text"
                  placeholder="Phone*"
                  sx={{ width: "337px", pb: "16px", pr: "16px" }}
                  onChange={() => {}}
                />
                <TextField
                  type="text"
                  placeholder="Email*"
                  sx={{ width: "337px", pb: "16px" }}
                  onChange={() => {}}
                />
              </Grid>
              <TextField
                type="text"
                placeholder="Company*"
                sx={{ width: "690px", pb: "16px" }}
                onChange={() => {}}
              />
              <TextField
                type="text"
                multiline={true}
                rows={4}
                placeholder="What kind of project do you have?"
                sx={{ pr: "16px", width: "690px" }}
                onChange={() => {}}
              />
              <FormGroup sx={{ mt: "35px" }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      sx={{
                        color: "#000",
                        "&.Mui-checked": {
                          color: "#000",
                        },
                      }}
                    />
                  }
                  label="I agree to Privacy Policy"
                />
              </FormGroup>
                <Grid sx={{width: '293px', pt: '48px'}}>
                <ButtonOutlinedDark text={`Let's Talk`} onClick={() => {}}/>
                </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 300,
                  width: 292,
                  pr: "20px",
                }}
                src={BDM}
              />
              <Typography
                sx={{ fontSize: "24px", fontWeight: "500", pt: "24px" }}
              >
                John Mortins
              </Typography>
              <Typography sx={{ fontSize: "16px", pb: "16px" }}>
                Business Development Manager
              </Typography>
              <Grid sx={{ display: "flex" }}>
                <Grid sx={{ pt: "3px", pr: "10px" }}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="1"
                      y="5"
                      width="10"
                      height="10"
                      rx="1"
                      stroke="#F04E36"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13 2H6.5L8 0H13C14.6569 0 16 1.34315 16 3V7L14 9.5V3C14 2.44772 13.5523 2 13 2Z"
                      fill="#F04E36"
                    />
                  </svg>
                </Grid>
                <Typography
                  sx={{ fontSize: "16px", color: "#F04E36", pb: "30px" }}
                >
                  john@axamit.com
                </Typography>
              </Grid>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "289px",
                  pb: "10px",
                  px: '24px'
                }}
              >
                <Grid sx={{ pr: "15px" }}>
                  <svg
                    width="34"
                    height="23"
                    viewBox="0 0 34 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_72_3298)">
                      <path
                        d="M8.39551 0H25.1919V23.4347H8.39551V0Z"
                        fill="white"
                      />
                      <path
                        d="M0 0H8.39589V23.4347H0V0ZM25.1923 0H33.5882V23.4347H25.197L25.1923 0ZM10.9133 11.3237L10.255 11.5434L13.2916 14.1753C13.5234 14.8481 13.2128 15.0449 13.0134 15.4019L16.305 14.99L16.2262 18.2626L16.9123 18.2443L16.7593 14.9945L20.0602 15.3836C19.8562 14.9579 19.6754 14.7337 19.8609 14.0562L22.8928 11.5617L22.3643 11.3695C21.9285 11.0399 22.5498 9.78124 22.6425 8.98483C22.6425 8.98483 20.8762 9.58443 20.7603 9.26861L20.3059 8.41269L18.6972 10.1611C18.521 10.2023 18.4469 10.1337 18.4051 9.98721L19.1469 6.33469L17.9693 6.98922C17.872 7.03499 17.7746 6.99837 17.7097 6.88394L16.5739 4.64117L15.4056 6.97091C15.3175 7.0533 15.2294 7.06245 15.1553 7.00753L14.0333 6.38504L14.7102 10.0055C14.6546 10.152 14.5248 10.1886 14.3764 10.1108L12.8326 8.38523C12.6332 8.70563 12.4988 9.22284 12.2299 9.34184C11.9657 9.45169 11.0709 9.12214 10.4728 8.99398C10.6768 9.72174 11.3166 10.9301 10.9133 11.3283V11.3237Z"
                        fill="#D52B1E"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_72_3298">
                        <rect width="34" height="23" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    Headquarters
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                    +1 123 456 7891
                  </Typography>
                </Grid>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "289px",
                  px: '24px'
                }}
              >
                <Grid sx={{ pr: "15px" }}>
                  <svg
                    width="33"
                    height="23"
                    viewBox="0 0 33 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="32.6842" height="23" fill="#314199" />
                    <g clip-path="url(#clip0_147_2953)">
                      <path
                        d="M15.9929 17.9004L16.2644 18.7005L17.0913 18.6997L16.5044 19.142L16.6657 20.0009L15.9929 19.5137L15.3179 19.988L15.4812 19.142L14.9004 18.6968H15.7266L15.9929 17.9004Z"
                        fill="#F8EC26"
                      />
                      <path
                        d="M15.9929 4L16.2644 4.80011L17.0913 4.79932L16.5044 5.24165L16.6657 6.10048L15.9929 5.61333L15.3179 6.08756L15.4812 5.24165L14.9004 4.79658H15.7266L15.9929 4Z"
                        fill="#F8EC26"
                      />
                      <path
                        d="M19.355 4.89453L19.6265 5.69464L20.4536 5.69386L19.8667 6.13619L20.0278 6.99501L19.355 6.50786L18.68 6.98209L18.8435 6.13619L18.2627 5.69112H19.0887L19.355 4.89453Z"
                        fill="#F8EC26"
                      />
                      <path
                        d="M12.4673 4.89453L12.7388 5.69464L13.5659 5.69386L12.979 6.13619L13.1402 6.99501L12.4673 6.50786L11.7923 6.98209L11.9558 6.13619L11.375 5.69112H12.201L12.4673 4.89453Z"
                        fill="#F8EC26"
                      />
                      <path
                        d="M19.355 16.9609L19.6265 17.7612L20.4536 17.7603L19.8667 18.2028L20.0278 19.0616L19.355 18.5745L18.68 19.0487L18.8435 18.2028L18.2627 17.7575H19.0887L19.355 16.9609Z"
                        fill="#F8EC26"
                      />
                      <path
                        d="M12.4673 16.9609L12.7388 17.7612L13.5659 17.7603L12.979 18.2028L13.1402 19.0616L12.4673 18.5745L11.7923 19.0487L11.9558 18.2028L11.375 17.7575H12.201L12.4673 16.9609Z"
                        fill="#F8EC26"
                      />
                      <path
                        d="M9.89231 7.51758L10.1638 8.31788L10.9907 8.3169L10.4038 8.75923L10.565 9.61825L9.89231 9.13091L9.21731 9.60514L9.38065 8.75923L8.7998 8.31416H9.62597L9.89231 7.51758Z"
                        fill="#F8EC26"
                      />
                      <path
                        d="M22.0144 7.51758L22.2858 8.31788L23.1128 8.3169L22.5258 8.75923L22.6872 9.61825L22.0144 9.13091L21.3394 9.60514L21.5027 8.75923L20.9219 8.31416H21.748L22.0144 7.51758Z"
                        fill="#F8EC26"
                      />
                      <path
                        d="M9.89231 14.4551L10.1638 15.2554L10.9907 15.2544L10.4038 15.6967L10.565 16.5558L9.89231 16.0684L9.21731 16.5426L9.38065 15.6967L8.7998 15.2517H9.62597L9.89231 14.4551Z"
                        fill="#F8EC26"
                      />
                      <path
                        d="M22.0144 14.4551L22.2858 15.2554L23.1128 15.2544L22.5258 15.6967L22.6872 16.5558L22.0144 16.0684L21.3394 16.5426L21.5027 15.6967L20.9219 15.2517H21.748L22.0144 14.4551Z"
                        fill="#F8EC26"
                      />
                      <path
                        d="M9.09251 10.959L9.36396 11.7593L10.1909 11.7583L9.60397 12.2006L9.76515 13.0597L9.09251 12.5723L8.4175 13.0465L8.58085 12.2006L8 11.7556H8.82616L9.09251 10.959Z"
                        fill="#F8EC26"
                      />
                      <path
                        d="M22.9019 10.959L23.1733 11.7593L24.0005 11.7583L23.4135 12.2006L23.5747 13.0597L22.9019 12.5723L22.2269 13.0465L22.3902 12.2006L21.8096 11.7556H22.6355L22.9019 10.959Z"
                        fill="#F8EC26"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_147_2953">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(8 4)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Grid>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography sx={{ fontSize: "14px" }}>
                    Representative Office
                  </Typography>
                  <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                    +1 917 287 2471
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

export default Block13;
