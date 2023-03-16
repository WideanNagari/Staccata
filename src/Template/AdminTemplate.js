import Dashboard from '../Admin/Dashboard'
import MasterUser from '../Admin/MasterUser'
import MasterReport from '../Admin/MasterReport'
import MasterFAQ from '../Admin/MasterFAQ'

import NotFound from '../Etc/NotFound'

import NavButtonAdmin from '../Components/Admin/NavButtonAdmin'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faComments, faQuestionCircle, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useState } from "react";
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";

import Swal from "sweetalert2"

const AdminTemplate = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user_login']);

    const page = cookies.active_page===undefined ? "Dashboard" : cookies.active_page
    const [active, setActive] = useState(page);

    const history = useHistory()
    if(cookies.user_login===undefined || cookies.user_login.level===0){
        history.push('/')
    }

    // const swal_error = (err) => {
    //     Swal.fire({
    //         title: err.response.data.message,
    //         icon: 'error',
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'OK'
    //     });
    // }
    
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
                    
                    <div className="text-white flex gap-4 items-center py-3 mb-2 rounded-lg
                                    hover:bg-primary-200 duration-200 cursor-pointer" onClick={logout}>
                        <div className="w-2 h-8 border-2 border-primary-900 rounded-xl"></div>
                        <div className="flex gap-4 items-center">
                            <FontAwesomeIcon icon={faSignOut} size="lg" fixedWidth/>
                            <p className="text-lg">Logout</p>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route path="/admin/users">
                        <MasterUser />
                    </Route>
                    <Route path="/admin/reports">
                        <MasterReport />
                    </Route>
                    <Route path="/admin/faq">
                        <MasterFAQ />
                    </Route>
                    <Route path="/admin">
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