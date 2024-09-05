import React from 'react'


function Article(props) {
    const { img,alt_img,titre,contenu } = props;
    return (
        <div class="feature-item">
            <img src={img} alt={alt_img} class="feature-icon" />
            <h3 class="feature-item-title">{titre}</h3>
            <p>
                {contenu }
            </p>
        </div>
    )


}

export default Article

