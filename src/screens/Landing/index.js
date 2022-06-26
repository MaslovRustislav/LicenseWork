import React, { useEffect, useState } from 'react';

import { headPhoneData } from '../../assets/mockData';
import { phoneData } from '../../assets/mockData';
import PhoneCard from '../Landing/PhoneCard';
import HeadPhoneCard from './HeadPhones';

import TvCard from '../Landing/TV';
import { TvData } from '../../assets/mockData';

const Landing = () => {
	const [curDeviceData, setCurDeviceData] = useState([]);

	useEffect(() => {
		TvData.map((element) => {
			setCurDeviceData((element) => [...element, element]);
		});
	}, [TvData]);
	console.log('elemtns', curDeviceData);
	return (
		<div>
			<div className=''>
				<div className='font-Voltaire text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r my-5 from-cyan-300 to-sky-700'>
					Volt
				</div>
				<div className='font-Voltaire text-3xl  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-cyan-300'>
					Here you will find big brands by small prices
				</div>
			</div>
			<div>
				<div className='font-Rampart  font-bold ml-5 text-left my-5 text-2xl text-cyan-600'>
					The most purchased products
					<div className=' w-full overflow-x-scroll	 whitespace-nowrap	 flex '>
						{phoneData.map((element, index) => {
							if (index < 5) {
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
										fromLading={true}
									/>
								);
							}
						})}
						{TvData.map((element, index) => {
							if (index < 5) {
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
										fromLading={true}
									/>
								);
							}
						})}
					</div>
				</div>
			</div>
			<div>
				<div className='font-Rampart  font-bold ml-5 text-left my-5 text-2xl text-rose-600'>
					Our Offers
					<div className='  w-full overflow-x-scroll	 whitespace-nowrap	   flex '>
						{phoneData.map((element, index) => {
							if (element.discount) {
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
										fromLading={true}
									/>
								);
							}
						})}
						{TvData.map((element, index) => {
							if (element.discount) {
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
										fromLading={true}
									/>
								);
							}
						})}
						{headPhoneData.map((element, index) => {
							if (element.discount) {
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
										fromLading={true}
									/>
								);
							}
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Landing;
