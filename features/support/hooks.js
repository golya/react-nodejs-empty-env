'use strict';

import 'babel-polyfill';
import * as mongoose from 'mongoose';
import {Mockgoose} from 'mockgoose';

export default function () {
  this.Before(async function () {
    if (this.container.get('config').get('mongo').type === 'memory') {
      let mockgoose: Mockgoose = new Mockgoose(mongoose);
      mockgoose.helper.reset();
    }

    const Store = this.container.get('Store');
    await Store.dispatch({type: 'RESET_STATE'});
  });

}
