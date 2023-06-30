import { useState } from 'react';

// import css from './contactsForm.module.css';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = event => {
    setState(prevState => {
      const { name, value } = event.target;
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ ...state });
    // setState({ ...initialState });
  };

  return { state, setState, handleChange, handleSubmit };
};

export default useForm;
