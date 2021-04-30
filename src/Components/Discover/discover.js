import React from 'react';
import ErrorBoundry from './ErrorBoundry'
import ItemList from './ItemList';
import '../Discover/discover.css';

class Discover extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            items:[]
        }
        this.getImages();
    }

    getImages = () => {
        fetch("https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=asia2&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "aa5b614d7amshaf6141d05e6e734p1f15efjsn33588b5535a7",
                "x-rapidapi-host": "apidojo-hm-hennes-mauritz-v1.p.rapidapi.com"
            }
        })
        .then(response => response.json())
        .then(data=>{
            console.log(data.results);
            this.setState({items:data.results});
        });
    }

    render(){
        return (
            <div className="uni">
                <ErrorBoundry>
                    <ItemList items={this.state.items}/>
                </ErrorBoundry>
            </div>
        )
    }
}

export default Discover;


