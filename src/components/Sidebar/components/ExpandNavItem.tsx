import React from 'react';
import { useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';

export const ExpandableNavItem: React.FC<{ icon: React.ReactNode, label: string; children: React.ReactNode; }> = ({ icon, label, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-1">
      <button
        className="sidebar-nav-link w-full justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <span className="text-lg">{icon}</span>
          <span>{label}</span>
        </div>
        <span>{isExpanded ? <FiChevronDown /> : <FiChevronRight />}</span>
      </button>
      {isExpanded && (
        <div className="ml-9 mt-1 border-l-2 border-border pl-2">
          {children}
        </div>
      )}
    </div>
  );
}