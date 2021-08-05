import React from 'react';
import MainNavigation from "./MainNavigation";
import styling from '../../styles/_layout.module.scss';

export default function Layout(props) {
    return (
        <div>
            <MainNavigation />
            <main className={styling.main}>
                {props.children}
            </main>
        </div>
    )
}
