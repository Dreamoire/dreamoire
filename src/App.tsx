import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar.tsx";
import AppRouter from "./router/AppRouter.tsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="main-container">
        <AppRouter />
      </main>
    </BrowserRouter>
  );
}

export default App;
