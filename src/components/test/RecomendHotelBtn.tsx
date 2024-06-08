import Button from '@components/shared/Button'
import { COLLECTIONS } from '@constants/index'
import { store } from '@remote/firebase'
import { collection, getDocs, writeBatch } from 'firebase/firestore'
import { toast } from 'react-toastify'

const RecomendHotelBtn = () => {
  const handleButtonClick = async () => {
    const batch = writeBatch(store)
    const snapshot = await getDocs(collection(store, COLLECTIONS.HOTEL))
    snapshot.forEach((hotel) => {
      const recommendHotel = []
      for (let doc of snapshot.docs) {
        if (recommendHotel.length === 5) {
          break
        }
        if (doc.id !== hotel.id) {
          recommendHotel.push(doc.id)
        }
      }
      batch.update(hotel.ref, {
        recommendHotels: recommendHotel,
      })
    })
    await batch.commit()
    toast.success('데이터가 추가되었습니다.')
  }

  //1. 전체호텔
  //2. 전체호텔 루프
  //3. 호텔 + 추천호텔 아이디 5개 추가
  //4. 가나다 B ={추천호텔 : [A-id]}
  //5. A= 가나다2 (아이디에 따라 이름이 바뀔수있게)
  return (
    <Button weak onClick={handleButtonClick}>
      추천호텔데이터추가
    </Button>
  )
}

export default RecomendHotelBtn
