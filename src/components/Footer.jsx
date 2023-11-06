// import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='footer mt-5 py-5'>
			<div className='container text-center'>
				<span className='text-muted'>CrashLabs &copy; {currentYear}</span>
			</div>
		</footer>
	);
};
export default Footer;
