import React from 'react';
import styling from '../../styles/_card.module.scss';

export default function Card(props) {
    return (
        <div className={styling.card}>
            {props.children}
        </div>
    )
}
