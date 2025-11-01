import { BrowserRouter } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Header } from './components/Header/Header'
import { Sidebar } from './components/Sidebar/Sidebar'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    if (window.innerWidth < 1024) setSidebarOpen(false);
  }, [])

  return (
    <BrowserRouter>
      <div className='min-h-screen relative z-0'>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </BrowserRouter>
  )
}

export default App
