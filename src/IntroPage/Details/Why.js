import React from "react";
import Eff from "../../images/Efficient.jpg";
import Acc from "../../images/accessible.png";
import Sim from "../../images/simple.jpg";
import Yeild from "../../images/Yielding.jpg";
import "../Details/Why.css";
function Why() {
  return (
    <div>
      <h1>Effortlessly split bills with SplitEase</h1>
      <div className="eff">
        <img src={Eff} alt="error" />
        <div>
          <h3>Efficient</h3>
          <p>
            Efficient Split bills quickly and <br />
            effortlessly with Shareify, saving you time and hassle
          </p>
        </div>
      </div>

      <div className="acc">
        <img src={Acc} alt="error" className="acc-img" />
        <div>
          <h3>Accessible</h3>
          <p>
            Shareify's user-friendly interface makes bill splitting accessible
            to everyone.
          </p>
        </div>
      </div>
      <div className="acc">
        <img src={Sim} alt="error" className="acc-img" />
        <div>
          <h3>Simple</h3>
          <p>
            Simplify bill splitting with Shareify's straightforward design
            <br /> and easy-to-use features.
          </p>
        </div>
      </div>
      <div className="acc">
        <img src={Yeild} alt="error" className="acc-img" />
        <div>
          <h3>Yielding</h3>
          <p>
            Ensure precision in bill splitting with Shareify's advanced
            calculation technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Why;
