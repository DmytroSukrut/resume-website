import {Button, Typography} from "@mui/material";


type ApplicationProps = {
    app_name: string;
    app_icon: string;
    onClick: () => void;
}

export const Application = ({app_name, app_icon, onClick}: ApplicationProps) => {



    return (
        <Button sx={{
            width: "100%",
            height: "100%",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            padding: "3px",

            background: "none",
            border: "1px solid transparent",
            borderRadius: "5px",

            color: "rgb(255, 255, 255)",
            textShadow: "2px 2px 1px black",

            transition: "all 0.15s ease-in-out",
            "&:hover": {
                backgroundColor: "rgb(209 216 255 / 0.7)",
                border: "1px solid rgba(137 148 255 / 0.7)",
            }
        }} onClick={onClick}>
            <img src={app_icon} alt={app_name} style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
            }}/>
            <Typography sx={{fontSize: "13px"}}>
                {app_name}
            </Typography>
        </Button>
    );
}

