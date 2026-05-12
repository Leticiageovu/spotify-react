import React from 'react';
import './Main.css';
import artistsData from '../../api-artists/artists.json';

import Playlist1 from '../../assets/playlist/1.jpeg';
import Playlist2 from '../../assets/playlist/2.png';
import Playlist3 from '../../assets/playlist/3.jpeg';
import Playlist4 from '../../assets/playlist/4.jpeg';
import Playlist5 from '../../assets/playlist/5.jpeg';
import Playlist6 from '../../assets/playlist/6.jpeg';
import Playlist7 from '../../assets/playlist/7.jpeg';
import Playlist8 from '../../assets/playlist/8.jpeg';
import Playlist9 from '../../assets/playlist/9.jpeg';
import Playlist10 from '../../assets/playlist/10.jpeg';
import Playlist11 from '../../assets/playlist/11.jpeg';
import Playlist12 from '../../assets/playlist/12.jpeg';
import Playlist13 from '../../assets/playlist/13.jpeg';
import Playlist14 from '../../assets/playlist/14.jpeg';
import Playlist15 from '../../assets/playlist/15.jpeg';

import { faPlay, faHeart, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const playlistsData = [
    { name: 'Boas festas', image: Playlist1, className: 'card1' },
    { name: 'Feitos para você', image: Playlist2, className: 'card2' },
    { name: 'Lançamentos', image: Playlist3, className: 'card3' },
    { name: 'Creators', image: Playlist4, className: 'card4' },
    { name: 'Para treinar', image: Playlist5, className: 'card5' },
    { name: 'Podcasts', image: Playlist6, className: 'card6' },
    { name: 'Sertanejo', image: Playlist7, className: 'card7' },
    { name: 'Samba e pagode', image: Playlist8, className: 'card8' },
    { name: 'Funk', image: Playlist9, className: 'card9' },
    { name: 'MPB', image: Playlist10, className: 'card10' },
    { name: 'Rock', image: Playlist11, className: 'card11' },
    { name: 'Hip Hop', image: Playlist12, className: 'card12' },
    { name: 'Indie', image: Playlist13, className: 'card13' },
    { name: 'Relax', image: Playlist14, className: 'card14' },
    { name: 'Música Latina', image: Playlist15, className: 'card15' },
];

const Main = ({ searchTerm, onSelectArtist, favorites, onToggleFavorite, userPlaylists, onAddToPlaylist, selectedPlaylist, onRemoveFromPlaylist, onDeletePlaylist, view }) => {
    const filteredArtists = artistsData.artists.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Se uma playlist estiver selecionada e não houver termo de busca, mostra o conteúdo da playlist
    if (selectedPlaylist && searchTerm === '') {
        return (
            <div className="playlist-container">
                <div id="result-playlists">
                    <div className="playlist">
                        <div className="playlist-header-container">
                            <h1 id="greeting">{selectedPlaylist.name}</h1>
                            <button 
                                className="delete-playlist-button" 
                                onClick={() => onDeletePlaylist(selectedPlaylist.id)}
                            >
                                Excluir Playlist
                            </button>
                        </div>
                        <h2 className="session">Suas músicas nesta playlist</h2>
                    </div>
                    <div className="grid-container">
                        {selectedPlaylist.tracks && selectedPlaylist.tracks.length > 0 ? (
                            selectedPlaylist.tracks.map(artist => (
                                <div 
                                    key={artist.id} 
                                    className="artist-card" 
                                    onClick={() => onSelectArtist(artist)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="card-img">
                                        <img src={artist.urlImg} alt={artist.name} className="artist-img" />
                                        
                                        <div className="play">
                                            <span className="fa fa-solid fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                                        </div>

                                        <div className="card-actions-fixed">
                                            <button 
                                                className="remove-button" 
                                                title="Remover da playlist"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    onRemoveFromPlaylist(artist.id, selectedPlaylist.id);
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faTimes} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-text">
                                        <span className="artist-name">{artist.name}</span>
                                        <span className="artist-categorie">{artist.genre}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p style={{ color: '#b3b3b3', margin: '24px' }}>Esta playlist ainda está vazia. Busque artistas para adicionar!</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Visualização da aba BUSCAR (limpa, apenas resultados)
    if (view === 'search') {
        return (
            <div className="playlist-container">
                <div id="result-artist" style={{ display: 'block' }}>
                    <div className="playlist">
                        <h2 className="session" style={{ marginBottom: '24px' }}>
                            {searchTerm === '' ? 'Busque seus artistas favoritos' : `Resultados para "${searchTerm}"`}
                        </h2>
                    </div>
                    <div className="grid-container">
                        {searchTerm !== '' && filteredArtists.length > 0 ? (
                            filteredArtists.map(artist => {
                                const isFavorite = favorites.some(fav => fav.id === artist.id);
                                return (
                                    <div 
                                        key={artist.id} 
                                        className="artist-card" 
                                        onClick={() => onSelectArtist(artist)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <div className="card-img">
                                            <img src={artist.urlImg} alt={artist.name} className="artist-img" />
                                            
                                            <div className="play">
                                                <span className="fa fa-solid fa-play"><FontAwesomeIcon icon={faPlay} /></span>
                                            </div>

                                            <div className="card-actions">
                                                <button 
                                                    className={`favorite-button ${isFavorite ? 'active' : ''}`}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        onToggleFavorite(artist);
                                                    }}
                                                    title="Favoritar"
                                                >
                                                    <FontAwesomeIcon icon={faHeart} />
                                                </button>

                                                <div className="add-to-playlist-container" onClick={(e) => e.stopPropagation()}>
                                                    <button 
                                                        className="add-button" 
                                                        title="Adicionar à playlist"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            if (userPlaylists.length === 0) {
                                                                alert('Crie uma playlist na barra lateral primeiro!');
                                                            } else if (userPlaylists.length === 1) {
                                                                onAddToPlaylist(artist, userPlaylists[0].id);
                                                            }
                                                        }}
                                                    >
                                                        <FontAwesomeIcon icon={faPlus} />
                                                    </button>
                                                    {userPlaylists.length > 0 && (
                                                        <div className="playlist-dropdown">
                                                            <p>{userPlaylists.length > 1 ? 'Adicionar a:' : 'Playlist:'}</p>
                                                            {userPlaylists.map(pl => (
                                                                <button 
                                                                    key={pl.id} 
                                                                    onClick={(e) => {
                                                                        e.preventDefault();
                                                                        onAddToPlaylist(artist, pl.id);
                                                                    }}
                                                                >
                                                                    {pl.name}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-text">
                                            <span className="artist-name">{artist.name}</span>
                                            <span className="artist-categorie">{artist.genre}</span>
                                        </div>
                                    </div>
                                );
                            })
                        ) : searchTerm !== '' ? (
                            <p style={{ color: '#fff', marginLeft: '24px' }}>Nenhum artista encontrado.</p>
                        ) : (
                            <p style={{ color: '#b3b3b3', marginLeft: '24px' }}>Digite algo na barra de busca acima para começar.</p>
                        )}
                    </div>
                </div>
            </div>
        );
    }

    // Visualização da aba INÍCIO (Home padrão)
    return (
        <div className="playlist-container">
            <div id="result-playlists">
                <div className="playlist">
                    <h1 id="greeting">Boas vindas</h1>
                    <h2 className="session">Navegar por todas as seções</h2>
                </div>
                <div className="offer__scroll-container">
                    <div className="offer__list">
                        <section className="offer__list-item">
                            {playlistsData.map((playlist, index) => (
                                <a href="/" key={index} className={`cards ${playlist.className}`} onClick={(e) => e.preventDefault()}>
                                    <img src={playlist.image} alt={playlist.name} />
                                    <span>{playlist.name}</span>
                                </a>
                            ))}
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
