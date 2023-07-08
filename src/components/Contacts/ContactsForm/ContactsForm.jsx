import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { fetchAddContact } from "../../../redux/contacts/contacts-operations";
import { getAllContacts } from "../../../redux/selectors";

import TextField from "../../../shared/TextField";
import Icon from "../../../shared/Icon/Icon";
import fields from "./fields";

import css from "./ContactsForm.module.scss";

const ContactsForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isAlreadyExists(name)) {
      return toast.error(`${name} is already in your contacts!`);
    }

    dispatch(fetchAddContact({ name, number }));
    toast.success(`${name} added successfully!`);
    setName("");
    setNumber("");
    return;
  };

  const isAlreadyExists = (searchName) => {
    if (
      contacts.find((contact) => {
        return contact.name.toLowerCase() === searchName.toLowerCase();
      })
    ) {
      return true;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.form}>
        <TextField
          onChange={(event) => {
            setName(event.target.value);
          }}
          value={name}
          className={css.inputField}
          {...fields.name}
        />
        <TextField
          onChange={(event) => {
            setNumber(event.target.value);
          }}
          value={number}
          className={css.inputField}
          {...fields.number}
        />
        <div>
          <button type="submit">
            Add contact
            <Icon id="plus" h="24" w="24" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactsForm;
