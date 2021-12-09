import React, { useEffect, useState } from 'react'
import Form from './components/Form'

const App = () => {
  const [students, setStudents] = useState(null)

  useEffect(() => {
    fetch('http://localhost:5000/students/')
      .then(response => response.json())
      .then(data => { setStudents(data) })
  },[])

  if (!students) {
    return null
  }

  // console.log(students)
  return (
    <div>
      {students.map(element => {
        return (
          element + ", "
        )
      })}
      <Form />
    </div>
  )
}

export default App