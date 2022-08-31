import React, {useEffect, useState} from 'react';
import {Root} from "./style";
import imgLogo from '/logo.png'
import magicImg from '/img-magic.png'
import avsText from '/avs-text.png'
import {Box, Button, Checkbox, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const LoginPage = () => {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({username: '', userEmail: ''});
    const [notValidate, setNotValidate] = useState(false)

    const handleLogin = ({target: {name, value}}: any) => {
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (loginData.username === '' && loginData.userEmail === '') {
            setNotValidate(true)
        } else {
            navigate('/main')
        }
    };

    useEffect(() => {
        (loginData.username !== '' && loginData.userEmail !== '') && setNotValidate(false)
    }, [loginData])

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
                    <Box
                        component="form"
                        noValidate
                        autoComplete="off"
                        onSubmit={handleSubmit}
                    >
                        <div className='input-wrapper'>
                            <Typography className='input-label'>Name</Typography>
                            <TextField
                                error={notValidate}
                                className='input-style'
                                type="text"
                                name="username"
                                id="username"
                                value={loginData.username}
                                onChange={handleLogin}
                                helperText={notValidate ? "Please enter your valid email address" : ''}
                            />
                        </div>
                        <div className='input-wrapper'>
                            <Typography className='input-label'>Email address</Typography>
                            <TextField
                                error={notValidate}
                                className='input-style'
                                type="text"
                                name="userEmail"
                                id="userEmail"
                                value={loginData.userEmail}
                                onChange={handleLogin}
                                helperText={notValidate ? "Please enter your valid email address" : ''}
                            />
                        </div>
                        <div className='checkbox-wrapper'>
                            <div className='checkbox-agree'>
                                <Checkbox
                                    sx={{
                                        width: '20px',
                                        height: '20px',
                                        color: '#FE9235',
                                        '&.Mui-checked': {
                                            color: '#FE9235',
                                        },
                                    }}
                                />
                                <Typography>
                                    By providing my personal data I agree to be informed about AVS4YOU software deals
                                    via
                                    email.
                                </Typography>
                            </div>
                            {notValidate && (
                                <Typography className='error-text-license'>
                                    Please agree to receive your free license key.
                                </Typography>
                            )}
                        </div>
                        <Button type='submit' variant='contained' className='card-btn'>
                            Get Free License
                        </Button>
                    </Box>
                </div>
            </div>
            <div className='right-side'>
                <div className='avs-text-img'>
                    <img src={avsText} alt="mag"/>
                </div>
                <div className='magic-img'>
                    <img src={magicImg} alt="mag"/>
                </div>
            </div>
        </Root>
    );
};

