import Dashboard from '../Admin/Dashboard'

import NotFound from '../Etc/NotFound'

import NavButtonAdmin from '../Components/NavButtonAdmin'

import { faHouse, faUser, faComments, faQuestionCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const AdminTemplate = () => {
    const active = "Dashboard";
    return (
        <Router>
            <div className="user-main flex h-full">
                <div className='h-full w-1/5 border-primary-100 border-r-2 px-6 py-10'>
                    <div className="flex justify-center mb-10">
                        <img src="/Logo/Logo-2.png" alt="" className="h-32" />
                    </div>
                    <NavButtonAdmin active={active} name="Dashboard" to="" icon={faHouse}/>
                    <NavButtonAdmin active={active} name="User" to="" icon={faUser}/>
                    <NavButtonAdmin active={active} name="User Reports" to="" icon={faComments}/>
                    <NavButtonAdmin active={active} name="FAQ" to="" icon={faQuestionCircle}/>
                    <NavButtonAdmin active={active} name="???" to="" icon={faHouse}/>

                    <div className="w-full border-b-2 border-primary-100 mb-2"></div>

                    <NavButtonAdmin active={active} name="Logout" to="" icon={faSignOut}/>
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
 
export default AdminTemplate;