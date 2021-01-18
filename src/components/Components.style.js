import styled,{keyframes} from 'styled-components'
export const MainContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  /* padding: 20px 20px 14px 0px; */
  background: #262a41;
  opacity: 1;
`;

export const Container = styled.div.attrs((props) => ({
  width: props.width || "50%",
  height: props.height || "100%",
  background: props.background || "none",
  display: props.display,
  size: props.size || "none",
  align: props.align,
  pad: props.pad,
  opacity:props.opacity||"1"
}))`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: ${(props) => props.background};
  display: ${(props) => props.display};
  margin-right: ${(props) => props.size};
  padding-top: ${(props) => props.pad};
  align-items: ${(props) => props.align};
  /* justify-content: ${(props) => props.align}; */
  opacity: ${props=>props.opacity};
`;

export const RightContainer = styled(Container)`
  display: flex;
  width: 50%;
  height: 96%;
  background: #f7f7ff;
  border: 1px solid #f7f7ff;
  border-radius: 28px;
  opacity: 1;
  margin:20px 20px 10px 0;
`;

export const Wrapper = styled.div`
  /* background: blue; */
  width: 80%;
  height: 90%;
  margin: 3rem auto;
  color: #262A41;
`;
export const LeftWrapper = styled(Wrapper)`
  margin: 12rem 0 0 6rem;
  height: 50%;
  color:#fff;
`;
export const Label = styled.h1.attrs((props) => ({
  size: props.size || "2rem",
  color: props.color || "#262A41",
  space: props.space || "0rem",
  opacity: props.opacity || "1",
}))`
  font-size: ${(props) => props.size};
  color: ${(props) => props.color};
  margin-top: ${(props) => props.space};
  opacity:${(props) => props.opacity};
  letter-spacing: -0.02px;
`;
export const Heading = styled.span.attrs((props) => ({
  size: props.size || "2rem",
  weight:props.weight||"100",
  color: props.color || "#262A41",
}))`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color}
`;
export const Paragraph = styled.p.attrs((props) => ({
  size: props.size || "1rem",
  weight: props.weight || "200",
  color: props.color || "#262A41",
  pad: props.pad,
  opacity: props.opacity || "0.7",
  space: props.space,
}))`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  padding-left: ${(props) => props.pad};
  opacity: ${(props) => props.opacity};
  margin-right: ${(props) => props.space};
  margin-left: ${(props) => props.space};
  letter-spacing: -0.02px;
`;

export const InputFieldWrapper = styled.div.attrs((props) => ({
  background: props.background || "#3c3f54",
  width: props.width || "30rem",
  height: props.height || "3.5rem",
  color: props.color || "#fff",
}))`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  background: ${(props) => props.background};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin-top: ${(props) => (props.primary ? "2rem" : "0rem")};
  font-size: ${(props) => (props.primary ? "1.2rem" : "1rem")};
  border-radius: ${(props) => (props.primary ? "1rem" : "2.5rem")};
  color: ${(props) => props.color};
`;

export const Download =styled(InputFieldWrapper)`
background:#7946C1;
position:absolute;
bottom:3rem;
width:10rem;
height:2rem;

`
export const InputField = styled.input`
  margin-left: 1rem;
  height: ${(props) => (props.primary ? "3rem" : "1.6rem")};
  width: ${(props) => (props.primary ? "26rem" : "12rem")};
  font-size: ${(props) => (props.primary ? "1rem" : ".8rem")};
  background: ${(props) => (props.primary ? "#3c3f54" : "none")};
  outline: none;
  border: none;
  color: ${(props) => (props.primary ? "#fff" : "#707070")};
`;
export const Buttons = styled.button.attrs((props) => ({
  size: props.size || "2rem",
  weight: props.weight || "100",
  color: props.color || "#262A41",
  font: props.font || "16px",
}))`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  margin-top: 2rem;
  margin-right: 3rem;
  background: ${(props) => props.color};
  font-size: ${(props) => props.font};
  border-radius: 1rem;
  border: none;
  color: #fff;
  text-align: center;
  cursor:pointer;
  &.users-button:active {
    transform: scale(1.15);
    transition: 0.5s;
  }
  &.users-button:focus{
    outline:none;
  }
`;
export const ProfileCard = styled.div`
  background: #fcfcff;
  box-shadow: 10px 10px 40px #0000000d;
  border-radius: 18px;
  opacity: 1;
  display:flex;
  align-items:center;
  justify-content:space-around;
  width: 100%;
  overflow:none;
  height:9rem;
  margin:1rem 0rem 1.5rem 0rem;
`;
export const NextButton = styled.button`
  width: ${(props) => (props.primary ? "3rem" : "50px")};
  height: ${(props) => (props.primary ? "2.8rem" : "50px")};
  background: #30bbb5;
  box-shadow: 2px 15px 30px #30bbb574;
  border-radius: 13px;
  opacity: 1;
  border: none;
  margin-top: 10%;
  outline: none;
  color: #fff;
  font-size: 1.3rem;
  align-self: center;
  cursor:pointer;
  &.users-button:active {
    transform: scale(1.15);
    transition: 0.5s;
  }
  
`;
export const Pages=styled(NextButton)`
position:absolute;
bottom:3rem;
right:${(props)=>(props.primary? "8.5rem" :"6rem")};
width:2rem;
height:2rem;
border-radius: 5px;
background: ${(props)=>(props.primary? "#E2E2EA":"#262A41")};
color:${(props)=>(props.primary? "#000":"fff")};
box-shadow:none;
font-size:.7rem;
`
export const ImageHolder = styled.img`
  border: 8px solid #75d6d1;
  border-radius:50%;
  width:4rem;
  height:4rem;
  opacity: 1;
`;

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Loader = styled.div`
  border: 0.2em solid rgba(0, 0, 0, 0.1);
  border-top: 0.2em solid #767676;
  border-radius: 50%;
  width: 2.28571429rem;
  height: 2.28571429rem;
  animation: ${spin} 0.6s linear infinite;
`;


