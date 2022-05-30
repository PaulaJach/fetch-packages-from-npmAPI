import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelectors';
import { useActions } from '../hooks/useActions';

import styles from './RepositoriesList.module.css';

const RepositoriesList: React.FC = () => {
	const [term, setTerm] = useState('');
	const { searchRepositories } = useActions();
	const { data, error, loading } = useTypedSelector(
		(state) => state.repositories
	);

	const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		searchRepositories(term);
	};

	const repositoriesList = data.map((name) => (
		<li className={styles.main__listItem} key={name}>
			{name}
		</li>
	));
	return (
		<div>
			<form onSubmit={onSubmitHandler}>
				<input
					className={styles.input}
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
				<button className={styles.btn}>Search</button>
			</form>
			<main>
				{error && <h3>{error}</h3>}
				{loading && <h3>Loading ...</h3>}
				{!error && !loading && repositoriesList}
			</main>
		</div>
	);
};

export default RepositoriesList;
