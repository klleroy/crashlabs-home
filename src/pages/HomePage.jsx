import { Row, Col, Image, Container } from 'react-bootstrap';

const HomePage = () => {
	return (
		<>
		<Container>
			<h1 className='text-center'>Welcome to CrashLabs</h1>
			<p className='text-center'>
				A small but friendly IT Firm in the Southeast Valley of Arizona
			</p>
			<Row>
				<Col className='text-center'>
					<Image src='/images/logo.png' className='img-fluid' />
				</Col>
			</Row>
			</Container>
		</>
	);
};
export default HomePage;
