import useHotels from '@components/hotelList/hooks/useHotels'
import HotelItem from '@components/hotelList/HotelItem'
import Loader from '@components/shared/Loader'
import Spacing from '@components/shared/Spacing'
import Top from '@components/shared/Top'
import { Fragment } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const Home = () => {
  const { data: hotels, hasNextPage, loadMore } = useHotels()

  console.log(hotels)
  return (
    <>
      <Top title="인기 호텔" subTitle="호텔부터 펜션까지 최저가" />
      <InfiniteScroll
        dataLength={hotels?.length ?? 0}
        hasMore={hasNextPage}
        next={loadMore}
        scrollThreshold="100px"
        loader={<Loader />}
      >
        <ul>
          {hotels?.map((hotel, idx) => (
            <Fragment key={hotel.id}>
              <HotelItem hotel={hotel} />
              {hotels.length - 1 === idx ? null : (
                <Spacing
                  size={8}
                  backgroundColor="gray50"
                  style={{ margin: '20px 0' }}
                />
              )}
            </Fragment>
          ))}
        </ul>
      </InfiniteScroll>
    </>
  )
}

export default Home
