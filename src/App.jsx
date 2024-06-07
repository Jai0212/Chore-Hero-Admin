import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import NavigationBar from './components/navigation_bar/navigation_bar'
import { Routes, Route } from 'react-router-dom'
import AddAllService from './pages/AddAllService/AddAllService'
import AddPersonalService from './pages/AddPersonalService/AddPersonalService'
import './App.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditPersonalService from './pages/EditPersonalService/EditPersonalService'
import { useEffect } from 'react'

const App = () => {

  const [selectedHero, setSelectedHero] = React.useState('');

  useEffect(() => {
    // Load selected hero from local storage
    const savedHero = localStorage.getItem('selectedHero');
    if (savedHero) {
      setSelectedHero(savedHero);
    }
  }, []);

  useEffect(() => {
    // Save selected hero to local storage whenever it changes
    if (selectedHero) {
      localStorage.setItem('selectedHero', selectedHero);
    }
  }, [selectedHero]);

  return (
    <div>
      <ToastContainer position='bottom-right' />
      <NavigationBar selectedHero={selectedHero} setSelectedHero={setSelectedHero} />
      <hr />
      <div className="app-container">
        <Sidebar selectedHero={selectedHero} />
        <Routes>
          <Route path="/add-all-service" element={<AddAllService />} />
          <Route path="/add-personal-service" element={<AddPersonalService selectedHero={selectedHero} />} />
          <Route path="/edit-personal-service" element={<EditPersonalService selectedHero={selectedHero} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App