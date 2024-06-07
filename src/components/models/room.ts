export interface Room {
  avaliableCount: number
  basicInfo: {
    [key: string]: number | string
  }
  imageUrl: string
  price: number
  refundable: boolean
  roomName: string
}
