import Footer from "./components/footer";
import Navigation from "./components/Navigation";

function App() {
  const listItem = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "About",
      url: "/about",
    },
    {
      id: 3,
      name: "Contact",
      url: "/contact",
    },
    {
      id: 4,
      name: "Todo",
      url: "/todo",
    },
  ];
  return (
    <>
      <Navigation listItem={listItem} />
      <main className="h-screen">
        <h1 className="text-3xl font-bold underline">Hallo World</h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
