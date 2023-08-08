import React from 'react';

import BaseTag from './BaseTag';
import type { TagProps } from './types';
import useTheme from '../../../hooks/useTheme';

export default function InformationalTag(props: TagProps) {
  const theme = useTheme();

  return (
    <BaseTag
      backgroundColor={
        props.inverted
          ? theme.colors.inverse_ui_active
          : theme.colors.surface_informational
      }
      textColor={
        props.inverted
          ? theme.colors.inverse_surface_primary
          : theme.colors.brand_blue_primary
      }
      {...props}
    />
  );
}
