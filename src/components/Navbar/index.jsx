import React, {useState, useRef} from 'react';
import {
   StyledHeaderNavbarContainerRight,
   StyleHeader,
   StyleHeaderNavbarContainer,
   StyleHeaderNavbarContainerLeft,
   StyleHeaderNavbarLogo,
   StyledHeaderNavbarLink,
   StyledHeaderNavbarList,
   StyledNavbarHamburgerBar,
   StyledNavbarHamburger,
   StyleHeaderNavbarInnerContainer,
   StyleHeaderMobileNavbarList
} from '../../styles/Navbar.styled.jsx';
import {navLinks, mobileNavLinks} from '../../assets/data/links.js';

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   const navHeaderMobileListRef = useRef(null);
   const navHamburgerRefOne = useRef(null);
   const navHamburgerRefTwo = useRef(null);
   const navHamburgerRefThree = useRef(null);

   const handleHamburgerOpen = () => {
      setIsMenuOpen(!isMenuOpen);
      navHamburgerRefOne.current.classList.toggle('hamburger--open');
      navHamburgerRefTwo.current.classList.toggle('hamburger--open');
      navHamburgerRefThree.current.classList.toggle('hamburger--open');
      navHeaderMobileListRef.current.classList.toggle('menu--open');

   }

   return (
      <StyleHeader>
         <StyleHeaderNavbarContainer>
            <StyleHeaderNavbarInnerContainer>
               <StyleHeaderNavbarContainerLeft>
                  <StyleHeaderNavbarLogo to='/'>LogoBrand</StyleHeaderNavbarLogo>
               </StyleHeaderNavbarContainerLeft>
               <StyledHeaderNavbarContainerRight>
                  <StyledHeaderNavbarList>
                     {
                        navLinks.map((link) => (
                           <StyledHeaderNavbarLink key={link.id} to={link.path}
                                                   activeclassname='active'>{link.name}</StyledHeaderNavbarLink>
                        ))
                     }
                  </StyledHeaderNavbarList>
                  <StyleHeaderMobileNavbarList ref={navHeaderMobileListRef}
                                               className={isMenuOpen ? 'menu--open' : 'menu--close'}>
                     {
                        mobileNavLinks.map((link) => (
                           <StyledHeaderNavbarLink key={link.id} to={link.path}
                                                   onClick={handleHamburgerOpen}
                                                   activeclassname='active'>{link.name}</StyledHeaderNavbarLink>
                        ))
                     }
                  </StyleHeaderMobileNavbarList>
               </StyledHeaderNavbarContainerRight>
               <StyledNavbarHamburger>
                  <StyledNavbarHamburgerBar ref={navHamburgerRefOne}
                                            onClick={handleHamburgerOpen}/>
                  <StyledNavbarHamburgerBar ref={navHamburgerRefTwo}
                                            onClick={handleHamburgerOpen}/>
                  <StyledNavbarHamburgerBar ref={navHamburgerRefThree}
                                            onClick={handleHamburgerOpen}/>
               </StyledNavbarHamburger>
            </StyleHeaderNavbarInnerContainer>
         </StyleHeaderNavbarContainer>
      </StyleHeader>

   );
}