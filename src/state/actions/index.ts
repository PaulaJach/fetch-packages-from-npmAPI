import { ActionType } from '../action-types/index';
import {Item}  from '../reducers/repositoriesReducer';

interface SearchRepositoriesAction {
	type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
	type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
	payload: Item[];
}
interface SearchRepositoriesErrorAction {
	type: ActionType.SEARCH_REPOSITORIES_ERROR;
	payload: string;
}

export type Action =
	| SearchRepositoriesAction
	| SearchRepositoriesSuccessAction
	| SearchRepositoriesErrorAction;
