import "./footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-6">
          <p>The MIT License (MIT) Copyright (c)</p>
        </div>
        <div className="col-6">
          <p>
            Project made by{" "}
            <a
              className="text-white"
              href="https://github.com/jaumeollerfernandez"
            >
              jaumeollerfernandez
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
