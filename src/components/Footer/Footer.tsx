import { FaCopyright } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="lg:pl-64 py-6 px-4 border-t border-border text-center text-sm text-(--text-secondary)">
      <div className="max-w-7xl mx-auto flex items-center justify-center space-x-1">
        <FaCopyright className='text-(--primary)' size={14} />
        <p className='m-0'>{new Date().getFullYear()} SiGPEI-DOCS. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}