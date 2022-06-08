import React from 'react';

export default function Javadoc() {
    React.useEffect(() => {
        window.location.href = 'https://api-docs.katalon.com/?t=1';
    }, []);
    return null;
};