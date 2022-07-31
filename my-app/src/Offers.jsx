import React, { useState } from 'react';
import { people } from './data';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import styled from "styled-components";


const Review=styled.article`
margin-top:30px;
background: white;
  padding: 1.5rem 2rem;
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  transition: var(--transition);
  text-align: center;
  text-align;center;
  justify-content:center;`;
  
const ImageContainer=styled.div`
position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto;
  margin-bottom: 1.5rem;
`;

const Image=styled.img`
width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
  border-radius: 100%;
  position: relative;
`;

const Author=styled.h2`
margin-bottom: 20px;
font-size:50px;

`;

const Job=styled.p`margin-bottom: 20px;
text-transform: uppercase;
color: hsl(205, 78%, 60%);
font-size: 30px;`;

const Info=styled.p`
margin-bottom: 0.75rem;

`;

const PrevBtn=styled.button`
color: hsl(205, 90%, 76%);
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: all 0.3s linear;
  cursor: pointer;`;


const NextBtn=styled.button`
color: hsl(205, 90%, 76%);
  font-size: 1.25rem;
  background: transparent;
  border-color: transparent;
  margin: 0 0.5rem;
  transition: all 0.3s linear;
  cursor: pointer;
`;

const RandomBtn=styled.button`
margin-top: 0.5rem;
  background: var(--clr-primary-10);
  color: var(--clr-primary-5);
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  border-radius: var(--radius);
  transition: var(--transition);
  border-color: transparent;
  cursor: pointer;
`;
const ButtonContainer=styled.div``;
const Offers = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <Review>
      <ImageContainer>
        <Image src={image} alt={name}/>
        
      </ImageContainer>
      <Author>{name}</Author>
      <Job>{job}</Job>
      <Info>{text}</Info>
      <ButtonContainer>
        <PrevBtn onClick={prevPerson}>
          <FaAngleLeft />
        </PrevBtn>
        <NextBtn onClick={nextPerson}>
          <FaAngleRight />
        </NextBtn>
      </ButtonContainer>
      <RandomBtn onClick={randomPerson}>
         VIEW OFFER
      </RandomBtn>
    </Review>
  );
};

export default Offers;