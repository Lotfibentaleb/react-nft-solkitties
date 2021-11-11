import React from 'react'
import {
  RoadMapContainer,
  RoadMapArea,
  TopBackground,
  BannerWrapper,
  RoadMapHeadWrapper,
  BannerContent,
  MonthDescription,
  LeftMonthWrapper,
  MonthBox,
  MonthBoxRight,
  RightTextWrapper,
  TextWrappper,
  MonthBoxWrapper,
  LineImageWrapper,
  VerticalLineWrapper,
  Line,
  CenterImageWrapper,
  RightMonthWrapper,
  LeftTextWrapper,
  FooterImageWrapper,
  FooterBannerWrapper,
  FooterBanner,
  GalleryWrapper,
  MobileHead
} from './styles'

export const RoadMap = () => {

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

  return (
    <>
      <RoadMapContainer id='roadmap'>
        <div className='main-layout'>
          <div className='main-container'>
            <RoadMapArea>
              <TopBackground />
              <VerticalLineWrapper>
                <Line />
              </VerticalLineWrapper>
              <MobileHead>
                <img src='assets/images/road-map-head.png' alt='road-map-head' />
                <img src='assets/images/line-background.png' alt='line-background' />
              </MobileHead>
              <BannerWrapper>
                <BannerContent>
                  <p>SOL KITTIES</p>
                  <p>ROADMAP</p>
                  <RoadMapHeadWrapper>
                    <img src='assets/images/road-map-head.png' alt='road-map-head' />
                  </RoadMapHeadWrapper>
                </BannerContent>
              </BannerWrapper>
              <MonthDescription>
                <LineImageWrapper>
                  <img src='assets/images/line-background.png' alt='line-background' />
                </LineImageWrapper>
                <CenterImageWrapper>
                  <img src='assets/images/line-image-1.png' alt='line-image1' />
                </CenterImageWrapper>
                <LeftMonthWrapper>
                  <MonthBoxWrapper>
                    <MonthBox>
                      <p>SEPTEMBER 2O21</p>
                      <img src='assets/images/right-arrow.png' alt='right-arrow' style={{ marginLeft: '5px' }} />
                    </MonthBox>
                  </MonthBoxWrapper>
                </LeftMonthWrapper>
                <RightTextWrapper>
                  <div>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>HANDCRAFTING FIRST KITTIES</p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>AN ARMY OF 3080 KITTIES START EMERGING</p>
                    </TextWrappper>
                  </div>
                </RightTextWrapper>
              </MonthDescription>
              <MonthDescription>
                <CenterImageWrapper>
                  <img src='assets/images/line-image-2.png' alt='line-image2' />
                </CenterImageWrapper>
                <LeftTextWrapper>
                  <div>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>WEBSITE LAUNCH</p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>
                        <span style={{background: '#FFE71C', marginLeft: '-5px', paddingLeft: '5px', paddingRight: '5px', borderRadius: '1px'}}>
                          GIVEAWAY
                        </span>  TO FIRST COMMUNITY HOLDERS
                      </p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p><span style={{background: '#FFE71C', marginLeft: '-5px', paddingLeft: '5px', paddingRight: '5px', borderRadius: '1px'}}>GIVEAWAY</span>  TO EARLY ADOPTERS</p>
                    </TextWrappper>
                  </div>
                </LeftTextWrapper>
                <RightMonthWrapper>
                  <MonthBoxWrapper>
                    <MonthBoxRight>
                      <img src='assets/images/left-arrow.png' alt='right-arrow' style={{ marginRight: '10px' }} />
                      <p>NOVEMBER 2021</p>
                    </MonthBoxRight>
                  </MonthBoxWrapper>
                </RightMonthWrapper>
              </MonthDescription>
              <MonthDescription>
                <CenterImageWrapper>
                  <img src='assets/images/line-image-3.png' alt='line-image3' />
                </CenterImageWrapper>
                <LeftMonthWrapper>
                  <MonthBoxWrapper>
                    <MonthBox>
                      <p>DECEMBER 2O21</p>
                      <img src='assets/images/right-arrow.png' alt='right-arrow' style={{ marginLeft: '5px' }} />
                    </MonthBox>
                  </MonthBoxWrapper>
                </LeftMonthWrapper>
                <RightTextWrapper>
                  <div>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>PUBLIC PRESALE 550 NFTS</p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>
                        <span style={{background: '#e10fd1', marginLeft: '-5px', padding: '0px 5px', borderRadius: '1px'}}>
                          SUPER-RARE
                        </span>  and  
                        <span style={{background: '#a0e72f', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>
                          legendary
                        </span> sol kitties   
                        <span style={{background: '#FFE71C', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>
                          giveaway
                        </span>
                      </p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>PUBLIC SALE 2200 NFTS</p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>SECOND MARKETPLACE LISTING!</p>
                    </TextWrappper>
                  </div>
                </RightTextWrapper>
              </MonthDescription>
              <MonthDescription>
                <CenterImageWrapper>
                  <img src='assets/images/line-image-4.png' alt='line-image4' />
                </CenterImageWrapper>
                <LeftTextWrapper>
                  <div>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>RAFFLES OF  
                        <span style={{background: '#e10fd1', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>
                          SUPER-RARE</span>  KITTIES
                      </p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>
                        <span style={{background: '#FFE71C', marginLeft: '-5px',  padding: '0px 5px', borderRadius: '1px'}}>
                          GIVEAWAY</span> OF  
                        <span style={{background: '#a0e72f', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>
                          LEGENDARY</span>  KITTIES
                      </p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>COLLABORATION WITH NFT ARTIST</p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>COLLABORATION WITH INFLUENCERES</p>
                    </TextWrappper>
                  </div>
                </LeftTextWrapper>
                <RightMonthWrapper>
                  <MonthBoxWrapper>
                    <MonthBoxRight>
                      <img src='assets/images/left-arrow.png' alt='right-arrow' style={{ marginRight: '15px' }} />
                      <p>JANUARY 2O22</p>
                    </MonthBoxRight>
                  </MonthBoxWrapper>
                </RightMonthWrapper>
              </MonthDescription>
              <MonthDescription>
                <CenterImageWrapper>
                  <img src='assets/images/line-image-5.png' alt='line-image5' />
                </CenterImageWrapper>
                <LeftMonthWrapper>
                  <MonthBoxWrapper>
                    <MonthBox>
                      <p>FEBRARY 2O22</p>
                      <img src='assets/images/right-arrow.png' alt='right-arrow' style={{ marginLeft: '15px' }} />
                    </MonthBox>
                  </MonthBoxWrapper>
                </LeftMonthWrapper>
                <RightTextWrapper>
                  <div>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>
                        <span style={{background: '#e10fd1', color: '#ffffff', marginLeft: '-5px',  padding: '0px 5px', borderRadius: '1px'}}>3d
                        </span> sol kitties sneak peeks
                      </p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>
                        <span style={{background: '#e10fd1', color: '#ffffff', marginLeft: '-5px',  padding: '0px 5px', borderRadius: '1px'}}>3d
                        </span> sol kitties  
                        <span style={{background: '#FFE71C', marginLeft: '5px',  padding: '0px 5px', borderRadius: '1px'}}>giveaway
                        </span>  for early adopters and community supporters
                      </p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>marketplace listing: solanart, solsea and more</p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>SECOND MARKETPLACE LISTING!</p>
                    </TextWrappper>
                    <TextWrappper>
                      <img src='assets/images/dot.png' alt='dot' />
                      <p>
                      <span style={{background: '#FE5122', marginLeft: '-5px', color: '#ffffff', paddingLeft: '5px', paddingRight: '10px', borderRadius: '1px'}}>ROYALTIES DISTRIBUTION!
                      </span></p>
                    </TextWrappper>
                  </div>
                </RightTextWrapper>
              </MonthDescription>
              <FooterImageWrapper>
                <img src='assets/images/2022.png' alt='2022' />
                <FooterBannerWrapper>
                  <FooterBanner>
                    <p>
                    TO CAPTURE GAMING INDUSTRY!
                    </p> 
                  </FooterBanner>
                </FooterBannerWrapper>
              </FooterImageWrapper>
            </RoadMapArea>
          </div>
        </div>
      </RoadMapContainer>
      <GalleryWrapper>
        {imageList.map((item, i) => (
          <img src={item.url} alt={item.title} key={i} />
        ))}
      </GalleryWrapper>
    </>
  )
}
