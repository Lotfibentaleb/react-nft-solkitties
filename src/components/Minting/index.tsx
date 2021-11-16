import React from 'react'
import {
  Box, 
  Container, 
  Grid, 
  Accordion, 
  AccordionDetails, 
  AccordionSummary, 
  Typography,
  Hidden
} from '@material-ui/core';

// styles
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { calcTimeDelta } from 'react-countdown';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "url('../../assets/part1/bg-mint2.png'), linear-gradient(180deg, #224F93 0%, #161131 78.83%)",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      width: '100%'
    },
    welcomeArea: {
      width: '353px',
      marginTop: '45px',
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% - 60px)',
        paddingLeft: '40px'
      },
      [theme.breakpoints.down('xs')]: {
        width: 'calc(100% - 40px)',
        paddingLeft: '20px'
      }
    },
    welcomeTitle: {
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '39px',
      color: '#FFFFFF',
      [theme.breakpoints.down('sm')]: {
        fontSize: '27px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '25px',
      }
    },
    welcomeSol: {
      fontWeight: 'bold',
      fontSize: '58px',
      lineHeight: '80px',
      color: '#FFD029',
      [theme.breakpoints.down('sm')]: {
        fontSize: '48px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '37px',
      }
    },
    welcomeSubTitle: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '22px',
      color: '#A7D5FF',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '13px',
      }
    },
    mintTitle: {
      marginTop: '29px',
      fontWeight: 'bold',
      fontSize: '35px',
      lineHeight: '48px',
      color: '#E16BFF',
      [theme.breakpoints.down('sm')]: {
        fontSize: '30px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '25px',
      }
    },
    mintSubTitle: {
      fontWeight: 600,
      fontSize: '17px',
      lineHeight: '24px',
      color: '#FFFFFF',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '13px',
      }
    },
    mintAvatarArea: {
      position: 'relative',
      width: '213px',
      height: '213px',
      background: '#FFD029',
      marginTop: '52px',
      borderRadius: '32px',
      margin: 'auto',
      [theme.breakpoints.down('sm')]: {
        marginTop: '150px',
        width: '180px',
        height: '180px'
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: '100px',
        width: '120px',
        height: '120px'
      }
    },
    mintAvatar: {
      position: 'absolute',
      top: '0px',
      left: '0px',
      width: '213px',
      height: '213px',
      background: '#FFD029',
      borderRadius: '32px',
      border: '4px solid #000000',
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('sm')]: {
        width: '180px',
        height: '180px'
      },
      [theme.breakpoints.down('xs')]: {
        width: '120px',
        height: '120px'
      }
    },
    mintImg: {
      width: '137px',
      height: '136px',
      background: "url('../../assets/images/cat_shiluette.png')",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        width: '100px',
        height: '100px'
      }
    },
    askText: {
      fontWeight: 'bold',
      fontSize: '85px',
      lineHeight: '120px',
      color: '#C08A13',
      [theme.breakpoints.down('xs')]: {
        fontSize: '65px',
      }
    },
    mintAvatars: {
      position: 'absolute',
      width: '480px',
      height: '360px',
      background: "url('../../assets/part1/mint-avatars.png')",
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      top: '-20%',
      left: '-65%',
      [theme.breakpoints.down('sm')]: {
        width: '450px',
        height: '300px',
        top: '-25px',
        left: '-125px',
      },
      [theme.breakpoints.down('xs')]: {
        width: '280px',
        height: '200px',
        top: '-20px',
        left: '-70px',
      }
    },
    mintButton: {
      position: 'absolute',
      width: '220.25px',
      height: '61.85px',
      background: '#FFD029',
      borderRadius: '16px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      bottom: '-82px',
      left: '0px',
      [theme.breakpoints.down('sm')]: {
        width: '190px',
      },
      [theme.breakpoints.down('xs')]: {
        width: '135px',
        height: '45px',
        bottom: '-65px',
        borderRadius: '13px',
      }
    },
    mintButtonLabel: {
      fontWeight: 'bold',
      fontSize: '39px',
      lineHeight: '53px',
      color: '#161131',
      [theme.breakpoints.down('sm')]: {
        fontSize: '35px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '28px',
      }
    },
    mintDescription: {
      width: '253.7px',
      color: '#7B9AD6',
      fontWeight: 'bold',
      fontSize: '17.8px',
      lineHeight: '21px',
      margin: 'auto',
      marginTop: '88.15px',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        fontSize: '15px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px',
      }
    },
    mintDescriptionPadding: {
      paddingLeft: '90px',
      marginTop: '0px',
      marginBottom: '0px',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '30px',
        paddingRight: '30px',
        marginBottom: '50px',
      }
    },
    howToMint: {
      fontWeight: 'bold',
      fontSize: '32.3px',
      lineHeight: '44px',
      color: '#7BF4FC',
      marginBottom: '6px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '25px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '20px',
      }
    },
    mintText: {
      fontWeight: 600,
      fontSize: '17px',
      lineHeight: '23px',
      color: '#FFFFFF',
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: '13px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '14px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '12px',
      }
    },
    priceArea: {
      width: '80%',
      marginTop: '11px',
      marginBottom: '50px',
      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% - 70px)',
        paddingLeft: '30px',
        paddingRight: '30px',
        marginBottom: '0px',
      }
    },
    priceLabel: {
      fontWeight: 'bold',
      fontSize: '32px',
      lineHeight: '44px',
      color: '#FFD74A',
      [theme.breakpoints.down('xs')]: {
        fontSize: '24px',
      }
    },
    priceInput: {
      width: '100%',
      height: '46px',
      border: '2px solid #FFD74A',
      borderRadius: '13.5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '5px',
      
    },
    priceInputBox: {
      width: '90%',
      height: '60%',
      background: 'transparent',
      border: 'none',
      outline: 'none',
      fontSize: '25px',
      color: '#ffffff',
      '&::placeholder': {
        color: '#FFFFFF'
      }
    },
    priceGas: {
      textAlign: 'right',
      fontWeight: 'bold',
      fontSize: '17.5px',
      lineHeight: '21px',
      color: '#FFFFFF',
    },
    remainingLabel: {
      fontWeight: 'bold',
      fontSize: '32px',
      lineHeight: '44px',
      color: '#7165B2',
      [theme.breakpoints.down('xs')]: {
        fontSize: '24px',
      }
    },
    remainingInput: {
      width: '100%',
      height: '46px',
      border: '2px solid #7165B2',
      borderRadius: '13.5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: '5px',
    },
    solanaAvatarArea: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    solana: {
      marginTop: '50px',
      marginLeft: '50px',
      width: '158px',
      fontWeight: 'bold',
      fontSize: '10.5px',
      lineHeight: '13px',
      color: '#43A4FF',
      textAlign: 'right',
      [theme.breakpoints.down('sm')]: {
        marginBottom: '30px',
        marginLeft: '0px',
      }
    }
  }),
);


