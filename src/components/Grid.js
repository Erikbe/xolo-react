import React from 'react';

import '../css/blocks/grid.scss'

function Grid(props) {
    return (
        <article className={`grid ${props.className} ${props.align ? 'grid-' + props.align : ''}`}>
            {props.children}
        </article>
    );
}

function GridContent(props) {
    return (
        <div className='grid-content'>
            {props.children}
        </div>
    );
}

function GridMedia(props) {
    return (
        <figure className='grid-media'>
            <img src={props.img} alt={props.alt} loading='lazy'/>
        </figure>
    );
}

export { Grid, GridContent, GridMedia };