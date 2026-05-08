import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

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
    <div className="min-h-screen bg-slate-100 flex flex-col">
      <Navigation listItem={listItem} />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default App;
