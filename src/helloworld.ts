import {scout, App, ObjectFactory} from '@eclipse-scout/core';
import { Desktop } from './desktop/Desktop'

import * as self from './helloworld';

export * from  './desktop/Desktop'
export * from  './greeting/HelloForm'

scout.addObjectFactories({
  'Desktop': function() {
    return new Desktop();
  }
});

ObjectFactory.get().registerNamespace('helloworld', self);

new App().init({
  bootstrap: {
    textsUrl: 'texts.json',
    localesUrl: 'locales.json'
  }
});
