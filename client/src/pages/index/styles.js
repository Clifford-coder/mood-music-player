import tw, { styled } from 'twin.macro';
import { SectionHeading, SectionSubheading } from '../../components';

export const Header = tw.div`px-6 bg-gradient-to-l from-white via-green-300  to-green-600 h-auto grid grid-cols-2`;

export const ColOneOfHeader = tw.div`col-span-1 p-10`;

export const MusicIllustration = tw.img`w-4/5 h-auto`;

export const ColTwoOfHeader = styled.div`
	${tw`flex justify-center items-center flex-col p-10`}
`;

export const Heading = styled(SectionHeading)`
	${tw`text-teal-900`}
`;

export const Subheading = tw(SectionSubheading)`text-teal-900`;

export const Main = tw.div`bg-green-100 pb-16`;

export const MainHeading = tw(Heading)`text-teal-900! pt-10 text-center`;

export const MainSubheading = tw(Subheading)`text-center`;

export const Moods = tw.ul`text-center`;

export const Mood = styled.li`
	${tw`inline-block font-medium! cursor-pointer bg-green-600 rounded-full px-4 py-2 text-teal-700 capitalize m-4 hover:bg-white hover:shadow-inner hover:scale-105 transform transition-all duration-300`}
`;
