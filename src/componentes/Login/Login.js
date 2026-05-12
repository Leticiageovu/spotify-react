import React, { useState } from 'react';
import './Login.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const getGreeting = () => {
        const hour = new Date().getHours();
        let greeting = '';
        if (hour >= 5 && hour < 12) greeting = 'Olá, bom dia';
        else if (hour >= 12 && hour < 18) greeting = 'Olá, boa tarde';
        else greeting = 'Olá, boa noite';
        return (
            <>
                {greeting}! <br /> Seja bem-vindo(a).
            </>
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validação simples
        if (!email.includes('@')) {
            setError('Por favor, insira um e-mail válido.');
            return;
        }
        if (password.length !== 6) {
            setError('A senha deve ter exatamente 6 dígitos.');
            return;
        }

        setError('');
        onLogin(email);
    };

    return (
        <div className="login-container">
            <header className="login-header">
                <img src={logoSpotify} alt="Spotify Logo" />
            </header>
            <main className="login-main">
                <section className="login-box">
                    <h1>{getGreeting()}</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">E-mail</label>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="E-mail" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Senha (6 dígitos)" 
                                value={password}
                                maxLength="6"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        <button type="submit" className="login-button">Entrar</button>
                    </form>
                    <hr />
                    <div className="signup-container">
                        <p className="signup-text">Não tem uma conta?</p>
                        <span className="signup-link">Inscreva-se no Spotify</span>
                    </div>
                </section>
            </main>
            
            <footer className="disclaimer-premium" id="premium-banner">
                <div className="text">
                    <p className="disclaimer-premium__title">Testar o Premium de graça</p>
                    <p className="disclaimer-premium__subtitle">
                        Inscreva-se para curtir música ilimitada e podcasts só com alguns
                        anúncios. Não precisa de cartão de crédito.
                    </p>
                </div>
                <div className="button">
                    <button type="button">Inscreva-se grátis</button>
                </div>
            </footer>
        </div>
    );
};

export default Login;
