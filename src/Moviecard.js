import React from "react";

export default class Moviecard extends React.Component {

    constructor(){
        super();
        this.state = {
            title: "The Avengeress",
            plot: "Supernatural powers shown in the movie.",
            price: 199,
            rating: 8.9,
            stars: 0
        }
    }

    addStars = () => {

        // set state form 1
        this.setState((previousState) => {
            if(previousState.stars < 5){
                return {stars: previousState.stars + .5}
            }
        })
    }

    removeStars = () => {
        if(this.state.stars > 0){
            // set state form 2
            this.setState({ stars: this.state.stars - .5 })
        }
    }

    render(){

        const {title, plot, price, rating, stars} = this.state

        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img src="https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg" alt="Poster" />
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>

                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" className="str-btn" onClick={this.removeStars} />
                                <img alt="stars" src="https://cdn-icons-png.flaticon.com/128/616/616490.png" className="stars"/>
                                <img alt="increase" src="https://cdn-icons-png.flaticon.com/128/748/748113.png" className="str-btn" onClick={this.addStars} />
                                <span>{stars}</span>
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