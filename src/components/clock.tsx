import {useEffect, useState} from "react";
import {Typography} from "@mui/material";

export const Clock = () => {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = time.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
    });

    return (
        <Typography sx={{
            fontSize: "15px",
            color: "white",
            fontWeight: "bold",
        }}>
            {formattedTime}
        </Typography>
    )
}