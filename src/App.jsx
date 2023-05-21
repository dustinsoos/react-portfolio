import Nav from "./components/nav";
import Header from "./components/header";
import Main from "./components/main";

function App() {
  return (
    <>
      <div className="container mx-auto px-8 md:px-16 lg:px-32 xl:px-64 ">
        <Nav />
        <Header />
        <Main />
      </div>
    </>
  );
}

export default App;
