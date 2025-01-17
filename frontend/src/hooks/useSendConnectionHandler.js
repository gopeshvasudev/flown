import React from "react";

const useSendConnectionHandler = () => {
  function handler(letterMessage) {
    console.log(letterMessage);
  }

  return handler;
};

export default useSendConnectionHandler;
