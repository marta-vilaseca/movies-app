import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuthentication } from '../../AuthProvider';
import './navigation.css';

function Navigation() {
  // Hooks
	const { authData, logout } = useAuthentication();
	const navigate = useNavigate();
  
  // Handlers
	function handleLogout() {
		logout();
	}
  
  return (
    <ul className="nav-bar">
        <li><NavLink to="/">All Movies</NavLink></li>
        {!authData && (
				<li><NavLink to='/register'>Register</NavLink></li>
			  )}
			  {!authData && (
				<li><NavLink to='/login'>Login</NavLink></li>
			  )}
			  {authData && (
				<li><NavLink to='/favorites'>Favorites</NavLink></li>
			  )}
			  {authData && (
				<li><span onClick={handleLogout}>Logout</span></li>
			  )}
    </ul>
  );
}

export default Navigation;