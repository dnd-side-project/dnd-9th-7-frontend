/* eslint-disable import/prefer-default-export */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-props-no-spreading */

import { SVGProps } from 'react';
import sprites from './sprite/symbol/sprite.svg';

import * as Icons from './assets';

interface Props extends SVGProps<SVGSVGElement> {
  id: keyof typeof Icons;
}

export const SvgIcon = ({
  id,
  width = 16,
  height = 16,
  stroke = 'default',
  fill = 'default',
  ...rest
}: Props) => {
  return (
    <svg fill={fill} stroke={stroke} height={height} width={width} {...rest}>
      <use href={`${sprites}#${id}`} />
    </svg>
  );
};
