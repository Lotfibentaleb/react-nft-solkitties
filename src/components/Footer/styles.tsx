import styled from 'styled-components'

export const FooterContainer = styled.div`
  background: #FFFFFF;
  padding: 10px 25px 10px 25px;

  p {
    margin-top: 0px;
    margin-bottom: 0;
    font-size: 20px;
    color: #6C6C6C;
    text-align: center;
  }

  @media (max-width: 576px) {
    p {
      font-size: 18px;
    }
  }

  
  @media (max-width: 330px) {
    p {
      font-size: 16px;
    }
  }

`

export const SocialIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 35px;
    margin: 7px 3px 0px 3px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.07);
    }
  }
`

export const ArrowIconWrapper = styled.div`
  position: fixed;
  z-index: 999;
  right: 20px;
  bottom: 20px;
  cursor: pointer;

  > svg {
    width: 36px;
    height: 36px;
    transition: all 0.3s ease-in-out;
    color: #8b959e;

    &:hover {
      color: #FFD029;
    }
  }
`