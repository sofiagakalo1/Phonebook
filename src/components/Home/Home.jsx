import css from "./Home.module.scss";

const Home = () => {
  return (
    <section className={css.container}>
      <h1 className={css.title}>Welcome to phonebook!</h1>
      <div className={css.gif}>
        <img src={require("../../assets/gifs/home_gif.gif")} alt="GIF" />
      </div>
    </section>
  );
};

export default Home;
