import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note , updateNote} = props;
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="justify-content-between flex align-items-center position-relative">
                        <div className='flex justify-content-end float-right text-right' style={{width: "4rem"}}><i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted Successfully","success");}}></i>
                        <i className="far fa-edit mx-2 align-self-end" onClick={()=>{updateNote(note)}}></i></div>
                        <h5 className="card-title flex-wrap w-80">{note.title}</h5>
                    </div>
                    <p className="card-text ">{note.description}</p>
                    <p className="card-tag text-secondary">{note.tag}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem