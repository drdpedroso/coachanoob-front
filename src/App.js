import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Index() {
 return (
     <div className="max-w-sm w-full lg:max-w-full lg:flex">
       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
         Button
       </button>
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
