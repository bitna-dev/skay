import { Hotel as IHotel } from '@components/models/hotel'
import Flex from '@components/shared/Flex'
import ListRow from '@components/shared/ListRow'
import Spacing from '@components/shared/Spacing'
import Text from '@components/shared/Text'
import addDelimiter from '@utils/PriceHandler'
import { css } from '@emotion/react'

const Hotel = ({ hotel }: { hotel: IHotel }) => {
  return (
    <>
      <ListRow
        style={ContainerStyles}
        contents={
          <Flex direction="column">
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

export default Hotel
