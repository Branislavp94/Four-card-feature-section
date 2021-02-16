import './App.scss';
import karmaImage from "../src/images/icon-karma.svg";
import CalculatorImage from "../src/images/icon-calculator.svg";
import BuilderImage from "../src/images/icon-team-builder.svg";
import SupervisiorImage from "../src/images/icon-supervisor.svg";

function App() {
  return (
    <>
    <section className="Challenge1">
      <main>
        <section className="headers">
                <h1>  Reliable, efficient delivery</h1>
                <h2> Powered by Technology</h2>
                 <p>Our Artificial Intelligence powered tools use millions of project data points 
                 to ensure that your project is successful</p>
        </section>
        <section className="section_card_container">

          <div className="section_card" id="cart1">
          <div className="card">   
            <div className="card__header">
            <h2>Supervisor</h2>
            <p2>  Monitors activity to identify project </p2>
            </div>  
           <img src={SupervisiorImage} alt="karma" className="img"></img>
            </div>
          </div>

          <div className="section_card" id="cart2">
          <div className="card">   
            <div className="card__header">
            <h2>Team Builder</h2>
            <p2>Scans our talent network to create the optimal team for your project</p2>
            </div>  
           <img src={BuilderImage} alt="karma" className="img"></img>
            </div>
          </div>

          <div className="section_card" id="cart3">
          <div className="card">   
            <div className="card__header">
            <h2>Karma</h2>
            <p2>Regularly evaluates our talent to ensure qualit</p2>
            </div>  
           <img src={karmaImage} alt="karma" className="img"></img>
            </div>
          </div>

          <div className="section_card" id="cart4">
          <div className="card">   
            <div className="card__header">
            <h2>Calculator</h2>
            <p2>Uses data from past projects to provide better delivery estimates</p2>
            </div>  
           <img src={CalculatorImage} alt="karma" className="img"></img>
            </div>
          </div>
          </section>
      </main>
    </section>
    </>
  );
}

export default App;
