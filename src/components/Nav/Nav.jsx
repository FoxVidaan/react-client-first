import { faChevronDown, faClone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Nav.scss';

export const Nav = () => {
  return (
    <nav className="Nav">
        <div className="left">
            <div className="brand">
                <img src="/images/logo-client-first-2.svg" alt="logo client first" />
                <span>Client-First</span>
            </div>
            <ul className="nav-list">
                <li className="nav-item dropdown">Docs <FontAwesomeIcon icon={faChevronDown} /></li>
                <li className="nav-item dropdown">Ressources <FontAwesomeIcon icon={faChevronDown} /></li>
                <li className="nav-item dropdown">Languages <FontAwesomeIcon icon={faChevronDown} /></li>
            </ul>
        </div>
        <div className="right">
        <ul className="nav-list">
                <li className="nav-item"><FontAwesomeIcon icon={faClone} />Get the Cloneable</li>
                <li className="nav-item">Log in with <img src="/images/logo-finsweet.svg" alt="logo finsweet" /></li>
            </ul>
        </div>
    </nav>
  )
}
