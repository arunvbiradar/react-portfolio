import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import MyWork from './components/MyWorks';
import Work from './components/WorkDetail';

import Default from './components/Default';

function App() {
  return (
    <div className="conatiner-fluid">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/post/:id" component={BlogDetail} />
        <Route path="/myworks/:id" component={Work} />
        <Route path="/myworks" component={MyWork} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
