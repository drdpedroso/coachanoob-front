import React, {createRef} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {ContextProvider} from "./state/state";
import './App.scss'
import 'semantic-ui-css/semantic.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Button, Card, Sticky} from "semantic-ui-react";

import PropertyCard from "./components/PropertyCard";
import NavBar from "./components/Navbar"
import FiltersForm from "./components/FiltersForm"
import StickyButton from "./components/StickyButton";

export const Listing = {
    'id': '0002caf0-452a-49cc-865f-28c0d2d00ae4',
    'property': {
        'id': '73aaf381-d8ba-401c-9629-9ffe5e8cd965',
        'type': 'OFFICE',
        'usageType': 'COMMERCIAL',
        'bedrooms': 0,
        'suites': 0,
        'bathrooms': 2,
        'parkingSpaces': 1,
        'area': 93,
        'condominiumPrice': 1190,
        'address': {
            'state': 'São Paulo',
            'city': 'Santos',
            'zone': 'Bairros',
            'neighborhood': 'Marapé',
            'street': 'Avenida Senador Pinheiro Machado',
            'streetNumber': '22',
            'zipCode': '11075000',
            'latitude': -23.943385,
            'longitude': -46.330819,
            'precision': 'ROOFTOP',
            '__typename': 'Address'
        },
        '__typename': 'Property'
    },
    'title': 'Conjunto Comercial Duplex (Exclusividade)',
    'description': 'Conjunto Comercial Duplex composto na parte superior de 2 salas, copa, lavabo e depósito e na parte inferior com 1 sala (podendo ser dividida) 1 lavabo e 1 depósito',
    'business': 'SALE',
    'salePrice': 265000,
    'photos': ['https://resizedimgs.vivareal.com/crop/317x212/vr.images.sp/033e39324e5a9c74c9c3d693db633b0d.jpg', 'https://resizedimgs.vivareal.com/crop/317x212/vr.images.sp/c36a9030d7e17a29e34b97fffbb3450b.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/9313a2aa4ef4d129dc8a673f56de74e8.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/5a5e8af7e823898ff50a2c931da230e3.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/88ae4f3e04597a162649805bf7eee2d5.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/ae4033b2c6bb69339077b871c5dee12d.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/b4df63691f0a840e184f36b70e5aabbb.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/2f562fe1528bd6902e5060d85d5e0e00.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/d53b0b575cc6641254f856b22ee7f436.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/d26a61b311df98893356906ba4cf23d0.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/b3dabb2f5586e22a1bb037fef4779ac1.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/2ab5bc137f85303e23a16bc68edf2d52.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/e1319051879da3a12b8dac8abcf1e2bf.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/00aa80cf1beaa17ece13e2bbfbc514b3.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/5b66baa3ca7ea61caa305be0c6563409.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/4c7bddd8b4b3fe823e15d11555c4d17a.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/66ab057b9b72859328962a8e9ce5c6a5.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/a2915744185e85a96f22dd3f9691cde9.jpg', 'https://resizedimgs.vivareal.com/{action}/{width}x{height}/vr.images.sp/ca7ba54020e906d0270bcb137e63d339.jpg'],
    '__typename': 'Listing'
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
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
                <PropertyCard item={Listing} carousel/>
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
