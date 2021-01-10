import React from 'react';
import ReactDOM from 'react-dom';
import { Assets } from '../../misc/Assets';
import ItemImage, { ItemImageProps } from "./ItemImage";

it('renders without crashing', () => {
  const div = document.createElement("div");
  const props: ItemImageProps = {
    "imageURL": [Assets.hammerImg]
  };
  ReactDOM.render(<ItemImage imageURL={props.imageURL}></ItemImage>, div);
});