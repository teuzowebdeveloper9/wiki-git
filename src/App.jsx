/* eslint-disable no-undef */
import { useState } from 'react'
import github from '../src/images/github.png'
import Input from './components/input'
import Itemrepo from './components/itemRepos'
import api from '../services/api'


function App() {

  const [curretRepo,setCurretRepo] = useState(' ')
  const [respos,setRespos] = useState([]);
  
  
  const data = api.get(`/repos/${user}/${repos}`)


  if(data.id){

  }

  return (
  
   <div className="box">
    <img className='gitzin' src={github}></img>
      <Input></Input>
      <Itemrepo />
   </div>
  )
 
}

export default App
