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

export const PlayerWrapper = tw.div`w-5/6 justify-center py-20 px-16 text-teal-800`;

export const MusicTitle = tw.h2`text-3xl font-bold`;

export const MusicArtiste = tw.h4`text-2xl`;

export const AudioPlayerWrapper = tw.div`w-full h-auto p-10 rounded-md bg-white my-6 mx-auto overflow-hidden`;

export const Audio = tw.audio`w-full focus:outline-none`;

export const Source = tw.source``;

//  width: 66%;
//     height: auto;
//     padding: 20px;
//     border-radius: 5px;
//     background-color: #eee;
//     color: #444;
//     margin: 20px auto;
//     overflow: hidden;
