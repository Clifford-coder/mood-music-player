import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'tailwindcss/dist/base.min.css';
import { IndexPage } from './pages';
import SongsContextProvider from './store/context/songsContext';

function App() {
	return (
		<BrowserRouter>
			<Route
				path="/"
				render={() => {
					return (
						<SongsContextProvider>
							<IndexPage />
						</SongsContextProvider>
					);
				}}
			/>
		</BrowserRouter>
	);
}

export default App;
