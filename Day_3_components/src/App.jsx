import Card from "./components/Card"
import Navbar from "./components/Navbar";

const App = () => {

  const user = 'Harsh';

  const age = 89;

  return (
    <div>
      <div className="card">
        <h1>Neha Sharma</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, facere.</p>
      </div>
      <h1>Hello, guys I am {user} and {age}</h1>
      <Navbar />
      <Card />
    </div>
  )
}

export default App