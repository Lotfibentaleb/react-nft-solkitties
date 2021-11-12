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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "url('../../assets/part1/bg-mint2.png'), linear-gradient(180deg, #224F93 0%, #161131 78.83%)",
      backgroundSize: 'contain',
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        margin: 'auto',
        marginTop: '45px'
      }
    },
    welcomeTitle: {
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '39px',
      color: '#FFFFFF'
    },
    welcomeSol: {
      fontWeight: 'bold',
      fontSize: '58px',
      lineHeight: '80px',
      color: '#FFD029'
    },
    welcomeSubTitle: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '22px',
      color: '#A7D5FF'
    },
    mintTitle: {
      marginTop: '29px',
      fontWeight: 'bold',
      fontSize: '35px',
      lineHeight: '48px',
      color: '#E16BFF'
    },
    mintSubTitle: {
      fontWeight: 600,
      fontSize: '17px',
      lineHeight: '24px',
      color: '#FFFFFF'
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
      alignItems: 'center'
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
    },
    askText: {
      fontWeight: 'bold',
      fontSize: '85px',
      lineHeight: '120px',
      color: '#C08A13'
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
      left: '-65%'
    },
    mintButton: {
      width: '220.25px',
      height: '61.85px',
      background: '#FFD029',
      marginTop: '20.5px',
      margin: 'auto',
      borderRadius: '16px',
      fontWeight: 'bold',
      fontSize: '39px',
      lineHeight: '53px',
      color: '#161131',
      textAlign: 'center',
      cursor: 'pointer'
    },
    mintDescription: {
      width: '253.7px',
      color: '#7B9AD6',
      fontWeight: 'bold',
      fontSize: '17.8px',
      lineHeight: '21px',
      margin: 'auto',
      marginTop: '6.15px',
      textAlign: 'center'
    },
    mintDescriptionPadding: {
      paddingLeft: '90px',
      marginTop: '0px',
      marginBottom: '0px',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '30px',
        paddingRight: '30px',
        marginTop: '80px',
        marginBottom: '50px',
      }
    },
    howToMint: {
      fontWeight: 'bold',
      fontSize: '32.3px',
      lineHeight: '44px',
      color: '#7BF4FC',
      marginBottom: '6px'
    },
    mintText: {
      fontWeight: 600,
      fontSize: '17px',
      lineHeight: '23px',
      color: '#FFFFFF',
      display: 'flex',
      justifyContent: 'flex-start',
      marginBottom: '13px'
    },
    priceArea: {
      width: '90%',
      marginTop: '11px',
      marginBottom: '50px',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '30px',
        paddingRight: '30px',
      }
    },
    priceLabel: {
      fontWeight: 'bold',
      fontSize: '32px',
      lineHeight: '44px',
      color: '#FFD74A',
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
      color: '#ffffff'
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
      marginBottom: '50px'
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
              </Box>
              <Box className={classes.mintButton}>Mint</Box>
              <Box className={classes.mintDescription}>Max 20 per tansaction. Need more? Just repeat.</Box>
            </Grid>
            
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

          <Grid container>
            <Grid item lg={5} sm={12} md={12} xs={12}>
              <Grid container>
                <Grid item lg={6} sm={12} md={12} xs={12}>
                  <Box className={classes.priceArea}>
                    <Box className={classes.priceLabel}>Price</Box>
                    <Box className={classes.priceInput}>
                      <input className={classes.priceInputBox} />
                    </Box>
                    <Box className={classes.priceGas}>+ gas fee</Box>
                  </Box>
                </Grid>
                <Grid item lg={6} sm={12} md={12} xs={12}>
                  <Box className={classes.priceArea}>
                    <Box className={classes.remainingLabel}>Remaining</Box>
                    <Box className={classes.remainingInput}>
                      <input className={classes.priceInputBox} />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item lg={7} sm={12} md={12} xs={12}>
              <Box className={classes.solanaAvatarArea}>
                <Box className={classes.solana}>
                  <Typography>POWERED BY</Typography>
                  <img src='assets/images/solana-avatar.png' style={{width: '158px', height: '30px'}} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  )
}
