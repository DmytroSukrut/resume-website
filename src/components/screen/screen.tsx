import { Box } from "@mui/material";
import bliss from "../../assets/images/bliss.jpg";
import {TaskBar} from "../task_bar/task_bar.tsx";
import "./screen.css";

export const Screen = () => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",

                backgroundImage: `url(${bliss})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

                color: "black",
                border: "2px solid black",
                borderRadius: "10px",
                boxShadow: "inset 0px 0px 10px black",
            }}
        >
            <Box sx={{
                width: "100%",
                height: "100%",
                padding: "10px",
            }}>
                <Box sx={{ position: "relative", zIndex: 1 }}>
                    Hello from screen
                </Box>
            </Box>



            <TaskBar />

            <Box className="screen-scanlines" />
            <Box className="screen-noise" />
        </Box>
    );
};