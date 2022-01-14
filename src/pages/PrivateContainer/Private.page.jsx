import React from "react";
import FavoritesView from "../FavoritesView";
import FavoritesViewDetail from "../FavoritesViewDetail";
import { Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from "history";
function PrivateContainer (){
    const history = createBrowserHistory()
return(


   <Switch>
     <Route path='/private/list'>
         <FavoritesView></FavoritesView>
     </Route>
     <Route exact path='/private/videos'>
        <FavoritesViewDetail></FavoritesViewDetail>
     </Route>
     <Route exact path="/private" render={() => (
            <Redirect to="/private/list"/>
          )}/>
           
     </Switch>

)

}

export default PrivateContainer