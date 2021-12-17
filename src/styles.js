import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  height: 100%;

  background: #f5f5f5;

  font-family: Poppins;
  font-style: normal;

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  h1 {
    font-weight: 500;
    font-size: 48px;
    line-height: 115%;
    letter-spacing: -0.005em;
    color: #3f77bf;

    margin-bottom: 0px;
  }

  h3 {
    font-size: 18px;
    font-weight: normal;
    color: #888888;
  }

  section {
    max-width: 1200px;
    margin: auto;
    margin-top: 120px;
  }

  p {
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;

    color: #292929;
  }
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40%;

  padding: 0 20px;
  height: 80px;
  background-color: #fff;

  z-index: 5;

  width: 100%;
  margin: auto;

  position: sticky;
  top: 0;

  background: #f5f5f5 !important;

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap: 20px;

    li {
      font-family: Poppins;
      font-weight: 300;
      font-size: 20px;
      line-height: 27px;
      color: #888888;

      a {
        padding-bottom: 15px;
      }

      a:last-child {
        padding-bottom: 0px;
      }

      .active {
        border-bottom: 3px solid #3f77bf;
      }

      :last-child {
        width: 146px;
        height: 48px;

        background: #3f77bf;
        color: #ffffff;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        border-radius: 40px;
      }
    }
  }
`;

export const FirstSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: auto;

  span {
    width: 40%;

    p {
      font-weight: 300;
      font-size: 18px;
      line-height: 27px;
      text-transform: uppercase;
      color: #292929;
    }

    button {
      background: none;
      width: 212px;
      height: 48px;

      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      color: #3f77bf;
      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 0px 8px;

      border: 2px solid #3f77bf;
      box-sizing: border-box;
      border-radius: 30px;

      flex: none;
      order: 0;
      flex-grow: 0;
      margin: 0px 0px;

      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const Divisor = styled.hr`
  width: 100%;
  height: 30px;
  background: #3f77bf;

  margin-top: 170px;
  margin-bottom: -80px;
`;

export const SectionImg = styled.img`
  background: url(${(props) => props.img}) no-repeat center;
  background-size: cover;

  width: 451px;
  height: 375px;

  border-radius: 20px;
`;

export const SecondSection = styled.section`
  display: flex;
  flex-direction: column;

  margin: auto;
  text-align: center;

  span {
    display: flex;
    flex-direction: row;
    align-items: start;
    width: fit-content;
    gap: 120px;

    margin-top: 80px;
  }

  .image-wrapper {
    width: 519px;
    height: 399px;

    margin-left: -120px;

    svg {
      position: relative;

      bottom: -114px;
      left: 0px;
      z-index: -1;
    }

    img {
      position: absolute;
      margin-left: 68px;
      margin-bottom: 24px;

      z-index: 1;
    }
  }

  ul {
    margin-top: -24px;
    li {
      display: flex;
      flex-direction: row;

      text-align: start;

      svg {
        width: 36px !important;
        height: 36px !important;
        margin: auto;
        margin-right: 20px;
      }

      p {
        width: 578px;
      }
    }
  }
`;

export const ThirdSection = styled.section`
  display: flex;
  flex-direction: column;

  text-align: center;
`;

export const FourthSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    margin: auto;

    gap: 120px;

    margin-top: 80px;

    div {
      width: 220px;
    }

    h3 {
      font-weight: normal;
      font-size: 24px;
      line-height: 36px;
      /* identical to box height */

      text-align: center;
      text-transform: uppercase;
    }
  }
`;

export const FifthSection = styled.section`
  display: flex;
  flex-direction: row;

  width: fit-content;
  margin: auto;

  & > div {
    margin-right: 72px;
    div {
      width: 414px;
      height: fit-content;

      margin-left: 85px;
      margin-top: 56px;

      padding: 16px 0;

      background: rgba(242, 169, 34, 0.2);
      border-radius: 20px;

      p {
        margin: auto;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        text-align: center;

        color: #000000;
      }
    }

    h1 {
      font-weight: normal;
      font-size: 36px;
      line-height: 54px;
      text-align: center;
      color: #3f77bf;
    }

    li {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 32px;

      svg {
        width: 36px !important;
      }

      p {
        max-width: 380px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        /* identical to box height */

        color: #000000;
      }
    }
  }

  & > div:last-child {
    margin-left: 72px;

    & > p {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      /* identical to box height */

      text-align: center;

      /* Green */

      color: #39bfb2;
    }

    form {
      display: flex;
      flex-direction: column;
      gap: 32px;

      margin-top: 32px;

      button {
        width: 100%;
        background: #3f77bf;
        border-radius: 40px;

        p {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 24px;
          margin: auto;

          color: #ffffff;
        }
      }

      & > * {
        width: 451px;
        height: 48px;
        background: #ffffff;
        border-radius: 27px;
        border: none;

        flex: none;
        order: 0;
        flex-grow: 0;
        margin: 0px 0px;

        padding-left: 32px;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 24px;
        color: #888888;

        ::placeholder {
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 24px;
          color: #888888;
        }
      }

      textarea {
        height: fit-content;

        padding-top: 16px;
      }
    }
  }
`;

export const Footer = styled.footer`

  height: 192px;

  margin-top: 120px;

  padding: 30px;

  background: #3f77bf;

  span:last-of-type {
    margin-left: auto;
  }

  span {
    display: flex;
    flex-direction: row;
    justify-content: start;


    gap 20px;

    a:first-of-type {
      margin-left: auto;
    }
    
    svg :hover {
      cursor: pointer;
    }

    p {
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 27px;
        color: #f5f5f5;
      }

      h2 {
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        color: #f5f5f5;
      margin-bottom: -10px;
      }
  

    div {
      display: flex;
      flex-direction: column;
      width: 300px;
    }
  }
`;
