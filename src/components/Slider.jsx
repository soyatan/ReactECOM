import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: relative;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  display: flex;
  border-radius: 50%;
  align-items: center;
  position: absolute;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

const Slide = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;
const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png" />
          </ImageContainer>
          <InfoContainer>
            <Title>asdas</Title>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png" />
          </ImageContainer>
          <InfoContainer>
            <Title></Title>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png" />
          </ImageContainer>
          <InfoContainer>
            <Title></Title>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png" />
          </ImageContainer>
          <InfoContainer>
            <Title></Title>
            <Description>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            </Description>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
