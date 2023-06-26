import { Bars } from 'react-loader-spinner';
import css from './Loader.module.scss';

const Loader = () => {
  return (
   <div className={css.container}>
     <Bars
      height="80"
      width="80"
      color="#7e77a0"
      ariaLabel="bars-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
   </div>
  );
};

export default Loader;
