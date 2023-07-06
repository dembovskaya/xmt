import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { HeadlineSec } from "../../../shared/headline";

const Block4 = () => {
  return (
    <Card
      sx={{
        display: "flex",
        height: "326px",
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <CardContent
          sx={{
            pl: "120px",
            pr: "550px",
            pb: "64px",
            pt: "120px",
          }}
        >
          <HeadlineSec
            subtitle={`Industry Verticals`}
            textStart={`Experiences `}
            textHighlighted={`Setting the New Standard `}
            textEnd={`in Your Industry`}
          />
        </CardContent>
      </Box>
    </Card>
  );
};

export default Block4;
