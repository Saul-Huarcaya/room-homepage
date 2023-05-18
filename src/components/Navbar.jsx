import { useState } from "react";
import styled from "styled-components";

const Header = styled.header`
    width: 100%;
`;
const Nav = styled.nav`
    position: relative;
    width: 100%;
    height: 5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    background-color: transparent;
    position: absolute;
    
    @media screen and (min-width:769px) {
        max-width: 380px;
        display: flex;
        gap: 2rem;
    }

`;
const ContainerAmburger = styled.button`
    border: none;
    outline: none;
    background-color: transparent;
    padding: 0.5rem;
    cursor: pointer;

    @media screen and (max-width:768px) {
        display: block;
    };
    display: none;
    `;
const ContainerLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    cursor: pointer;
    vertical-align: center;
    height: 100%;

    @media screen and (max-width:768px) {
        width: 100%;
        img{
            width: 3rem;
        }
    }
`;
const ContainerMenu = styled.div`
    width: 100%;
    position: absolute;
    width: 100%;
    top: ${props => (props.visible) ? "0rem":"-5rem"};
    left: 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 5rem;
    padding: 1rem;
    z-index: 500;
    background-color: white;
    transition: top 0.3s ease-in;

    @media screen and (min-width:769px) {
        position: static;
        background-color: transparent;
    }
`;
const ContainerClose = styled.button`
    border: none;
    outline: none;
    padding: 0.5rem;
    background-color: transparent;
    cursor: pointer;

    @media screen and (max-width:768px) {
        display: block;
    };
    display: none;
`;
const Menu = styled.ul`
    display: flex;
    gap: 1rem;
    align-items: center;
    height: 100%;
    text-align: center;
    width: 100%;
    
    a{
        color: black;
        position: relative;
    }
    a::before{
        content: "";
        position: absolute;
        bottom: -2px;
        width: 1%;
        right: 50%;
        height: 2px;
        opacity: 1;
    }
    a::after{
        content: "";
        position: absolute;
        bottom: -2px;
        width: 1%;
        left: 50%;
        height: 2px;
        opacity: 1;
    }

    a:hover::before{
        content: "";
        position: absolute;
        width: 50%;
        background-color: white;
        right: 50%;
        transition: width 0.4s ease-in ;
    }
    a:hover::after{
        content: "";
        position: absolute;
        width: 50%;
        background-color: white;
        left: 50%;
        transition: width 0.4s ease-in ;
    }

    @media screen and (min-width:769px) {
        a{
            color:white;
        }   
    }
`;

const ViewDark = styled.div`
    background-color: black;
    opacity: 0.6;
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 400;
    @media screen and (min-width: 769px) {
        display:none;
    }
`;

function Navbar(){

    const [visible,setVisible] = useState(false);
    return <Header>
            <Nav>
                <ContainerAmburger 
                    onClick={() => setVisible(true)}>
                        <img src="images/icon-hamburger.svg" alt="nav-hamburger"/>
                </ContainerAmburger>

                <ContainerLogo>
                    <img src="images/logo.svg" alt="logo" className="logo"/>
                </ContainerLogo>

                
                <ContainerMenu visible={visible}>
                        <ContainerClose 
                        className="container-close" 
                        onClick={()=> setVisible(false)}>
                            <img src="images/icon-close.svg" alt="close"/>
                        </ContainerClose>
                        <Menu>
                            <li className="list-item"><a href="#" className="item-link">home</a></li>
                            <li className="list-item"><a href="#" className="item-link">shop</a></li>
                            <li className="list-item"><a href="#" className="item-link">about</a></li>
                            <li className="list-item"><a href="#" className="item-link">contact</a></li>
                        </Menu>
                </ContainerMenu>
            </Nav>
            {
                visible && <ViewDark></ViewDark>
            }
            
        </Header>
}
export default Navbar;