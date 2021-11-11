import React from 'react'
import './Ratings.css'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Ratings = ({value}) => {
    return (
        <div className="rating">
            <Stack spacing={1}>
                <Rating name="half-rating-read" value={value} precision={0.5} readOnly />
              </Stack>
        </div>
    )
}

export default Ratings
