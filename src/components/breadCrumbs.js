import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


export default function BreadCrumbs() {
    const location = useLocation();

    const [pathname, setPathname] = useState('');


    React.useEffect(() => {
        console.log('handle route change here', location)
        switch(location.pathname) {
            case '/':
                setPathname('');
                break;
            case '/new':
                setPathname(' > New Issue');
                break;
        }
    }, [location]);

    return (
        <h3>Issue Boards {pathname}</h3>
    );
}