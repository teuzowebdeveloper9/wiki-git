import React, { useState } from 'react';
import github from '../src/images/github.png'
import Input from './components/input'
import ItemRepo from './components/itemRepos'



function App() {
  const [repo, setRepo] = useState(null);

  return (
  
   <div className="box">
    <img className='gitzin' src={github} alt="GitHub Logo"></img>
      <Input onSearch={setRepo} />
      <ItemRepo repo={repo} />
   </div>
  )
 
}

export default App
