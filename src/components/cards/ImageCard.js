import React from "react";

function importAll(r) {
  let images = {};
  r.keys().map(item => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

const images = importAll(
  require.context("../../../public/img/cont", false, /\.(png|jpe?g|svg)$/)
);

export default function ImageCard({ item }) {
  return (
    <img
      className="front__picture"
      src={images[item.picture]}
      alt={item.picture}
    />
  );
}
