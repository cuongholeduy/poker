import React, { Fragment, useEffect } from "react";
import "./index.css";
import Controls from "../../components/Control";
import Main from "../../components/Main";
import axios from "axios";
import { useDispatch } from "react-redux";

const Game = () => {
  const dispatch = useDispatch();

  //didMount, didUpdate, willUnmount
  // promise chaining
  // => Call api từng cái, tuần tự, cái này xong mới call cái khác
  useEffect(() => {
    axios({
      url: "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        dispatch({
          type: "SET_DECK_CARD",
          payload: res.data,
        });
        // return axios({
        //   method: "GET",
        //   url: `https://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=12`,
        // });
      })
      // .then((deckres) => {
      //   console.log(deckres);
      // })
      .catch((err) => {
        console.log(err);
      });

    // clean up function, chạy khi component bị hủy
    // return () => {}
  }, [dispatch]);

  // Promise.all(axios(), axios(), axios())
  // => Trả về kết quả cùng một lúc

  return (
    <Fragment>
      <Controls />
      <Main />
    </Fragment>
  );
};

export default Game;
