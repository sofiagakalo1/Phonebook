import { NavLink } from 'react-router-dom';
import css from './Button.module.scss';

const Button = ({
  children,
  text,
  type = 'submit',
  navLink,
  hasIcon,
  onlyIcon,
  to,
  buttonStyle,
  ...props
}) => {
  const buttonClassName = `${css.button} ${hasIcon && css.iconButton} ${
    onlyIcon && css.onlyIconButton
  }`;

  if (navLink) {
    return (
      <NavLink to={to} className={css.navLink}>
        <button
          type={type}
          className={buttonClassName}
          style={buttonStyle}
          {...props}
        >
          {text}
          {children}
        </button>
      </NavLink>
    );
  }

  return (
    <button
      type={type}
      className={buttonClassName}
      style={buttonStyle}
      {...props}
    >
      {text}
      {children}
    </button>
  );
};
export default Button;
