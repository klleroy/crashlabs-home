import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaRegEnvelope, FaUserFriends, FaUsersCog } from 'react-icons/fa';
import logo from '/images/logo50x50.png';

const Header = () => {
	return (
		<header>
			<Navbar bg='dark' data-bs-theme='dark' expand='lg' collapseOnSelect>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand>
							<img src={logo} alt='CrashLabs' />
							CrashLabs
						</Navbar.Brand>
					</LinkContainer>
					<Navbar.Toggle aria-controls='basic-navbar-nav' />
					<Navbar.Collapse id='basic-navbar-nav'>
						<Nav className='ms-auto'>
							<LinkContainer to='/about'>
								<Nav.Link
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									About &nbsp;
									<FaUserFriends />
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/services'>
								<Nav.Link
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									Services &nbsp;
									<FaUsersCog />
								</Nav.Link>
							</LinkContainer>
							<LinkContainer to='/contact'>
								<Nav.Link
									className={({ isActive }) => (isActive ? 'active' : '')}
								>
									Contact &nbsp;
									<FaRegEnvelope />
								</Nav.Link>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</header>
	);
};
export default Header;
