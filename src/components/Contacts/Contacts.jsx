import React from "react";

import ContactsList from "./ContactsList";
import ContactsFilter from "./ContactsFilter";
import ContactsForm from "./ContactsForm";

import css from "./Contacts.module.scss";

const Contacts = () => {
  return (
    <div className={css.block}>
      <div className={`${css.wrapper_phonebook} ${css.wrapper}`}>
        <h2 className={css.h}>Phonebook</h2>
        <ContactsForm />
      </div>
      <div className={`${css.wrapper_contacts} ${css.wrapper}`}>
        <h2 className={css.h}>Contacts</h2>
        <ContactsFilter />
        <ContactsList />
      </div>
    </div>
  );
};

export default Contacts;
