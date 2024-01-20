import React from 'react'
import './create.css'
import Header from '../header/Header.jsx'
import Bike from '../../assets/R15V3.jpg'

const Create = () => {
  return (
    <>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price" />
            <br />
          </form>
          <br />
          <img alt="Post" width="200px" height="200px" src={Bike}></img>
          <form>
            <br />
            <input type="file" />
            <br />
            <button className="uploadBtn">upload and Submit</button>
          </form>
        </div>
      </card>
    </>
  )
}

export default Create