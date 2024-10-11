import styled from "styled-components"; 
import MenuCard from "../MenuCard/MenuCard";
import { menuPrices } from "../../data/PriceData"


const MenuSectionStyled = styled.section`
margin-bottom: 3rem;
`;

const MenuHeadings= styled.div`
text-align:center;
`;

const MainMenuHeading = styled.p `
font-size: 2.2rem;
font-weight: 600;
font-family: 'Barlow', system-ui;
color: var (--grey-dark-color);
`;

const MenuCards = styled.div`
display: flex;
justify-content: center;
margin-top: 2rem;
flex-wrap: wrap;
gap: 1.5rem;
font-weight: 600;
font-family: 'Barlow' , system-ui;
color: var (--grey-dark-color);

`;



  import React from 'react'
  
  export default function MenuSection() {
    return (
      <div>
        
      </div>
    )
  }
  