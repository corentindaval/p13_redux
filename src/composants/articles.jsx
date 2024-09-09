import React from 'react'


function Article(props) {
    const { img,alt_img,titre,contenu } = props;
    return (
        <div className="feature-item">
            <img src={img} alt={alt_img} class="feature-icon" />
            <h3 className="feature-item-title">{titre}</h3>
            <p>
                {contenu }
            </p>
        </div>
    )


}

export default Article

