import styled from 'styled-components'

export const StoryContainer = styled.div`
  background: #15193B;
  padding: 40px 25px 10px 25px;

  @media (min-width: 993px) {
    padding: 25px;
  }

  h1 {
    font-weight: bold;
    font-size: 35px;
    color: #FFD029;
    margin-top: 0;
    margin-bottom: 32px;
    margin-left: 0px;

    @media (min-width: 993px) {
      
    }

    @media (min-width: 1440px) {
      line-height: 48px;
    }
  }

  p {
    font-weight: 600;
    font-size: 16px;
    color: #A7D5FF;
    margin-bottom: 37px;
    margin-top: 0;

    @media (min-width: 993px) {
    }
    @media (min-width: 1440px) {
      font-size: 16px;
    }
  }
`

export const YellowCircleBackgroundArea = styled.div`
  position: relative;
  margin-top: 130px;
  margin-bottom:60px;
  width: 100%;
  height: 370px;
  width: 100%;
  height: 370px;
`

export const JoinDiscordArea = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  background-image: url('assets/images/join_discord1.png');
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  
  @media (max-width: 800px) {
    background-image: none;
  }
`

export const DiscordImage = styled.div`
  position: absolute;
  width: 120px;
  top: -30px;
  left: -20px;
  @media (max-width: 800px) {
    display: none
  }
`

export const YelloCircleBackground = styled.div`
  position: absolute;
  width: 503px;
  height: 503px;
  top: -65px;
  right: -45px;
  background: radial-gradient(50% 50% at 50% 50%, #FFC700 0%, rgba(255, 199, 0, 0) 100%);
  @media (max-width: 800px) {
    display: none
  }
`

export const DiscordLeftPanel = styled.div`
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 48px;
    color: #FFD029;
  }

  > p {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #A7D5FF;
  }

  @media (max-width: 700px) {
    flex-direction: row;
    width: 100%;
  }

`

export const JoinButton = styled.div`
  width: 213px;
  height: 62px;
  background: #FFA800;
  border-radius: 16px;
  cursor: pointer;
  
  color: #15193B!important;
  text-align: center;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 48px;
`

export const DiscordRightPanel = styled.div`
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;

  > img {
    width: 214px;
  }

  @media (mix-width: 700px) {
    width: 100%;
    width: 210px;
  }
  @media (mix-width: 900px) {
    width: 100%;
    width: 274px;
  }
`

export const UserListWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    width: calc(100% - 30px);

    @media (min-width: 768px) {
      width: calc(50% - 30px);
    }

    @media (min-width: 993px) {
      width: calc(16.7% - 20px);
    }
  }
`

export const UserProfileWrapper = styled.div``

export const UserPhotoWrapper = styled.div`
  border-radius: 17px;
  background: #272E64;
  overflow: hidden;

  img {
    width: 100%;
  }
`

export const ColorSection = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  > p {
    font-weight: bold;
    font-size: 18.5px;
    text-align: center;
    color: #FFFFFF;
    margin: 0;

    @media (min-width: 768px) {
      font-size: 18.5px;
    }
  }
`

export const UserInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    margin-top: 10px;
    width: 66%;
    min-width: 92px;
    background: #58B4F6;
    border-radius: 8px;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: #15193B;
    text-transform: capitalize;

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`
