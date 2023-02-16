import Dashboard from '../User/Dashboard'
import About from '../User/About'
import Reports from '../User/Reports'
import HowToUse from '../User/HowToUse'
import FAQ from '../User/FAQ'

import NotFound from '../Etc/NotFound'

import Button from '../Components/Button'
import NavButton from '../Components/NavButton'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from "react";

const UserTemplate = () => {
    const loggedIn = true;
    const [active, setActive] = useState("Page 1");
    
    const menuOnClick = (name) => {
        setActive(name);
    }
    return (
        <Router>
            <div className="user-main flex flex-col h-screen">
                <div className="bg-primary-900 h-20 px-20 py-2 w-full flex justify-between items-center">
                    <img src="/Logo/Logo-3.png" alt="" className="h-16" />
                    <div className="flex justify-between w-2/5 text-lg">
                        <NavButton active={active} name="Page 1" to="/user" clickHandler={menuOnClick} />
                        <NavButton active={active} name="Page 2" to="/user/about" clickHandler={menuOnClick} />
                        <NavButton active={active} name="Page 3" to="/user/report" clickHandler={menuOnClick} />
                        <NavButton active={active} name="Page 4" to="/user/howtouse" clickHandler={menuOnClick} />
                        <NavButton active={active} name="Page 5" to="/user/faq" clickHandler={menuOnClick} />
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
                    <Route exact path="/user">
                        <Dashboard />
                    </Route>
                    <Route path="/user/about">
                        <About />
                    </Route>
                    <Route path="/user/report">
                        <Reports />
                    </Route>
                    <Route path="/user/howtouse">
                        <HowToUse />
                    </Route>
                    <Route path="/user/faq">
                        <FAQ />
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