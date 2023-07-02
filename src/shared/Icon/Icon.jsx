import sprite from '../../assets/icons/icons.svg';

const Icon = ({
  id,
  sw = 2,
  s = 'currentColor',
  f = 'none',
  w,
  h,
  ...props
}) => {
  const style = {
    strokeWidth: sw,
    stroke: s,
    fill: f,
    width: w,
    height: h,
  };

  return (
    <svg {...props} style={style}>
      <use xlinkHref={`${sprite}#${id}`}></use>
    </svg>
  );
};
export default Icon;
