import useHotels from '@components/hotelList/hooks/useHotels'
import Hotel from '@components/hotelList/Hotel'
import Spacing from '@components/shared/Spacing'
import Top from '@components/shared/Top'
import { Fragment } from 'react'

const Home = () => {
  const { data: hotels } = useHotels()

  console.log(hotels)
  return (
    <>
      <Top title="인기 호텔" subTitle="호텔부터 펜션까지 최저가" />
      {hotels?.map((hotel) => (
        <Fragment key={hotel.id}>
          <Hotel hotel={hotel} />
          <Spacing size={8} backgroundColor="gray50" />
        </Fragment>
      ))}
    </>
  )
}

export default Home
