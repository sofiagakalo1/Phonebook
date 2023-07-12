import css from "./Home.module.scss";

const Home = () => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>Welcome to phonebook!</h1>
        <div className={css.gif}>
          <img src={require("../../assets/home_gif.gif")} alt="Example GIF" />
        </div>
      </div>
    </>
  );
};

export default Home;
