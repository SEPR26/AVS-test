import React from 'react';
import {Root} from "./style";
import imgLogo from '/logo.png'
import {Typography} from "@mui/material";

export const LoginPage = () => {


    return (
        <Root>
            <div className='left-side'>
                <div className='left-line'/>
                <div className='avs-logo'>
                    <img src={imgLogo} alt="avs"/>
                </div>
                <div className='login-card'>
                    <Typography variant="h3">
                        Get started for free!
                    </Typography>
                    <Typography className='sub-title'>
                        Please, fill in the form and get a free license key for your PC
                    </Typography>
                    <form>

                    </form>
                </div>
            </div>
            <div className='right-side'>

            </div>
        </Root>
    );
};

