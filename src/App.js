import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
function App() {
  return (
    <div>
      <Header title="Todo App" searchBar={true} />

        <Todos />
        <Footer />

    </div>
  );
}

export default App;