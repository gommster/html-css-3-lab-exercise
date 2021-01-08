import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className='Header'>
        <div className='navContainer'>
          <div className='bootstrapButton'>
            <img src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg'></img>
          </div>
          <button className='menuButton'>
            <div>
              MENU
            </div>
            <div className='hamburger'>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </button>
          <div className='navBar'>
            <div>SERVICES</div>
            <div>PORTFOLIO</div>
            <div>ABOUT</div>
            <div>TEAM</div>
            <div>CONTACT</div>
          </div>
        </div>
      </nav>
      <section className="welcome">
        <div className="container">
          <p className="first">Welcome to Our Studio!</p>
          <p className="big">IT'S NICE TO MEET YOU</p>
          <a className="moreButton">TELL ME MORE</a>
        </div>
      </section>
    </div>
  );
}

export default App;
