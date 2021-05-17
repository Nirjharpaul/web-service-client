import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { userLogIn } from '../../../../App';


const PrivateRoute = ({ children, ...rest }) => {

    const [user, setUser] = useContext(userLogIn);

    const localUser = JSON.parse(localStorage.getItem('user')) || {};
    console.log(user);

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email || localUser.email ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;