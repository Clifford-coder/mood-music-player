import React, { useState } from 'react';
import { Container, MusicPlayer } from '../../components';
import {
	Header,
	ColOneOfHeader,
	MusicIllustration,
	Heading,
	ColTwoOfHeader,
	Subheading,
	Main,
	MainHeading,
	MainSubheading,
	Moods,
	Mood,
} from './styles';
import musicIllustration from '../../assets/img/stay-positive-animate.svg';

export default () => {
	const [mood, setMood] = useState('');
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const toggleModal = () => {
		setModalIsOpen(!modalIsOpen);
	};

	const moods = ['Happy', 'Sad', 'Angry', 'Afraid', 'Disappointed', 'In Love'];

	return (
		<Container>
			<Header>
				<ColTwoOfHeader>
					<Heading>Welcome to the mood music player</Heading>
					<Subheading>
						Play music based on your current mood buddy{' '}
						<span role="img" aria-label="winking face">
							😉
						</span>
					</Subheading>
				</ColTwoOfHeader>
				<ColOneOfHeader>
					<MusicIllustration src={musicIllustration} />
				</ColOneOfHeader>
			</Header>
			<Main>
				<MainHeading>What is your mood today?</MainHeading>
				<MainSubheading>Please Select your mood and a perfect song will be played for you.</MainSubheading>
				<Moods>
					{moods.map((mood, i) => {
						return (
							<Mood
								key={i}
								onClick={() => {
									setMood(mood);
									toggleModal();
								}}
							>
								{mood}?
							</Mood>
						);
					})}
				</Moods>
				<MusicPlayer mood={mood} toggleModal={toggleModal} modalIsOpen={modalIsOpen} />
			</Main>
		</Container>
	);
};
