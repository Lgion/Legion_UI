import { Link } from "react-router-dom";

export default function Nav() {
	return (
		<nav className="nav-header">
			<Link to="/" className="nav-bar_link-home">
				Accueil
			</Link>
			<Link to="/apropos" className="nav-bar_link-apropos">
				A Propos
			</Link>
		</nav>
	);
}