import tw, { styled } from 'twin.macro';
import ReactModalAdapter from '../../helpers/ReactModalAdapter';

//create a styled react-modal from the modal in the helpers
export const StyledModal = styled(ReactModalAdapter)`
	&.mainHeroModal__overlay {
		${tw`fixed inset-0 z-50`}
	}
	&.mainHeroModal__content {
		${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
	}
	.content {
		${tw`w-full lg:p-16`}
	}
`;
export const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-teal-700`;

export const CloseIcon = tw.i`text-3xl`;

export const PlayerWrapper = tw.div`w-9/12 -mt-4 text-teal-800`;

export const PlayerHeading = tw.h4`font-semibold text-3xl mt-8 mb-1`;

export const MusicWrapper = tw.div`cursor-pointer hover:bg-white hover:rounded hover:shadow-inner hover:scale-105 transform transition-all duration-200`;

export const MusicTitle = tw.h2`text-2xl font-medium mt-2!`;

export const MusicArtiste = tw.h4`text-xl font-normal`;

export const AudioPlayerWrapper = tw.div`w-full h-auto py-8 px-12 rounded-md bg-white mt-2 mx-auto overflow-hidden`;

export const Audio = tw.audio`w-full focus:outline-none mt-2`;

export const Source = tw.source``;

export const Analyser = tw.canvas``;
