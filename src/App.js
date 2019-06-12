import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from './components/Button'

function Index() {
 return (
     <div className="max-w-sm w-full lg:max-w-full lg:flex">
         <Button onClick={(e) => console.log(e)}>eeee</Button>
     </div>
 )
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function App() {
  return (
      <Router>
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Index} />
          <Route path="/about/" component={About} />
          <Route path="/users/" component={Users} />
        </div>
      </Router>
  );
}

export default App;
