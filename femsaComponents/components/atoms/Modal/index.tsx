import React from 'react';
import { DeviceEventEmitter } from 'react-native';

import ModalWrapper from './ModalWrapper';
import { ModalProps } from '../../types';

interface ModalComponentProps {
  testID?: string;
}

const Modal = {
  Component: ({ testID }: ModalComponentProps) => {
    return <ModalWrapper testID={testID} />;
  },
  show: (props: ModalProps) => {
    const {
      variant = 'default',
      title,
      subtitle,
      description,
      testID,
      style,
      onClose,
      firstButtonProps,
      secondButtonProps,
      showCloseBtn,
      newChildren,
    } = props;

    DeviceEventEmitter.emit('CHOSE_MODAL', {
      variant,
      title,
      subtitle,
      description,
      testID,
      style,
      onClose,
      firstButtonProps,
      secondButtonProps,
      showCloseBtn,
      newChildren,
    });
  },

  hide: () => {
    DeviceEventEmitter.emit('CHOSE_MODAL_CLOSE');
  },
};

export default Modal;
