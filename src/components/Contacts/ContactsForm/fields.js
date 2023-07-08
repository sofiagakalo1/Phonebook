const fields = {
  name: {
    type: 'text',
    name: 'name',
    pattern: "/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/",
    title:
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
    minLength: '1',
    maxLength: '26',
    required: true,
    placeholder: 'Type name...',
    label: 'Name',
  },
  number: {
    type: 'tel',
    name: 'number',
    title:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +: +1-123-456-7890',
    minLength: '10',
    maxLength: '17',
    pattern: '/^+?d{1,3}[-.s]?d{1,3}[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}$/',
    required: true,
    placeholder: 'Type number...',
    label: 'Number',
  },
};

export default fields;
