import styled from "styled-components";

export const SectionImg = styled.img`
  background: url(${(props) => props.img}) no-repeat center;
  background-size: cover;

  width: 611px;
  height: 405px;

  border-radius: 20px;


`;

export const Wrapper = styled.div`
  .swiper-container {
    width: 70vw;
  }

  .swiper-pagination {
    bottom: 0;
    padding-bottom: 10px;
  }

  .swiper-wrapper {
    padding-inline-start: 0;
    margin-bottom: 80px;
  }



`;