
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '/Assets/Iteration-1-assets/logo.svg';



const HeaderSection = styled.header`
 background: url(/Assets/Iteration-1-assets/home-banner.png);
 background-position: center;
 background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
 height: 100vh;
 padding: 3rem;
 align-items:center;
`;




const HeaderContent =  styled.div`
display:flex;
justify-content: center;
align-items: center;
color: #ffffff;
flex-direction : column ;
gap:3.5rem;
max-width: 550px;
`;



const HeaderHeadings = styled.div`
  text-align: center;
`;
const HeaderLogo = styled.img`
 height: auto;
  width: 20rem;
 
`;
  

const MainHeading = styled.p`
  font-weight: 300;
  text-transform: uppercase;
  font-size: 4.7rem;
  line-height: 1;
`;
const ItalicHeading = styled.p`
  font-family: 'Satisfy', system-ui;
  font-size: 2rem;
  color: var(--yellow-color);
`;

const StyledLink = styled(Link)`
  background-color: var(--yellow-color);
  font-weight: 600; 
  color: var(--grey-dark-color);
  
  `;
 export default function MainHeader () {

return (
<HeaderSection>
    <HeaderContent>
        <HeaderLogo src={Logo}/>
        <HeaderHeadings>
        <ItalicHeading>Fırsatı kaçırma</ItalicHeading>
        <MainHeading>kod acıktırır pizza, doyurur</MainHeading>
        </HeaderHeadings>
        <StyledLink className="btn header-btn" to="/order">
          ACIKTIM!
        </StyledLink>

      
    </HeaderContent>



</HeaderSection>


);
 }
