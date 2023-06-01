import { useState } from "react";
import styles from './App.css'

function LoginReact() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setLoggedIn(false);
  };

  return (
    <div className={styles.cointainer}>
      {loggedIn ? <p>Вы в системе!</p> : <p>Войдите в систему!</p>}
      <button class="btn btn-primary" onClick={loggedIn ? handleLogoutClick : handleLoginClick}>
        {loggedIn ? "Выйти" : "Войти"}
      </button>
    </div>
  );
}

export default LoginReact;
