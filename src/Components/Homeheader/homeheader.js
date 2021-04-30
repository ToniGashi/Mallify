import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../Homeheader/homeheader.css';

class Homeheader extends React.Component {
    
    constructor(props) 
    {
        super(props);
        this.onSignInStatusChange = props.onSignInStatusChange;
        this.submitSuccess = false;
        this.isModalActive = false;
        this.state = {
            name: '',
            emai: '',
            password: '',
            password2: '',
            inSignIn : false
        }
    }    

    onNameChange = (event) => {
        this.setState({name:event.target.value});
    }

    onEmailChange = (event) => {
        this.setState({email:event.target.value});
    }

    onPasswordChange = (event) => {
        this.setState({password:event.target.value});
    }

    onPassword2Change = (event) => {
        this.setState({password2:event.target.value});
    }





    openModal = () => {
        this.isModalActive ? document.getElementById('modal') : document.getElementById('modal').classList.add('show-modal');
        this.isModalActive = true;
    }

    closeModal = () => {
        console.log("in close modal");
        console.log("modal is ", this.isModalActive);
        this.isModalActive ? document.getElementById('modal').classList.remove('show-modal') : document.getElementById('modal');
        this.isModalActive = false;
    }





    showError = (input, message) => {
        if(this.submitSuccess)
           this.submitSuccess=false;

        console.log("checking after update: in showError:" , this.submitSuccess);
        const formControl= input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small');
        small.innerText = message;
    }
    
    showSuccess = (input) => {
        const formControl=input.parentElement;
        formControl.className='form-control success';
        const small = formControl.querySelector('small');
        small.innerText = "";
    }

    isValidEmail = (email) => {
        var isValid;
        (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))?isValid=true:isValid=false;
        return isValid;
    }

    changeForm = () => {
        this.setState({inSignIn:true}, () => {console.log("were in sign in");});
    }


    isSignInSuccess = (email, password) => {
        this.submitSuccess = true;

        let em = document.getElementById('Semail');
        let pw = document.getElementById('Spassword'); 

        !this.isValidEmail(email)?this.showError(em,'This is not an email.'):this.showSuccess(em);
        password===''?this.showError(pw, 'Password field must not be empty.'):password.length<6?this.showError(pw, 'Password too weak.'):this.showSuccess(pw);

        if(this.submitSuccess)
            this.signInSuccessful();

    }

    isRegisterSuccess = (username, email, password, password2) => {
        this.submitSuccess =true;
        
        let name= document.getElementById('name');
        let em = document.getElementById('email');
        let pw = document.getElementById('password');
        let pw2 = document.getElementById('password2');

        
        username.length<3?this.showError(name,'Username must be longer than three digits.'):username.length>14?this.showError(name, 'Username must be shorter than 15 digits.'):this.showSuccess(name);
        !this.isValidEmail(email)?this.showError(em,'This is not an email.'):this.showSuccess(em);
        password===''?this.showError(pw, 'Password field must not be empty.'):password.length<6?this.showError(pw, 'Password too weak.'):this.showSuccess(pw);
        password2===''?this.showError(pw2, 'Password verification field must not be empty.'):password2!==password?this.showError(pw2,'Passwords must match.'):this.showSuccess(pw2);
        

        if(this.submitSuccess)
            this.registerSuccessful();

    }

    signInSuccessful = () => {        
        console.log("in sign in successful");
        fetch('http://localhost:3000/signin', 
        {
            method: 'post', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email:this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.id);
            if(data.id){
                console.log("in sign in");
                this.onSignInStatusChange = true;
                this.closeModal();
                this.props.loadUser(data);
                this.props.onRouteChange('home');
            }
            else{
                this.showError(document.getElementById("Semail", "Not Found"));
                this.showError(document.getElementById("Spassword", "Please read the problem below"));      
                document.getElementById("issue").innerHTML = "Wrong Credentials";    
                document.getElementById("issue2").innerHTML = "";        
            }
        })
    }

    registerSuccessful = () => {
        fetch('http://localhost:3000/register', 
        {
            method: 'post', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name:this.state.name,
                email:this.state.email,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.id){
                this.onSignInStatusChange = true;
                this.closeModal();
                this.props.loadUser(data);
                this.props.onRouteChange('home');
            }
        })
    }

    render(){

    return(    
        <div>
            <div className="header">
                <h1>Mallimize</h1>
                <p>Changing your shopping experience forever.</p>
                <p className="sign-up">Sign up to receive the latest updates</p>

                <button className="cta-btn" id="open" onClick={this.openModal}>
                    Sign Up!
                </button>
            </div>

            <div className="modal-container" id="modal">
                <div className="modal">
                    <button className="close-btn" id="close" onClick={this.closeModal}>
                        <i className="fa fa-times"></i>
                    </button>
                    <div className="modal-header">
                        {
                            this.state.inSignIn ? <h3>Sign In</h3>:<h3>Register</h3>
                        }
                        
                    </div>
                    <div className="modal-content">                       
                            {
                                this.state.inSignIn ? 
                                    <div>
                                        <input onClick={() => {this.setState({inSignIn:false})}} type="submit" value="Go Back" className="submit-btn"></input>
                                        <form id="form" className="modal-form">
                                            <div className="form-control">
                                                <label id="email" htmlFor="email">Email</label>
                                                <input type="email" onChange={this.onEmailChange} id="Semail" className="form-input" placeholder="Enter Email"></input>
                                                <small id="issue2"></small>
                                            </div>
                                            <div className="form-control">
                                                <label id="password" htmlFor="password">Password</label>
                                                <input type="password" onChange={this.onPasswordChange} id="Spassword" className="form-input" placeholder="Enter Password"></input>
                                                <small id="issue"></small>
                                            </div>
                                        </form>
                                        <input onClick={() => this.isSignInSuccess(this.state.email,this.state.password)} type="submit" value="Sign In" className="submit-btn"></input>
                                    </div>
                                :
                                <div>
                                    <form id="form" className="modal-form">
                                        <p> Already have an account with us? </p>
                                        <input onClick={() => {this.setState({inSignIn:true})}} type="submit" value="Sign In" className="submit-btn"></input>
                                        <div className="form-control">
                                            <label id="name" htmlFor="name">Name</label>
                                            <input type="text" onChange={this.onNameChange} id="name" className="form-input" placeholder="Enter Name"></input>
                                            <small></small>
                                        </div>
                                        <div className="form-control">
                                            <label id="email" htmlFor="email">Email</label>
                                            <input type="email" onChange={this.onEmailChange} id="email" className="form-input" placeholder="Enter Email"></input>
                                            <small></small>
                                        </div>
                                        <div className="form-control">
                                            <label id="password" htmlFor="password">Password</label>
                                            <input type="password" onChange={this.onPasswordChange} id="password" className="form-input" placeholder="Enter Password"></input>
                                            <small></small>
                                        </div>
                                        <div className="form-control">
                                            <label id="password2" htmlFor="password2">Confirm Password</label>
                                            <input type="password" onChange={this.onPassword2Change} id="password2" className="form-input" placeholder="Confirm Password"></input>
                                            <small> </small>
                                        </div>
                                    </form>
                                    <input onClick={() => this.isRegisterSuccess(this.state.name, this.state.email, this.state.password, this.state.password2, "register")} type="submit" value="Register" className="submit-btn"></input>
                                </div>
                            }
                        
                    </div>
                </div>
            </div>
        </div>
        
    )
    }
}

export default Homeheader;