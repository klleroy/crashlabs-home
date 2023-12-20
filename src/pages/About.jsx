import { Container, Row, Col, Image } from 'react-bootstrap';
import family from '/images/family.jpeg';

const bios = [
	'CrashLabs is a full service Technology Company in the East Valley of Phoenix, AZ. I specialize in Network Support, Computer Repair and Website Management/Creation.',

	'I have over fifteen years of technical experience in Web Development, Cloud Computing and Server Management. I worked at Microsoft for 10 years during which time I was involved in testing and deploying Operating Systems and Servers. I also managed the IT Infrastructure which included the deployment of Azure cloud services, Ubiquiti WiFi system and network patch panels. I aim to bring effective practical solutions which will positively impact your business.',

	'On a personal level, I have several passions that keep me busy outside of work. First and foremost, I have 2 daughters who are active in their sporting activities. Our oldest, is just ramping up her volleyball career after being involved in competitive dance for a few years. While our youngest, is involved in American Ninja Warrior which keeps her and us quite busy!',

	"When I'm not hanging with the family, I enjoy watching sports. I especially love watching MLB Baseball (Go Dbacks!) and College Basketball. Having lived in the Seattle area for a number of years, it was incredibly exciting to watch Playoff Baseball this season. We have also recently found a love of camping and have taken a few trips and are looking forward to more this next year.",

	'Below is an interview I did with the local Chamber of Commerce, here in Queen Creek, where you can learn more about me and my business. I look forward to helping your business become successful by serving your technology needs.',
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
							<div className='video-container'>
								<iframe
									width='560'
									height='315'
									src='https://www.youtube-nocookie.com/embed/emz_WH0HBBg?si=UQbaGqH7q8S0wH11'
									title='YouTube video player'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
								></iframe>
							</div>
						</Container>
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default About;
