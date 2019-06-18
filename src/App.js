import React, {useContext} from "react";
import {FiltersContext} from "./state";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Button from './components/Button'
import {ContextProvider} from "./state/state";
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LoginForm from "./components/LoginForm"

function Index() {
    const {filters, setFilters} = useContext(FiltersContext);
    return (
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <pre>{JSON.stringify(filters)}</pre>
            <Button onClick={(e) => setFilters({leke: 123})}>eeee</Button>
            <LoginForm onSubmit={(form) => console.log(form)}/>
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
                <Route path="/" exact component={Index}/>
                <Route path="/about/" component={About}/>
                <Route path="/users/" component={Users}/>
            </Router>
        </ContextProvider>
    );
}

export default App;
