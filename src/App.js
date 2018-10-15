import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootswatch/dist/journal/bootstrap.css';
import '../node_modules/semantic-ui/dist/semantic.css';
import { Navbar, NavItem, Nav, Grid, Row, Col } from "react-bootstrap";

const PLACES = [
    { name: "Liana", zip: "https://s3.amazonaws.com/uifaces/faces/twitter/kevinoh/128.jpg" },
    { name: "Deontae", zip: "https://s3.amazonaws.com/uifaces/faces/twitter/andysolomon/128.jpg" },
    { name: "Cortez", zip: "https://s3.amazonaws.com/uifaces/faces/twitter/holdenweb/128.jpg" },
    { name: "Geoffrey", zip: "https://s3.amazonaws.com/uifaces/faces/twitter/swaplord/128.jpg" }
];

class App extends Component {
    constructor() {
        super();
        this.state = {
            activePlace: 0,
        };
    }
    render() {
        const activePlace = this.state.activePlace;
        return (

            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            List of clients
                        </Navbar.Brand>
                    </Navbar.Header>
                </Navbar>


                <Grid>
                    <Row>
                        <Col md={4} sm={4}>
                            <h3>Search input</h3>
                            <div className="ui input">
                                <input type="text" placeholder="Search..."></input>
                            </div>


                            <Nav
                                bsStyle="pills"
                                stacked
                                activeKey={activePlace}
                                onSelect={index => {
                                    this.setState({ activePlace: index });
                                }}
                            >
                                {PLACES.map((place, index) => (
                                    <NavItem key={index} eventKey={index}>{place.name}</NavItem>
                                ))}
                            </Nav>
                        </Col>
                        <Col md={8} sm={8}>
                            <ClientsDisplay key={activePlace} zip={PLACES[activePlace].zip} />
                        </Col>
                    </Row>
                </Grid>

            </div>
        );
    }
}
export default App;

class ClientsDisplay extends Component {
    render() {
        return (
            <div className="ui card">
                <div className="image">
                    <img src={this.props.zip}></img>
                </div>
                <div className="content">
                    <a className="header">{this.props.name}</a>
                    <div className="description">
                        {this.props.name}  is Investor Functionality Coordinator
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="user icon"></i>
                        22 Friends
                    </a>
                </div>
            </div>
            /*<h1> Client's details {this.props.zip}</h1>*/
        );
    }
}





