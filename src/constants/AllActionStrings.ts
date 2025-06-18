import { AllActionDescriptions } from './AllActionDescriptions';

// also somehow not adding to these manually...
export const AllActionStrings = [
    ...AllActionDescriptions.map(action => action.name),
]