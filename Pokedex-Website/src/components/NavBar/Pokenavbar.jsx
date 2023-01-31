import "./navbar.css";

export function ColorSchemesExample() {
  return (
    <>
      <nav className="navbar-pokemon">
        <div className="row">
          <div className="col-2 pokemon-logo">
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
          <div className="col-10 text-center ">
            <div className="row SearchBar">
                <div className="col-6">
                    
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-8">
                            <input className="" type="text" />
                        </div>
                        <div className="col-2">
                            <button className="btn">Find</button>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default ColorSchemesExample;
