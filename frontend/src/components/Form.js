import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState()

  const handleSubmit = e => {
    e.preventDefault()

    const student = {
      name
    }

    fetch('http://localhost:5000/students', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    })
      .then(response => response.json())
      .then(data => console.log(data)) //maj du tableau avec contexte
  }
  
  const handleOnChange = e => {
    setName(e.target.value)
  }

  console.log(name)
  return (
    <div>
      <h1>Formulaire</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChange}/>
        <button type="submit">Ajouter student</button>
      </form>
    </div>
  )
}

export default Form