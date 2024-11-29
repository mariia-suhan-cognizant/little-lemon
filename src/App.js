import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
import { Layout } from "./components/Layout";
import "./App.css";

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
