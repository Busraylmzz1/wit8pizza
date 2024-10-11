import styled from "styled-components";


const Img = styled.img `
height:auto;
width:100%;

`;

const Card = styled.div`
background: var (--white-color);
flex: 1;
padding: 1.5rem;
border-radius: 10px;

`;

const Title = styled.h3`
margin: 1rem ;

`;

const Reviews = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;
font-size: 0.9rem;
color: var(--grey-light-color);

`;

const Stats = styled. div`
display: flex;
justify-content: space-between;
`;


const Price = styled.p`
font-size: 1.2rem;
font-weight: 600;

`;


export default function MenuCard(props) {
    const {src, id, title, review, state, price} = props;
  return (
    <Card id={id}> 
    <Img src={src} alt={id} />
    <div> 
        <Title> {title}  </Title>
        <Stats>
            <Reviews>
                <p> {state} </p>
                <p> {review} </p>
            </Reviews>
            <Price> {price}₺ </Price>
        </Stats>
    </div>
    </Card>
  );
}
