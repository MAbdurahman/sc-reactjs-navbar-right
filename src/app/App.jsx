import React, {Fragment} from 'react';
import {Routes, Route} from 'react-router-dom';
import SignUp from '../auth/SignUp/index.jsx';
import Home from '../pages/Home/index.jsx';
import About from '../pages/About/index.jsx';
import Services from '../pages/Services/index.jsx';
import Contact from '../pages/Contact/index.jsx';
import SignIn from '../auth/SignIn/index.jsx';
import Navbar from '../components/Navbar/index.jsx';
import NotFound from '../errors/NotFound/index.jsx';
import EmptyCart from '../errors/EmptyCart/index.jsx';
import NoResults from '../errors/NoResults/index.jsx';
import GlobalStyle from '../styles/Global.styled.jsx';





export default function App() {

   return (
      <Fragment>
         <GlobalStyle />
         <Navbar />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/empty-cart" element={<EmptyCart />} />
            <Route path="/no-results" element={<NoResults />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Fragment>

   );
}