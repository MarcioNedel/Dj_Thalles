import './Album.css';
import { useNavigate } from 'react-router-dom';

import ThallesLOG from '../assets/ThallesLOG.png';
import AlbumDj1 from '../assets/ALBUM/AlbumDj1.jpeg';
import AlbumDj2 from '../assets/ALBUM/AlbumDj2.jpeg';
import AlbumDj3 from '../assets/ALBUM/AlbumDj3.jpg';
import AlbumDj4 from '../assets/ALBUM/AlbumDj4.jpg';
import AlbumDj5 from '../assets/ALBUM/AlbumDj5.jpg';
import AlbumDj6 from '../assets/ALBUM/AlbumDj6.jpg';
import AlbumDj7 from '../assets/ALBUM/AlbumDj7.jpg';
import AlbumDj8 from '../assets/ALBUM/AlbumDj8.jpg';
import AlbumDj9 from '../assets/ALBUM/AlbumDj9.jpg';
import AlbumDj10 from '../assets/ALBUM/AlbumDj10.jpg';
import AlbumDj11 from '../assets/ALBUM/AlbumDj11.jpg';
import AlbumDj12 from '../assets/ALBUM/AlbumDj12.jpg';

import albumVid from '../assets/ALBUM/albumVid.mp4';

function Album() {
  const navigate = useNavigate(); // ✅ movido para o início do componente

  return (
    <div>
      <div className="titulo">
        <h1> Album De Fotos</h1>
      </div>

      <div>
        <img src={ThallesLOG} alt="logo thalles" />
      </div>

      {/* ✅ Botão inserido aqui */}
      <div className="volts">
        <button onClick={() => navigate('/')}> Início </button>
      </div>

      <div className="fullAlbum">
        <div className="album1">
          <a href={AlbumDj1} target="_blank" rel="noopener noreferrer">
            <img src={AlbumDj1} alt="thalles" />
          </a>
        </div>

        <div className="album2">
          <a href={AlbumDj2} target="_blank" rel="noopener noreferrer">
            <img src={AlbumDj2} alt="thalles" />
          </a>
        </div>

        <div className="album3">
          <a href={AlbumDj3} target="_blank" rel="noopener noreferrer">
            <img src={AlbumDj3} alt="thalles" />
          </a>
        </div>

        <div className="album4">
          <a href={AlbumDj4} target="_blank" rel="noopener noreferrer">
            <img src={AlbumDj4} alt="thalles" />
          </a>
        </div>

        <div className="album5">
          <a href={AlbumDj5} target="_blank" rel="noopener noreferrer">
            <img src={AlbumDj5} alt="thalles" />
          </a>
        </div>

        <div className="album6">
          <a href={AlbumDj6} target="_blank" rel="noopener noreferrer">
            <img src={AlbumDj6} alt="thalles" />
          </a>
        </div>

        <div className="album7">
          <a href={AlbumDj7} target="_blank" rel="noopener noreferrer">
            <img src={AlbumDj7} alt="thalles" />
          </a>
        </div>

        <div className="album8">
          <a href={AlbumDj8} target="_blank" rel="noopener noreferrer">
            <img src={AlbumDj8} alt="thalles" />
          </a>
        </div>

        <div className="album9">
          <a href={AlbumDj9} target="_blank" rel="noopener noreferrer">
            <img src={AlbumDj9} alt="thalles" />
          </a>
        </div>

        <div className="album10">
          <a href={AlbumDj10} target="_blank" rel="noopener noreferrer">
            <img src={AlbumDj10} alt="thalles" />
          </a>
        </div>

        <div className="album11">
          <a href={AlbumDj11} target="_blank" rel="noopener noreferrer">
            <img src={AlbumDj11} alt="thalles" />
          </a>
        </div>

        <div className="album12">
          <a href={AlbumDj12} target="_blank" rel="noopener noreferrer">
            <img src={AlbumDj12} alt="thalles" />
          </a>
        </div>
      </div>

      <div className="VID">
        <video controls width="600">
          <source src={albumVid} type="video/mp4" />
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  );
}

export default Album;