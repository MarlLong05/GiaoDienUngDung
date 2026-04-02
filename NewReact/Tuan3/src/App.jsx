import FormUser from "./components/FormUser";
import Clock from "./components/Clock";
import ProductFilter from "./components/ProductFilter";
import TodoApp from "./components/TodoApp";
import Stopwatch from "./components/Stopwatch";
import FetchUsers from "./components/FetchUsers";
import { ThemeProvider } from "./components/ThemeProvider";
import Button from "./components/Button";
import "./App.css";
function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: 20 }}>
        <section>
          <h2>Bài 1: Form</h2>
          <FormUser />
        </section>
        <section>
          <h2>Bài 2: Clock</h2>
          <Clock />
        </section>

        <section>
          <h2>Bài 3: Product Filter</h2>
          <ProductFilter />
        </section>

        <section>
          <h2>Bài 4: Todo</h2>
          <TodoApp />
        </section>

        <section>
          <h2>Bài 5: Stopwatch</h2>
          <Stopwatch />
        </section>

        <section>
          <h2>Bài 6: Fetch Users</h2>
          <FetchUsers />
        </section>

        <section>
          <h2>Bài 7: Theme</h2>
          <Button />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;