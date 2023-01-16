import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AuthService } from '../auth'

export const Navbar = () => {

    const [signedUser, setSignedUser] = useState(false);

    useEffect(() => {
        setSignedUser(AuthService.isUserAuthenticated())
    }, []);

    const logOut = () => {
        AuthService.logout();
    };

    return (
        <nav className="navbar navbar-expand navbar-dark bg-primary">
            {/* Elementos a la izquierda */}
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to={"/home"} className="nav-link">
                        Home
                    </Link>
                </li>
                {signedUser && (
                    <ul>
                        <li style={{ display: 'inline' }}>
                            <Link to={"/propiedades"} className="nav-link">
                                Propiedades
                            </Link>
                        </li>
                        <li style={{ display: 'inline' }}>
                            <Link to={"/huespedes"} className="nav-link">
                                Huespedes
                            </Link>
                        </li>
                    </ul>
                )}
            </div>

            {/* Elementos a la derecha */}
            <div className="navbar-nav ms-auto">
                {signedUser ? (
                    <li className="nav-item">
                        <a href="/signin" className="nav-link" onClick={logOut}>
                            Logout
                        </a>
                    </li>
                ) : (
                    <>
                        <li className="nav-item">
                            <Link to={"/login"} className="nav-link">
                                Login
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/register"} className="nav-link">
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </div>
        </nav>
    )
} 