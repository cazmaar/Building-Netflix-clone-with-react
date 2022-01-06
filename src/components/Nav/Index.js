import "./index.css"
function NavBarLeft() {
  return (
    <div id="navbar-left" class="navbar">
      <p id="netflix" class="item-left">
        NETFLIX
      </p>
      <p id="browse" class="item-left">
        Browse
      </p>
      <p id="browse" class="item-left">
        Browse
      </p>
      <p id="dvd" class="item-left">
        DVD
      </p>
    </div>
  );
}

function NavBarRight() {
  return (
    <div id="navbar-right" class="navbar">
      <p id="search" class="item-right">
        Bell
      </p>
      <p id="profile" class="item-right">
        Profile
      </p>
      <p id="joshua" class="item-right">
        Joshua
      </p>
    </div>
  );
}

export function Nav() {
  return (
    <main class="Nav-sect">
      <NavBarLeft />
      <NavBarRight />
    </main>
  );
}
