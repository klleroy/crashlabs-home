import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaRegEnvelope } from 'react-icons/fa';
import logo from '../assets/images/logo50x50.png';

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
				<Container>
				<img src={logo} alt='CrashLabs' />
				<Navbar.Brand href='/'>CrashLabs</Navbar.Brand>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<Nav.Link href='/contact'>
								<FaRegEnvelope /> Contact
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
export default Header;
