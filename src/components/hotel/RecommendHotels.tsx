import Button from '@components/shared/Button'
import Flex from '@components/shared/Flex'
import ListRow from '@components/shared/ListRow'
import Spacing from '@components/shared/Spacing'
import Text from '@components/shared/Text'
import addDelimiter from '@components/utils/PriceHandler'
import StarRating from '@components/utils/starRating'
import { css } from '@emotion/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useRecommendHotels from './hooks/useRecommend'

const RecommendHotels = ({
  recommendHotels,
}: {
  recommendHotels: string[]
}) => {
  const [showMore, setShowMore] = useState(false)
  const { data, isLoading } = useRecommendHotels({ hotelIds: recommendHotels })
  if (isLoading || data == null) {
    return null
  }

  const hotelList = data.length < 3 || showMore ? data : data.slice(0, 3)
  return (
    <div css={ContainerStyles}>
      <Text bold typography="t4">
        추천 호텔
      </Text>
      <Spacing size={16} />
      <ul>
        {hotelList.map((hotel) => (
          <Link to={`/hotel/${hotel.id}`}>
            <ListRow
              key={hotel.id}
              left={
                <img
                  src={hotel.mainImageUrl}
                  css={ImageStyles}
                  alt={`${hotel.name}의 사진`}
                />
              }
              contents={
                <ListRow.Texts title={hotel.name} subTitle={hotel.comment} />
              }
              right={
                <Flex direction="column">
                  <Text typography="t6">
                    {addDelimiter(`${hotel.price}`).concat('원')}
                  </Text>
                  <Text>{<StarRating stars={hotel.starRating} />}</Text>
                </Flex>
              }
            />
          </Link>
        ))}
      </ul>
      {data.length > 3 && showMore === false ? (
        <>
          <Spacing size={16} />
          <Button
            css={ButtonStyle}
            full
            weak
            onClick={() => {
              setShowMore(true)
            }}
          >
            더보기
          </Button>
        </>
      ) : null}
    </div>
  )
}

const ContainerStyles = css`
  padding: 24px;
`
const ImageStyles = css`
  width: 80px; 
  height=80px;
  object-fit: cover;
  border-radius: 4px;
`

const ButtonStyle = css`
  border-radius: 4px;
`
export default RecommendHotels
