import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './componentes/Header/Header';
import Sidebar from './componentes/Sidebar/Sidebar';
import Main from './componentes/Main/Main';
import Footer from './componentes/Footer/Footer';
import Login from './componentes/Login/Login';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [currentArtist, setCurrentArtist] = useState(null);
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(null);
  const [view, setView] = useState('home'); // 'home' ou 'search'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Estados para Playlists e Favoritos
  const [userPlaylists, setUserPlaylists] = useState(() => {
    const saved = localStorage.getItem('spotify_playlists');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('spotify_favorites');
    return saved ? JSON.parse(saved) : [];
  });

  // Playlist selecionada calculada dinamicamente
  const selectedPlaylist = userPlaylists.find(pl => pl.id === selectedPlaylistId);

  useEffect(() => {
    localStorage.setItem('spotify_playlists', JSON.stringify(userPlaylists));
  }, [userPlaylists]);

  useEffect(() => {
    localStorage.setItem('spotify_favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleLogin = (email) => {
    setUserEmail(email);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserEmail('');
    setCurrentArtist(null);
    setSelectedPlaylistId(null);
  };

  const handleSelectArtist = (artist) => {
    setCurrentArtist(artist);
  };

  const handleSearch = (value) => {
    setSearchTerm(value);
    if (value !== '') {
        setSelectedPlaylistId(null);
        setView('search');
    }
  };

  const handleCreatePlaylist = (name) => {
    if (name) {
      setUserPlaylists(prev => [...prev, { id: Date.now(), name, tracks: [] }]);
    }
  };

  const handleSelectPlaylist = (playlist) => {
    setSelectedPlaylistId(playlist ? playlist.id : null);
    setSearchTerm('');
    setView('home');
  };

  const handleNavigate = (newView) => {
    setView(newView);
    setSelectedPlaylistId(null);
    setSearchTerm('');
  };

  const toggleFavorite = (artist) => {
    setFavorites(prev => {
      const isFavorite = prev.some(fav => fav.id === artist.id);
      if (isFavorite) {
        return prev.filter(fav => fav.id !== artist.id);
      } else {
        return [...prev, artist];
      }
    });
  };

  const addArtistToPlaylist = (artist, playlistId) => {
    let success = false;
    setUserPlaylists(prev => prev.map(pl => {
      if (pl.id === playlistId) {
        const tracks = pl.tracks || [];
        if (tracks.some(t => t.id === artist.id)) {
          alert('Este artista já está nesta playlist!');
          success = false;
          return pl;
        }
        success = true;
        return { ...pl, tracks: [...tracks, artist] };
      }
      return pl;
    }));
    
    // Pequeno delay para o alert não bloquear a atualização do estado
    setTimeout(() => {
      if (success) {
        alert(`"${artist.name}" adicionado à playlist!`);
      }
    }, 100);
  };

  const removeArtistFromPlaylist = (artistId, playlistId) => {
    setUserPlaylists(prev => prev.map(pl => {
      if (pl.id === playlistId) {
        return { ...pl, tracks: pl.tracks.filter(t => t.id !== artistId) };
      }
      return pl;
    }));
  };

  const removePlaylist = (playlistId) => {
    const playlist = userPlaylists.find(pl => pl.id === playlistId);
    if (window.confirm(`Tem certeza que deseja excluir a playlist "${playlist.name}"?`)) {
      setUserPlaylists(prev => prev.filter(pl => pl.id !== playlistId));
      setSelectedPlaylistId(null);
      setView('home');
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <Sidebar 
        userPlaylists={userPlaylists} 
        favorites={favorites} 
        onCreatePlaylist={handleCreatePlaylist}
        onSelectArtist={handleSelectArtist}
        onSelectPlaylist={handleSelectPlaylist}
        selectedPlaylistId={selectedPlaylistId}
        onNavigate={handleNavigate}
        currentView={view}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <Header 
        onSearch={handleSearch} 
        userEmail={userEmail} 
        onLogout={handleLogout} 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      <Main 
        searchTerm={searchTerm} 
        onSelectArtist={handleSelectArtist}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        userPlaylists={userPlaylists}
        onAddToPlaylist={addArtistToPlaylist}
        selectedPlaylist={selectedPlaylist}
        onRemoveFromPlaylist={removeArtistFromPlaylist}
        onDeletePlaylist={removePlaylist}
        view={view}
      />
      <Footer currentArtist={currentArtist} />
    </div>
  );
}

export default App;
