import React from 'react';
import '../FindShortest/findshortest.css';
import image1 from '../FindShortest/findstore.png'

class FindShortest extends React.Component {  

    constructor(props){
        super(props);
        this.myRef1 = React.createRef();
        this.myRef2 = React.createRef();
    }

    componentDidMount() {
        this.getList();
    }

    getList = () => {
        fetch('http://localhost:3000/list', 
        {
            method: 'get', 
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(data => {
            for(var i=0; i<data.length; i++) //POPULATING SELECT STATEMENTS!!
            {                
                var select = this.myRef1.current;
                var select2 = this.myRef2.current;
                console.log(select);
                console.log(select2);
                var option = data[i].name; 
                var option2 = data[i].name; 

                var el = document.createElement("option");
                var el2 = document.createElement("option"); 

                el.textContent = option; 
                el.value = option; 
                el2.textContent = option2; 
                el2.value = option2; 

                select.appendChild(el); 
                select2.appendChild(el2); 
            }
        })
    }

    findShortestPath = () => {
        const startName = document.getElementById("location-one").value;
        const endName = document.getElementById("location-two").value;
        fetch('http://localhost:3000/direction', 
        {
            method: 'post', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                startP: startName,
                endP: endName
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.getElementById("small").innerHTML =  data;
        })
    }

    render(){
        return (
            <div className="findshortest-container">
                <img className="img1" src={image1} alt="location"></img>
                <h1 className="h1">Find A Store</h1>
                <p className="p1">Choose Your Current Location and Your Destination</p>
                <div className="container">
                    <div className="location">
                        <p>Current Location:</p>
                        <select id="location-one" ref={this.myRef1}> 
                        </select>
                    </div>

                    <div className="calcbtn-container">
                        <button className="btn" id="calculate" onClick={this.findShortestPath}>
                            Find Path
                        </button>
                    </div>

                    <div className="location">
                        <p>Your Destination:</p>
                        <select id="location-two" ref={this.myRef2}>
                        </select>
                    </div>
                    <br/><br/>
                    <pre id="small"></pre>
                </div>
            </div>
        );
    }
}

export default FindShortest;