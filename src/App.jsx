import React, { Component } from 'react'
import Header from './components/header';
import Contact from './components/contact';
import JsonData from './data/data.json';
import Privacy from './components/Privacy';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Header data={this.state.landingPageData.Header} />
        <Contact data={this.state.landingPageData.Contact} />
        <Router>
          <Route path="/privacy" component={Privacy} />
        </Router>
      </div>
    )
  }
}

export default App;
