// import logo from './logo.svg';
import Login from './LoginRegister/Login'
import Register from './LoginRegister/Register'

import UserPage from './Template/UserTemplate'
import AdminPage from './Template/AdminTemplate'

import NotFound from './Etc/NotFound'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content h-screen bg-primary">
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/user">
              <UserPage />
            </Route>
            <Route path="/admin">
              <AdminPage />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
