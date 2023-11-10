import { Row, Col, Image } from 'react-bootstrap';

const HomePage = () => {
	return (
		<>
			<h1 className='text-center'>Welcome to CrashLabs</h1>
			<p className='text-center'>
				A small but friendly IT Firm in the Southeast Valley of Arizona
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
