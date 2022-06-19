import React from 'react';
import { phoneData } from '../../assets/mockData';
import PhoneCard from '../Landing/PhoneCard';
const DeviceContainer = () => {
	console.log('phoneData', phoneData);

	return (
		<div className=' w-full justify-around  flex-wrap flex '>
			{phoneData.map((element) => {
				return (
					<PhoneCard
						name={element.name}
						image={element.image}
						display={element.display}
						camera={element.camera}
						ram={element.ram}
						battery={element.battery}
						price={element.price}
						discount={element.discount}
						id={element.id}
					/>
				);
			})}
		</div>
	);
};
export default DeviceContainer;
