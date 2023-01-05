import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import HeaderHamburgerModal from '../Includes/Modals/HeaderHamburgerModal'
import logo from '../.././images/20230105_164054_0000.png'


export default function Header() {
  const [active, setActive] = useState('')
  const [isModal, setModal] = useState(false)
  const [show, handleShow] = useState(true)

  const scroll = () => {
    window.scrollTo(0, 0)
  }

  // var prevScrollpos = window.pageYOffset
  // const handleScroll = () => {
  //   var currentScrollPos = window.pageYOffset
  //   if (prevScrollpos > currentScrollPos) {
  //     if (document.getElementById('navbar')) {
  //       document.getElementById('navbar').style.top = '0'
  //       document.getElementById('navbar').style.transition = 'all 0.8s'
  //     }
  //   } else if (prevScrollpos <= 30) {
  //     document.getElementById('navbar').style.top = '0'
  //   } else {
  //     document.getElementById('navbar').style.top = '-200px'
  //   }
  //   prevScrollpos = currentScrollPos
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  // })

  return (
    <>
      <HeaderHamburgerModal
        isMenu={isModal}
        setMenu={setModal}
        active={active}
        setActive={setActive}
      />
      <Container id="navbar">
        <div className="wrapper">
          <Logo>
            <Link  to="/">
              <img
                src={logo}
                alt="Logo"
              />
            </Link>
          </Logo>
          <Nav>
            <NavItem activeClassName="active" to="/" onClick={scroll}>
              Home
            </NavItem>
            <NavItem activeClassName="active" to="/about">
              Services
            </NavItem>
            <NavItem activeClassName="active" to="/ecosystem">
              Contact
            </NavItem>
            <NavItem activeClassName="active" to="/startups">
              About Us
            </NavItem>
          </Nav>
          <Hamburger onClick={() => setModal(!isModal)}>
            <LineSpan isModal={isModal}></LineSpan>
            <LineSpan type="middle" isModal={isModal}></LineSpan>
            <LineSpan type="last" isModal={isModal}></LineSpan>
          </Hamburger>
        </div>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  /* background: rgba(255, 255, 255, 0.5); */
  background: #fff;
  & .wrapper {
    width: 85%;
    max-width: none;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`
const Logo = styled.h1`
      width: 110px;
    margin: 0;
  @media all and (max-width: 980px) {
    width: 60px;
  }
  @media all and (max-width: 768px) {
    width: 50px;
  }
  img {
    display: block;
    width: 100%;
  }
`
const Nav = styled.nav`
  display: flex;

  @media all and (max-width: 768px) {
    display: none;
  }
`
const NavItem = styled.a`
  font-size: 20px;
  color: #000;
  margin-right: 50px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 600;
  &:last-child {
    margin-right: 0;
  }

  &.active {
    color: #0fa76f;
  }

  &:hover {
    color: #0fa76f;
  }
  @media all and (max-width: 1280px) {
    margin-right: 40px;
  }
  @media all and (max-width: 1080px) {
    margin-right: 20px;
  }
`
const Hamburger = styled.div`
  width: 50px;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;
  cursor: pointer;
  display: none;
  @media all and (max-width: 768px) {
    display: flex;
  }
`
const LineSpan = styled.span`
  width: ${({ type, isModal }) =>
    !isModal ? (type === 'middle' ? '35px' : '45px') : '40px'};
  height: 5px;
  background: ${({ type }) => (type === 'last' ? '#96CA4C' : '#18484C')};
  margin-bottom: 8px;
  border-radius: 30px;
  &:first-child {
    transform: ${({ isModal }) =>
      isModal ? 'translateY(13px) rotate(45deg)' : 'rotate(0deg)'};
    transition: all 0.5s ease;
  }
  &:nth-child(2) {
    transform: ${({ isModal }) =>
      isModal ? 'translateX(-12px)' : 'translateX(0px)'};
    opacity: ${({ isModal }) => (isModal ? '0' : '1')};
    transition: all 0.5s ease;
  }
  &:nth-child(3) {
    transform: ${({ isModal }) =>
      isModal ? 'translateY(-13px) rotate(-45deg)' : 'rotate(0deg)'};
    transition: all 0.5s ease;
  }
  transition: all 0.5s ease;
  @media all and (max-width: 960px) {
    width: ${({ type, isModal }) =>
      !isModal ? (type === 'middle' ? '28px' : '38px') : '33px'};
    margin-bottom: 5px;
    &:first-child {
      transform: ${({ isModal }) =>
        isModal ? 'translateY(10px) rotate(45deg)' : 'rotate(0deg)'};
      transition: all 0.5s ease;
    }
    &:nth-child(2) {
      transition: all 0.5s ease;
    }
    &:nth-child(3) {
      transform: ${({ isModal }) =>
        isModal ? 'translateY(-10px) rotate(-45deg)' : 'rotate(0deg)'};
      transition: all 0.5s ease;
    }
  }
  @media all and (max-width: 540px) {
    width: ${({ type, isModal }) =>
      !isModal ? (type === 'middle' ? '22px' : '30px') : '28px'};
    margin-bottom: 5px;
    &:first-child {
      transform: ${({ isModal }) =>
        isModal ? 'translateY(10px) rotate(45deg)' : 'rotate(0deg)'};
      transition: all 0.5s ease;
    }
    &:nth-child(2) {
      transition: all 0.5s ease;
    }
    &:nth-child(3) {
      transform: ${({ isModal }) =>
        isModal ? 'translateY(-10px) rotate(-45deg)' : 'rotate(0deg)'};
      transition: all 0.5s ease;
    }
  }
`
