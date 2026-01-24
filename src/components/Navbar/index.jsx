import {
   StyledHeaderNavbarContainerRight,
   StyleHeader,
   StyleHeaderNavbarContainer, StyleHeaderNavbarContainerLeft, StyleHeaderNavbarLogo,
   StyledHeaderNavbarLink, StyledHeaderNavbarList
} from '../../styles/Navbar.styled.jsx';
import {NavLink} from 'react-router-dom';
import {navLinks, mobileNavLinks} from '../../assets/data/links.js';

export default function Navbar() {

   return (
      <StyleHeader>
         <div className='utils-container'>
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

         </StyleHeaderNavbarContainer>
         </div>
      </StyleHeader>

   );
}