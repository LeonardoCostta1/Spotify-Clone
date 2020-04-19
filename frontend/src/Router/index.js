import React from 'react';
import {Switch,Route} from 'react-router-dom'
import Main from '../Pages/Main';
import Artist from '../Pages/Artist'
import Error from '../components/Error';


export default function Router() {
  return (
        <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
        
                <Route path="/artist/:id">
                    <Artist/>
                </Route>

                <Route path="*">
                    <Error/>
                </Route>
                <Route path="/error">
                    <Error/>
                </Route>
        </Switch>

  );
}
