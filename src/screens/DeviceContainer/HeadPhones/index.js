import React from 'react';
import { headPhoneData } from '../../../assets/mockData';
import HeadPhoneCard from '../../Landing/HeadPhones';
const HeadPhoneContainer = () => {

	return (
		<div className=' w-full justify-around  flex-wrap flex '>
			{headPhoneData.map((element) => {
                console.log('element',element)
				return (
					<HeadPhoneCard
						name={element.name}
						image={element.image}
						sensibility={element.sensibility}
						resistance={element.resistance}
						weight={element.weight}
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
export default HeadPhoneContainer;
