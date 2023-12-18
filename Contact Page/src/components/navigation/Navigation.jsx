import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="container">
      <div className="logoImg">
        <img src="/images/logo.avif" alt="logo-img" />
      </div>
      <ul className='navMenu'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation;
