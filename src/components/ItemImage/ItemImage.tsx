import { IonSpinner } from '@ionic/react';
import React, { Suspense } from 'react';
import { useImage } from 'react-image';
import './ItemImage.scss';

const GenerateItemImage = (props: ItemImageProps): React.ReactElement => {
  const { src } = useImage({
    srcList: props.imageURL,
  })
  return <img src={src} />;
}

const ItemImage = function (props: ItemImageProps): React.ReactElement {
  return (
    <Suspense fallback={<IonSpinner />}>
      <GenerateItemImage imageURL={props.imageURL}></GenerateItemImage>
    </Suspense>
  );
}

export default ItemImage;

export interface ItemImageProps {
  imageURL: Array<string>
}