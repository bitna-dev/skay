// const PriceHandler = (price: string | number) => {
//   const refinedPrice = Number(price).toLocaleString('ko-KR')

//   return refinedPrice
// }

// export default PriceHandler

const addDelimiter = (value: number | string, delimiter = ',') => {
  return value.toString().replace(/\B(?=(\d{3})*(?!\d))/g, delimiter)
}

export default addDelimiter
