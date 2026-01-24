import React, {useState, useRef} from 'react';
import {
   StyledHeaderNavbarContainerRight,
   StyleHeader,
   StyleHeaderNavbarContainer, StyleHeaderNavbarContainerLeft, StyleHeaderNavbarLogo,
   StyledHeaderNavbarLink, StyledHeaderNavbarList, StyledNavbarHamburgerBar,
   StyledNavbarHamburger
} from '../../styles/Navbar.styled.jsx';
import {NavLink} from 'react-router-dom';
import {navLinks, mobileNavLinks} from '../../assets/data/links.js';

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [hamburgerOpen, setHamburgerOpen] = useState(false);

   const navHeaderListRef = useRef(null);
   const navHamburgerRefOne = useRef(null);
   const navHamburgerRefTwo = useRef(null);
   const navHamburgerRefThree = useRef(null);

   const handleHamburgerOpen = () => {
      setHamburgerOpen(!hamburgerOpen);
      navHamburgerRefOne.current.classList.toggle('hamburger--open');
      navHamburgerRefTwo.current.classList.toggle('hamburger--open');
      navHamburgerRefThree.current.classList.toggle('hamburger--open');

   }

   return (
      <StyleHeader>
         <StyleHeaderNavbarContainer>
            <StyleHeaderNavbarContainerLeft>
               <StyleHeaderNavbarLogo to="/">LogoBrand</StyleHeaderNavbarLogo>
            </StyleHeaderNavbarContainerLeft>
            <StyledHeaderNavbarContainerRight>
               <StyledHeaderNavbarList>
                  {
                     navLinks.map((link) => (
                        <StyledHeaderNavbarLink key={link.id} to={link.path} activeclassname="active">{link.name}</StyledHeaderNavbarLink>
                     ))
                  }
               </StyledHeaderNavbarList>
            </StyledHeaderNavbarContainerRight>
            <StyledNavbarHamburger >
               <StyledNavbarHamburgerBar ref={navHamburgerRefOne} onClick={handleHamburgerOpen} />
               <StyledNavbarHamburgerBar ref={navHamburgerRefTwo} onClick={handleHamburgerOpen} />
               <StyledNavbarHamburgerBar ref={navHamburgerRefThree} onClick={handleHamburgerOpen} />
            </StyledNavbarHamburger>
         </StyleHeaderNavbarContainer>
      </StyleHeader>

   );
}