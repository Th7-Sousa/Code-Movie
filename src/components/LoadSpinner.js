import React, { useState } from 'react';
import { View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

export default function LoadSpinner({ hasLoading = false }) {

  return (
    <View>

      {hasLoading ?
        <Spinner
          visible={hasLoading}
          textContent={'Carregando...'}
          textStyle={{ color: '#FFF' }}
        />
        : null
      }

    </View>
  )
}
