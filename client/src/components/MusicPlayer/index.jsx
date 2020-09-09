import React, { useEffect, useState } from 'react';
import songsapi from '../../apis/songsapi';
import {
	StyledModal,
	CloseModalButton,
	CloseIcon,
	PlayerWrapper,
	MusicTitle,
	MusicArtiste,
	AudioPlayerWrapper,
	Audio,
	Source,
} from './styles';
// import song from '../../assets/songs/afraidMoodSongs/Kari Jobe - I Am Not Alone (Live).mp3';

export const MusicPlayer = ({ toggleModal, modalIsOpen, moods }) => {
	const [songSrc, setSongSrc] = useState('');

	useEffect(() => {
		async function fetchData() {
			const res = await songsapi.get('/happyMoodSongs');
			setSongSrc(res.data[0].src);
		}
		fetchData();
	}, []);

	const renderPlayer = () => {
		return (
			<PlayerWrapper>
				<MusicTitle>Title</MusicTitle>
				<MusicArtiste>Artiste</MusicArtiste>
				<AudioPlayerWrapper>
					<Audio controls autoplay>
						<Source src={songSrc} type="audio/mpeg" />
					</Audio>
				</AudioPlayerWrapper>
			</PlayerWrapper>
		);
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
			{renderPlayer()}
		</StyledModal>
	);
};
