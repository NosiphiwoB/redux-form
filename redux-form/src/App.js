import './App.css';
import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {addMessage} from './Redux/Actions/actionCreator'

function DisplayMessages(){
  const dispatch = useDispatch()
  const message = useSelector(state => state.message)
  const [form, setForm] = useState({
         input: "",
         
        })
        const handleChange = (event) =>{
            setForm({...form,
              [event.target.name]: event.target.value,
            
            })
          }
          const submitMessage = () => {
              dispatch(addMessage(form.input))
            }
  return (
    <div className="form">
      <div>Form</div>
     <form>

      <div>
     <select 
    onChange={handleChange}
    name="position"
    >
    <option value="Expert">Expert</option>
   <option value="Senior">Senior</option>
   <option value="Junior">Junior</option>
   </select>
   </div>

   <div>
    <input placeholder='Name' type="text" />
    </div>

    <div>
     < input placeholder="age" type="number" />
    </div>
    <div>
      <button>Submit</button>
    </div>

     </form>
    </div>
  )
}

 
export default DisplayMessages;