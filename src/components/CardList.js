import React from 'react';
import Card from './Card'

const CardList = ({robots}) => {
	// checks error handling for this component
	// if (true){
	// 	throw new Error("NOO!");
	// }
	return(
		<div>
			{
				robots.map((value, i)=>{
					return(
						<Card
							key={robots[i].name}
							id={robots[i].id}
							name={robots[i].name}
							email={robots[i].email}
						/>
					) 
				})
			}
		</div>
	);
}

export default CardList;