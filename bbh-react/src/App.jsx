import "./style/App.css";
import { MyButton } from "./common/button"; // vérifier le que l'import soit en .jsx
import Profile from "./common/user";
import { Produit } from "./common/product";
import { useState } from "react";
import { Game} from "./common/morpion.jsx";
import Market, { FilterableProductTable } from "./common/market.jsx";
function App() {
  const [count, setCount] = useState(0);

  function SupportClic() {
    setCount(count + 1);
  }
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <header className="h-16 w-full bg-gray-800/90 backdrop-blur flex justify-center px-4 shadow-xl z-20 text-center items-center text-2xl font-extrabold text-white border-b-2 border-indigo-500">
        Bienvenue sur React
      </header>

      <main className="flex-1 p-6 pt-24 w-full flex items-center justify-center">
        <div className="bg-white p-10 sm:p-12 rounded-2xl shadow-2xl space-y-8 w-full text-center max-w-[900px]">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
            Bienvenue sur la page React de{" "}
            <span className="text-indigo-600">Julien</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Un aperçu d'une application moderne construite avec React et
            Tailwind CSS.
          </p>

          <div className="pt-4 items-center">
            <h1 className="uppercase text-2xl font-bold">Les compteurs :</h1>
            <MyButton count={count} onClick={SupportClic}  />
            <br className="mb-6 mt-6" />
            <MyButton count={count} onClick={SupportClic}  />
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </main>
      <div className="flex justify-center items-center mb-12 bg-slate-400 min-w-[250px] rounded-3xl mx-auto">
        <Produit />
      </div>
      <div className="border-3 border-black bg-slate-600 py-7 w-[1000px] flex justify-center mx-auto">
        <Game />
      </div>
      <div className="flex justify-center item-center text-center border-2 border-black w-[450px] flex-col mx-auto mt-12 bg-white ">
        <Market />
      </div>
      <footer className="h-16 bg-gray-800/90 backdrop-blur mt-12 flex justify-center px-4 shadow-xl z-20 text-center items-center font-medium text-gray-300 border-t border-gray-700">
        &copy; 2025 - Ceci est un footer simple.
      </footer>
    </div>
  );
}

export default App;
