import React from 'react';

function Section(props) {
    const headerClassName = `${props.header ? 'section-header' : ''}`,
          colorClassName = `${props.color ? 'section-' + props.color : ''}`;

    return (
        <section className={`${headerClassName} ${colorClassName}`}>
            {props.children}
        </section>
    );
}

export default Section;