import { priorLevels, statusTypes } from '../../types';

const initialState = [
  {
    id: 'FC-7',
    title: 'As a translator, I want integrate Crowdin webhook to notify translators about changed strings',
    description: 'As a translator, I want integrate Crowdin webhook to notify translators about changed strings',
    priority: priorLevels.MAJOR,
    storyPoints: 2,
    status: statusTypes.TO_DO,
  },
  {
    id: 'BC-14',
    title: 'As a user, I want to see actual overusage price for next download',
    description: 'As a user, I want to see actual overusage price for next download',
    priority: priorLevels.NONE,
    storyPoints: 1,
    status: statusTypes.TO_DO,
  },
  {
    id: 'MAR-14',
    title: 'As an external contributor, I want to be able to see status of uploaded materials',
    description: 'As an external contributor, I want to be able to see status of uploaded materials',
    priority: priorLevels.NORMAL,
    storyPoints: 3,
    status: statusTypes.IN_PROGRESS,
  },
  {
    id: 'FC-13',
    title: 'As a user, I want to access Intercom help center, so that I am not confused by Crisp',
    description: 'As a user, I want to access Intercom help center, so that I am not confused by Crisp',
    priority: priorLevels.MINOR,
    storyPoints: 1,
    status: statusTypes.DONE,
  },
  {
    id: 'FC-17',
    title: 'Remove requests to ipfy service from frontend',
    description: 'Remove requests to ipfy service from frontend',
    priority: priorLevels.CRITICAL,
    storyPoints: 2,
    status: statusTypes.DONE,
  },
  {
    id: 'FC-19',
    title: 'Replace JustComments with something',
    description: 'Replace JustComments with something',
    priority: priorLevels.CRITICAL,
    storyPoints: 3,
    status: statusTypes.TEST,
  },
];

export default initialState;