export const Minting = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className='main-layout'>
        <div className='main-container'>
          <Box className={classes.welcomeArea}>
            <Typography className={classes.welcomeTitle}>
              Welcome to
            </Typography>
            <Box className={classes.welcomeSol}>
              SOL KITTIES
            </Box>
            <Typography className={classes.welcomeSubTitle}>
              The invasion is imminent, be-hold from the mighty kitties.
            </Typography>
            <Box className={classes.mintTitle}>
              MINT YOUR KITTIE
            </Box>
            <Typography className={classes.mintSubTitle}>
              The 1st drop of the Sol Kitties Collection
            </Typography>
          </Box>
          <Grid container>
            
            <Grid item alignItems="center" justifyContent="center" lg={5} md={12} sm={12} xs={12}>
              <Box className={classes.mintAvatarArea}>
                <Box className={classes.mintAvatars}></Box>
                <Box className={classes.mintAvatar}>
                  <Box className={classes.mintImg}>
                    <Typography className={classes.askText}>?</Typography>
                  </Box>
                </Box>
                <Box className={classes.mintButton}>
                  <Typography className={classes.mintButtonLabel}>Mint</Typography>
                </Box>
              </Box>
              
              <Box className={classes.mintDescription}>Max 20 per transaction. <br />Need more? Just repeat.</Box>
            </Grid>
            
            <Hidden lgUp>
              <Grid item lg={5} sm={12} md={12} xs={12}>
                <Grid container>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box className={classes.priceArea}>
                      <Box className={classes.priceLabel}>Price</Box>
                      <Box className={classes.priceInput}>
                        <input className={classes.priceInputBox} placeholder='1 SOL' />
                      </Box>
                      <Box className={classes.priceGas}>+ gas fee</Box>
                    </Box>
                  </Grid>
                  <Grid item lg={6} md={6} sm={12} xs={12}>
                    <Box className={classes.priceArea}>
                      <Box className={classes.remainingLabel}>Remaining</Box>
                      <Box className={classes.remainingInput}>
                        <input className={classes.priceInputBox} placeholder='3,080' />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={7} sm={12} md={12} xs={12}>
                <Box className={classes.solanaAvatarArea}>
                  <Box className={classes.solana}>
                    <Typography style={{fontFamily: 'Orbitron', fontSize: '10.65px'}}>POWERED BY</Typography>
                    <img src='assets/images/solana-avatar.png' style={{width: '158px', height: '30px'}} />
                  </Box>
                </Box>
              </Grid>
            </Hidden>

            <Grid item lg={7} className={classes.mintDescriptionPadding} md={12} sm={12} xs={12}>
              <Typography className={classes.howToMint}>HOW TO MINT ?</Typography>
              <Box className={classes.mintText}>
                <img src='assets/images/cat_shiluette.png' style={{width: '17px', height: '16px', marginRight: '16px', marginTop: '4px'}}/>
                <Typography>Join our Discord</Typography>
              </Box>
              <Box className={classes.mintText}>
                <img src='assets/images/cat_shiluette.png' style={{width: '17px', height: '16px', marginRight: '16px', marginTop: '4px'}}/>
                <Typography>When the sale starts, you will see a “Connect Wallet” button at the top of our website. Connect your Phantom, Sollet or Solflare wallet.</Typography>
              </Box>
              <Box className={classes.mintText}>
                <img src='assets/images/cat_shiluette.png' style={{width: '17px', height: '16px', marginRight: '16px', marginTop: '4px'}}/>
                <Typography>When your wallet is successfully connected, “Connect Wallet” button will change to the “Mint” button. Click “Mint” button. Please make sure that you have enough SOL on your wallet balance.</Typography>
              </Box>
              <Box className={classes.mintText}>
                <img src='assets/images/cat_shiluette.png' style={{width: '17px', height: '16px', marginRight: '16px', marginTop: '4px'}}/>
                <Typography>Approve transaction and wait a bit until it wiil be confirmed.</Typography>
              </Box>
              <Box className={classes.mintText}>
                <img src='assets/images/cat_shiluette.png' style={{width: '17px', height: '16px', marginRight: '16px', marginTop: '4px'}}/>
                <Typography>Congratulations! You can find your Sol Kitties collectibles by clicking “Your Collectibles” in Phantom Wallet.</Typography>
              </Box>
            </Grid>
          </Grid>

          <Hidden mdDown>
            <Grid container>
              <Grid item lg={5} sm={12} md={12} xs={12}>
                <Grid container>
                  <Grid item lg={6} sm={12} md={12} xs={12}>
                    <Box className={classes.priceArea}>
                      <Box className={classes.priceLabel}>Price</Box>
                      <Box className={classes.priceInput}>
                        <input className={classes.priceInputBox} placeholder='1 SOL'/>
                      </Box>
                      <Box className={classes.priceGas}>+ gas fee</Box>
                    </Box>
                  </Grid>
                  <Grid item lg={6} sm={12} md={12} xs={12}>
                    <Box className={classes.priceArea}>
                      <Box className={classes.remainingLabel}>Remaining</Box>
                      <Box className={classes.remainingInput}>
                        <input className={classes.priceInputBox} placeholder='3,080' />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item lg={7} sm={12} md={12} xs={12}>
                <Box className={classes.solanaAvatarArea}>
                  <Box className={classes.solana}>
                    <Typography style={{fontFamily: 'Orbitron', fontSize: '10.65px'}}>POWERED BY</Typography>
                    <img src='assets/images/solana-avatar.png' style={{width: '158px', height: '30px'}} />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Hidden>
        </div>
      </div>
    </div>
  )
}
