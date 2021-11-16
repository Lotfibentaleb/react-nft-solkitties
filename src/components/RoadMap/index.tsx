import React from 'react'
import {
  GalleryWrapper,
} from './styles'

import {Box, Grid, Typography, Hidden} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      height: '2080px',
      [theme.breakpoints.down('sm')]: {
        height: 'auto'
      },
      display: 'flex',
      justifyContent: 'center',
      background: 'url(' + 'assets/part2/back-02-2.png' + '), linear-gradient(180deg, #63D9FF 0%, #8CD5FF 42.64%, #3DA5FF 100%)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      backgroundSize: 'cover',
    },
    mainContainser: {
      width: '970px',
      [theme.breakpoints.down('sm')]: {
        width: '100%'
      },
    },

    // Solana Avatar Row
    solanaAvatarRow: {
      width: '100%',
      marginTop: '-20px',
      display: 'flex',
      justifyContent: 'flex-end',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center',
        marginTop: '-20px',
      },
    },
    solanaAvatarBox: {
      width: '158px',
      textAlign: 'right',
      fontWeight: 'bold',
      fontSize: '10.5px',
      lineHeight: '13px',
      color: '#43A4FF',
      fontFamily: 'Orbitron',
    },

    // Roadmap Header Row
    roadmapHeaderRow: {
      position: 'relative',
      width: '100%',
      height: '52px',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '110px',
      [theme.breakpoints.down('md')]: {
        marginTop: '89px',
      },
    },
    roadmapHeaderCenterLine: {
      position: 'absolute',
      width: '3.18px',
      height: '1570px',
      opacity: 0.5,
      background: '#ffffff',
      top: '150px',
      [theme.breakpoints.down('sm')]: {
        height: '1995px',
      },
    },
    roadmapHeaderCenterImageShadow: {
      position: 'absolute',
      width: '292px',
      height: '292px',
      background: 'radial-gradient(50% 50% at 50% 50%, #51ABFF 0%, rgba(131, 225, 255, 0.27) 51.56%, rgba(251, 67, 255, 0) 82.29%)',
      top: '-110px'
    },
    roadmapHeaderCenterImage: {
      position: 'absolute',
      width: '168.9px',
      height: '168.5px',
      top: '-70px'
    },
    roadmapHeaderLabel: {
      position: 'absolute',
      width: '692px',
      height: '53px',
      background: 'url(' + '/assets/images/road-map-banner.png' + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      backgroundSize: 'contain',

      [theme.breakpoints.down('sm')]: {
        width: '600px',
        height: '45px',
      },
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
    },
    readmapHeaderLeftLabel: {
      paddingTop: '5px', 
      paddingLeft: '50px',
      [theme.breakpoints.down('xs')]: {
        paddingLeft: '30px',
      },
    },
    readmapHeaderRightLabel: {
      paddingTop: '5px', 
      paddingLeft: '120px',
      [theme.breakpoints.down('xs')]: {
        paddingLeft: '200px',
      },
    },
    roadmapHeaderLabelDetail: {
      'fontFamily': 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '32.1421px',
      lineHeight: '44px',
      color: '#FFFFFF',
      zIndex: 3,

      [theme.breakpoints.down('sm')]: {
        fontSize: '25px',
        lineHeight: '34px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '16px',
        lineHeight: '20px',
      },
    },
    roadmapHeaderLineImage: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: '0px',
      left: '0px',
      zIndex: 1
    },
    roadmmapHeaderDownImage: {
      position: 'absolute',
      width: '440px',
      height: '440px',
      top: '47px',
      [theme.breakpoints.down('xs')]: {
        width: '90%',
        height: '90%',
      },
    },

    roadmapContent: {
      position: 'relative',
      width: '100%',
      marginTop: '100px',
      [theme.breakpoints.down('sm')]: {
        marginTop: '190px',
      },
    },
    firstRoadmap: {
      [theme.breakpoints.down('sm')]: {
        marginTop: '220px',
      },
    },
    thirdRoadmap: {
      marginTop: '70px',
      [theme.breakpoints.down('sm')]: {
        marginTop: '190px',
      },
    },
    fourthRoadmap: {
      marginTop: '80px',
      [theme.breakpoints.down('sm')]: {
        marginTop: '190px',
      },
    },
    fifthRoadmap: {
      marginTop: '155px',
      [theme.breakpoints.down('sm')]: {
        marginTop: '190px',
      },
    },
    roadmapContentCenterImage: {
      position: 'absolute',
      width: '100%',
      height: '124px',
      left: '0px',
      display: 'flex',
      justifyContent: 'center',
      top: '-25px',
      [theme.breakpoints.down('sm')]: {
        top: '-155px',
      },
    },
    roadmapCenterImageSize: {
      width: '91px',
      height: '124px',
      [theme.breakpoints.down('sm')]: {
        width: '70px',
        height: '95px',
      },
    },
    responsiveRightMonth: {
      display: 'flex',
      justifyContent: 'flex-end',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'flex-start',
        paddingLeft: '70px'
      },
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'flex-start',
        paddingLeft: '30px'
      },
    },
    responsiveLeftMonth: {
      display: 'flex',
      justifyContent: 'flex-start',
      paddingLeft: '65px'
    },
    leftMonthWrapper: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '237.37px',
      height: '48px',
      background: '#FE5122',
      border: '2.3528px solid #FFFFFF',
      boxSizing: 'border-box',
      borderRadius: '24px',
      alignItems: 'center',
      padding: '0px 10px',
      marginTop: '3px',
      marginRight: '60px',
      [theme.breakpoints.down('sm')]: {
        width: '200px',
        height: '35px'
      },
    },
    rightMonthWrapper: {
      display: 'flex',
      justifyContent: 'flex-start',
      width: '237.37px',
      height: '48px',
      background: '#FE5122',
      border: '2.3528px solid #FFFFFF',
      boxSizing: 'border-box',
      borderRadius: '24px',
      alignItems: 'center',
      padding: '0px 10px',
      marginTop: '3px',
      [theme.breakpoints.down('sm')]: {
        width: '200px',
        height: '35px'
      },
    },
    monthText: {
      fontFamily: 'Open Sans',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '21.75px',
      lineHeight: '30px',
      color: '#FFFFFF',
      [theme.breakpoints.down('sm')]: {
        fontSize: '16px',
      },
    },

    rightTextWrapper: {
      width: '100%',
      paddingLeft: '50px',
      [theme.breakpoints.down('xs')]: {
        width: 'calc(100% - 40px)',
        paddingLeft: '20px',
        paddingRight: '20px',
      },
      [theme.breakpoints.down('sm')]: {
        width: 'calc(100% - 40px)'
      },
    },
    rightTextItem: {
      display: 'flex',
      justifyContent: 'flex-start',
      margin: '15px',
      [theme.breakpoints.down('xs')]: {
        margin: '5px 10px',
      },
      [theme.breakpoints.down('sm')]: {
        margin: '5px 15px',
      },
    },

    textLeftImage: {
      width: '28px', 
      height: '28px'
    },

    rightTextDetail: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: 800,
      fontSize: '23px',
      lineHeight: '32px',
      textTransform: 'uppercase',
      color: '#003B61',
      marginLeft: '11px',
      [theme.breakpoints.down('sm')]: {
        fontSize: '18px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '14px',
      },
    },

    leftTextWrapper: {
      width: '100%',
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '50px',
        width: 'calc(100% - 60px)'
      },
      [theme.breakpoints.down('xs')]: {
        width: 'calc(100% - 40px)',
        paddingLeft: '20px',
        paddingRight: '20px',
      },
    },
    roadmapFifth: {
      marginBottom: '32px'
    },
    roadmapFooter: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      marginBottom: '25px'
    },
    roadmapFooterMainImg: {
      width: '545px', 
      height: '252.4px',
      [theme.breakpoints.down('xs')]: {
        width: '100vw', 
        height: 'calc(100vw * 0.47)',
      },
    },
    roadmapFooterLabelImageArea: {
      position: 'absolute',
      width: '100%',
      height: '90px',
      display: 'flex',
      justifyContent: 'center',
      bottom: '-45px',
      [theme.breakpoints.down('xs')]: {
        bottom: '-70px',
      },
    },
    roadmapFooterLabelImage: {
      width: '675px',
      height: '95px',
      background: 'url(' + '/assets/images/road-footer-banner.png' + ')',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top',
      backgroundSize: 'contain',
      zIndex: 99,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FFFFFF',
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        paddingTop: '3px',
        alignItems: 'flex-start',
      },
    },
    roadmapFooterLabel: {
      fontFamily: 'Dosis',
      fontStyle: 'normal',
      fontWeight: 800,
      fontSize: '40.3646px',
      lineHeight: '51px',
      textAlign: 'center',
      textTransform: 'uppercase',
      [theme.breakpoints.down('sm')]: {
        fontSize: '30px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '20px',
      },
    }
  }),
);

