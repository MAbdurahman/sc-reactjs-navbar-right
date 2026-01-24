import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


export const StyleHeader = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   min-height: 60px;
   width: 100%;
   background-color: var(--color-augmented-800);

`;

export const StyleHeaderNavbarContainer = styled.div`
   width: 80vw;
   margin-left: auto;
   margin-right: auto;
   padding: 1em 2em;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;

   @media only screen and (max-width: 1100px) {
      width: 90vw;
   }

`

export const StyleHeaderNavbarContainerLeft = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;

`;


export const StyleHeaderNavbarLogo = styled(NavLink)`
   font-family: 'Mulish', sans-serif;
   font-size: 1.5rem;
   font-weight: 800;
   letter-spacing: -0.5px;
   color: var(--color-augmented-100);

`;

export const StyledHeaderNavbarContainerRight = styled.nav`
   display: flex;
   align-items: center;
   transition: transform 0.33s cubic-bezier(.17, .67, .83, .67);

`;

export const StyledHeaderNavbarList = styled.ul`
   display: flex;
   flex-direction: row;
   -moz-column-gap: 40px;
   column-gap: 40px;

   @media only screen and (max-width: 800px) {
      position: fixed;
      top: 64px;
      left: 0;
      width: 100%;
      height: 100vh;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      row-gap: 2em;
      padding-top: 80px;
      z-index: 1;
      background-color: var(--color-augmented-800);
      transition: transform 0.33s cubic-bezier(.17, .67, .83, .67);
      opacity: 1;
      
      .menu--open & {
         transform: translateX(0);
         
      }
      .menu--close & {
         transform: translateX(100%);
      }
      
   }
`;

export const StyledHeaderNavbarLink = styled(NavLink)`
   text-decoration: none;
   font-weight: 800;
   color: hsl(210, 0%, 98%);
   /*margin-left: 0.25em;*/
   transition: all 0.5s cubic-bezier(0.1, 0.7, 0.6, 0.9);

   &:last-child {
      background: hsl(196, 77%, 55%);
      padding: 0.25em 1em;
      border-radius: 24px;

      &:hover {
         color: hsl(210, 0%, 98%)
      }

      &.${(props) => props.activeclassname} {
         color: hsl(210, 0%, 98%);
      }
   }

   &.${(props) => props.activeclassname} {
      color: hsl(196, 77%, 55%);
   }

   &:hover {
      color: hsl(196, 77%, 55%);
   }
`;

export const StyledNavbarHamburger = styled.div`
   display: none;
   cursor: pointer;

   @media only screen and (max-width: 800px) {
      display: block;
   }
`;

export const StyledNavbarHamburgerBar = styled.div`
   height: 2px;
   width: 27px;
   margin: 5px 0;
   background-color: rgba(255, 255, 255, 0.8);
   transition: transform 0.33s cubic-bezier(.17, .67, .83, .67);

   .hamburger--open &:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
   }

   .hamburger--open &:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
   }

   .hamburger--open &:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
   }
   

`;