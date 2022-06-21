import { Provider } from 'react-redux';
import { store } from '../state/store';
import RepositoriesList from '../components/RepositoriesList';
import styles from './App.module.css';

const App = () => {
	return (
		<Provider store={store}>
			<div className={styles.container}>
				<header className={styles.container__header}>
					<h1> Search For a NPM Package</h1>
					<i>Type any technology or tool to get npm package name and its description:</i>
				</header>
				<RepositoriesList />
			</div>
		</Provider>
	);
};

export default App;
