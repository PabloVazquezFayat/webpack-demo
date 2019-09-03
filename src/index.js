import _ from 'lodash';
import * as logger from './logger';

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

logger.logOnce();
logger.logRepeat();
