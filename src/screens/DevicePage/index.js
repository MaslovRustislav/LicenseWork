import React from 'react';

const DevicePage = () => {
	return (
		<div className='w-11/12 mx-auto'>
			{/* showcase */}
			<div className='w-1/4 border-2'></div>
			<div className='w-3/4 border-3'>
				<h1 className='text-2xl text-center'>Name</h1>
				<div className='w-full flex justify-between'>
					<div className=''>Price</div>
					<div className=''>Remained:</div>
				</div>
				<div>{/* Device stats */}</div>
				{/* Antutu results */}
				<div></div>
				<button></button>
				<button></button>
			</div>
		</div>
	);
};
export default DevicePage;
