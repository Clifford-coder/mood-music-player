import React, { createContext, useState, useEffect } from 'react';
import songsapi from '../../apis/songsapi';

export const SongsContext = createContext();

const SongsContextProvider = (props) => {
	const [happyMoodSongs, setHappyMoodSongs] = useState([]);
	const [sadMoodSongs, setSadMoodSongs] = useState([]);
	const [angryMoodSongs, setAngryMoodSongs] = useState([]);
	const [afraidMoodSongs, setAfraidMoodSongs] = useState([]);
	const [disappointedMoodSongs, setDisappointedMoodSongs] = useState([]);
	const [inLoveMoodSongs, setInLoveMoodSongs] = useState([]);

	useEffect(() => {
		async function getSongs() {
			const response = await songsapi.get('/songs');
			const {
				happyMoodSongs,
				sadMoodSongs,
				angryMoodSongs,
				afraidMoodSongs,
				disappointedMoodSongs,
				inLoveMoodSongs,
			} = response.data[0];
			setHappyMoodSongs(happyMoodSongs);
			setSadMoodSongs(sadMoodSongs);
			setAngryMoodSongs(angryMoodSongs);
			setAfraidMoodSongs(afraidMoodSongs);
			setDisappointedMoodSongs(disappointedMoodSongs);
			setInLoveMoodSongs(inLoveMoodSongs);
		}
		getSongs();
	}, []);

	return (
		<SongsContext.Provider
			value={{
				happyMoodSongs,
				sadMoodSongs,
				angryMoodSongs,
				afraidMoodSongs,
				disappointedMoodSongs,
				inLoveMoodSongs,
			}}
		>
			{props.children}
		</SongsContext.Provider>
	);
};

export default SongsContextProvider;
