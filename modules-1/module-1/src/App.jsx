import Profile from "./Profile";
import Skills from "./Skills";
import Contact from "./Contact";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <p className="small-title">WELCOME TO MY PORTFOLIO</p>
        <h1>My Personal Profile</h1>
        <p className="subtitle">
          Frontend Development Student
        </p>
      </header>

      <main className="profile-container">
        <Profile
          name="Tasnim"
          about="I am a frontend development student learning HTML, CSS, JavaScript and React."
        />

        <Skills />

        <Contact email="example@email.com" />
      </main>

      <footer>
        <p>Built with React • 2026</p>
      </footer>
    </div>
  );
}

export default App;