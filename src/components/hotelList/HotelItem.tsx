import { Hotel } from '@components/models/hotel'
import Flex from '@components/shared/Flex'
import ListRow from '@components/shared/ListRow'
import Spacing from '@components/shared/Spacing'
import Text from '@components/shared/Text'
import addDelimiter from '@utils/PriceHandler'
import { css } from '@emotion/react'
import Tag from '@components/shared/Tag'
import { differenceInMilliseconds, parseISO } from 'date-fns'
import formatTime from '@components/utils/formatTime'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HotelItem = ({ hotel }: { hotel: Hotel }) => {
  const [remainTime, setRemainTime] = useState(0)
  useEffect(() => {
    if (hotel.events == null || hotel.events.promoEndTime == null) {
      return
    }

    const promoEndTime = hotel.events.promoEndTime

    const timer = setInterval(() => {
      const leftTime = differenceInMilliseconds(
        parseISO(promoEndTime),
        new Date(),
      )
      if (leftTime < 0) {
        clearInterval(timer)
      } else {
        setRemainTime(leftTime)
      }
    }, 1_000)
    return () => {
      clearInterval(timer)
    }
  }, [hotel.events])
  const tagComponent = () => {
    if (hotel.events) {
      const { name, tagThemeStyle } = hotel.events
      const promoTitle =
        remainTime > 0 ? ` · ${formatTime(remainTime)} 남음` : ''

      return (
        <div>
          <Tag
            size="small"
            color={tagThemeStyle.fontColor}
            backgroundColor={tagThemeStyle.backgroundColor}
          >
            {name.concat(promoTitle)}
          </Tag>
          <Spacing size={8} />
        </div>
      )
    }
    return null
  }
  return (
    <>
      <Link to={`/hotel/${hotel.id}`}>
        <ListRow
          style={ContainerStyles}
          contents={
            <Flex direction="column">
              {tagComponent()}
              <ListRow.Texts
                title={hotel.name}
                subTitle={hotel.comment}
              ></ListRow.Texts>
              <Text typography="t7" color="gray700">
                {hotel.starRating}성급
              </Text>
            </Flex>
          }
          right={
            <Flex direction="column" justify="center" align="center">
              <img
                src={hotel.mainImageUrl}
                alt={hotel.mainImageUrl}
                css={ImageStyles}
              />
              <Spacing size={8} />
              <Text typography="t7" bold>
                {addDelimiter(hotel.price)}원
              </Text>
            </Flex>
          }
        />
      </Link>
    </>
  )
}

const ContainerStyles = css`
  align-items: flex-start;
`

const ImageStyles = css`
  width: 90px;
  height: 100px;
  border-radius: 8px;
  object-fit: cover;
  // margin-left: 16px;
`

export default HotelItem
