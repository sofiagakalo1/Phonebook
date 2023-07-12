import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { fetchEditContact } from "../../../redux/contacts/contacts-operations";
import { selectContactById } from "../../../redux/selectors";

import Modal from "../../../shared/Modal";
import TextField from "../../../shared/TextField";
import Button from "../../../shared/Button";

import css from "./EditContactForm.module.scss";

const EditContactForm = ({ id, onClose }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const contactToEdit = useSelector((state) => selectContactById(state, id));

  useEffect(() => {
    setName(contactToEdit.name);
    setNumber(contactToEdit.number);
  }, [contactToEdit]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setNumber(event.target.value);
  };
  const data = { name, number };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchEditContact({ id, data }));
    toast.success(`${name} edited successfully!`);
    onClose();
  };
  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit} className={css.form}>
        <h2 className={css.h2}>Edit Contact</h2>
        <TextField
          label="Name:"
          id="name"
          value={name}
          type="text"
          onChange={handleNameChange}
        />
        <TextField
          label="Phone:"
          id="number"
          value={number}
          type="text"
          onChange={handlePhoneChange}
        />
        <div className={css.buttons}>
          <Button text="Save" hasIcon={true} />
          <Button text="Cancel" hasIcon={true} onClick={onClose} />
        </div>
      </form>
    </Modal>
  );
};

export default EditContactForm;
