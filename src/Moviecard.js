import React from "react";

export default class Moviecard extends React.Component {
    render(){
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg" alt="Poster" />
                    </div>
                    <div className="right">
                        <div className="title">The Avengers</div>
                        <div className="plot">Supernatural powers shown in the movie.</div>
                        <div className="price">Rs. 199</div>

                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="star-dis">
                                <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" className="str-btn" />
                                <img alt="stars" src="https://cdn-icons-png.flaticon.com/128/616/616490.png" className="stars"/>
                                <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" className="str-btn" />
                                <span>0</span>
                            </div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}