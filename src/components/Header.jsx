import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaRegEnvelope, FaUserFriends, FaUsersCog } from 'react-icons/fa';
import logo from '../assets/images/logo50x50.png';

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' data-bs-theme='dark' expand='lg' collapseOnSelect>
				<Container>
					<img src={logo} alt='CrashLabs' />
					<Navbar.Brand href='/'>CrashLabs</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='/about'>
								About &nbsp;
								<FaUserFriends />
							</Nav.Link>
							<Nav.Link href='/services'>
								Services &nbsp;
								<FaUsersCog />
							</Nav.Link>
							<Nav.Link href='/contact-us'>
								Contact &nbsp;
								<FaRegEnvelope />
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
export default Header;
