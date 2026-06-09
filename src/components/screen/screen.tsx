import {Box, Grid} from "@mui/material";
import bliss from "../../assets/images/bliss.jpg";
import resume_icon from "../../assets/images/resume_icon.png";
import my_projects_icon from "../../assets/images/my_projects_icon.png";
import { TaskBar } from "../task_bar/task_bar.tsx";
import { Application } from "../application.tsx";
import "./screen.css";

export const Screen = () => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",

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
                flex: 1,
                padding: "10px",
            }}>
                <Grid container sx={{

                }}></Grid>
                <Grid container spacing={2} sx={{
                    width: "100%",
                    height: "100%",
                }}>
                    <Grid size={{ xs: 6, md: 2, lg: 1}}>
                        <Application app_name={"my_projects"} app_icon={`${my_projects_icon}`} onClick={() => console.log("button_click")} />
                    </Grid>
                    <Grid size={{ xs: 6, md: 10, lg: 11}} />
                    <Grid size={{ xs: 6, md: 2, lg: 1}}>
                        <Application app_name={"Resume.exe"} app_icon={`${resume_icon}`} onClick={() => console.log("button_click")} />
                    </Grid>
                    <Grid size={{ xs: 6, md: 10, lg: 11}} />
                    <Grid size={{ xs: 6, md: 2, lg: 1}}>
                        <Application app_name={"Resume.exe"} app_icon={`${resume_icon}`} onClick={() => console.log("button_click")} />
                    </Grid>
                    <Grid size={{ xs: 6, md: 10, lg: 11}} />
                    <Grid size={{ xs: 6, md: 2, lg: 1}}>
                        <Application app_name={"Resume.exe"} app_icon={`${resume_icon}`} onClick={() => console.log("button_click")} />
                    </Grid>
                    <Grid size={{ xs: 6, md: 10, lg: 11}} />
                </Grid>



            </Box>



            <TaskBar />

            <Box className="screen-scanlines" />
            <Box className="screen-noise" />
        </Box>
    );
};