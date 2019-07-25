import React, {createRef} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {ContextProvider} from "./state/state";
import './App.scss'
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Button, Card, Sticky} from "semantic-ui-react";

import ProfileCard from "./components/ProfileCard";
import NavBar from "./components/Navbar"
import FiltersForm from "./components/FiltersForm"
import StickyButton from "./components/StickyButton";

export const Listing = {
    'id': '0002caf0-452a-49cc-865f-28c0d2d00ae4',
    photo: 'https://res.cloudinary.com/drdpedroso/image/upload/v1564074302/fallen-csgo-250x350_nqukzf.png',
    steamId: 'Fallen',
    nick: 'Fallen',
    name: 'Nykolas Lima',
    price: 200,
    description: '',
    specialties: ['AWPer', 'Dust2', 'Smoker', 'Clutcher', 'Menor Bolado']
}

function Index() {
    // const {filters, setFilters} = useContext(FiltersContext);
    return (
        // TODO remove inline style here
        <div style={{marginTop: 85}}>
            <FiltersForm/>
            {/*<pre>{JSON.stringify(filters)}</pre>*/}
            {/*<Button onClick={(e) => setFilters({leke: 123})}>eeee</Button>*/}
            {/*<div style={{display: 'flex', flexWrap: 'wrap', padding: 20}}>*/}
            <Card.Group centered doubling>
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
                <ProfileCard item={Listing} />
            </Card.Group>
            {/*</div>*/}
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
                <NavBar>
                    <Route path="/" exact component={Index}/>
                    <Route path="/about/" component={About}/>
                    <Route path="/users/" component={Users}/>
                </NavBar>
            </Router>
        </ContextProvider>
    );
}

export default App;
