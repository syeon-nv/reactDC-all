import "./App.css";
import HabitRcc from "./rcc/habitRcc";
import SimpleHabit from "./simpleRcc/simpleHabit";

function App() {
  return (
    <>
      <section>
        <h2 className="sec_title">01. Hello SimpleRcc!</h2>
        <SimpleHabit />
      </section>
      <section>
        <h2 className="sec_title">02. Hello RCC!</h2>
        <HabitRcc />
      </section>
    </>
  );
}

export default App;
