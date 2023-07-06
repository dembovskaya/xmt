import React, { FC } from "react";
import Typography from "@mui/material/Typography";

interface HeadlineProps {
  subtitle?: string;
  textStart?: string;
  textHighlighted?: string;
  textEnd?: string;
}

export const Headline: FC<HeadlineProps> = ({
  subtitle,
  textStart,
  textEnd,
  textHighlighted,
}) => {
  return (
    <>
      <Typography variant="subtitle1" color="#C3C4C6">
        {subtitle}
      </Typography>
      <Typography component="h1" variant="h1" color="primary.contrastText">
        {" "}
        {textStart}
        <span style={{ color: "#F04E36" }}>{textHighlighted}</span>
        {textEnd}
      </Typography>
    </>
  );
};

export const HeadlineSec: FC<HeadlineProps> = ({
  subtitle,
  textStart,
  textEnd,
  textHighlighted,
}) => {
  return (
    <>
      <Typography variant="subtitle1" color="#A5A7A9">
        {subtitle}
      </Typography>
      <Typography component="h2" variant="h2">
        {" "}
        {textStart}
        <span style={{ color: "#F04E36" }}>{textHighlighted}</span>
        {textEnd}
      </Typography>
    </>
  );
};

export const HeadlineThird: FC<HeadlineProps> = ({
  subtitle,
  textStart,
  textEnd,
}) => {
  return (
    <>
      <Typography color="#F04E36" fontWeight='700' textTransform="capitalize">
        {subtitle}
      </Typography>
      <Typography component="h2" variant="h4" color="#FFF">
        {" "}
        {textStart}
        {textEnd}
      </Typography>
    </>
  );
};
