// import logo from './logo.svg';
import Login from './LoginRegister/Login'
import Register from './LoginRegister/Register'

import UserPage from './Template/UserTemplate'
import AdminPage from './Template/AdminTemplate'

import NotFound from './Etc/NotFound'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';

function App() {
  return (
    <CookiesProvider>
      <Router>
        <div className="App">
          <div className="content h-screen bg-primary">
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/admin">
                <AdminPage />
              </Route>
              <Route path="/">
                <UserPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </CookiesProvider>
  );
}

export default App;
