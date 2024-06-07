import { Room } from '@components/models/room'
import { COLLECTIONS } from '@constants/index'
import { collection, doc, getDocs } from 'firebase/firestore'
import { store } from './firebase'

export const getRooms = async (hotelId: string) => {
  const snapshot = await getDocs(
    collection(doc(store, COLLECTIONS.HOTEL, hotelId), COLLECTIONS.ROOM),
  )

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Room),
  }))
}
