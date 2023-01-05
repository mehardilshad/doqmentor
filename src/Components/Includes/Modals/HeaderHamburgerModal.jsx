import React, { useEffect, useState } from "react";
import styled from "styled-components";
import $ from "jquery";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderHamburgerModal = ({ isMenu, setMenu, active, setActive }) => {
    useEffect(() => {
        if (isMenu) {
            $("html").addClass("modal-enabled");
        } else {
            $("html").removeClass("modal-enabled");
        }
    }, [isMenu]);

    return (
        <BackContainer style={{ top: isMenu && 0 }}>
            <Overlay onClick={() => setMenu(false)}></Overlay>
            <Modal>
                <Cover>
                    <MenuContainer>
                        <LeftSection>
                            <Para
                                activeClass="active"
                                to="/"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300}
                                onClick={() => {
                                    setMenu(false);
                                }}
                            >
                                Home
                            </Para>
                            <Para
                                activeClass="active"
                                to="/about"
                                spy=""
                                smooth={true}
                                offset={-70}
                                duration={300}
                                onClick={() => {
                                    setMenu(false);
                                }}
                            >
                                About
                            </Para>

                            <Para
                                activeClass="active"
                                to="/ecosystem"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300}
                                onClick={() => {
                                    setMenu(false);
                                }}
                            >
                                Ecosystem
                            </Para>
                            <Para
                                activeClass="active"
                                to="/startups"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={300}
                                onClick={() => {
                                    setMenu(false);
                                }}
                            >
                                Startups
                            </Para>
                        </LeftSection>
                    </MenuContainer>
                </Cover>
            </Modal>
        </BackContainer>
    );
};

export default HeaderHamburgerModal;

const BackContainer = styled.div`
    overflow: hidden;
    position: fixed;
    transition-delay: 0.2s;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    left: 0;
    top: -100vh;
    backdrop-filter: blur(2px);
    transition: all 0.5s ease;
`;
const Overlay = styled.div`
    position: absolute;
    left: 0;
    top: 0px;
    width: 100%;
    min-height: 100vh;
    max-height: 100vh;
    transition: all 0.5s ease;
`;
const Modal = styled.div`
    background: #f0f8ee;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    transition: 0.5s;
    z-index: 101;
    // min-height: 40vh;
    padding: 50px 0;
    overflow-y: scroll;
    max-height: 100vh;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: all 0.5s ease;

    @media all and (max-width: 360px) {
        padding: 50px 0 20px 0;
        min-height: unset;
    }
`;

const MenuContainer = styled.div`
    margin-top: 50px;
    display: grid;
    grid-template-columns: 3fr 2fr;
    @media all and (max-width: 980px) {
        grid-template-columns: 1fr;
    }
`;
const Cover = styled.div`
    position: relative;
    height: 100%;
    width: 85%;
    margin: 0 auto;
`;
const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media all and (max-width: 980px) {
        // padding-bottom: 50px;
    }
    @media all and (max-width: 768px) {
        // padding-bottom: 30px;
        /* justify-content: space-between; */
    }
    @media all and (max-width: 360px) {
        // padding-bottom: 20px;
    }
`;
const Para = styled(Link)`
    font-size: 20px;
    margin: 20px 0;
    font-family: gordita_medium;
    @media all and (max-width: 480px) {
        font-size: 16px;
    }
    &.active {
        color: #0fa76f;
    }
`;
const RightSection = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    // border-left: 1px solid #d2f7ea;
    grid-gap: 30px;
    @media all and (max-width: 980px) {
        border-left: none;
        // border-top: 1px solid #8282821a;
        padding-top: 50px;
        flex-direction: row;
        justify-content: space-around;
    }
    @media all and (max-width: 768px) {
        padding-top: 30px;
    }
    @media all and (max-width: 480px) {
        flex-direction: column;
        justify-content: center;
        grid-gap: 20px;
    }
    @media all and (max-width: 360px) {
        padding-top: 20px;
    }
`;
