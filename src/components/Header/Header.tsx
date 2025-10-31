import { useState } from 'react';
import { FiExternalLink, FiMenu, FiMoon, FiSearch, FiX } from 'react-icons/fi'

export const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchVisible(false);
  };

  return (
    <header>
      <div className="h-16 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <button className="icon-button lg:hidden" onClick={() => console.log("Hidden clicado")}>
            <FiMenu size={20} />
          </button>
          <div className="flex items-center">
            <span className="text-xl font-bold text-(--text-primary)">
              SiGPEI-DOCS
            </span>
          </div>
        </div>

        <div className="hidden md:block grow max-w-md mx-4">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Buscar na documentação..."
              className="search-input"
              onChange={(e) => console.log(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          </form>
        </div>

        <div className="flex items-center space-x-2">
          <button onClick={() => console.log("Search clicado")} className="icon-button md:hidden" title="Buscar">
            {isSearchVisible ? <FiX size={20} /> : <FiSearch size={20} />}
          </button>
          <div className="hidden md:flex items-center space-x-2">
            <a href="https://sigpei.apps.uern.br" target="_blank" rel="noopener noreferrer" className="icon-button" title="Site em Produção">
              <FiExternalLink size={20} />
            </a>
            <div className="w-px h-6 bg-border mx-1"></div>
          </div>
          <button
            onClick={() => console.log("Tema alterado")}
            className="icon-button"
            title='Alternar para tema escuro'
          >
            <FiMoon size={20} />
          </button>
        </div>
      </div>
    </header>
  )
}