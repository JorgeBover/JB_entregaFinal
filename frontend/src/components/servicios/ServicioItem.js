import React from 'react';


const ServicioItem = (props) => {
    const { title, imagen, body } = props;

    return (

        <div className='servdetalle'>
            <img src={imagen} />
            <h4>{title}</h4>
            <p>{body}</p>
        </div>


    );
}

export default ServicioItem;