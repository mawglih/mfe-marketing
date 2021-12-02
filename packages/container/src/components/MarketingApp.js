import { mount } from 'marketing/Marketing';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();
    console.log('history', history)

    useEffect(() => {
        const {onParentNavigate} = mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                console.log('pathname', pathname);
                console.log('new pathname', nextPathname);
                
                if(pathname !== nextPathname) {
                     history.push(nextPathname);
                }
               
            },
        });
        history.listen(onParentNavigate)
    }, []);

    return <div ref={ref}></div>
};