import Dashboard from '../User/Dashboard'

import NotFound from '../Etc/NotFound'

import Button from '../Components/Button'
import NavButton from '../Components/NavButton'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const UserTemplate = () => {
    const loggedIn = true;
    const active = "Page 1";

    return (
        <Router>
            <div className="user-main">
                <div className="bg-primary-900 h-20 px-20 py-2 w-full flex justify-between items-center">
                    <img src="/Logo/Logo-3.png" alt="" className="h-16" />
                    <div className="flex justify-between w-2/5 text-lg">
                        <NavButton active={active} name="Page 1" to="" />
                        <NavButton active={active} name="Page 2" to="" />
                        <NavButton active={active} name="Page 3" to="" />
                        <NavButton active={active} name="Page 4" to="" />
                        <NavButton active={active} name="Page 5" to="" />
                    </div>
                    { loggedIn ? <div className="w-24">
                        <Button text="Logout" name="btn-logout" />
                    </div> :
                    <div className="flex gap-2">
                        <Button text="Register" name="btn-register" addedClass="w-24" />
                        <Button text="Login" name="btn-login" addedClass="w-24" />
                    </div> }
                </div>
                <Switch>
                    <Route path="/">
                        <Dashboard />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
 
export default UserTemplate;