import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styled from 'styled-components';

const SwiperWrapper = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 70%;
`;

const SwiperContent = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 300px;
  background-color: gray;
`;

export default function Sw() {
    return (
      <>
        <SwiperWrapper>
          <Wrapper>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={1}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide><SwiperContent>Slide 1</SwiperContent></SwiperSlide>
            <SwiperSlide><SwiperContent>Slide 2</SwiperContent></SwiperSlide>
            <SwiperSlide><SwiperContent>Slide 3</SwiperContent></SwiperSlide>
            <SwiperSlide><SwiperContent>Slide 4</SwiperContent></SwiperSlide>
            <SwiperSlide><SwiperContent>Slide 4</SwiperContent></SwiperSlide>
          </Swiper>
          </Wrapper>
        </SwiperWrapper>
      </>
    );
}