import { Row, Col, Image } from 'react-bootstrap';

const HomePage = () => {
	return (
		<>
			<h1 className='text-center'>Welcome to CrashLabs</h1>
			<p className='text-center'>
				A SMALL BUT FRIENDLY IT FIRM IN THE SOUTHEAST VALLEY OF ARIZONA
			</p>
			<Row>
				<Col className='text-center'>
					<Image src='/images/logo.png' className='img-fluid' />
				</Col>
			</Row>
		</>
	);
};
export default HomePage;
