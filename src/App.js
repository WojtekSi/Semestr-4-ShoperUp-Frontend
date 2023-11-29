import List from "./components/list/list.js";

function App() {
  return (
    <div>
      <List lengthList={10} url={'https://jsonplaceholder.typicode.com/todos'} />
    </div>
  );
}

export default App;
