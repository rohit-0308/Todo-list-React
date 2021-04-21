import './App.css';
import Header from './MyComponents/Header'
import {Todos} from './MyComponents/Todos'
import {Footer} from './MyComponents/Footer'

function App() {
  const onDelete = () => {
    console.log("i am Delete")
  }

  let todos = [
    {
      sno: 1,
      title: "Job 1",
      desc: " Job1 todo "
    },
    {
      sno: 2,
      title: "Job 2",
      desc: " Job2 todo "
    },
    {
      sno: 3,
      title: "Job 3",
      desc: " Job3 todo "
    },
  ]
  return (
    
    <div className="App">
      <Header title = "My Todo List" />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />

    </div>
  );
}

export default App;
