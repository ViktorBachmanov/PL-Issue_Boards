import { priorLevels, statusTypes } from '../../types'

 
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
    
];


export default initialState;