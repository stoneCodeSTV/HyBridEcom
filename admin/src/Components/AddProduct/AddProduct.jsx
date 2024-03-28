import React, { useState} from 'react'
import './AddProduct.css'
import { RiUploadCloud2Fill } from "react-icons/ri";

const AddProduct = () => {

        const [image, setImage] = useState(false); 
        const [productInfo, setProductInfo] = useState({
            name:'', 
            image:'',
            category:'',
            salePrice:'',
            regPrice:''
        })

        const handleImage = (e) => {
            setImage(e.target.files[0]);
        }

        const handleChange = (e) => {
            setProductInfo({
                ...productInfo, 
                [e.target.name]: e.target.value
            })
        }

        const uploadProductInfo = async () => {
            console.log(productInfo);
            let responseData; 
            let product = productInfo; 

            let formData = new FormData();
            formData.append('product',image);

            await fetch('http://localhost:4000/upload', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            })
            .then((resp) => resp.json())
            .then((data) => {
                responseData = data 
            });

            if(responseData.success) {
                product.image = responseData.image_url;
                console.log(product);

                await fetch('http://localhost:4000/addproduct', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(product),
                })
                .then((resp) =>resp.json())
                .then((data) => {
                    data.success?alert('Product Added Successfully')
                    :alert('Failed to Add Product');
                })
            }
        }

return (
    <div className='addProduct'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input value={productInfo.name} onChange={handleChange} type='text' placeholder='Enter Title' name='name'/>
        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Product Sale Price</p>
                <input value={productInfo.salePrice} onChange={handleChange} type='text' placeholder='Enter Sales Price' name='salePrice'/>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Regular Price</p>
                <input value={productInfo.regPrice} onChange={handleChange} type='text' placeholder='Enter Regular Price' name='regPrice'/>
            </div>
        </div>
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productInfo.category} onChange={handleChange} name='category' className='addproduct-select'> 
                <option value=''>Empty</option>
                <option value='sports'>Sports</option> 
                <option value='lifestyle'>Lifestyle</option> 
                <option value='electronics'>Electronics</option> 
            </select>
        </div>
        <div className="addproduct-itemfield">
            <label htmlFor='file-input'>
            {image ? <img src={URL.createObjectURL(image)} alt="Uploaded Image" /> : <RiUploadCloud2Fill className='addproduct-icon'/>}
                <span 
                    className='addproduct-icon' 
                    style={{ marginLeft: '10px' }}> Upload Image
                </span>
            </label>
            <input onChange={handleImage} type='file' name='image' id='file-input' hidden />
        </div>
        <button onClick={()=>{uploadProductInfo()}} className='addproduct-btn'>Add Product</button>
    </div>
  )
}

export default AddProduct