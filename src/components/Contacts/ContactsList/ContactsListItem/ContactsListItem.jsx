import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { fetchDeleteContact } from "../../../../redux/contacts/contacts-operations";

import Icon from "../../../../shared/Icon/Icon";
import Button from "../../../../shared/Button";
import EditContactForm from "../../EditContactForm/EditContactForm";

import css from "./contactsListItem.module.scss";

const ContactsListItem = ({ id, name, number }) => {
  const [showEditForm, setShowEditForm] = useState(false);
  const [editContactId, setEditContactId] = useState(null);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(fetchDeleteContact(id));
  };

  const handleEditContact = (id) => {
    setEditContactId(id);
    setShowEditForm(true);
  };

  return (
    <li className={css.li}>
      <p className={css.p}>
        {name}: {number}
      </p>
      <Button
        onClick={() => handleDeleteContact(id)}
        type="button"
        onlyIcon={true}
        buttonStyle={{ marginLeft: "auto" }}
      >
        <Icon id="trash" h="21" w="21" />
      </Button>
      <Button
        onClick={() => handleEditContact(id)}
        type="button"
        onlyIcon={true}
        buttonStyle={{
          marginLeft: "5px",
        }}
      >
        <Icon id="edit" h="20" w="20" />
      </Button>
      {showEditForm && (
        <EditContactForm
          id={editContactId}
          onClose={() => setShowEditForm(false)}
        />
      )}
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
