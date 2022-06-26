import React from 'react';
import { FiHeadphones, FiSpeaker, FiShoppingCart,FiBox } from 'react-icons/fi';
import { BiDollarCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const HeadPhoneCard = ({
	name,
	image,
	sensibility,
	resistance,
	weight,
	count,
	price,
	discount,
	id,
	fromLading,
}) => {
	console.log('id',image)
	return (
		<Link
			to={`HeadPhonePage/${id}`}
			className={`border-black transition-all ${
				discount
					? 'hover:border-green-500 hover:shadow-green-600'
					: 'hover:border-blue-500 hover:shadow-cyan-600'
			} ease-in-out  delay-50 hover:shadow-lg items-center py-5 border-2 flex ${
				fromLading ? 'w-600' : 'w-96'
			}  my-5 mx-2 rounded-xl`}>
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
						<FiHeadphones />
						<p>{sensibility}</p>
					</div>
					<div className='pl-2 pt-2  space-x-2 items-center flex text-sm'>
						<FiSpeaker />
						<p>{resistance}</p>
					</div>
					<div className='pl-2 pt-2  space-x-2 items-center flex text-sm'>
						<FiBox />
						<p>{weight}</p>
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
		</Link>
	);
};
export default HeadPhoneCard;
