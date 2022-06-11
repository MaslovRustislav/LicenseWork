import React from 'react';
import {
	FiShoppingCart,
	FiBatteryCharging,
	FiCamera,
	FiSmartphone,
} from 'react-icons/fi';
import { BiDollarCircle } from 'react-icons/bi';
import { MdMemory } from 'react-icons/md';
const PhoneCard = ({
	name,
	image,
	display,
	camera,
	ram,
	battery,
	price,
	discount,
}) => {
	return (
		<div
			className={`border-black transition-all ${
				discount
					? 'hover:border-green-500 hover:shadow-green-600'
					: 'hover:border-blue-500 hover:shadow-cyan-600'
			} ease-in-out  delay-50 hover:shadow-lg items-center py-5 border-2 flex w-80 my-5 mx-2 rounded-xl`}>
			<div
				className={`w-1/2 imageContainer h-full bg-contain bg-no-repeat bg-center space-y-2 ${image}  `}></div>
			<div className='w-1/2 space-y-2 '>
				<div className='text-2xl text-center space-y-2 '>{name}</div>

				<div className='text-xl text-center space-y-2 text-red italic'>
					<p className='text-green-600 font-bold text-2xl'>{discount}</p>
					<p
						className={`${
							discount ? 'text-red-500 font-bold  line-through' : 'font-bold  '
						}`}>
						{price}
					</p>
				</div>

				<div className='p-2 '>
					<div className='pl-2 pt-2 space-x-2  items-center flex text-sm'>
						<FiSmartphone />
						<p>{display}</p>
					</div>
					<div className='pl-2 pt-2  space-x-2 items-center flex text-sm'>
						<FiCamera />
						<p>{camera}</p>
					</div>
					<div className='pl-2 pt-2  space-x-2 items-center flex text-sm'>
						<MdMemory />
						<p>{ram}</p>
					</div>
					<div className='pl-2 pt-2  space-x-2 items-center flex text-sm'>
						<FiBatteryCharging />
						<p>{battery}</p>
					</div>
				</div>
				<div className='flex justify-around mx-auto w-4/5  '>
					<button className=' rounded-xl text-black px-4 text-xs  py-2 mx-2 bg-blue-500 text-center'>
						<FiShoppingCart />
					</button>
					<button className=' rounded-xl text-white px-4 text-xs py-2 mx-2 bg-red-500 text-center'>
						<BiDollarCircle />
					</button>
				</div>
			</div>
		</div>
	);
};
export default PhoneCard;
