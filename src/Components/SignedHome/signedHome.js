import React from 'react';
import '../SignedHome/signedHome.css';
import Recommender from '../Recommender/recommender';

class SignedHome extends React.Component {
    
    constructor(props) 
    {
        super(props);
        this.state = {
            userId : this.props.userId,
            userEmail : this.props.userEmail,
            userName : this.props.userName,
            userImage : this.props.userImage,
            styles : "url("+this.props.userImage+")"
        }
    }
    
  readFileHelper = (file) => {
      file.preventDefault();
    return new Promise((resolve, reject) => {
        file = file.target.files[0];
        let myReader = new FileReader();
        myReader.onloadend = function (e) {
            resolve(myReader.result);
        };
        myReader.readAsDataURL(file);
    })
  }
  readFile = (file) => {
      this.readFileHelper(file)
      .then((base64string) => {
            fetch('http://localhost:3000/saveImg',
                {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        img: base64string,
                        id: this.state.userId
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    this.setState({userImage: data, styles: "url(" + data + ")" });
                });
        }).catch((err) => console.log(err));
  }

    render(){
    return(    
        <div className="cont">
            <div className="headerS">
                
                <div className="profile" style={{'backgroundImage':this.state.styles}}>

                    <label htmlFor="file-upload" className="custom-file-upload">
                        Change Image
                    </label>  
                    <input type="file" accept="image/*" id="file-upload" onChange={(e) => this.readFile(e)}></input>                  
                </div>
                <div><h1>{this.state.userName}</h1></div>
                
            </div>
            <div className="body">
                <h2 className="title">Suggested Items: {this.state.userName}</h2>
                <Recommender userName={this.state.userName}></Recommender>
            </div>
        </div>
        
    )
    }
}

export default SignedHome;