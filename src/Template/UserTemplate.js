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

import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2"

const UserTemplate = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user_login']);

    const history = useHistory()
    if(cookies.user_login!==undefined && cookies.user_login.level===1){
        history.push('/admin')
    }

    const loggedIn = cookies.user_login===undefined ? false : true;

    const page = cookies.active_page===undefined ? "Dashboard" : cookies.active_page
    const [active, setActive] = useState(page);

    const menuOnClick = (name) => {
        setActive(name);
        setCookie('active_page', name, {
            "path": "/"
        });
    }

    const logout = () => {
        Swal.fire({
            title: 'Are you sure you want to logout?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel'
        }).then((result) => {
            if (result.isConfirmed) {
                removeCookie('user_login');
                removeCookie('active_page');
                history.push('/login')
            }
        });
    }

    const login = () => {
        history.push('/login')
    }

    const register = () => {
        history.push('/register')
    }

    return (
        <Router>
            <div className="user-main flex flex-col h-screen">
                <div className="bg-primary-900 h-20 px-20 py-2 w-full flex justify-between items-center">
                    <img src="/Logo/Logo-3.png" alt="" className="h-16" />
                    <div className="flex justify-between w-2/5 text-lg">
                        <NavButton active={active} name="Dashboard" to="/" clickHandler={menuOnClick} />
                        <NavButton active={active} name="About" to="/about" clickHandler={menuOnClick} />
                        <NavButton active={active} name="Report" to="/report" clickHandler={menuOnClick} />
                        <NavButton active={active} name="How To Use" to="/howtouse" clickHandler={menuOnClick} />
                        <NavButton active={active} name="FAQ" to="/faq" clickHandler={menuOnClick} />
                    </div>
                    { loggedIn ? <div className="w-24">
                        <Button text="Logout" name="btn-logout" addedClass="w-24" handleClick={logout} />
                    </div> :
                    <div className="flex gap-2">
                        <Button text="Register" name="btn-register" addedClass="w-24" handleClick={register} />
                        <Button text="Login" name="btn-login" addedClass="w-24"  handleClick={login} />
                    </div> }
                </div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/report">
                        <Reports />
                    </Route>
                    <Route path="/howtouse">
                        <HowToUse />
                    </Route>
                    <Route path="/faq">
                        <FAQ />
                    </Route>
                    <Route exact path="/">
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