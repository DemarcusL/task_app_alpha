import { useState } from 'react'

const AddTask = ({ onAdd }) => {

      //we load in the state here and we will be able to change and set it anew!
      const [text, setText] = useState('')
      const [day, setDay] = useState('')
      const [reminder, setReminder] = useState(false)

      const onSubmit = (e) => {
            e.preventDefault()

            if (!text) {
                  alert('Please add a task')
                  return
            }

            onAdd({ text, day, reminder })

            setText('')
            setDay('')
            setReminder('')
      }

      return (
            <form className='add-form' onSubmit={onSubmit}>
                  <div className='form-control'>
                        <label>Task</label>
                        <input style={{ color: 'green' }} type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
                  </div>

                  <div className='form-control'>
                        <label>Day & Time</label>
                        <input style={{ color: 'green' }} type='text' placeholder='Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
                  </div>

                  <div className='form-control form-control-check'>
                        <label>Set Reminder</label>
                        <input type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                  </div>

                  <input type='submit' value='Save Task' className='btn btn-block' />
            </form>
      )
}

export default AddTask
