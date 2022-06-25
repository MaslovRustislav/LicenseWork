import React from 'react';
import { TvData } from '../../../assets/mockData';
import TvCard from '../../Landing/TV';
const TvContainer = () => {

	return (
		<div className=' w-full justify-around  flex-wrap flex '>
			{TvData.map((element) => {
                console.log('element',element)
				return (
					<TvCard
						name={element.name}
						image={element.image}
						display={element.display}
						ghz={element.ghz}
						diagonal={element.diagonal}
						count={element.count}
						price={element.price}
						discount={element.discount}
						id={element.id}
					/>
				);
			})}
		</div>
	);
};
export default TvContainer;
