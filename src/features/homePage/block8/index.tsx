import React from "react";
import Card from "@mui/material/Card";
import { HeadlineSec } from "../../../shared/headline";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";

const Block8 = () => {
    return (
        <Card
            sx={{
                display: "flex",
                height: "335px",
                borderRadius: "0px"
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
            <CardContent
                sx={{
                    pl: "750px",
                    pr: "119px",
                    pb: "73px",
                    pt: "120px",
                }}
            >
                <HeadlineSec
                    subtitle={`Case Study`}
                    textStart={`Our Clients' `}
                    textHighlighted={`Success Stories `} textEnd={` in the Spotlight`}
                />
            </CardContent>
            </Box>
        </Card>
    );
};

export default Block8;
