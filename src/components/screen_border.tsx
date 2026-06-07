import {Box} from "@mui/material";
import * as React from "react";

type ScreenBorderChildren = {
    children: React.ReactNode;
}

export const ScreenBorder = ({ children }: ScreenBorderChildren) => {

    return (
        <Box sx={{
            padding: "25px",
            paddingBottom: "40px",
            boxShadow: "inset 0px 0px 20px #262626",
            backgroundColor: "#f0e6cd",
            width: "100%",
            height: "100%",
        }}>
            <Box sx={{
                border: "2px solid",
                borderColor: "darkgrey",
                borderRadius: "10px",
                width: "100%",
                height: "100%",
                backgroundColor: "#f8f3ea",
                padding: "10px",
            }}>
                {children}
            </Box>
        </Box>
    );
}