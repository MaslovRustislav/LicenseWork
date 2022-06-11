import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {phoneData} from '../../assets/mockData';
import  './index.css'
import DeviceViewer from './3DModelViewer'
const DevicePage = () => {
	const {id} = useParams()
	const [curDeviceData,setCurDeviceData] = useState({})


	
	
	useEffect(()=>{
		phoneData.map((element)=>{
			if(element.id === id){
				setCurDeviceData(element)
			}	
		})
		
	})
	if(curDeviceData.stats)
	return (
		<div className='w-11/12 flex-col mx-auto flex justify-center items-center h-1/2 flex-grow min-h-screen'>
			<div className=' w-8/12 flex-col mt-6 flex justify-center content-center align-middle'>
			<h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-cyan-300 to-sky-600'>{curDeviceData.name}</h1>
				<div className='w-full flex justify-between'>
					<div className='flex'>
					<h1 className='text-2xl mt-1'>Price </h1>
					<div className=' text-2xl ml-2 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-xl text-gray-100 p-1   '> {curDeviceData.price}</div>
					</div>
					<div className=' text-xl  italic '>Remained:{curDeviceData.count}</div>
				</div>
		</div>
		<div className=' w-full'>
			<div id="containerForModelling" className=' h-600 mt-8 border-2 overflow-hidden '><DeviceViewer/></div>
		<div className=' flex'>
			<div className=' mt-8 border-3 mx-auto order-2'>
				

				<div className='w-full  sm:flex  sm:space-x-4'>
					<div className='sm:w-1/2 space-y-2 '>
						
						{curDeviceData.stats?.map((element)=>{
							return(
								<div className='border-2 rounded-xl p-1 shadow-md shadow-cyan-400/50 border-cyan-400'>
									<h1 className='text-left text-xl ml-1 font-bold'>{element.name}</h1>
									{element.data.map((elementForData)=>{
										return<p className='text-left ml-4 text-lg text-gray-700'>{elementForData}</p>
									})}
								</div>
							)
						})}
					</div >
						
					<div className='sm:w-1/2 space-y-3 mt-2'>
					{curDeviceData.antutuStats?.map((element)=>{

							return(
								<div className='border-2 pb-4 rounded-xl p-1 space-y-4  shadow-sm shadow-green-400/50 border-teal-400'>
									<h1 className=' text-xl text-center  font-bold'>{element.name}</h1>
									{/* {console.log(element.data)} */}
									{element.data.map((elementForData,index)=>{
										console.log('index',index)
										return(
											<div className='space-y-1'>
										<p className='text-left ml-2 text-xl text-gray-900'>{elementForData.statName}</p>
										<div className=' w-11/12 mx-auto h-3 border-2 rounded-lg overflow-hidden '>
											<div style={{width:`${elementForData.percents}`}} className={` ${index!==2?'bg-gray-500':'bg-orange-700'} h-full   `}></div>

											</div>
										</div>
										)
									})}
								</div>
							)
						})}
					</div>
				</div>
				
			</div>
			<div className='w-1/2 flex flex-col order-1'>
			<div className='space-y-2 mt-5 text-black border-b-2 pb-2 border-sky-400 rounded-xl'>
						<h1 className='text-3xl text-left  '>How to take credit </h1>
						<p className='  ml-5 text-left'>We’ve made it faster and safer than ever to buy mobile top-up. 
							Don’t get stuck waiting for your 
							service to kick in after you’ve 
							already paid. Just follow a few simple steps and get instant access to your mobile service:</p>
								<ol className='ml-10 text-left'>
										<li>- Select your country</li>
										<li>- Enter your phone number</li>
										<li>- Select a top-up amount</li>
										<li>- Select the payment method</li>
								</ol>


<p className='text-left ml-5'>	It’s as simple as that! As soon as the payment is processed, you will be able to use your phone to contact friends and family across the globe. </p>
			</div>
			<div className=' space-y-2 mt-5 text-black border-b-2  pb-2 border-sky-400  rounded-xl'>
						<h1 className='text-3xl text-left  '>About delivery </h1>
						<p className='  ml-5 text-left'>Our "Standard" home deliveries are normally delivered within 5 working days and our "Next Day" orders are delivered on the next day for orders that are placed Monday to Friday before 8pm (6:30pm for Next Day Order & Collect). For orders placed on Fri after 8pm (6:30pm for Next Day Order & Collect) or on Saturday and Sunday, these will be delivered by Tuesday.</p>
							


<p className='text-left ml-5'>To track your order, please click on the tracking link in your dispatch email or via the email sent to you from our delivery partner Hermes. The email that Hermes send to you will contain your 16 digit tracking number and you will need to contact Hermes directly if you have any queries about your delivery. You can contact Hermes here.</p>
<p className='text-left ml-5'>You can also download the Hermes App for up to the minute info on your delivery, As well as tracking your order, you can also use the app to rearrange your delivery or update your safe place locations if you’re not going to be home. You can download the Hermes app for Apple via the App Store or via Google Play for Android.

</p>

			</div>
		 </div>
		 </div>
		 </div>
		 </div>
	);
};
export default DevicePage;
