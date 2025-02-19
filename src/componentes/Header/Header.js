import React from "react";
import './Header.css';
import SmallRight from '../../assets/icons/small-right.png';
import SmallLeft from '../../assets/icons/small-left.png';
import Search from '../../assets/icons/search.png';

const Header = () => {
    return(
        <nav className="header__navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={SmallLeft} alt="Seta esquerda" />
                </button>
            <button className="arrow-right">
                <img src={SmallRight} alt="Seta direita" />
            </button>

            <div className="header__search">
                <img src={Search} alt="Buscar"/>
                <input id="search-input" maxlength="800" autocorrect="off" autocapitalize="off" spellcheck="false"
             placeholder="O que você quer ouvir?"  />
            </div>
        </div>

        <div className="header__login">
            <button className="subscribe">Inscreva-se</button>
            <button className="login">Entrar</button>
        </div>
    </nav>
    )
};
export default Header