import './App.css';
import { BrowserRouter,Route,Routes, json } from 'react-router-dom';
import Notes from './pages/Notes';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
import notes from './dummy_notes'
import { useEffect, useState } from 'react';


function App() {
  const [note,setNotes] = useState(JSON.parse(localStorage.getItem("notes"))||[])

  useEffect(()=>{
    localStorage.setItem("notes",JSON.stringify(note))
  },[note])
console.log(note)
  return (
  <div id='app'>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Notes notes={note}/>}/>
        <Route path='/create-note' element={<CreateNote setNotes={setNotes}/>}/>
        <Route path='/edit-note/:id' element={<EditNote notes={note} setNotes={setNotes}/>}/>
      </Routes>
    </BrowserRouter>
  </div>

  );
}
//
export default App;
