import styled from "styled-components";
import homeBg from "../../asserts/home.png";
import facilityBg from "../../asserts/facility-img.png"

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`;

export const DJA = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

export const BgImage = styled.div`
  /* background-image: ${props => props.$facility ? `url(${facilityBg})` : `url(${homeBg})`}; */
  background: ${(props) =>
    props.$facilityId ? `url(${facilityBg})` : `url(${homeBg})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 650px;
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  padding: 180px 130px 0px 130px;
  line-height: 10px;
  color: white;
  /* opacity: 0.8; */
  h2{
    font-family: Montserrat;
    font-size: 50px;
    font-weight: 400;
  }
  h1 {
    font-family: Montserrat;
    font-size: 100px;
    font-weight: 700;
  }
  p{
    font-family: Montserrat;
    font-size: 25px;
    font-weight: 400;
  }
`;

export const Button = styled.div`
background-color: #E0B973;
font-family: Montserrat;
font-size: 25px;
font-weight: 600;
padding: 28px 40px;
border-radius: 10px;
cursor: pointer;
`
