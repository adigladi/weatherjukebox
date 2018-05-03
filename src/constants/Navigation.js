import React from 'react';
import { Link } from 'react-router-dom';

import * as routes from '../constants/routes';

const Navigation = () =>
    <div>
        <ul>
            <li><Link to={routes.SIGN_IN}>Sign in</Link></li>
            <li><Link to={routes.SIGN_UP}>Sign up</Link></li>
            <li><Link to={routes.HOME}>Welcome</Link></li>
            <li><Link to={routes.ACCOUNT}>Account</Link></li>
            <li><Link to={routes.MANAGE_TRACKS}>Manage tracks</Link></li>
            <li><Link to={routes.JUKEBOX}>Jukebox</Link></li>
            <li><Link to={routes.USER_JUKEBOX}>User jukebox</Link></li>
            <li><Link to={routes.PASSWORD_FORGET}>Forgot password</Link></li>
        </ul>
    </div>

export default Navigation;
