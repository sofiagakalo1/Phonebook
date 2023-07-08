import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchAllContacts } from "../../../redux/contacts/contacts-operations";
import {
  getAllContacts,
  getFilter,
  getFilteredContacts,
} from "../../../redux/selectors";

import ContactsListItem from "./ContactsListItem";

import css from "./ContactsList.module.scss";

const ContactsList = () => {
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(filter, contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const allContacts = filteredContacts.map(({ id, name, number }) => (
    <ContactsListItem key={id} id={id} name={name} number={number} />
  ));
  return <ul className={css.ul}>{allContacts}</ul>;
};

export default ContactsList;
