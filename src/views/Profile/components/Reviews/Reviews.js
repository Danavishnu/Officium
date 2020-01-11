import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

import axios from 'utils/axios';
import { OverallReviews, ReviewCard } from './components';

const useStyles = makeStyles(theme => ({
  root: {},
  review: {
    marginTop: theme.spacing(2)
  }
}));

const Reviews = props => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [reviews, setReviews] = useState([]);
  // console.log("#########")
  // console.log(id)
  useEffect(() => {
    let mounted = true;
    var my_str=localStorage.getItem("Company")
    console.log(my_str)
    const fetchReviews = () => {
      if (mounted) {
        axios
          .get('/api/users/'.concat(my_str,'/reviews'))
          .then(response => setReviews(response.data.reviews));
      }
      
    };



    fetchReviews();

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >
      <OverallReviews ratings={reviews.map(review => review.rating)} />
      {reviews.map(review => (
        <ReviewCard
          className={classes.review}
          key={review.id}
          review={review}
        />
      ))}
    </div>
  );
};

Reviews.propTypes = {
  className: PropTypes.string
};

export default Reviews;
