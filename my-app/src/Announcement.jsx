import React from 'react'
import styled from "styled-components";


const Container=styled.div`
height:30px;
background-color:#e0e0e0;
color:black;
display:flex;
align-items:center;
justify-content:center;
font-size:18px;
font-weight:500;
`;
function Announcement() {
  return (
    <Container>Expand your professional network !</Container>
  )
}

export default Announcement