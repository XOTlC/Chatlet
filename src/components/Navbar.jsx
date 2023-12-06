import { useLocation, Link } from "react-router-dom";
import styles from "@styles";

export default function Navbar() {
    const location = useLocation();

    return (
        <header className={styles.all.navbar}>
            <Link to="/" className={styles.all.navbarTitle}>Chatlet</Link>

            {location.pathname === "/" && <Link to="/settings" className={styles.all.navbarIcon}>
                <i className="fas fa-gear" />
            </Link>}
        </header>
    )
}