import {styled} from '@mui/material';

export const Root = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
        display: 'block',
    },
    '& div.left-line': {
        position: 'fixed',
        zIndex: '10',
        width: '8px',
        height: '100%',
        top: 0,
        background: '#F8CECA'
    },
    '& div.left-side': {
        [theme.breakpoints.down('xl')]: {
          marginRight: '70px'
        },
        [theme.breakpoints.down('lg')]: {
            width: '100%',
            margin: '0 auto',
            maxWidth: '500px',
            '& .avs-text': {
                marginTop: '66px',
                '& h2': {
                    fontSize: '50px',
                    fontWeight: '800',
                    lineHeight: '50px',
                }
            }
        },
        [theme.breakpoints.down('md')]: {
            '& .avs-text': {
                marginTop: '66px',
                [theme.breakpoints.down('sm')]: {
                    marginTop: '0',
                    margin: '66px 30px 0'
                },
                '& h2': {
                    fontSize: '40px',
                    fontWeight: '800',
                    lineHeight: '50px',
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '25px',
                        fontWeight: '800',
                        lineHeight: '33px',
                    },
                }
            }
        },
        '& div.avs-logo': {
            margin: '46px 0 0 38px'
        },
        '& div.login-card': {
            margin: '130px 0 110px 26px',
            maxWidth: '500px',
            [theme.breakpoints.down('lg')]: {
                margin: '66px 0 10px',
            },
            [theme.breakpoints.down('sm')]: {
                margin: '66px 30px 10px',
            },
            '& h3': {
                fontWeight: '700',
                fontSize: '37px',
                marginBottom: '10px'
            },
            '& p.sub-title': {
                fontWeight: '600',
                fontSize: '17px',
                marginBottom: '30px'
            },
            '& .input-wrapper': {
                '& p.input-label': {
                    color: '#241C15',
                    fontSize: '15px',
                    fontWeight: '700',
                    marginBottom: '10px'
                },
                '& .input-style': {
                    width: '100%',
                    background: '#fff',
                    marginBottom: '30px',
                    '& input': {
                        padding: '11.5px 14px',
                    },
                    '& .MuiOutlinedInput-root': {
                        '&:hover fieldset': {
                            border: '1px solid #FE9235'
                        },
                        '&.Mui-focused fieldset': {
                            border: '1px solid #FE9235',
                            boxShadow: '0px 0px 0px 4px rgba(254, 146, 53, 0.2)'
                        },
                    },
                },
                '& p.MuiFormHelperText-root': {
                    fontSize: '14px',
                    fontWeight: '400',
                    marginRight: 0,
                    marginLeft: 0,
                    color: '#F95847'

                }
            },
            '& div.checkbox-wrapper': {
                marginBottom: '35px',
                '& div.checkbox-agree': {
                    display: 'flex',
                    marginBottom: '10px',
                    '& span': {
                        marginTop: '3px'
                    },
                    '& p': {
                        marginLeft: '14px',
                        fontWeight: '400',
                        fontSize: '14px'
                    }
                },
                '& p.error-text-license': {
                    marginLeft: '14px',
                    fontWeight: '400',
                    fontSize: '14px',
                    color: '#F95847'
                }
            },
            '& .card-btn': {
                width: '100%',
                background: '#FE9235',
                padding: '13px 16px',
                '&:hover': {
                    background: '#FFAB62'
                }
            }
        }
    },
    '& div.right-side': {
        position: 'relative',
        width: '50%',
        background: `#FEE9E7 url('/dots_26.png')`,
        [theme.breakpoints.down('lg')]: {
            width: '100%',
        },
        [theme.breakpoints.down('md')]: {
            background: `#fff url('/dots_26.png')`,
        },
        '& div.avs-text': {
            maxWidth: '550px',
            width: '100%',
            margin: '125px auto 0',
            '& h2': {
                fontSize: '54px',
                fontWeight: '800',
                lineHeight: '63px',
                [theme.breakpoints.down('xl')]: {
                    textAlign: 'center',
                    fontSize: '40px',
                    fontWeight: '800',
                    lineHeight: '50px'
                },
            }
        },
        '& div.magic-img': {
            '& img': {
                position: 'absolute',
                maxWidth: '100%',
                bottom: 0,
                [theme.breakpoints.down('lg')]: {
                    position: 'relative'
                }
            }
        }
    }
}));