import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import PrivacyPolicy from'./intervaltimerprivacypolicy';

const Main = () => (
    <Switch>
        <Route exact path="/" component ={LandingPage} />
        <Route path="/aboutme" component ={AboutMe} />
        <Route path="/contact" component ={Contact} />
        <Route path="/projects" component ={Projects} />
        <Route path="/resume" component ={Resume} />
        <Route path ="/intervaltimerprivacypolicy" component ={PrivacyPolicy} />
    </Switch>
)

export default Main;