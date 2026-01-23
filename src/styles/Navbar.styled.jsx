
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
`;

export const StyledHeaderNavbarLink = styled(NavLink)`
   text-decoration: none;
   font-family: 'Mulish', sans-serif;;
   font-size: 1rem;
   font-weight: 700;
   text-transform: uppercase;
   letter-spacing: 1px;
   color: var(--color-augmented-100);
   
   &:last-child {
      background: hsl(196, 77%, 55%);
      padding: 0.75em 1em;
      border-radius: 24px;
      &:hover {
         color: var(--color-augmented-100)
      }
      &.${(props) => props.activeclassname} {
         color: var(--color-augmented-100)
      }
   }
   &.${(props) => props.activeclassname} {
      color: hsl(196, 77%, 55%);
   }

   &:hover,
   &:active,
   &:focus,
   &.active {
      color: hsl(196, 77%, 55%);
      display: inline-block;
      padding-bottom: 0.25rem;
      /* defines the space between text and underline */
      position: relative;
   }
   &::before {
      content: "";
      position: absolute;
      right: 0;
      bottom: 0;
      width: 0;
      height: 2px;
      background-color: var(--color-bright-blue-01-700);
      transition: width 0.25s ease-out;
   }

   &.active::before,
   &:hover::before {
      width: 100%;
      left: 0;
      right: auto;
   }
   
   
   
   
`;