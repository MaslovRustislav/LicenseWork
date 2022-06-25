import { React } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Fragment } from 'react';
import Routing from './screens/Navigation/Routing';
function App() {
	return (
		<div className='App min-h-screen flex flex-col grow'>
			<BrowserRouter>
				<Fragment>
					<Routing />
				</Fragment>
			</BrowserRouter>
		</div>
	);
}

export default App;
