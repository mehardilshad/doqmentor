import React, { lazy, Suspense, useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import styled from "styled-components";
import ServiceFormModal from "./Components/Includes/Modals/ServiceFormModal";
import Instructions from "./Components/Screens/Instructions";
import LandingPage from "./Components/Screens/LandingPage";
import TermsAndConditions from "./Components/Screens/Service";
import ServiceSinglePage from "./Components/Screens/ServiceSinglePage";
// import TechnologyLanding from "../../screens/technology-landing/TechnologyLanding";

const AppRouter = () => {
    return (
        // <Router>
       
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/Single" element={<ServiceSinglePage />} />
                <Route path="/instruction" element={<Instructions />} />
                <Route path="Single/service-form" element={<ServiceFormModal />} />
            </Routes>
       
        // </Router>
    );
};

export default AppRouter;
const Cover = styled.div`
    height: 100vh;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
