import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import css from './TextField.module.scss';

const TextField = ({
  label,
  handleChange,
  labelStyle,
  inputStyle,
  divStyle,
  IconFieldRight,
  IconFieldLeft,
  children,
  ...props
}) => {
  const id = useMemo(() => nanoid(), []);

  const fieldClassName = `${css.inputField} ${
    IconFieldRight && css.inputIconFieldRight
  } ${IconFieldLeft && css.inputIconFieldLeft}`;

  if (IconFieldRight || IconFieldLeft) {
    return (
      <div className={css.formInput} style={divStyle}>
        <label htmlFor={id} className={css.iconLabel}>
          <input
            id={id}
            onChange={handleChange}
            {...props}
            style={inputStyle}
            className={fieldClassName}
          />
          {IconFieldRight && (
            <span className={css.inputIconRight}>{children}</span>
          )}
          {IconFieldLeft && (
            <span className={css.inputIconLeft}>{children}</span>
          )}
        </label>
      </div>
    );
  }

  return (
    <div className={css.formInput} style={divStyle}>
      <label htmlFor={id} className={css.label} style={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        onChange={handleChange}
        {...props}
        style={inputStyle}
        className={css.inputField}
      />
    </div>
  );
};

export default TextField;
