import React, { useState } from 'react';
import './create.css';
import Header from '../header/Header.jsx';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_BASEURL;

const CreatePage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  const [date, setDate] = useState('');
  const [sellerName, setSellerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!file) {
        alert("No file is selected..!");
        return;
      }

      console.log(file)

      const product = {
        name,
        category,
        price,
        date,
        sellerName,
        phoneNumber,
        file
      };

      const response = await axios.post(`${baseUrl}/api/v1/addProduct`, product);


      navigate('/');
      console.log('Product added successfully', response.data);
    } catch (err) {
      console.error('Error handling submit', err);
    }
  };

  return (
    <>
      <Header />
      <div className='centerDiv'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='name'>Name</label>
          <br />
          <input
            className='input'
            type='text'
            id='name'
            name='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor='category'>Category</label>
          <br />
          <input
            className='input'
            type='text'
            id='category'
            name='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor='price'>Price</label>
          <br />
          <input
            className='input'
            type='number'
            id='price'
            name='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <label htmlFor='date'>Date</label>
          <br />
          <input
            className='input'
            type='date'
            id='date'
            name='Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label htmlFor='sellerName'>Seller Name</label>
          <br />
          <input
            className='input'
            type='text'
            id='sellerName'
            name='sellerName'
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
          />
          <br />
          <label htmlFor='phoneNumber'>Phone Number</label>
          <br />
          <input
            className='input'
            type='text'
            id='phoneNumber'
            name='phoneNumber'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <input type='file' name='file' onClick={handleFileChange} />
          <br />
          <button className='uploadBtn' type='submit'>
            Upload and Submit
          </button>
        </form>
        <br />
      </div>
    </>
  );
};

export default CreatePage;
