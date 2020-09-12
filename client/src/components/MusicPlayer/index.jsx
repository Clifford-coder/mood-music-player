import React, { useContext, useRef, useState } from 'react';
import { SongsContext } from '../../store/context/songsContext';
import {
	StyledModal,
	CloseModalButton,
	CloseIcon,
	PlayerWrapper,
	PlayerHeading,
	MusicWrapper,
	MusicTitle,
	MusicArtiste,
	AudioPlayerWrapper,
	Audio,
	Source,
} from './styles';

export const MusicPlayer = ({ toggleModal, modalIsOpen, mood }) => {
	const [songSrc, setSongSrc] = useState('');
	const songTitle = useRef('');

	const {
		happyMoodSongs,
		disappointedMoodSongs,
		afraidMoodSongs,
		sadMoodSongs,
		angryMoodSongs,
		inLoveMoodSongs,
	} = useContext(SongsContext);

	const renderPlayer = (moodSongs) => {
		return (
			<PlayerWrapper>
				<PlayerHeading>Click on any song to play</PlayerHeading>
				{moodSongs.map((song, i) => (
					<MusicWrapper
						onClick={() => {
							setSongSrc(song.src);
							songTitle.current = song.title;
						}}
						key={i}
					>
						<MusicTitle>{song.title}</MusicTitle>
						<MusicArtiste>By {song.artiste}</MusicArtiste>
					</MusicWrapper>
				))}
				<AudioPlayerWrapper>
					<h4>
						Currently Playing :{' '}
						{!songTitle.current ? <b>No song is playing</b> : <b>{songTitle.current}</b>}{' '}
					</h4>
					<Audio controls autoplay loop>
						{console.log(songSrc)}
						<Source src={songSrc} type="audio/mpeg" />
					</Audio>
				</AudioPlayerWrapper>
			</PlayerWrapper>
		);
	};

	const renderSongs = (moodSongs, mood) => {
		switch (mood) {
			case 'Happy':
				return renderPlayer(moodSongs);
			case 'Sad':
				return renderPlayer(moodSongs);
			case 'Angry':
				return renderPlayer(moodSongs);
			case 'Afraid':
				return renderPlayer(moodSongs);
			case 'Disappointed':
				return renderPlayer(moodSongs);
			case 'In Love':
				return renderPlayer(moodSongs);
			default:
				return <h1>Nothing!!</h1>;
		}
	};

	const callRenderSong = () => {
		switch (mood) {
			case 'Happy':
				return renderSongs(happyMoodSongs, 'Happy');
			case 'Sad':
				return renderSongs(sadMoodSongs, 'Sad');
			case 'Angry':
				return renderSongs(angryMoodSongs, 'Angry');
			case 'Afraid':
				return renderSongs(afraidMoodSongs, 'Afraid');
			case 'Disappointed':
				return renderSongs(disappointedMoodSongs, 'Disappointed');
			case 'In Love':
				return renderSongs(inLoveMoodSongs, 'In Love');
			default:
				return null;
		}
	};
	return (
		<StyledModal
			closeTimeoutMS={300}
			className="mainHeroModal"
			isOpen={modalIsOpen}
			onRequestClose={toggleModal}
			shouldCloseOnOverlayClick={true}
		>
			<CloseModalButton onClick={toggleModal}>
				<CloseIcon className="far fa-times-circle" />
			</CloseModalButton>
			{callRenderSong()}
		</StyledModal>
	);
};