export const RoadMap = () => {

  const classes = useStyles()

  const imageList = [
    { id: 1, title: '1', url: 'assets/images/1.png' },
    { id: 2, title: '2', url: 'assets/images/2.png' },
    { id: 3, title: '3', url: 'assets/images/3.png' },
    { id: 4, title: '4', url: 'assets/images/4.png' },
    { id: 5, title: '5', url: 'assets/images/5.png' },
    { id: 6, title: '6', url: 'assets/images/6.png' },
    { id: 7, title: '7', url: 'assets/images/7.png' },
    { id: 8, title: '8', url: 'assets/images/8.png' },
    { id: 9, title: '9', url: 'assets/images/9.png' },
    { id: 10, title: '10', url: 'assets/images/10.png' },
    { id: 11, title: '11', url: 'assets/images/1.png' },
    { id: 12, title: '11', url: 'assets/images/2.png' },
    { id: 13, title: '11', url: 'assets/images/3.png' },
    { id: 14, title: '11', url: 'assets/images/4.png' },
    { id: 15, title: '11', url: 'assets/images/5.png' },
    { id: 16, title: '6', url: 'assets/images/6.png' },
    { id: 17, title: '7', url: 'assets/images/7.png' },
    { id: 18, title: '8', url: 'assets/images/8.png' },
    { id: 19, title: '9', url: 'assets/images/9.png' },
    { id: 20, title: '10', url: 'assets/images/10.png' },
    { id: 21, title: '11', url: 'assets/images/1.png' },
    { id: 22, title: '11', url: 'assets/images/2.png' },
    { id: 23, title: '11', url: 'assets/images/3.png' },
    { id: 24, title: '11', url: 'assets/images/4.png' },
    { id: 25, title: '11', url: 'assets/images/5.png' },
    { id: 26, title: '6', url: 'assets/images/6.png' },
    { id: 27, title: '7', url: 'assets/images/7.png' },
  ]

  const responsiveImageList = [
    { id: 1, title: '1', url: 'assets/images/1.png' },
    { id: 2, title: '2', url: 'assets/images/2.png' },
    { id: 3, title: '3', url: 'assets/images/3.png' }
  ]

  return (
    <>
    <Box className={classes.root} id='roadmap'>
      <Box className={classes.mainContainser}>
        <Box className={classes.solanaAvatarRow}>
          <Box className={classes.solanaAvatarBox}>
            <Typography style={{fontFamily: 'Orbitron', fontSize: '10.65px'}}>POWERED BY</Typography>
            <img src='assets/images/solana-avatar.png' style={{width: '100%', height: '30px'}} />
          </Box>
        </Box>
        <Box className={classes.roadmapHeaderRow}>
          <Box className={classes.roadmapHeaderCenterImageShadow}></Box>
          <Box className={classes.roadmapHeaderCenterLine}></Box>
          <Box className={classes.roadmapHeaderLabel}>
            <Grid container>
              <Grid item sm={6} className={classes.readmapHeaderLeftLabel}>
                <Typography className={classes.roadmapHeaderLabelDetail}>SOL KITTIES</Typography>
              </Grid>
              <Grid item sm={6} className={classes.readmapHeaderRightLabel}>
                <Typography className={classes.roadmapHeaderLabelDetail}>ROADMAP</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box className={classes.roadmmapHeaderDownImage}>
            <img src='assets/images/line-background.png' style={{width: '100%', height: '100%'}} />
          </Box>
          <Box className={classes.roadmapHeaderCenterImage}>
            <img src='assets/images/road-map-head.png' style={{width: '100%', height: '100%'}} alt='line-background' />
          </Box>
        </Box>

{/** roadmap 1 */}
        <Box className={`${classes.roadmapContent} ${classes.firstRoadmap}`}>
          <Box className={classes.roadmapContentCenterImage}>
            <img src='/assets/images/line-image-1.png' className={classes.roadmapCenterImageSize}/>
          </Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} className={classes.responsiveRightMonth}>
              <Box className={classes.leftMonthWrapper}>
                <Typography className={classes.monthText}>SEPTEMBER 2O21</Typography>
                <img src='assets/images/right-arrow.png' alt='right-arrow' style={{width: '18.5px', height: '19.5px', marginLeft: '5px' }} />      
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box className={classes.rightTextWrapper}>
                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}>HANDCRAFTING FIRST KITTIES</Typography>
                </Box>
                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}>AN ARMY OF 3080 KITTIES START EMERGING</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

