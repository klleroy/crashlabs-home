import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

const Services = () => {
	const serviceImages = ({ image, altText }) => [
		<div className='col-lg-3 col-md-6 pt-4 text-center'>
			<img src={image} alt={altText} className='langs' />
		</div>,
	];

	return (
		<>
			<h1>Services</h1>
			<hr />
			<Row>
				<Col md={4}></Col>
			</Row>
		</>
	);
};
export default Services;
