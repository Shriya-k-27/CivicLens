import {Link} from 'react-router-dom';

function AdminHome(){
    return(
        <div>
            <h1>Admin Dashboard</h1>
            <p>Manage CivicLens learning content.</p>

            <h2>Management</h2>
            <Link to="/admin/modules">Manage Modules</Link>
            <br/><br/>

            <Link to="/admin/lessons">Manage Lessons</Link>
        </div>
    );
}

export default AdminHome;