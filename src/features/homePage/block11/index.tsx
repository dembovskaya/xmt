import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { HeadlineSec } from "../../../shared/headline";

const Block11 = () => {
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
            subtitle={`Axamit Blog`}
            textStart={`Get Inside Scoop on `}
            textHighlighted={`Adobe Experience Cloud `}
            textEnd={`Updates, Trends, Best Practices`}
          />
        </CardContent>
      </Box>
    </Card>
  );
};

export default Block11;
