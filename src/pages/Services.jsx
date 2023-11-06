import { Row, Col, Image, Container } from 'react-bootstrap';
import data from '../assets/data.json';

const Service = ({ image, alt, serviceTitle, desc }) => (
	<Col className='pt-4 text-center'>
		<Image src={image} alt={alt} />
		<p className='fw-bold text-center'>{serviceTitle}</p>
		<p>{desc}</p>
	</Col>
);

const Services = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<h1>Services</h1>
						<hr />
					</Col>
				</Row>
				<Container>
					<Row>
						{data.map((props) => (
							<Service
								className='text-center'
								key={props.id}
								image={props.image}
								alt={props.alt}
								serviceTitle={props.serviceTitle}
								desc={props.desc}
							/>
						))}
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default Services;
