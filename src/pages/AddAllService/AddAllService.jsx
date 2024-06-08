import React from 'react'
import './AddAllService.css'
import { assets } from '../../assets/assets'
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddAllService = () => {

    const url = "https://chore-hero-backend.onrender.com";
    const [image, setImage] = React.useState(false);
    const [data, setData] = React.useState({
        name: '',
        cost: ''
    });

    const onChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();

        if (!image) {
            toast.error('Please upload an image.', { bodyClassName: 'add-all-service-toast-success' });
            return;
        }

        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('cost', Number(data.cost));
        formData.append('image', image);
        formData.append('description', '');
        formData.append('date', '');
        formData.append('time', '');

        try {
            const response = await axios.post(`${url}/api/service/add`, formData);

            if (response.data.success) {
                setData({
                    name: '',
                    cost: ''
                })
                setImage(false);

                toast.success('Service Added Successfully', { bodyClassName: 'add-all-service-toast-success' });
            }
            else {
                toast.error('Unable to add Service', { bodyClassName: 'add-all-service-toast-success' });
            }
        } catch (error) {
            toast.error('Unable to add Service', { bodyClassName: 'add-all-service-toast-success' });
        }
    };

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    return (
        <div className='add-all-service'>
            <form onSubmit={onSubmitHandler} className="add-all-service-container">
                <div className="add-all-service-image">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt="" />
                    </label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
                </div>
                <div className="add-all-service-name">
                    <p>Service Name</p>
                    <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type Here' required />
                </div>
                <div className="add-all-service-cost">
                    <p>Cost</p>
                    <input onChange={onChangeHandler} value={data.cost} type="number" name="cost" placeholder='$10.00' required />
                </div>
                <button type='submit' className='add-all-service-add-button'>ADD</button>
            </form>
        </div>
    )
}

export default AddAllService