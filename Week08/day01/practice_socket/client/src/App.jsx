import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import io from 'socket.io-client'
import LoginForm from './components/LoginForm'
import Chat from './components/Chat'





function App() {
  //when our app is mounted componenets io will look for connection 8000local host 8000 port it call back run only one time so we dont deal will conncetion any more its only getter becoz its setting in backend
  const [socket] = useState(() => io(':8000'))
  const [isConnected, setIsConnected] = useState(socket.connected)
  const [userName, setUserName] = useState('')

  useEffect(() => {
    console.log("connected")
    socket.on('connect', () => {
      console.log('Socket id ', socket.id)
      setIsConnected(true)
    })
    return () => {
      socket.isConnected(true)
      console.log("Disconnected")
    }
  }, [])

  return (
    <>
      <h1>Socket.io Practice</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm userName={userName} setUserName={setUserName} socket={socket} />} />
          <Route path='/chat' element={<Chat socket={socket} />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
