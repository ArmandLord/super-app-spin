import React from 'react';

import BaseChip from './BaseChip';
import type { ChipProps } from './types';
import useTheme from '../../../src/hooks/useTheme';

function OutlineChip(props: ChipProps) {
  const theme = useTheme();

  return (
    <BaseChip
      {...props}
      borderColor={props.borderColor ?? theme.colors.BRAND_DEFAULT}
      backgroundColor={props.backgroundColor ?? 'transparent'}
    />
  );
}

export default OutlineChip;
