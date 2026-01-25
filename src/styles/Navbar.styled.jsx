import {NavLink} from 'react-router-dom';
import styled from 'styled-components';


export const StyleHeader = styled.header`
   position: fixed;
   top: 0;
   left: 0;
   min-height: 64px;
   width: 100%;
   background-color: var(--color-augmented-800);

`;

export const StyleHeaderNavbarContainer = styled.div`
   width: 100%;
   margin-left: auto;
   margin-right: auto;
   padding-right: 16px;
   padding-left: 16px;

   @media screen and (min-width: 576px) {
      max-width: 544px;
   }
   @media screen and (min-width: 768px) {
      max-width: 720px;
   }
   @media screen and (min-width: 992px) {
      max-width: 960px;
   }
   @media screen and (min-width: 1200px) {
      max-width: 1144px;
   }
   @media screen and (min-width: 1400px) {
      max-width: 1320px;
   }

`;

export const StyleHeaderNavbarInnerContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   padding-top: 0.5em;

`;

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
   justify-content: center;
   padding-top: 0.5em;
   
`;

export const StyledHeaderNavbarList = styled.ul`
   display: flex;
   flex-direction: row;
   -moz-column-gap: 40px;
   column-gap: 40px;
   transform: translateX(0);
   
   
   @media only screen and (max-width: 800px) {
      display: none;
   }
   
`;

export const StyleHeaderMobileNavbarList = styled.ul`
   display: none;
   
   @media only screen and (max-width: 800px) {
      position: fixed;
      top: 64px;
      left: 0;
      width: 100%;
      height: 100vh;
      display: flex;
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
      padding: 0.5em 1em;
      margin-bottom: 0.75em;
      margin-top: -0.5em;
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