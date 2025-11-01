import React from 'react';

export const ExternalNavItem: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({
  href, icon, label }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="sidebar-nav-link">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </a>
  );
};