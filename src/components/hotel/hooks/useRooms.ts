import { Room } from '@components/models/room'
import { COLLECTIONS } from '@constants/index'
import { store } from '@remote/firebase'
import { getRooms } from '@remote/room'
import { collection, doc, onSnapshot } from 'firebase/firestore'
import { useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'

const useRooms = ({ hotelId }: { hotelId: string }) => {
  const client = useQueryClient()
  //처음 렌더링될 때 구독하기때문에 useEffect
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(doc(store, COLLECTIONS.HOTEL, hotelId), COLLECTIONS.ROOM),
      (snapshot) => {
        const newRooms = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...(doc.data() as Room),
        }))
        client.setQueryData(['rooms', hotelId], newRooms)
        console.log('newRooms', newRooms)
      },
    )
    return () => {
      unsubscribe()
    }
  }, [hotelId, client])
  return useQuery(['rooms', hotelId], () => getRooms(hotelId))
}

export default useRooms
