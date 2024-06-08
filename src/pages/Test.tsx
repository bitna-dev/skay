import HotelListAdd from '@components/test/HotelListAdd'
import RecomendHotelBtn from '@components/test/RecomendHotelBtn'
import styled from '@emotion/styled'

const Test = () => {
  return (
    <TestStyle>
      <HotelListAdd />
      <RecomendHotelBtn />
    </TestStyle>
  )
}

const TestStyle = styled.div`
  padding: 24px;
  display: flex;
  gap: 24px;
`
export default Test
