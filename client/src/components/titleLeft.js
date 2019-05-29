import React from 'react';
import PropTypes from 'prop-types';
import ratingFourStar from '../images/rating-four-star.png';


const TitleLeft = (props) => {
  const { business, toggleModalDetails } = props;
  const link = 'localhost:3418';
  const comSpace = ', ';
  const setPrice = (count) => {
    let price = '';
    for (let i = 0; i < count; i += 1) {
      price += '$';
    }
    return price;
  };

  return (
    <div className="title" id="title-left">
      <div className="title-left-entry">
        <h1 id="title-left-business-name">{business.name}</h1>
        <svg role="img" className="svg-generic" id="svg-claimed" viewBox="0 0 18 18">
          <path d="M 9 1 a 8 8 0 1 0 0 16 A 8 8 0 0 0 9 1 Z m 3.96 6.28 l -4.808 4.807 l -3.112 -3.11 a 0.8 0.8 0 1 1 1.13 -1.132 l 1.982 1.98 l 3.677 -3.677 a 0.8 0.8 0 1 1 1.13 1.13 Z" />
        </svg>
        <span id="title-business-claimed">Claimed</span>
      </div>

      <div className="title-left-entry left-entry-1">
        <img alt="rating" id="img-rating" src={ratingFourStar} />
        <span id="review-count">{`${business.totalReviews} reviews`}</span>
        <button type="button" className="btn-title-gray" onClick={toggleModalDetails}>
          <svg role="img" className="icon-svg" id="svg-histogram" viewBox="0 0 14 14">
            <path d="M 9 11 V 5 h 2 v 6 H 9 Z M 6 3 h 2 v 8 H 6 V 3 Z M 3 7 h 2 v 4 H 3 V 7 Z" />
          </svg>
          <span>Details</span>
        </button>
      </div>

      <div className="title-left-entry">
        <span id="average-price">{setPrice(business.averageCost)}</span>
        <span id="dot">&#183;</span>
        <span>
          <a className="anchor-link" href={link}>{business.businessTypeOne}</a>
          {comSpace}
          <a className="anchor-link" href={link}>{business.businessTypeTwo}</a>
        </span>
        <button type="button" className="btn-title-gray">Edit</button>
      </div>
    </div>
  );
};

TitleLeft.propTypes = {
  business: PropTypes.object.isRequired,
  toggleModalDetails: PropTypes.func.isRequired,
};

export default TitleLeft;
