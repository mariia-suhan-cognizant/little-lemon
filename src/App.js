import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
import "./App.css";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <header>
          <Nav></Nav>
        </header>
      </Layout>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
