import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
	const [gifs, setGifs] = useState([]);
	function getGifData() {
		const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=minions&limit=10&rating=G&lang=en`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log('We have data!', res.data);
				setGifs(res.data);
			})
			.catch(console.error);
	}

	useEffect(() => {
		getGifData();
	}, []);

	return <div className='App'>Hello from my React Netlify test app!</div>;
}

export default App;
