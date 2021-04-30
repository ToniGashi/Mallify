import React from 'react';
import '../Recommender/recommender.css';
import ErrorBoundry from './ErrorBoundry'
import ItemList from './ItemList';

class Recommender extends React.Component{

    constructor(props){
        super(props);
        this.Uname = this.props.userName;
        this.state = {
            items:[]
        }
        this.buildRecommender();
    }

    buildRecommender = () => {
        fetch('http://localhost:3000/recommender',
                {
                    method: 'post',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: this.Uname
                    })
                })
                .then(response => response.json())
                .then(data => {
                    this.setState({items:data});
                    console.log(this.state.items);
                })
                .catch((err) => console.log(err));
    }

    render(){
        return (
            <div>
                <ErrorBoundry>
                    <ItemList items={this.state.items}/>
                </ErrorBoundry>
            </div>
        )
    }
}

export default Recommender;


