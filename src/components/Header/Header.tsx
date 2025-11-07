import React, { useState } from 'react';
import { FiExternalLink, FiMenu, FiMoon, FiSearch, FiSun, FiX } from 'react-icons/fi'
import type { HeaderProps } from './Header.types';
import { useTheme } from '../../hooks/useTheme';

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { theme, toggleTheme } = useTheme();

  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearchVisible(false);
  };

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  }

  return (
    <header>
      <div className="h-16 flex items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <button className="icon-button lg:hidden" onClick={toggleSidebar}>
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          </form>
        </div>

        <div className="flex items-center space-x-2">
          <button onClick={toggleSearch} className="icon-button md:hidden" title="Buscar">
            {isSearchVisible ? <FiX size={20} /> : <FiSearch size={20} />}
          </button>
          <div className="hidden md:flex items-center space-x-2">
            <a href="https://sigpei.apps.uern.br" target="_blank" rel="noopener noreferrer" className="icon-button" title="Site em Produção">
              <FiExternalLink size={20} />
            </a>
            <div className="w-px h-6 bg-border mx-1"></div>
          </div>
          <button
            onClick={toggleTheme}
            className="icon-button"
            title={theme === 'light' ? 'Mudar para o tema escuro' : 'Mudar para o tema claro'}
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>
      </div>

      {isSearchVisible && (
        <div className="md:hidden px-4 py-3 bg-surface border-b border-border shadow-inner">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Buscar na documentação..."
              className="search-input"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              autoFocus
            />
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
          </form>
        </div>
      )}
    </header>
  )
}