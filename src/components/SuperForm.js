import { useState } from 'react';

export const Form = () => {
    const initialFormData = {
        name: '',
        age: '',
        email: '',
    };

    const [formData, setFormData] = useState(initialFormData);
    const [formSuccess, setFormSuccess] = useState('');
    const [formErrors, setFormErrors] = useState([]);

    return <div></div>;
}

import axios from 'axios';


const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        // Send POST request
        await axios.post('http://localhost:5000/api/v1/person', formData);

        // HTTP req successful
        setFormSuccess('Data received correctly');

        // Reset form data
        setFormData(initialFormData);
    } catch (err) {
        handleErrors(err);
    }
};

const handleErrors = (err) => {
    if (err.response.data && err.response.data.errors) {
        // Handle validation errors
        const { errors } = err.response.data;

        let errorMsg = [];
        for (let error of errors) {
            const { msg } = error;

            errorMsg.push(msg);
        }

        setFormErrors(errorMsg);
    } else {
        // Handle generic error
        setFormErrors(['Oops, there was an error!']);
    }
};

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
    setFormErrors([]);
    setFormSuccess('');
};

return <div></div>;
}