import "./index.css";
function NavBarLeft() {
  return (
    <div id="navbar-left" className="navbar">
      <p id="netflix" className="item-left">
        NETFLIX
      </p>
      <p id="browse" className="item-left">
        Browse
      </p>
      <p id="dvd" className="item-left">
        DVD
      </p>
    </div>
  );
}

function NavBarRight() {
  return (
    <div id="navbar-right" className="navbar">
      <p id="search" className="item-right">
        Bell
      </p>
      <p id="profile" className="item-right">
        Profile
      </p>
      <p id="joshua" className="item-right">
        Joshua
      </p>
    </div>
  );
}

export function Nav({colo}) {
  console.log(colo)
  return (
    <main className="Nav-sect" style={{background: `${colo}`}}>
      <NavBarLeft />
      <NavBarRight />
    </main>
  );
}