import "./navbar.css";

export function PokeNavBar(props) {
  function returnNumber() {
    let NumberToSend = document.getElementById("searchPokemonNumber").value;
    console.log(NumberToSend);
    props.getNumberData(NumberToSend);
  }

  return (
    <>
      <nav className="navbar-pokemon">
        <div className="row">
          <div className="col-4 pokemon-logo">
            <div className="row">
              <div className="col-6 px-1">
                <img
                  src="./src/assets/loading.gif"
                  width={50}
                  alt=""
                  srcset=""
                />
              </div>
              <div className="col-6">
                <div className="fs-1 PokeTitle">PokeData</div>
              </div>
            </div>
          </div>
          <div className="col-4 text-center ">
            <div className="row">
              <div className="col SearchBar">
                <button className="btn btn-dark">Find by name</button>
                <input
                  className="input-group-text mx-2"
                  type="text"
                  id="searchPokemonName"
                />
              </div>
            </div>
          </div>
          <div className="col-4 text-center ">
            <div className="row">
              <div className="col SearchBar">
                <button
                  type="number"
                  className="btn btn-dark"
                  onClick={() => {
                    returnNumber();
                  }}
                >
                  How many?
                </button>
                <input
                  className="mx-2 input-group-text"
                  type="text"
                  id="searchPokemonNumber"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default PokeNavBar;
