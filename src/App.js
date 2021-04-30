import './App.css';
import React from 'react';
import Homeheader from './Components/Homeheader/homeheader';
import Homebody from './Components/Homebody/homebody';
import Navbtn from './Components/Navbtn/navbtn';
import Nav from './Components/Nav/nav';
import FindShortest from './Components/FindShortest/findshortest';
import SignedHome from './Components/SignedHome/signedHome';
import Contact from "./Components/Contact/contact";
import Discover from "./Components/Discover/discover";

const initialState = {
  route: 'home',
  isNavActive: false,
  isModalActive: false,
  isSignedIn: false,
  user: {
      id: '',
      name: '',
      email: '',
      image: '../../../public/Images/noImg.jpg'
  }
}
class App extends React.Component {

  constructor(){
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState(
      {
        isSignedIn:true,
        user: 
        {
          id: data.id,
          name: data.name,
          email: data.email,
          image: data.photo
        }
      }, () => {
        console.log(this.state.user.image);
      }
    );
    console.log("issignedin state is: ",this.state.isSignedIn);
  }

  toggleNav = (event) => {
    document.body.classList.toggle('show-nav');
    this.setState({ isNavActive: !this.state.isNavActive });
  }

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  onSignInStatusChange = () => {
    this.onRouteChange('home')
    this.setState({isSignedIn: !this.state.isSignedIn});
  }

  render (){
    return(
      <div className="App">
        <Nav onRouteChange={this.onRouteChange} onSignInStatusChange={this.onSignInStatusChange} isSignedIn={this.state.isSignedIn} image={this.state.image}></Nav>
        {
          this.state.route==='home' ?
            <div>
              {
                this.state.isSignedIn===false?
                <div>
                  <Homeheader onSignInStatusChange = {this.onSignInStatusChange} onRouteChange = {this.onRouteChange} loadUser = {this.loadUser}/>
                  <Homebody></Homebody>
                </div>
                :
                <div>
                  <SignedHome userId = {this.state.user.id} userName={this.state.user.name} userImage = {this.state.user.image} userEmail = {this.state.user.email}></SignedHome>
                </div>
              }
            </div>
          :
          this.state.route==="findShortest" ?
          <div>
            <FindShortest></FindShortest>
          </div>
          :
          this.state.route==='discover' ?
            <Discover></Discover>
            :
            <Contact></Contact>

        }
        <Navbtn toggleNav={this.toggleNav}></Navbtn>
      </div>
    )
  }

}

export default App;
