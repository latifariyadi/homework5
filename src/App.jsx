import "./App.css";
import Image from "./components/image/Image";
import Heading from "./components/heading/Heading";
import Title from "./components/title/Title";
import Artist from "./components/artist/Artist";
import Button from "./components/button/Button";
import data from "./data";

function App() {
  return (
    <div className="App">
      <Heading heading="Create Playlist" />
      <Image img={data.album.images[0].url} />
      <Title title={data.name} />
      <Artist artist={data.artists[0].name} />
      <Button select="Select" />
    </div>
  );
}

export default App;
