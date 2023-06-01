import { NavLink, Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader/Loader.jsx";
import css from "components/SharedLayout/SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div className={css.mainContainer}>
      <header className={css.header}>
        <ul className={css.navList}>
          <li>
            <NavLink to="/" className={css["nav-link"]}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/tweets" className={css["nav-link"]}>
              Tweets
            </NavLink>
          </li>
        </ul>
      </header>
      <main className={css.container}>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <footer>
        This project was created during the training. You can view the source
        files of this and my other projects by clicking on this logo:
      </footer>
    </div>
  );
};

export default SharedLayout;
