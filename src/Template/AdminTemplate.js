import Dashboard from '../Admin/Dashboard'
import MasterUser from '../Admin/MasterUser'
import MasterReport from '../Admin/MasterReport'
import MasterFAQ from '../Admin/MasterFAQ'

import NotFound from '../Etc/NotFound'

import NavButtonAdmin from '../Components/Admin/NavButtonAdmin'

import { faHouse, faUser, faComments, faQuestionCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AdminTemplate = () => {
    const [active, setActive] = useState("Dashboard");
    const history = useHistory();

    const menuOnClick = (name) => {
        setActive(name);
    }
    
    return (
        <Router>
            <div className="user-main flex h-full">
                <div className='h-full w-1/5 border-primary-100 border-r-2 px-6 py-10'>
                    <div className="flex justify-center mb-10">
                        <img src="/Logo/Logo-2.png" alt="" className="h-32" />
                    </div>
                    <NavButtonAdmin active={active} name="Dashboard" to="/admin" icon={faHouse} clickHandler={menuOnClick}/>
                    <NavButtonAdmin active={active} name="User" to="/admin/users" icon={faUser} clickHandler={menuOnClick}/>
                    <NavButtonAdmin active={active} name="User Reports" to="/admin/reports" icon={faComments} clickHandler={menuOnClick}/>
                    <NavButtonAdmin active={active} name="FAQ" to="/admin/faq" icon={faQuestionCircle} clickHandler={menuOnClick}/>
                    <NavButtonAdmin active={active} name="???" to="/admin" icon={faHouse} clickHandler={menuOnClick}/>

                    <div className="w-full border-b-2 border-primary-100 mb-2"></div>
                    
                    <NavButtonAdmin active={active} name="Logout" to="/" icon={faSignOut}/>
                </div>
                <Switch>
                    <Route exact path="/admin">
                        <Dashboard />
                    </Route>
                    <Route path="/admin/users">
                        <MasterUser />
                    </Route>
                    <Route path="/admin/reports">
                        <MasterReport />
                    </Route>
                    <Route path="/admin/faq">
                        <MasterFAQ />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
 
export default AdminTemplate;