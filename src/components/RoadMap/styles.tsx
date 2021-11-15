import styled from 'styled-components'

export const RoadMapContainer = styled.div`
  background: url('assets/part2/back-02-1.png'), linear-gradient(180deg, #63D9FF 0%, #8CD5FF 42.64%, #3DA5FF 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;

  padding-top: 50px;

  @media (min-width: 576px) {
    padding-top: 140px;
  }
`

export const RoadMapArea = styled.div`
  width: 100%;
  position: relative;
`

export const VerticalLineWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;

  @media (min-width: 575px) {
    display: none;
  }

  @media (min-width: 870px) {
    display: flex;
  }

  @media (min-width: 993px) {
    display: flex;
  }
`

export const Line = styled.div`
  width: 4px;
  background: white;
  opacity: 0.52;
`

export const TopBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  background: linear-gradient(180deg, #161131 0%, #161131 0.01%, #4DACFF 100%);
`

export const BannerWrapper = styled.div`
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  margin-top: -180px;
  display: none;

  @media (min-width: 576px) {
    margin-top: 0;
    margin-bottom: 145px;
    display: flex;
  }

  @media (min-width: 1000px) {
    margin-top: 0;
    margin-bottom: 80px;
    display: flex;
  }
`

export const BannerContent = styled.div`
  position: relative;
  background-image: url('assets/images/road-map-banner.png');
  height: 52.5px;
  width: 692px;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 60px;

  @media (min-width: 576px) {
    flex-direction: row;
    justify-content: space-between;
  }

  > p {
    margin: 0;
    font-size: 32px;
    font-weight: bold;
    color: #FFFFFF;
    line-height: 44px;

    &:first-child {
      display: none;
    }

    @media (min-width: 576px) {
      &:first-child {
        display: block;
      }
    }
  }
`

export const RoadMapHeadWrapper = styled.div`
  position: absolute;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 0;
  top: -72px;
  z-index: 2;

  @media (min-width: 576px) {
    display: flex;
  }

  > img {
    width: 168px;
    height: 168px;
  }
`

export const MobileHead = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 25px;
  flex-direction: column;

  @media (min-width: 576px) {
    display: none;
  }

  > img {
    width: 200px;

    &:first-child {
      z-index: 1;
    }

    &:last-child {
      width: 240px;
    }
  }
`

export const MonthDescription = styled.div`
  display: flex;
  position: relative;
  min-height: 210px;
  padding-top: 50px;
  padding-bottom: 25px;
  flex-direction: column;

  @media (min-width: 576px) {
    padding-top: 265px;
  }

  @media (min-width: 993px) {
    flex-direction: row;
    padding-top: 10px;
  }
`

export const LeftMonthWrapper = styled.div`
  padding-left: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;
  z-index: 3;

  @media (min-width: 993px) {
    width: 50%;
    padding-right: 60px;
    justify-content: flex-end;
    padding-left: 0px;
  }

  @media (min-width: 1200px) {
    padding-right: 60px;
    justify-content: flex-end;
    padding-left: 0px;
  }
`

export const RightMonthWrapper = styled.div`
  padding-left: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-start;

  @media (min-width: 993px) {
    width: 50%;
    padding-left: 60px;
    justify-content: flex-start;
  }
`

export const MonthBoxWrapper = styled.div`
  width: fit-content;

  > p {
    font-weight: bold;
    font-size: 25px;
    text-transform: uppercase;
    color: #2473B8;
    margin: 0;
    text-align: center;

    @media (min-width: 1200px) {
      font-size: 35px;
    }

    @media (min-width: 1440px) {
      font-size: 47.0803px;
    }
  }
`

export const MonthBox = styled.div`
  height: 26px;
  width: 208px;
  background: #FE5122;
  border: 2.3528px solid #FFFFFF;
  border-radius: 55px;
  padding: 9px 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  > p {
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 21px;
    color: #FFFFFF;
    margin: 0;
    line-height: 30px;

    @media (min-width: 870px) {
      font-size: 21px;
      justify-content: flex-start;
    }

    @media (min-width: 1000px) {
      font-size: 21px;
      justify-content: flex-end;
    }

    @media (min-width: 1440px) {
      font-size: 21px;
      justify-content: flex-end;
    }
  }

  > img {
    width: 20px;
    height: 20px;
  }
`

export const MonthBoxRight = styled.div`
  height: 26px;
  width: 208px;
  background: #FE5122;
  border: 2.3528px solid #FFFFFF;
  border-radius: 55px;
  padding: 9px 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > p {
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 21px;
    color: #FFFFFF;
    margin: 0;
    line-height: 30px;

    @media (min-width: 1200px) {
      font-size: 21px;
    }

    @media (min-width: 1440px) {
      font-size: 21px;
    }
  }

  > img {
    width: 20px;
    height: 20px;
  }
`

export const RightTextWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 60px;
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
  z-index: 3;

  @media (min-width: 993px) {
    margin-top: 0;
    padding-left: 64px;
    width: 50%;
    justify-content: flex-start;
  }
`

export const LeftTextWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding-left: 60px;
  padding-right: 0px;
  display: flex;
  justify-content: flex-start;

  @media (min-width: 993px) {
    margin-top: 0;
    padding-right: 50px;
    padding-left: 0px;
    width: 50%;
    justify-content: flex-start;
  }
`

export const TextWrappper = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 13px;

  > img {
    width: 28px;
    height: 28px;
    min-width: 28px;
    margin-right: 15px;
  }

  p {
    font-family: Dosis;
    font-weight: 800;
    font-size: 23px;
    line-height: 32px;
    text-transform: uppercase;
    color: #003B61;
    margin: 0;

    @media (min-width: 1440px) {
      font-size: 23px;
    }
  }
`

export const LineImageWrapper = styled.div`
  position: absolute;
  display: none;
  justify-content: center;
  width: 100%;
  left: 0;
  top: -90px;
  z-index: 1;

  img {
    width: 430px;
  }

  @media (min-width: 576px) {
    display: flex;
    top: -150px;
  }
  @media (min-width: 1000px) {
    display: flex;
    top: -90px;
  }
`

export const CenterImageWrapper = styled.div`
  position: absolute;
  display: none;
  justify-content: center;
  width: 100%;
  left: 0;
  top: -12px;
  z-index: 3;

  img {
    width: 87px;
  }

  @media (min-width: 576px) {
    display: flex;
  }
`

export const FooterImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 5;

  img {
    width: 545px;
    
    @media (min-width: 576px) {
      width: 80%;
    }

    @media (min-width: 1200px) {
      width: 545px;
    }
  }
`

export const FooterBannerWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: -33px;
`

export const FooterBanner = styled.div`
  width: 658px;
  height: 90px;
  background-image: url('assets/images/road-footer-banner.png');
  box-sizing: border-box;
  position: relative;
  background-repeat: no-repeat, repeat;
  background-size: cover;
  object-fit: cover;
  background-position: center;
  padding: 0px 33px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 993px) {
    width: 658px;
  }

  > p {
    margin: 0;
    font-weight: 800;
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
    line-height: 51px;
    font-family: Dosis;

    @media (min-width: 993px) {
      font-size: 28px;
    }

    @media (min-width: 993px) {
      font-size: 40px;
    }
  }
`

export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  justify-content: center;
  background: linear-gradient(
    180deg,#6BCFFF 0%,#9CDFFF 100%);

  > img {
    width: 70%;

    @media (min-width: 200px) {
      width: 70%;
      justify-content: center;
    }

    @media (min-width: 576px) {
      width: 33.33%;
    }

    @media (min-width: 993px) {
      width: 11.1111%;
    }
  }
`