import React, { useEffect, useState } from 'react'
import {CiSearch} from "react-icons/ci"
import {BsPlusLg} from "react-icons/bs"

import NoteItem from '../component/NoteItem'
import { Link } from 'react-router-dom'


const Notes = ({notes}) => {
    const [showSearch,setShowSearch]= useState(false)
    const [text,setText]=useState("")
    const [filter,setFilter]=useState(notes)


    const ControlSearch= ()=>{
        setFilter(notes.filter(item=>{
            if(item.title.toLowerCase().match(text.toLowerCase())){
                return item
            }
        }))
    }

useEffect(ControlSearch,[text])
  return (
    <section>
        <header className='notes__header'>
                   {!showSearch && <h2>My Notes</h2>}
               { showSearch && <input type='text' autoFocus placeholder='keyword...' value={text} onChange={(e)=>{setText(e.target.value);ControlSearch()}}/> }
            <button className='btn' onClick={()=>setShowSearch(!showSearch)}><CiSearch/></button>
        </header>
        <div className='notes__container'>
                {filter.length ===0 && <p className='empty__notes'>No Notes Found</p>}
            {
                filter.map(note=><NoteItem key={note.id} note={note}/>)
            }
        </div>
        <Link to={"/create-note"} className='btn add__btn'><BsPlusLg/></Link>
    </section>
  )
}

export default Notes