{/** roadmap 2 */}
        <Hidden smDown>
          <Box className={classes.roadmapContent}>
            <Box className={classes.roadmapContentCenterImage}>
              <img src='/assets/images/line-image-2.png' className={classes.roadmapCenterImageSize}/>
            </Box>
            <Grid container>
              <Grid item sm={6} md={6}>
                <Box className={classes.leftTextWrapper}>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}>WEBSITE LAUNCH</Typography>
                  </Box>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}>
                      <span style={{background: '#FFE71C', marginLeft: '-5px', paddingLeft: '5px', paddingRight: '5px', borderRadius: '1px'}}>
                            GIVEAWAY
                      </span>  TO FIRST COMMUNITY HOLDERS
                    </Typography>
                  </Box>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}><span style={{background: '#FFE71C', marginLeft: '-5px', paddingLeft: '5px', paddingRight: '5px', borderRadius: '1px'}}>GIVEAWAY</span>  TO EARLY ADOPTERS</Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item sm={6} md={6} className={classes.responsiveLeftMonth}>
                <Box className={classes.rightMonthWrapper}>
                  <img src='assets/images/left-arrow.png' alt='right-arrow' style={{width: '18.5px', height: '19.5px', marginRight: '5px' }} />      
                  <Typography className={classes.monthText}>NOVEMBER 2021</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Hidden>

        <Hidden mdUp>
          <Box className={classes.roadmapContent}>
            <Box className={classes.roadmapContentCenterImage}>
              <img src='/assets/images/line-image-2.png' className={classes.roadmapCenterImageSize} />
            </Box>
            <Grid container>
              <Grid item sm={12} md={6} className={classes.responsiveRightMonth}>
                <Box className={classes.leftMonthWrapper}>
                  <Typography className={classes.monthText}>NOVEMBER 2021</Typography>
                  <img src='assets/images/right-arrow.png' alt='right-arrow' style={{width: '18.5px', height: '19.5px', marginRight: '5px' }} />      
                </Box>
              </Grid>
              <Grid item sm={12} md={6}>
                <Box className={classes.leftTextWrapper}>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}>WEBSITE LAUNCH</Typography>
                  </Box>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}>
                      <span style={{background: '#FFE71C', marginLeft: '-5px', paddingLeft: '5px', paddingRight: '5px', borderRadius: '1px'}}>
                            GIVEAWAY
                      </span>  TO FIRST COMMUNITY HOLDERS
                    </Typography>
                  </Box>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}><span style={{background: '#FFE71C', marginLeft: '-5px', paddingLeft: '5px', paddingRight: '5px', borderRadius: '1px'}}>GIVEAWAY</span>  TO EARLY ADOPTERS</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Hidden>


