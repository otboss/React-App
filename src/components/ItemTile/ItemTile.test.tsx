import React from 'react';
import ReactDOM from 'react-dom';
import { Assets } from '../../misc/Assets';
import { HardwareItem } from '../../misc/HardwareItem';
import ItemTile, { ItemTileProps } from "./ItemTile";
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

it('renders without crashing', () => {
  const div = document.createElement("div");
  const props: ItemTileProps = {
    "hardwareItem": new HardwareItem("item_1", 2, "Hammer", Assets.hammerImg, 100.2, "", 30, "")
  };
  ReactDOM.render(<Provider store={store}><ItemTile hardwareItem={props.hardwareItem}></ItemTile></Provider>, div);
});