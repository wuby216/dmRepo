import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from "./Home";

export class Main extends React.Component {

    getHome = () => {
        return <Home />
    }

    render() {

        return (
            <div className="main">
                <Switch>
                    <Route path="/home" render={this.getHome} />
                    <Route render={() => {     // wildcard match
                        return <Redirect to="/home" />
                    }}/>
                </Switch>
            </div>
        );
    }
}