import { Container, Row, Col, Image } from 'react-bootstrap';
import family from '/images/family.jpeg';

const bios = [
	'CrashLabs is a full service Technology Company in the East Valley of Phoenix, AZ. I specialize in Network Support, Computer Repair and Website Management/Creation.',

	'I have over fifteen years of technical experience in Web Development, Cloud Computing and Server Management. I aim to bring effective practical solutions which will positively impact your business.',

	'On a personal level, I have several passions that keep me busy outside of work. First and foremost, I have 2 daughters who are active in their sporting activities. Our oldest, is just ramping up her Volleyball career after being involved in competitive Dance for a few years. While our youngest, is involved in American Ninja Warrior which keeps her and us quite busy!',

	"When I'm not hanging with the family, I enjoy watching Sports. I especially love watching Baseball and College Basketball. Having lived in the Seattle area for a number of years, it is incredibly exciting to watch Playoff Baseball. Go Dbacks!!",

	'I would love to bring my passion for quality and technology to help your Company become succesful. I look forward to hearing from you!',
];

const About = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<h1>About Me</h1>
						<hr />
					</Col>
				</Row>
				<Row>
					<Col>
						<Image src={family} className='float-start mx-3' thumbnail />
						<Container>
							{bios.map((bio, key) => (
								<p key={key}>{bio}</p>
							))}
						</Container>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default About;
