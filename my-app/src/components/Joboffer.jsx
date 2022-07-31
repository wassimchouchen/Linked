import styled from "styled-components"
import Image7 from "../assets/JobOffer.jpg";
const Container=styled.div`
margin-top:70px;
flex:1;

height:70vh;
position:relative;`;
const Image=styled.img`
margin-left:200px;
width:80%;
height:100%;
object-fit:cover;`;
const Title=styled.h1`
font-size:50px;
color:white;
margin-left:600px;
margin-bottom:20px;`;


const Desc=styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;

display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Button=styled.button`
border:none;
padding:10px;
font-size:20px;
background-color:#cdd3df;
color:black;
cursor:pointer;
font-weight:600;
margin-left:600px`;
function Joboffer() {
  return (

    <Container>
    <Image src={Image7}/>
    <Desc>
        <Title>EXPLORE JOB OFFERS !</Title>
        <Button>ENTER THE PAGE</Button>
    </Desc>
     </Container>
  )
}

export default Joboffer;