import React, { useState } from 'react';
import './create.css';
import Header from '../header/Header.jsx';
import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASEURL;

const CreatePage = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
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

      const formData = new FormData();
      formData.append('file', file);
      formData.append('name', name);
      formData.append('category', category);
      formData.append('price', price);
      formData.append('date', date);
      formData.append('sellerName', sellerName);
      formData.append('phoneNumber', phoneNumber);
      
      const response = await axios.post(`${baseUrl}/api/v1/addProduct`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
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
          <label htmlFor='fname'>Name</label>
          <br />
          <input
            className='input'
            type='text'
            id='fname'
            name='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor='fname'>Category</label>
          <br />
          <input
            className='input'
            type='text'
            id='fname'
            name='category'
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor='fname'>Price</label>
          <br />
          <input
            className='input'
            type='number'
            id='fname'
            name='Price'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <label htmlFor='fname'>Date</label>
          <br />
          <input
            className='input'
            type='text'
            id='fname'
            name='Date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <br />
          <label htmlFor='fname'>Seller Name</label>
          <br />
          <input
            className='input'
            type='text'
            id='fname'
            name='sellerName'
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
          />
          <br />
          <label htmlFor='fname'>Phone Number</label>
          <br />
          <input
            className='input'
            type='text'
            id='fname'
            name='phoneNumber'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <br />
          <input type='file' name='file' onChange={handleFileChange} />
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