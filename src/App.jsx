import './App.css';
import { cantanteActivo } from './data/cantantes';
import Header from './components/Header';
import TopProgressBar from './components/TopProgressBar';
import ArtistSection from './components/ArtistSection';
import PlayerControls from './components/PlayerControls';
import CheckboxGroup from './components/CheckboxGroup';
import SearchBar from './components/SearchBar';
import EmojiCarousel from './components/EmojiCarousel';
import BottomNav from './components/BottomNav';

/**
 * Componente principal App
 * Ensambla la estructura completa del reproductor móvil inyectando los datos del artista activo.
 */
function App() {
  return (
    <main className="app-viewport">
      <div className="phone-mockup">
        <Header
          artista={cantanteActivo.nombre}
          album={cantanteActivo.album}
        />
        <TopProgressBar progreso={58} />
        <ArtistSection
          imagen={cantanteActivo.imagen}
          altText={cantanteActivo.nombre}
        />
        <PlayerControls progreso={45} />
        <CheckboxGroup />
        <SearchBar texto={cantanteActivo.textoBusqueda} />
        <EmojiCarousel emojis={cantanteActivo.emojis} />
        <BottomNav />
      </div>
    </main>
  );
}

export default App;