import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { fetchDeleteContact } from "../../../../redux/contacts/contacts-operations";

import Icon from "../../../../shared/Icon/Icon";

import css from "./contactsListItem.module.scss";

const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(fetchDeleteContact(id));
  };

  return (
    <li className={css.li}>
      <p className={css.p}>
        {name}: {number}
      </p>
      <button onClick={() => handleDeleteContact(id)} type="button">
        <Icon id="trash" h="21" w="21" />
      </button>
    </li>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactsListItem;
