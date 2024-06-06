import Button from '@components/shared/Button'
import { COLLECTIONS } from '@constants/index'
import { HOTEL_NAMES, IMAGES, HOTEL, EVENTS, ROOMS } from '@mock/data'
import { store } from '@remote/firebase'
import { collection, doc, writeBatch } from 'firebase/firestore'

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const HotelListAdd = () => {
  const batch = writeBatch(store)
  const handleHotelListAdd = () => {
    const hotel = HOTEL_NAMES.map((hotelName, index) => ({
      name: hotelName,
      mainImageUrl: IMAGES[Math.floor(Math.random() * IMAGES.length)],
      images: IMAGES,
      price: random(130000, 200000),
      starRating: random(1, 5),
      ...HOTEL,
      ...(EVENTS[index] != null && { events: EVENTS[index] }),
    }))
    hotel.forEach((hotel) => {
      const hotelDocRef = doc(collection(store, COLLECTIONS.HOTEL))
      batch.set(hotelDocRef, hotel)
      //room 정보 추가
      ROOMS.forEach((room) => {
        // 호텔 doc안에 room을 추가하는것이기 때문에 store 대신 hotelDocRef로 설정
        const subDocRef = doc(collection(hotelDocRef, COLLECTIONS.ROOM))
        batch.set(subDocRef, room)
      })
    })
    batch.commit()
  }
  return (
    <Button weak onClick={handleHotelListAdd}>
      호텔리스트 추가
    </Button>
  )
}

export default HotelListAdd
