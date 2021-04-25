import styled from "styled-components";
import Disney from "./Disney";
import ImgSlider from "./ImgSlider";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from "../firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";

function Home() {
  const dispatch = useDispatch();
  const UserName = useSelector(selectUserName);

  let recommend = [];
  let disney = [];
  let original = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommend = [...recommend, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            disney = [...disney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            original = [...original, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
        return true;
      });

      dispatch(
        setMovies({
          recommend: recommend,
          disney: disney,
          original: original,
          trending: trending,
        })
      );
    });
  }, [UserName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <Disney />
      <Originals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  position: relative;

  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;

    content: "";
    position: absolute;
    inset: 0;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
