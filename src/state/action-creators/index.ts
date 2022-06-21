import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const searchRepositories = (term: string) => {
	return async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.SEARCH_REPOSITORIES,
		});
		try {
			const { data } = await axios.get(
				'https://registry.npmjs.org/-/v1/search',
				{
					params: {
						text: term,
					},
				}
			);

			const packages = data.objects.map((result: any) => {
				return {name: result.package.name, description: result.package.description};
			});

			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
				payload: packages
			});
		} catch (err: any) {
			dispatch({
				type: ActionType.SEARCH_REPOSITORIES_ERROR,
				payload: err.message,
			});
		}
	};
};
