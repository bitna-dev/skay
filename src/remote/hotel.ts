import { Hotel } from '@components/models/hotel'
import { COLLECTIONS } from '@constants/index'
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  QuerySnapshot,
  startAfter,
} from 'firebase/firestore'
import { store } from './firebase'

export const getHotels = async (pageParam?: QuerySnapshot<Hotel>) => {
  const hotelsQuery =
    pageParam == null
      ? query(collection(store, COLLECTIONS.HOTEL), limit(10))
      : query(
          collection(store, COLLECTIONS.HOTEL),
          startAfter(pageParam),
          limit(10),
        )

  const hotelsSnapshot = await getDocs(hotelsQuery)
  const items = hotelsSnapshot.docs.map(
    (doc) =>
      ({
        id: doc.id,
        ...doc.data(),
      }) as Hotel,
  )

  const lastVisible = hotelsSnapshot.docs[hotelsSnapshot.docs.length - 1]

  return {
    items,
    lastVisible,
  }
}

export const getHotel = async (id: string) => {
  const snapshot = await getDoc(doc(store, COLLECTIONS.HOTEL, id))
  return {
    id,
    ...snapshot.data(),
  } as Hotel
}
