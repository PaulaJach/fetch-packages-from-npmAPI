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
	
	const repositoriesList = data.map((obj, index) => (
		<li className={styles.main__listItem} key={index}>
			<p><span className={styles.main__span}>{obj.name}</span> - {obj.description}</p>
		</li>
	));
	
	return (
		<>
			<form className={styles.form} onSubmit={onSubmitHandler}>
				<input
					className={styles.form__input}
					value={term}
					onChange={(e) => setTerm(e.target.value)}
				/>
				<button className={styles.form__btn}>Search</button>
			</form>
			<main className={styles.main}>	
				{error && <h3>{error}</h3>}
				{loading && <h3>Loading ...</h3>}
				<ul className={styles.main__list}>{!error && !loading && repositoriesList}</ul>
				
			</main>
		</>
	);
};

export default RepositoriesList;
