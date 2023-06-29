import { useDispatch } from "react-redux";
import { fetchLogout } from "../../../redux/auth/auth-operations";
import css from "./UserMenu.module.scss";

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(fetchLogout());
  };

  return (
    <div className={css.div}>
      <div className={css.userContainer}></div>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
export default UserMenu;
