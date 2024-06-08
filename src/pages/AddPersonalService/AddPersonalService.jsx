import React from 'react'
import './AddPersonalService.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const AddPersonalService = ({ selectedHero }) => {

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

  const [checkedStates, setCheckedStates] = React.useState(() => list.map(() => false));

  useEffect(() => {
    fetchList();
  }, []);

  const handleChange = (index, e) => {
    const newCheckedStates = [...checkedStates];
    newCheckedStates[index] = e.target.checked;
    setCheckedStates(newCheckedStates);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const selectedServices = list
      .filter((_, index) => checkedStates[index])
      .map(service => service.name)
      .join(', ');

    const formData = new FormData();
    formData.append('name', selectedServices);
    formData.append('cost', "");
    formData.append('image', selectedHero);

    const response = await axios.post(`${url}/api/service/add`, formData);

    if (response.data.success) {
      setCheckedStates(list.map(() => false));

      toast.success('Service Added Successfully', { bodyClassName: 'add-all-service-toast-success' });
    }
    else {
      toast.error('Unable to add Service', { bodyClassName: 'add-all-service-toast-success' });
    }
  }

  // useEffect(() => {
  //   console.log('Checked states updated:', checkedStates);
  // }, [checkedStates]);

  if (list.length === 0) {
    return (
      <div className='add-personal-service'>
        <h2>Loading Services...</h2>
        <p className="add-personal-service-text">Please wait while we fetch the services.</p>
        <div className="add-personal-service-checkboxes">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(index => (
            <div key={index} className="add-personal-service-checkbox skeleton">
              <div className="skeleton-text"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='add-personal-service'>
      <form className="add-personal-service-form" onSubmit={onSubmitHandler}>
        <div className='add-personal-service-container'>
          <p className='add-personal-service-label'>Service Name</p>
          <div className="add-personal-service-checkboxes">
            {list.filter(service => service.cost !== null).map((service, index) => {
              return (
                <div key={index} className="add-personal-service-checkbox">
                  <input name="unique" type="radio" value={service.name} checked={checkedStates[index]} onChange={(event) => handleChange(index, event)} /> {service.name}
                </div>
              )
            })}
          </div>
        </div>
        <button type='submit' className='add-personal-service-add-button'>ADD</button>
      </form>
    </div>
  )
}

export default AddPersonalService