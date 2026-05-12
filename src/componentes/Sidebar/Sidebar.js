import React, { useState } from 'react';
import './Sidebar.css';
import logoSpotify from '../../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faGlobe, faPlus, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({ userPlaylists, favorites, onCreatePlaylist, onSelectArtist, onSelectPlaylist, selectedPlaylistId, onNavigate, currentView, isOpen, onClose }) => {
    const [isCreating, setIsCreating] = useState(false);
    const [newPlaylistName, setNewPlaylistName] = useState('');

    const handleItemClick = (action) => {
        action();
        if (window.innerWidth <= 1000) {
            onClose();
        }
    };

    const handleStartCreate = () => {
        setIsCreating(true);
        setNewPlaylistName(`Minha Playlist nº ${userPlaylists.length + 1}`);
    };

    const handleConfirmCreate = () => {
        if (newPlaylistName.trim()) {
            onCreatePlaylist(newPlaylistName.trim());
            setNewPlaylistName('');
            setIsCreating(false);
        }
    };

    const handleCancelCreate = () => {
        setIsCreating(false);
        setNewPlaylistName('');
    };

    return (
        <>
            {isOpen && <div className="sidebar-overlay" onClick={onClose}></div>}
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="sidebar-close" onClick={onClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
                <nav className="sidebar__navigation">
                    <div className="logo">
                        <a href="/" onClick={(e) => { e.preventDefault(); handleItemClick(() => onNavigate('home')); }}>
                            <img src={logoSpotify} alt="Logo Spotify" />
                        </a>
                    </div>
                    <ul>
                        <li className={currentView === 'home' && !selectedPlaylistId ? 'active' : ''}>
                            <a href="/" onClick={(e) => { e.preventDefault(); handleItemClick(() => onNavigate('home')); }}>
                                <span><FontAwesomeIcon icon={faHome} /></span>
                                <span>Início</span>
                            </a>
                        </li>
                        <li className={currentView === 'search' ? 'active' : ''}>
                            <a href="/" onClick={(e) => { e.preventDefault(); handleItemClick(() => onNavigate('search')); }}>
                                <span><FontAwesomeIcon icon={faSearch} /></span>
                                <span>Buscar</span>
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="library">
                    <div className="library__content">
                        <button className="library__button">
                            <span className="fa fas fa-book"></span>
                            <span>Sua biblioteca</span>
                        </button>
                        <button className="add-playlist" onClick={handleStartCreate}>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>

                    <div className="sidebar-scroll">
                        {/* Interface de Criação de Playlist */}
                        {isCreating && (
                            <div className="create-playlist-input-container">
                                <input 
                                    type="text" 
                                    className="create-playlist-input"
                                    value={newPlaylistName}
                                    onChange={(e) => setNewPlaylistName(e.target.value)}
                                    autoFocus
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') handleConfirmCreate();
                                        if (e.key === 'Escape') handleCancelCreate();
                                    }}
                                />
                                <div className="create-actions">
                                    <button onClick={handleConfirmCreate} className="action-btn confirm">
                                        <FontAwesomeIcon icon={faCheck} />
                                    </button>
                                    <button onClick={handleCancelCreate} className="action-btn cancel">
                                        <FontAwesomeIcon icon={faTimes} />
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Seção de Playlists Criadas */}
                        {userPlaylists.length > 0 && (
                            <div className="user-section">
                                <p className="section-label">Suas Playlists</p>
                                <ul className="user-list">
                                    {userPlaylists.map(playlist => (
                                        <li 
                                            key={playlist.id} 
                                            className={`user-list-item ${selectedPlaylistId === playlist.id ? 'active' : ''}`}
                                            onClick={() => handleItemClick(() => onSelectPlaylist(playlist))}
                                        >
                                            {playlist.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Seção de Favoritos */}
                        {favorites.length > 0 && (
                            <div className="user-section">
                                <p className="section-label">Artistas Favoritos</p>
                                <ul className="user-list">
                                    {favorites.map(artist => (
                                        <li 
                                            key={artist.id} 
                                            className="user-list-item artist-fav"
                                            onClick={() => handleItemClick(() => onSelectArtist(artist))}
                                        >
                                            <img src={artist.urlImg} alt={artist.name} className="fav-thumb" />
                                            <span>{artist.name}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {userPlaylists.length === 0 && !isCreating && (
                            <section className="section-playlist">
                                <div className="section-playlist__content">
                                    <span className="text title">Crie sua primeira playlist</span>
                                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                                    <button className="section-playlist__button" onClick={handleStartCreate}>
                                        <span>Criar playlist</span>
                                    </button>
                                </div>
                            </section>
                        )}

                        <div className="cookies">
                            <a href="/">Cookies</a>
                        </div>
                        <div className="languages">
                            <button className="languages__button">
                                <span><FontAwesomeIcon icon={faGlobe} /></span>
                                <span>Português do Brasil</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;