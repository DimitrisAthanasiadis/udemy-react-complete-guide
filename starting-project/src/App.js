import './App.css';
import Post from './components/Post/Post';

function App() {
  return (
    <main>
      <Post author="Jim" body="Jim's text" />
      <Post author="Dimitris" body="Dimitris' text" />
    </main>
  );
}

export default App;
