import React from 'react';
import styling from './_card.module.scss';

export default function Card(props) {
    return (
        <div className={styling.card}>
            {props.children}
        </div>
    )
}
