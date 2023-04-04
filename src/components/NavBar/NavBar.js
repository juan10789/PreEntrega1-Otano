import CarWidget from "../CarWidget/CarWidget";

const NavBar = () => {
  return (
    <nav>
      <h3>PLACANORTE</h3>
      <div>
        <button>Placas</button>
        <button>Cantos</button>
        <button>Herrajes</button>
      </div>
      <CarWidget />
    </nav>
  );
};

export default NavBar;
