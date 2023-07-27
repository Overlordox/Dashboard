import React from "react";




export default function Header() {

return(
    <header className="flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Nom de l'entreprise</h1>
        <nav>
          <ul className="flex">
            <li className="mr-4">
              <a href="#" className="hover:underline hover:text-gray-300 transition">
                Accueil
              </a>
            </li>
            <li className="mr-4">
              <a href="#" className="hover:underline hover:text-gray-300 transition">
                Description
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline hover:text-gray-300 transition">
                Produits
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
}

