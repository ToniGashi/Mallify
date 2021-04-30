import React from 'react';
import Item from './Item'; 
import '../Discover/discover.css';

const ItemList = ( { items } ) => {
	return(
			<div className="grid-container2 all2">
				{
					items.map((user,i) => {
						return (
                            <div>
                                <Item 
                                key={i}
								name={items[i].name} 
                                img={items[i].images[0].url}
                                price={items[i].price.value}
							    />
                            </div>
						);
					})
				}
			</div>
			);
		}

export default ItemList;