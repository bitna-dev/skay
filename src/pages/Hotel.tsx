import Carousel from '@components/hotel/Carousel'
import useHotel from '@components/hotel/hooks/useHotel'
import Contents from '@components/hotel/Contents'
import Loader from '@components/shared/Loader'
import Top from '@components/shared/Top'
import { useParams } from 'react-router-dom'
import Rooms from '@components/hotel/Rooms'
import Map from '@components/hotel/Map'

const Hotel = () => {
  const { id } = useParams() as { id: string }

  const { data, isLoading } = useHotel({ id })

  if (isLoading || data == null) {
    return <Loader />
  } else {
    const { name, comment, images, contents, location } = data

    return (
      <>
        <Top title={name} subTitle={comment} />
        <Carousel images={images} />
        <Rooms />
        <Contents contents={contents} />
        <Map location={location} />
      </>
    )
  }
}

export default Hotel
