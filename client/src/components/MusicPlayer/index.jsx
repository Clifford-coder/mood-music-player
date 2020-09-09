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

export const MusicPlayer = ({ toggleModal, modalIsOpen, moods }) => {
	const renderSongs = () => {
		return (
			<PlayerWrapper>
				<MusicTitle>Title</MusicTitle>
				<MusicArtiste>Artiste</MusicArtiste>
				<AudioPlayerWrapper>
					<Audio controls autoplay>
						<Source src={'son'} type="audio/mpeg" />
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
			{renderSongs()}
		</StyledModal>
	);
};
