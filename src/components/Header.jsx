import Search from "./search/Search";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">
          <a href="/">
            <span>Hotelfinder</span>
            <strong>Book Hotels with ease</strong>
          </a>
        </div>
        <Search />
        <div className="login-register">
          <button>Log in</button>
          <button>Register</button>
        </div>
      </header>
    </>
  );
}
