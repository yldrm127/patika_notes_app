import "./App.css";
import Header from "./components/header";
import Notes from "./components/notes";
import NotesList from "./components/notesList";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App container mt-5 bg-secondary d-flex flex-column justify-content-center align-items-center">
      <Header />
      <Notes />
      <NotesList />
    </div>
  );
}

export default App;
