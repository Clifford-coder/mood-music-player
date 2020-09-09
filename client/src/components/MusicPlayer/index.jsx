import React from 'react';
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
import song from '../../assets/songs/afraidMoodSongs/Kari Jobe - I Am Not Alone (Live).mp3';

export const MusicPlayer = ({ toggleModal, modalIsOpen, moods }) => {
	const renderPlayer = () => {
		return (
			<PlayerWrapper>
				<MusicTitle>Title</MusicTitle>
				<MusicArtiste>Artiste</MusicArtiste>
				<AudioPlayerWrapper>
					<Audio controls autoplay>
						<Source src={song} type="audio/mpeg" />
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

/* <PlayerWrapper key={i}>
		<MusicTitle>{mood}</MusicTitle>
		<MusicArtiste></MusicArtiste>
		<AudioPlayer></AudioPlayer>
</PlayerWrapper> */

/* <div class="container-audio"> 
    <audio controls  loop autoplay>
      <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/9473/new_year_dubstep_minimix.ogg" type="audio/ogg">
       Your browser dose not Support the audio Tag
    </audio>
</div>*/
