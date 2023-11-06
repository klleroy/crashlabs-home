import { Image } from 'react-bootstrap';

const HomePage = () => {
	return (
		<>
			<h1 className='text-center'>Welcome to CrashLabs</h1>
			<p className='text-center'>
				A SMALL BUT FRIENDLY IT FIRM IN THE SOUTHEAST VALLEY OF ARIZONA
			</p>
			<div className='text-center'>
				<Image src='/images/logo.png' />
			</div>
		</>
	);
};
export default HomePage;
