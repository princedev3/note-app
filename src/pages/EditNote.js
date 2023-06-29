import React, { useState } from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import { RiDeleteBin6Line} from 'react-icons/ri'
import { Link,useNavigate,useParams,} from 'react-router-dom'
import useCreateDate from '../component/useCreateDate'


const EditNote = ({notes,setNotes}) => {
    const navigate = useNavigate()
    const date = useCreateDate()
    const {id}= useParams()
   
    const note = notes.find(note=>note.id ===id)

    const [title,setTitle]= useState(note.title)
    const [details,setDetails]= useState(note.details)

    const handleSave = (e)=>{
        e.preventDefault()

        if(title && details){
            const newnote = {...note,title,details,date}
            
            const newNotes = notes.map(item =>{
                if(item.id ===id){
                    item = newnote
                    }
                    return item
                })

            setNotes(newNotes)
            navigate("/")
        }
    }
   const handleDelete = ()=>{
    if(window.confirm("Confirm Delete")){

        const newNote = notes.filter(item=>item.id !==id)
    
        setNotes(newNote)
        navigate("/")
    }
   }
    //{}[]
  return (
    <section>
        <header className='create-note__header'>
            <Link to={"/"} className='btn'><IoIosArrowBack/></Link>
            <button className='btn lg primary' onClick={handleSave}>Save</button>
            <button className='btn danger' onClick={handleDelete}><RiDeleteBin6Line/></button>
        </header>
        <form className='create-note__form' onSubmit={handleSave} >
            <input type='text' placeholder='Title' autoFocus value={title} onChange={(e)=>setTitle(e.target.value)} />
            <textarea rows={"28"} placeholder='Note details...' value={details} onChange={(e)=>setDetails(e.target.value)} ></textarea>
        </form>
    </section>
  )
}

export default EditNote