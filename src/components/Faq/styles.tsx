import styled from 'styled-components'

export const FaqContainer = styled.div`
  background: linear-gradient(180deg, #6BCFFF 0%, #9CDFFF 100%);
  padding: 15px 22px 0 22px;

  > h1 {
    font-weight: bold;
    font-size: 50px;
    color: #000000;
    margin: 0;
    text-transform: uppercase;

    @media (min-width: 993px) {
      font-size: 72px;
    }

    @media (min-width: 1440px) {
      font-size: 96.2558px;
    }
  }

  @media (min-width: 993px) {
    padding: 30px 85px 0 85px;
  }
`

export const CloudImage1 = styled.div`
  background: url('assets/part2/cloud.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: absolute;
  width: 194px;
  height: 57px;
  top: 230px;
  right: -220px;
`

export const CloudImage2 = styled.div`
  background: url('assets/part2/cloud.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: absolute;
  width: 178px;
  height: 51px;
  top: 450px;
  left: -190px;
`

export const CloudImage3 = styled.div`
  background: url('assets/part2/cloud.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  position: absolute;
  width: 132px;
  height: 39px;
  bottom: -50px;
  right: 50px;
`

export const TextBox = styled.div`
  background: #CAF5FF;
  border-radius: 25px;
  padding: 17px 27px;
  margin: 25px 0;

  > p {
    font-size: 17px;
    color: #000000;
    margin: 0;

    @media (min-width: 993px) {
      font-size: 17px;
    }
    @media (min-width: 1440px) {
      font-size: 17px;
    }

    &:first-child {
      margin-bottom: 5px;
    }

    span {
      font-weight: bold;
    }
  }
`

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 162px;
    min-width: 162px;
  }
`