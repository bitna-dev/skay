import Button from '@components/shared/Button'
import Flex from '@components/shared/Flex'
import ListRow from '@components/shared/ListRow'
import Spacing from '@components/shared/Spacing'
import Tag from '@components/shared/Tag'
import Text from '@components/shared/Text'
import addDelimiter from '@components/utils/PriceHandler'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { useParams } from 'react-router-dom'
import useRooms from './hooks/useRooms'

const Rooms = () => {
  const { id: hotelId } = useParams() as { id: string }
  const { data } = useRooms({ hotelId })
  return (
    <Container>
      <Header align="center" justify="space-between">
        <Text bold typography="t4">
          객실정보
        </Text>
        <Text color="gray500" typography="t7">
          1박, 세금포함
        </Text>
      </Header>
      <ul>
        {data?.map((room) => {
          const due = room.avaliableCount === 1
          const sold = room.avaliableCount === 0

          return (
            <ListRow
              key={room.id}
              left={
                <img
                  src={room.imageUrl}
                  alt={`${room.roomName}의 객실이미지`}
                  css={ImageStyles}
                />
              }
              contents={
                <ListRow.Texts
                  title={
                    <Flex>
                      <Text typography="t5" bold>
                        {room.roomName}
                      </Text>
                      <Spacing direction="horizontal" size={8} />
                      {due ? <Tag backgroundColor="red">마감임박</Tag> : null}
                    </Flex>
                  }
                  subTitle={
                    <Text typography="t7" color="gray800">
                      {`${addDelimiter(room.price)}원 `.concat(
                        room.refundable ? '/ 환불가능' : '/ 환불불가',
                      )}
                    </Text>
                  }
                />
              }
              right={
                sold ? (
                  <Button size="medium" disabled={sold} color="error">
                    매진
                  </Button>
                ) : (
                  <Button size="medium" disabled={sold}>
                    예약
                  </Button>
                )
              }
            />
          )
        })}
      </ul>
    </Container>
  )
}

const Container = styled.div`
  margin: 40px 0;
`

const Header = styled(Flex)`
  padding: 0 24px;
  margin-bottom: 20px;
`

const ImageStyles = css`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 4px;
`
export default Rooms
