import { Row, Col, Image, Container } from 'react-bootstrap';
import computerRepair from '../assets/images/computerRepair.jpeg';
import networkAdmin from '../assets/images/networkAdmin.jpeg';
import websiteCreation from '../assets/images/websiteCreation.jpeg';

const Services = () => {
	return (
		<>
			<Container className='mt-5'>
				<Row>
					<Col>
						<h1>Services</h1>
						<hr />
					</Col>
				</Row>
				<Container>
					<Row className='mt-3'>
						<Col md={4}>
							<Image src={computerRepair} />
							<p>
								<strong>Computer Repair </strong> &#45; I am an experienced
								Technician with experience in both MacOS and Windows
								Environments.
							</p>
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col md={4}>
							<Image src={networkAdmin} />
							<p>
								<strong>Network &amp; Firewall Setup </strong> &#45; As a former
								IT Operations Manager, I have had experience in both managing
								and setup of Network Infrastructure.
							</p>
						</Col>
					</Row>
					<Row className='mt-3'>
						<Col md={4}>
							<Image src={websiteCreation} />
							<p>
								<strong>Website Creation </strong> &#45; I have experience in
								both Website creation and management of both CMS and full web
								applications.
							</p>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default Services;
