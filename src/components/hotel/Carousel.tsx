import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { css } from '@emotion/react'

const Carousel = ({ images }: { images: string[] }) => {
  return (
    <div>
      <Swiper
        css={ContainerStyles}
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        spaceBetween={8}
        slidesPerView={1}
      >
        {images.map((imageUrl, idx) => (
          <SwiperSlide key={imageUrl}>
            <img
              src={imageUrl}
              alt={`${idx + 1}번째 호텔의 이미지`}
              css={ImageStyles}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const ContainerStyles = css`
  padding: 0 24px;
  height: 300px;
`
const ImageStyles = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 4px;
`
export default Carousel
