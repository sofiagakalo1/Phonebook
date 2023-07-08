import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setFilter } from "../../../redux/filter/filter-slice";
import { getFilter } from "../../../redux/selectors";

import TextField from "../../../shared/TextField";

import css from "./ContactsFilter.module.scss";

const ContactsFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const updateFilter = ({ target }) => {
    const action = setFilter(target.value);
    dispatch(action);
  };

  return (
    <div className={css.filterBlock}>
      <h4 className={css.h4}>Find contacts by name</h4>
      <TextField
        name="filter"
        onChange={updateFilter}
        divStyle={{ flexDirection: "column-reverse" }}
        placeholder="Type name..."
        type="text"
        value={filter}
      ></TextField>
    </div>
  );
};

export default ContactsFilter;
