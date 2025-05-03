import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Tgbot from "./telegrambot.jsx"
import { ToastContainer } from 'react-toastify'
import Navbar from "./components/navbar.jsx"

function App() {
  // const { t, i18n } = useTranslation();


  // const changeLaenguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };

  return (
    <>
    <div className="App">
      <Navbar/>
    {/* <Tgbot/> */}
    <ToastContainer
    position='top-right'
    autoClose={3000}
    hideProgressBar={false}
    newestOnTop={false}
    />
    </div>
    </>
  )
}

export default App
