import React from 'react';
import './Projects.css';

const Cards = (props) => {
    return (
        <div className="card-container">
            <img src={props.img} alt="Project Thumbnail" className="card-image" />
            <h2 className='title'>{props.title}</h2>
            <p  className='description' >{props.description}</p>
            <div className="card-buttons">
                    <button 
                        className="card-button"
                        onClick={() => window.open(props.more, '_blank', 'noopener noreferrer')}
                    >
                        Load more
                    </button>
                    <button 
                        className="card-button" 
                        id='btn2'
                        onClick={() => window.open(props.link, '_blank', 'noopener noreferrer')}
                    >
                        Source
                    </button>
            </div>
        </div>
    );
};

export default Cards;   