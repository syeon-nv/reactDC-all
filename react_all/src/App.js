import "./App.css";
import PureRcc from "./pureComponent/pureRcc";
import HabitRcc from "./rcc/habitRcc";
import SimpleHabit from "./simpleRcc/simpleHabit";

function App() {
  return (
    <>
      <section>
        <h2 className="sec_title">01. SimpleRcc!</h2>
        <SimpleHabit />
      </section>
      <section>
        <h2 className="sec_title">02. RCC!</h2>
        <HabitRcc />
      </section>
      <section>
        <h2 className="sec_title">03. PureComponent!</h2>
        <PureRcc />
      </section>
    </>
  );
}

export default App;
