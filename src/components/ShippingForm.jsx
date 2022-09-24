import React from 'react'
import { useState } from 'react'

function ShippingForm(props) {
  const [title, setTitle] = useState("")
  const [Weight, setWeight] = useState("")
  const [Color, setColor] = useState("")
  const [Adress, setAdress] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      Weight: Weight,
      Color: Color,
      Adress: Adress,
    }
    props.addToListCallback(data)
  }
  return (
    <center>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Shipping Form</h1>
          <input type="text" placeholder="Title" value={title}
            onChange={(e) => setTitle(e.target.value)} />
          <br></br>
          <br></br>
          <input type="number" placeholder="Weight" value={Weight}
          onChange={(e) => setWeight(e.target.value)}/>
          <br></br>
          <label>Color</label>
          <br></br>
          <input type="Color" value={Color}
          onChange={(e) => setColor(e.target.value)} /><br />
          <br></br>
          <br></br>
          <input type="text" placeholder="Adress" value={Adress}
          onChange={(e) => setAdress(e.target.value)}/>
          <br></br>
          <button>Submit</button>

        </form>
      </div>
    </center>



  )
}

export default ShippingForm