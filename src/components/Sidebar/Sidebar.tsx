import React from 'react';
import type { SidebarProps } from './Sidebar.types';
import { NavItem } from './components/NavItem';
import { FiExternalLink, FiHome, FiKey, FiLogIn, FiUser, FiUserCheck, FiUserPlus, FiUsers } from 'react-icons/fi';
import { ExpandableNavItem } from './components/ExpandNavItem';
import { ExternalNavItem } from './components/ExternalNavItem';

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <>
      {isOpen && <div className="lg:hidden fixed inset-0 bg-opacity-50 z-20" onClick={toggleSidebar} />}
      <aside className={`
          fixed top-0 bottom-0 left-0 z-30
          w-[85%] max-w-[300px] sm:w-64 bg-(--background)
          border-r border-border
          transform transition-transform duration-300 ease-in-out
          overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
        <div className="h-16 flex items-center justify-between px-4 lg:hidden border-b border-border">
          <span className="text-xl font-bold text-primary">SiGPEI-DOCS</span>
        </div>

        <div className="p-4 pt-4 lg:pt-20">
          <nav className="space-y-1">
            <NavItem to="/" icon={<FiHome />} label="Introdução" />
            <NavItem to="/login" icon={<FiLogIn />} label="Login" />
            <NavItem to="/criar-conta" icon={<FiUserPlus />} label="Criar Conta" />
            <NavItem to="/recuperar-senha" icon={<FiKey />} label="Recuperar Senha" />

            <ExpandableNavItem icon={<FiUser />} label="Acesso do Coordenador">
              <NavItem to="/coordenador/dashboard" icon={<></>} label="Dashboard" />
            </ExpandableNavItem>

            <ExpandableNavItem icon={<FiUsers />} label="Acesso do Professor">
              <NavItem to="/professor/dashboard" icon={<></>} label="Dashboard" />
            </ExpandableNavItem>

            <ExpandableNavItem icon={<FiUserCheck />} label="Acesso do Pai/Responsável">
              <NavItem to="/responsavel/dashboard" icon={<></>} label="Dashboard" />
            </ExpandableNavItem>

            <div className="lg:hidden pt-4 mt-4 border-t border-border">
              <ExternalNavItem href="https://sigpei.apps.uern.br" icon={<FiExternalLink />} label="SiGPEI WEB" />
            </div>
          </nav>
        </div>
      </aside>
    </>
  )
}