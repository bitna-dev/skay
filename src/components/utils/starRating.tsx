import { css } from '@emotion/react'
import { Rating, Star } from '@smastrom/react-rating'
import { useState } from 'react'

// Declare it outside your component so it doesn't get re-created

const myStyles = {
  itemShapes: Star,
  activeFillColor: '#ffb700',
  inactiveFillColor: '#fbf1a9',
}

const StarRating = ({ stars = 0 }: { stars: number }) => {
  const [rating, setRating] = useState(0)
  if (stars) {
    return (
      <Rating css={StarStyles} value={stars} itemStyles={myStyles} readOnly />
    )
  }
  return <Rating value={rating} itemStyles={myStyles} onChange={setRating} />
}

const StarStyles = css`
  max-width: 100px;
`

export default StarRating
