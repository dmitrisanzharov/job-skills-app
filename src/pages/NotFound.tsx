import React, { useEffect } from 'react';


const NotFound: React.FC = () => {

    useEffect(() => {
        document.title = '404 - Page Not Found';
    }, []);

  return <h1>404 - Page Not Found</h1>;
};

export default NotFound;