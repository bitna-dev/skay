import Carousel from '@components/hotel/Carousel'
import useHotel from '@components/hotel/hooks/useHotel'
import Contents from '@components/hotel/Contents'
import Loader from '@components/shared/Loader'
import Top from '@components/shared/Top'
import { useParams } from 'react-router-dom'
import Rooms from '@components/hotel/Rooms'
import Map from '@components/hotel/Map'
import RecommendHotels from '@components/hotel/RecommendHotels'
import ActionButtons from '@components/hotel/ActionButtons'

const Hotel = () => {
  const { id } = useParams() as { id: string }

  const { data, isLoading } = useHotel({ id })

  if (isLoading || data == null) {
    return <Loader full />
  } else {
    const { name, comment, images, contents, location, recommendHotels } = data

    return (
      <>
        <Top title={name} subTitle={comment} />
        <Carousel images={images} />
        <ActionButtons hotel={data} />
        <Rooms />
        <Contents contents={contents} />
        <Map location={location} />
        <RecommendHotels recommendHotels={recommendHotels} />
      </>
    )
  }
}

export default Hotel
