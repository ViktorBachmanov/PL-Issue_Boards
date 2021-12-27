import React from 'react';
import { ReactComponent as PriorNormal } from './assets/normal.svg';
import { ReactComponent as PriorMinor } from './assets/minor.svg';
import { ReactComponent as PriorMajor } from './assets/major.svg';
import { ReactComponent as PriorCritical } from './assets/critical.svg';
import { ReactComponent as PriorNone } from './assets/none.svg';
import { priorLevels } from '../../types';

export default function PriorityPic(props) {
  let pic;

  switch (props.level) {
    case priorLevels.NORMAL:
      pic = <PriorNormal className="priority-pic" />;
      break;
    case priorLevels.MINOR:
      pic = <PriorMinor className="priority-pic" />;
      break;
    case priorLevels.MAJOR:
      pic = <PriorMajor className="priority-pic" />;
      break;
    case priorLevels.CRITICAL:
      pic = <PriorCritical className="priority-pic" />;
      break;
    default:
      pic = <PriorNone className="priority-pic" />;
      break;
  }

  return pic;
}
