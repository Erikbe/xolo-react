import React from 'react';

function Iconbox(props) {
    const iconClassName = `${props.icon ? 'iconbox-' + props.icon: ''}`;

    return (
        <div className={`iconbox ${iconClassName}`}>
            <div className='iconbox-body'>
                <div className='iconbox-title'>{props.title}</div>
                <div className='iconbox-text'>{props.text}</div>
            </div>
        </div>
    );
}

function IconboxRow(props) {
    return (
        <div className='iconbox-row'>
            {props.children}
        </div>
    );
}

export { Iconbox, IconboxRow } ;