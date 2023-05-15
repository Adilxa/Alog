import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import { useNavigate } from 'react-router-dom';
import SeasonWear from '../seasonWear/SeasonWear';
const actions = [
    { icon: <FileCopyIcon />, name: 'Log Out' },
];



export default function LogOut() {
    const navigate = useNavigate();

    const onHandleLogout = () => {
        let sure = window.confirm("Are you realy want to logOut?")
        if (sure) {
            navigate("/")
        }
    }
    return (
        <Box sx={{ height: "1vh", transform: 'translateZ(0px)', flexGrow: 1 }}>

            <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
            >
                {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => onHandleLogout()}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}