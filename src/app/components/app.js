import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router';

const setActive = () => {
    console.log('New Member');
}


const App = (props) => {        
    return(
        <div className="">
        <nav className="navbar navbar-fixed navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Todos</a>
                </div>
                <ul className="nav navbar-nav">
                    <li className="active"><Link to="/" >Members</Link></li>
                    <li><Link to="new-member">Add Member</Link></li>
                </ul>
            </div>
        </nav>
        {/* Each smaller components */}
        {props.children}
        </div>
    );
}

// export function test() {
//     console.log('test');
// }

export default App;