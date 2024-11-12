import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Nav } from "./components/Nav";
import { Layout } from "./components/Layout";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Header></Header>
        <Nav></Nav>
      </Layout>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
