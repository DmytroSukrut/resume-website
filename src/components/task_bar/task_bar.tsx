import { Box } from "@mui/material";
import { Clock } from "../clock.tsx";

export const TaskBar = () => {



    return (
        <Box sx={{
            position: "absolute",
            bottom: 0,
            display: "flex",
            justifyContent: "flex-start",
            width: "100%",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(28, 83, 178, 0.9) 0%, rgba(44, 110, 255, 0.9) 20%, rgba(41, 119, 255, 0.9))",
        }}>


            <Box sx={{ flexGrow: 1 }} />

            <Box sx={{
                height: "100%",
                width: "10%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderLeft: "2px solid rgb(20, 64, 139)",
                backgroundColor: "rgb(129 255 199 / 0.2)",
            }}>
                <Clock />
            </Box>
        </Box>
    )
}
