import React from 'react';

import "bootswatch/dist/superhero/bootstrap.min.css"
import './App.css';

import { PortfolioNav } from './Components/Nav/PortfolioNav';
import { WelcomePage } from './Components/Pages/WelcomePage'
import { IntroductionPage } from './Components/Pages/IntroductionPage'
import { ProjectsPage } from './Components/Pages/ProjectsPage'
import { ContactPage } from './Components/Pages/ContactPage'
import { ExperiencePage } from './Components/Pages/ExperiencePage';

function App() {
  return (
    <div>
      <PortfolioNav />
      <WelcomePage />
      <IntroductionPage />
      <ExperiencePage />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}


export default App;
