import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'


export default function Logout() {

  const navigate = useNavigate()

  useEffect(()=>{
    localStorage.clear()
    navigate('/')
  },[])


  return <Spinner />
}
