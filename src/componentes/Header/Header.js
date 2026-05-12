import React from "react";
import './Header.css';
import SmallRight from '../../assets/icons/small-right.png';
import SmallLeft from '../../assets/icons/small-left.png';
import Search from '../../assets/icons/search.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Header = ({ onSearch, userEmail, onLogout, onToggleSidebar }) => {
    const handleInput = (event) => {
        onSearch(event.target.value.toLowerCase());
    };

    const getUserGreeting = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) return 'Bom dia';
        if (hour >= 12 && hour < 18) return 'Boa tarde';
        return 'Boa noite';
    };

    const userName = userEmail ? userEmail.split('@')[0] : '';

    return(
        <nav className="header__navigation">
            <div className="navigation">
                <button className="menu-toggle" onClick={onToggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <button className="arrow-left">
                    <img src={SmallLeft} alt="Seta esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={SmallRight} alt="Seta direita" />
                </button>

                <div className="header__search">
                    <img src={Search} alt="Buscar"/>
                    <input 
                        id="search-input" 
                        maxLength="800" 
                        autoCorrect="off" 
                        autoCapitalize="off" 
                        spellCheck="false"
                        placeholder="O que você quer ouvir?"
                        onChange={handleInput}
                    />
                </div>
            </div>

            <div className="header__login">
                {userEmail ? (
                    <div className="user-info">
                        <span className="greeting">{getUserGreeting()}, <span className="user-name">{userName}</span></span>
                        <button className="login" onClick={onLogout}>Sair</button>
                    </div>
                ) : (
                    <>
                        <button className="subscribe">Inscreva-se</button>
                        <button className="login">Entrar</button>
                    </>
                )}
            </div>
        </nav>
    )
};
export default Header