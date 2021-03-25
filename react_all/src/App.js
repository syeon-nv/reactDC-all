import "./App.css";
import HabitList from "./rcc/habitList";
import SimpleHabit from "./simpleRcc/simpleHabit";

function App() {
  return (
    <>
      <section>
        <h2>Hello SimpleRcc!</h2>
        <SimpleHabit />
      </section>
      <section>
        <h2>Hello RCC!</h2>
        <HabitList />
      </section>
    </>
  );
}

export default App;
