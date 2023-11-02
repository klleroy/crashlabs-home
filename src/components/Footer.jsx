import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='fixed-bottom'>
			<Container>
				<Row>
					<Col className='text-center py-3'>
						<p>CrashLabs &copy; {currentYear}</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
export default Footer;
