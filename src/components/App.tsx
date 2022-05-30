import { Provider } from 'react-redux';
import { store } from '../state/store';
import RepositoriesList from '../components/RepositoriesList';
import styles from './App.module.css';

const App = () => {
	return (
		<Provider store={store}>
			<div className={styles.container}>
				<h1> Search For a NPM Package</h1>
				<RepositoriesList />
			</div>
		</Provider>
	);
};

export default App;
