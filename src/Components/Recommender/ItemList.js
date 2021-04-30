import React from 'react';
import Item from './Item'; 
import '../Recommender/recommender.css';

const ItemList = ( { items } ) => {
	return(
			<div className="grid-container all">
				{
					items.map((user,i) => {
						return (
                            <div>
                                <Item 
                                key={i}
								name={items[i].pname} 
                                img={items[i].photo}
                                price={items[i].price}
							    />
                            </div>
						);
					})
				}
			</div>
			);
		}

export default ItemList;