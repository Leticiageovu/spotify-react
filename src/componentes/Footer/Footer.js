import React, { useState } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStepBackward, faStepForward, faShuffle, faRepeat } from '@fortawesome/free-solid-svg-icons';

const Footer = ({ currentArtist }) => {
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <footer className="player">
            <div className="player__now-playing">
                {currentArtist ? (
                    <>
                        <div className="now-playing__img">
                            <img 
                                src={currentArtist.urlImg} 
                                alt={currentArtist.name} 
                                style={{ width: '56px', height: '56px', borderRadius: '4px', marginRight: '14px' }}
                            />
                        </div>
                        <div className="now-playing__content">
                            <p className="now-playing__title">{currentArtist.name}</p>
                            <p className="now-playing__subtitle">{currentArtist.genre}</p>
                        </div>
                    </>
                ) : (
                    <div className="now-playing__content">
                        <p className="now-playing__title">Pronto para ouvir?</p>
                        <p className="now-playing__subtitle">Selecione um artista</p>
                    </div>
                )}
            </div>

            <div className="player__controls">
                <div className="player__buttons">
                    <button className="player__button" title="Ordem aleatória">
                        <FontAwesomeIcon icon={faShuffle} />
                    </button>
                    <button className="player__button" title="Anterior">
                        <FontAwesomeIcon icon={faStepBackward} />
                    </button>
                    <button className="player__button player__button--play" onClick={togglePlay} title={isPlaying ? "Pausar" : "Tocar"}>
                        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                    </button>
                    <button className="player__button" title="Próximo">
                        <FontAwesomeIcon icon={faStepForward} />
                    </button>
                    <button className="player__button" title="Repetir">
                        <FontAwesomeIcon icon={faRepeat} />
                    </button>
                </div>
                <div className="player__progress">
                    <span className="player__time">0:00</span>
                    <div className="player__bar">
                        <div className="player__progress-bar"></div>
                    </div>
                    <span className="player__time">3:45</span>
                </div>
            </div>

            <div className="player__volume">
                <div className="player__volume-bar">
                    <div className="player__volume-progress"></div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;