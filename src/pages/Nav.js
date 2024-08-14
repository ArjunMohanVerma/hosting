import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main.css";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header className="header">
			<h3 >LOGO</h3>
			<nav ref={navRef}>
				<a href="/home">Home</a>
				<a href="/about">About Us</a>
				<a href="/services">Services</a>
				<a href="/ShopProducts">Products</a>
                <a href="blogs">Blog</a>
                <a href="/contact">Contact Us</a>
				<a href="/login">Login/SignUp</a>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}


export default Navbar;