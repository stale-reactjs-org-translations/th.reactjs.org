/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * @emails react-core
 * @flow
 */

import React from 'react';

// $FlowFixMe Update Flow
export const BannerContext = React.createContext({
  banner: null,
  dismiss() {},
});