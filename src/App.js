import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Resume from './Components/Resume';
import Photography from './Components/Gallary';
import { Gallery1, Gallery2} from './Components/DynamicGallery';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'./resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="Container">
        <div className="App">
          <Header data={this.state.resumeData.main}/>
          <About data={this.state.resumeData.main}/>
          <div id="photography" className="Photography-container row">
            <div id="myTravels" className="Do">
              <div>
                When I'm not coding I'm a big fan of going places
              </div>
            </div>
            <Gallery1 id="myTravels"/>
            <div id="myPhotos" className="See">
              <div>
                And do my best to walk away with the best parts! Check out some of my photography <a target="_blank" href="https://lightroom.adobe.com/gallery/cf875829625a41dc9561fca2b8cfc5ce/albums/41d5a4790de9462b8ad839b20d145fab/assets">here!</a>
              </div>
            </div>
            <Gallery2 />
          </div>
          <Resume data={this.state.resumeData.resume}/>
          <Footer data={this.state.resumeData.main}/>
        </div>
      </div>
    );
  }
}

export default App;
