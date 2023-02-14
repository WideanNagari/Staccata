import Dashboard from '../Admin/Dashboard'

import NotFound from '../Etc/NotFound'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const AdminTemplate = () => {
    return (
        <Router>
            <div className="user-main">
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