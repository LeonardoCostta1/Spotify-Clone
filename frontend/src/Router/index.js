import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Main from '../Pages/Main';
import Artist from '../Pages/Artist'


export default function Router() {
  return (
        <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
        
                <Route path="/artist/:id">
                    <Artist/>
                </Route>
        </Switch>

  );
}
