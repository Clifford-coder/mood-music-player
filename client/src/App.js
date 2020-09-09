import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'tailwindcss/dist/base.min.css';
import { IndexPage } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Route path="/" component={IndexPage} />
		</BrowserRouter>
	);
}

export default App;
