import React from 'react'
import './EditPersonalService.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const EditPersonalService = ({ selectedHero }) => {

    const url = "https://chore-hero-backend.onrender.com";

    const [list, setList] = React.useState([]);

    const fetchList = async () => {
        const response = await axios.get(`${url}/api/service/list`);

        // console.log(response.data)

        if (response.data.success) {
            setList(response.data.data);
        }
        else {
            toast.error('Unable to fetch Services', { bodyClassName: 'add-all-service-toast-success' });
        }
    }

    useEffect(() => {
        fetchList();
    }, []);

    const uniqueNamesMap = {};
    list.filter(service => service.cost === null && service.image === selectedHero).forEach(service => {
        service.name.split(',').forEach(name => {
            if (!uniqueNamesMap[name]) {
                uniqueNamesMap[name] = service._id;
            }
        });
    });

    const uniqueNames = Object.keys(uniqueNamesMap).map(name => ({ _id: uniqueNamesMap[name], name }));

    const removeService = async (id) => {
        const response = await axios.post(`${url}/api/service/remove`, { id });
        await fetchList();

        if (response.data.success) {
            toast.success('Service Removed Successfully', { bodyClassName: 'add-all-service-toast-success' });
        }
        else {
            toast.error('Unable to Remove Service', { bodyClassName: 'add-all-service-toast-success' });
        }
    }

    const removeAllService = async (name) => {
        list.forEach(async service => {
            if (service.name === name && service.cost === null && service.image === selectedHero) {
                await removeService(service._id);
            }
        });
    }

    if (uniqueNames.length === 0) {
        return (
            <div className='edit-personal-service'>
                <h1>You have not added any services</h1>
            </div>
        )
    }

    return (
        <div className='edit-personal-service'>
            {uniqueNames.map((name, index) => (
                <div key={index} className="edit-personal-service-container">
                    <div className="edit-personal-service-service">
                        {name.name}
                        <p className='edit-personal-service-x-icon' onClick={() => removeAllService(name.name)}>X</p>
                    </div>
                    <hr />
                </div>
            ))}
        </div>
    )
}

export default EditPersonalService