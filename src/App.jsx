import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  flex-direction:column;

  img{
    width: 100%;
    height: auto;
  }
  @media screen and (min-width: 769px) {
    height: 100vh;
    display: grid;
    grid-template-rows: 2fr 1fr;
  }

`;
const ArticleOne = styled.article`
  display: flex;
  flex-direction: column;

  div:nth-child(1){
    display: flex;
  }

  @media screen and (min-width: 769px) {
    display: grid;
    grid-template-columns: 500px 1fr;
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 680px 1fr;
  }
  
`;
const ArticleTwo = styled.article`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 769px) {
    flex-direction: row;
    display: grid;
    grid-template-columns: 1fr 400px 1fr;
    img{
      height: 100%;
      object-fit: cover;
    }
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: 1fr 640px 1fr;
  }
`;
const ContenHeroOne = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
  @media screen and (min-width:769px) {
    padding: 1rem;
  }
  @media screen and (min-width: 845px) {
    justify-content: center;
  }
  @media screen  and (min-width:1024px) {
    padding: 4rem;
  }
`;
const ContainerButtons = styled.div`
  display: flex;
  position: absolute;
  top: -4rem;
  right: 0;
  height: 4rem;

  button{
    background-color: black;
    outline: none;
    border: none;
    padding: 1.5rem ;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button:hover{
    background-color: #111111;
  }
  @media screen and (min-width: 769px) {
    top: calc(100% - 4rem);
    left: 0;
  }
`;
const Title = styled.h1`
  color: black;
  font-size: 2rem;
  line-height: 2rem;
  margin-bottom: 1rem;
  font-family: 'League Spartan', sans-serif;
  font-weight: 700;
  @media screen and (min-width: 769px) {
    margin-bottom: 0.5rem;
    font-size: 1.8rem;
  }
  @media screen and (min-width: 845px){
    font-size: calc(1.8rem + 1vh);
    margin-bottom: 1rem;
  }
`;
const Description = styled.p`
  color: hsl(0, 0%, 63%);
  font-size: 1rem;
  line-height: 1.2rem;
  font-family: 'League Spartan', sans-serif;
  font-weight: 500;
`;

const ContinerButton = styled.a`
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  justify-content: space-between; 
  margin-top: 2rem;
  margin-bottom: 1rem;
  gap: 0.5rem;
  letter-spacing: 10px;
  width: 220px;
  font-family: 'League Spartan', sans-serif;
  font-weight: 600;
  color: black;
  @media screen and (min-width:769px) {
    margin-top: 1rem;
  }
`;

/* ------------------------------------  2 -------------------------------------- */
const ContenHeroTwo = styled.div`
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen  and (min-width:1024px) {
    padding: 3rem;
  }
`;

const SubTitle = styled.h2`
  font-family: 'League Spartan', sans-serif;
  font-size: 1rem;
  letter-spacing: 4px;
  margin-bottom: 1rem;
  color: black;
`;

const heroe = [
  {
    id:"1",
    ruta:"images/desktop-image-hero-1.jpg",
    title:"Discover innovative ways to decorate",
    content:"We provide unmatched quality, comfort,and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love. "
  }
  ,
  {
    id:"2",
    ruta:"images/desktop-image-hero-2.jpg",
    title:"We are available all across the globe",
    content:"With stores all over the world. it`s easy for you to find furniture for your home or place of business.Locally, we`re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questiongs?Don`t hesitate to contact us today."
  }
  ,
  {
    id:"3",
    ruta:"images/desktop-image-hero-3.jpg",
    title:"Manufactured with the best materials",
    content:"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible.With three decades of experience in this industry, we understand wta customers want for their home and office."
  }
];

function App() {
  const [valor,setValor] = useState(1);

  const filtrado = heroe.filter(item => item.id == valor);

  const disminuir = () => (valor <= 1) ? setValor(3):setValor(valor - 1)
  const aumentar = () => (valor >= 3)? setValor(1):setValor(valor + 1)
  
  return (
    <>
      <Navbar/>
      <Container>
          <ArticleOne>
            {
              filtrado.map((item) => <div key={item.id}>
                <img src={item.ruta} alt='img-desktop' />
              </div>)
            }

            <ContenHeroOne>
              
              <ContainerButtons>
                <button onClick={disminuir}>
                  <img src="images/icon-angle-left.svg" alt="left" />
                </button>

                <button onClick={aumentar}>
                  <img src="images/icon-angle-right.svg" alt="right"/>
                </button>

              </ContainerButtons> 
                {
                  filtrado.map((item) => <div key={item.id}>

                    <Title>{item.title}</Title>
                    <Description>{item.content}</Description>
                  </div>)
                }
              <ContinerButton href="#">SHOP NOW
                <span className="arrow">
                  <img src="images/icon-arrow.svg" alt="arrow"/>
                </span> 
              </ContinerButton>  
              
            </ContenHeroOne>
          </ArticleOne>

          <ArticleTwo>
            <img src="images/image-about-dark.jpg" alt="img-mobile"/>
            <ContenHeroTwo>
              <SubTitle>ABOUT OUR FURNITURE</SubTitle>
              <Description>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick o cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialist are available to help you create your dream space</Description>
            </ContenHeroTwo>
            <img src="images/image-about-light.jpg" alt="img-mobile"/>
          </ArticleTwo>
        
      </Container>

    </>
  )
}

export default App;
