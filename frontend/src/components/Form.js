import React, { useState } from 'react'

const Form = () => {
  const [name, setName] = useState()

  const handleSubmit = e => {
    e.preventDefault()

    fetch('http://localhost:5000/students/', {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(name)
    })
      .then(response => response.json())
      .then(data => console.log(data))
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
        <button type="submit">Ajouter prénom</button>
      </form>
    </div>
  )
}

export default Form