{/** roadmap 3 */}
        <Hidden smDown>
          <Box className={`${classes.roadmapContent} ${classes.thirdRoadmap}`}>
            <Box className={classes.roadmapContentCenterImage}>
              <img src='/assets/images/line-image-3.png' className={classes.roadmapCenterImageSize} />
            </Box>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} className={classes.responsiveRightMonth}>
                <Box className={classes.leftMonthWrapper}>
                  <Typography className={classes.monthText}>DECEMBER 2O21</Typography>
                  <img src='assets/images/right-arrow.png' alt='right-arrow' style={{width: '18.5px', height: '19.5px', marginLeft: '5px' }} />      
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box className={classes.rightTextWrapper}>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}>PUBLIC PRESALE 550 NFTS</Typography>
                  </Box>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}><span style={{background: '#e10fd1', marginLeft: '-5px', padding: '0px 5px', borderRadius: '1px'}}>
                            SUPER-RARE
                          </span>  and  
                          <span style={{background: '#a0e72f', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>
                            legendary
                          </span> sol kitties   
                          <span style={{background: '#FFE71C', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>
                            giveaway
                          </span></Typography>
                  </Box>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}>PUBLIC SALE 2200 NFTS</Typography>
                  </Box>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}>SECOND MARKETPLACE LISTING!</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Hidden>

        <Hidden mdUp>
          <Box className={classes.roadmapContent}>
            <Box className={classes.roadmapContentCenterImage}>
              <img src='/assets/images/line-image-3.png' className={classes.roadmapCenterImageSize} />
            </Box>
            <Grid container>
              <Grid item xs={12} sm={12} md={6} className={classes.responsiveRightMonth}>
                <Box className={classes.leftMonthWrapper}>
                  <Typography className={classes.monthText}>DECEMBER 2O21</Typography>
                  <img src='assets/images/right-arrow.png' alt='right-arrow' style={{width: '18.5px', height: '19.5px', marginLeft: '5px' }} />      
                </Box>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <Box className={classes.rightTextWrapper}>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}>PUBLIC PRESALE 550 NFTS</Typography>
                  </Box>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}><span style={{background: '#e10fd1', marginLeft: '-5px', padding: '0px 5px', borderRadius: '1px'}}>
                            SUPER-RARE
                          </span>  and  
                          <span style={{background: '#a0e72f', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>
                            legendary
                          </span> sol kitties   
                          <span style={{background: '#FFE71C', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>
                            giveaway
                          </span></Typography>
                  </Box>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}>PUBLIC SALE 2200 NFTS</Typography>
                  </Box>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}>SECOND MARKETPLACE LISTING!</Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Hidden>

{/** roadmap 4 */}
      <Hidden smDown>
        <Box className={`${classes.roadmapContent} ${classes.fourthRoadmap}`}>
          <Box className={classes.roadmapContentCenterImage}>
            <img src='/assets/images/line-image-4.png' className={classes.roadmapCenterImageSize} />
          </Box>
          <Grid container>
            <Grid item sm={6} md={6}>
              <Box className={classes.leftTextWrapper}>
                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}>RAFFLES OF  
                        <span style={{background: '#e10fd1', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>
                          SUPER-RARE</span>  KITTIES</Typography>
                </Box>
                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}>
                    <span style={{background: '#FFE71C', marginLeft: '-5px',  padding: '0px 5px', borderRadius: '1px'}}>
                          GIVEAWAY</span> OF  
                        <span style={{background: '#a0e72f', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>
                          LEGENDARY</span>  KITTIES
                  </Typography>
                </Box>
                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}>COLLABORATION WITH NFT ARTIST</Typography>
                </Box>
                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}>COLLABORATION WITH INFLUENCERES</Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item sm={6} md={6} className={classes.responsiveLeftMonth}>
              <Box className={classes.rightMonthWrapper}>
                <img src='assets/images/left-arrow.png' alt='right-arrow' style={{width: '18.5px', height: '19.5px', marginRight: '15px' }} />      
                <Typography className={classes.monthText}>JANUARY 2022</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Hidden>

      <Hidden mdUp>
        <Box className={classes.roadmapContent}>
          <Box className={classes.roadmapContentCenterImage}>
            <img src='/assets/images/line-image-4.png' className={classes.roadmapCenterImageSize} />
          </Box>
          <Grid container>
            <Grid item sm={12} md={6} className={classes.responsiveRightMonth}>
              <Box className={classes.leftMonthWrapper}>
                <Typography className={classes.monthText}>JANUARY 2022</Typography>
                <img src='assets/images/right-arrow.png' alt='right-arrow' style={{width: '18.5px', height: '19.5px', marginRight: '15px' }} />      
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Box className={classes.leftTextWrapper}>
                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}>RAFFLES OF  
                        <span style={{background: '#e10fd1', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>
                          SUPER-RARE</span>  KITTIES</Typography>
                </Box>
                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}>
                    <span style={{background: '#FFE71C', marginLeft: '-5px',  padding: '0px 5px', borderRadius: '1px'}}>
                          GIVEAWAY</span> OF  
                        <span style={{background: '#a0e72f', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>
                          LEGENDARY</span>  KITTIES
                  </Typography>
                </Box>
                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}>COLLABORATION WITH NFT ARTIST</Typography>
                </Box>
                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}>COLLABORATION WITH INFLUENCERES</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Hidden>


{/** roadmap 5 */}
        <Box className={`${classes.roadmapContent} ${classes.fifthRoadmap}`}>
          <Box className={classes.roadmapContentCenterImage}>
            <img src='/assets/images/line-image-5.png' className={classes.roadmapCenterImageSize} />
          </Box>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} className={classes.responsiveRightMonth}>
              <Box className={classes.leftMonthWrapper}>
                <Typography className={classes.monthText}>FEBRUARY 2O21</Typography>
                <img src='assets/images/right-arrow.png' alt='right-arrow' style={{width: '18.5px', height: '19.5px', marginLeft: '5px' }} />      
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Box className={classes.rightTextWrapper}>
                <Hidden smDown>
                  <Box className={classes.rightTextItem} style={{marginBottom: '32px'}}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}><span style={{background: '#e10fd1', color: '#ffffff', marginLeft: '-5px',  padding: '0px 5px', borderRadius: '1px'}}>3d
                          </span> sol kitties sneak peeks</Typography>
                  </Box>
                </Hidden>
                <Hidden xsUp>
                  <Box className={classes.rightTextItem}>
                    <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                    <Typography className={classes.rightTextDetail}><span style={{background: '#e10fd1', color: '#ffffff', marginLeft: '-5px',  padding: '0px 5px', borderRadius: '1px'}}>3d
                          </span> sol kitties sneak peeks</Typography>
                  </Box>
                </Hidden>
                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}><span style={{background: '#e10fd1', color: '#ffffff', marginLeft: '-5px',  padding: '0px 5px', borderRadius: '1px'}}>3d
                        </span> sol kitties  
                        <span style={{background: '#FFE71C', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>giveaway
                        </span>  for early adopters and community supporters</Typography>
                </Box>

                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}>marketplace listing: solanart, solsea and more</Typography>
                </Box>

                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}>SECOND MARKETPLACE LISTING!</Typography>
                </Box>

                <Box className={classes.rightTextItem}>
                  <img src='assets/images/dot.png' className={classes.textLeftImage} alt='dot' />
                  <Typography className={classes.rightTextDetail}><span style={{background: '#FE5122', marginLeft: '-5px', color: '#ffffff', paddingLeft: '5px', paddingRight: '10px', borderRadius: '1px'}}>ROYALTIES DISTRIBUTION!
                      </span></Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box className={classes.roadmapFooter}>
          <img src='assets/images/2022.png' className={classes.roadmapFooterMainImg} alt='2022' />
          <Box className={classes.roadmapFooterLabelImageArea}>
            <Box className={classes.roadmapFooterLabelImage}>
              <Typography className={classes.roadmapFooterLabel}>TO CAPTURE GAMING INDUSTRY!</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
     
    <Hidden xsDown>
      <GalleryWrapper>
        {imageList.map((item, i) => (
          <img src={item.url} alt={item.title} key={i} />
        ))}
      </GalleryWrapper>
    </Hidden>
    {/* <Hidden smUp>
      <GalleryWrapper>
        {responsiveImageList.map((item, i) => (
          <img src={item.url} alt={item.title} key={i} />
        ))}
      </GalleryWrapper>
    </Hidden> */}

    </>
  )
}
