import { Routes, Route, useNavigate } from 'react-router-dom';
import { useRef } from 'react';

import Album from './pags/Album';

import ThallesLOG from './assets/ThallesLOG.png';
import FOTODJ0 from './assets/FOTODJ0.jpg';
import FOTODJ1 from './assets/FOTODJ1.jpeg';
import FOTODJ2 from './assets/FOTODJ2.jpg';
import FOTODJ3 from './assets/FOTODJ3.jpg';
import FOTODJ4 from './assets/FOTODJ4.jpg';

import djvideo from './assets/djvideo.mp4';

function App() {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      

      {/* Rotas */}
      <Routes>
        <Route path="/album" element={<Album />} />
        <Route path="/" element={
          <div>
             

            <div className="top">
              <img src={ThallesLOG} alt="logo thalles" />
            </div>

            <div className="left">
              <a href={FOTODJ0} target="_blank" rel="noopener noreferrer">
                <img src={FOTODJ0} alt="Foto DJ 0" />
              </a>
            </div>

            <div className="countainer">
              {[FOTODJ1, FOTODJ2, FOTODJ3, FOTODJ4].map((foto, i) => (
                <div className="fotosTOP" key={i}>
                  <a href={foto} target="_blank" rel="noopener noreferrer">
                    <img src={foto} alt={`Foto DJ ${i + 1}`} />
                  </a>
                </div>
              ))}
            </div>

             <div className="botao">
        <button onClick={() => navigate('/album')}> Álbum</button>
      </div>

            <div className="bio">
              <h1>
                Nascido em Palmeira das Missões (RS), DJ Thalles vem se destacando com sets envolventes e cheios de identidade. Já abriu shows de grandes nomes como MC Kekel, DJ GBR e Rany Money (Cone Crew Diretoria), consolidando seu espaço na cena musical.
<br></br>
Com passagens por diversas casas no Rio Grande do Sul e Santa Catarina, entrega uma performance open format, mesclando com maestria hip hop, pop, reggaeton, brasilidades e funk, sempre com técnica e conexão com o público.

              </h1>
            </div>

            <div className="logored">
              <img src={ThallesLOG} alt="Descrição da imagem" />
            </div>

            <div className="mid" onClick={handleVideoClick}>
              <video
                controls
                width="600"
                ref={videoRef}
                onClick={stopPropagation}
              >
                <source src={djvideo} type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
              </video>
            </div>

            <hr />

            <div className="end">
              <h2>Contato</h2>
              <div className="social-links">
                <a href="https://www.instagram.com/djthalles_/" target="_blank" className="instagram">Instagram</a>
                <a href="https://wa.me/5551997649780" target="_blank" className="whatsapp">Whatsapp</a>
              </div>
              <p>E-mail: thallesbs9@hotmail.com</p>
            </div>
          </div>
         } />
      </Routes>
    </>
  );
}

export default App;