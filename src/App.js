import React, {useContext} from "react";
import {FiltersContext} from "./state";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Button from './components/Button'
import {ContextProvider} from "./state/state";

function Index() {
    const {filters, setFilters} = useContext(FiltersContext);
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <pre>{JSON.stringify(filters)}</pre>
            <Button onClick={(e) => setFilters({leke: 123})}>eeee</Button>
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
        <ContextProvider>
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

                    <Route path="/" exact component={Index}/>
                    <Route path="/about/" component={About}/>
                    <Route path="/users/" component={Users}/>
                </div>
            </Router>

        </ContextProvider>
    );
}

export default App;
