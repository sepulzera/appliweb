import * as React from 'react';
import styles from './Loader.module.scss';
import P from '../Ui/P';

/**
 * Rendered while the app is starting.
 */
const Loader: React.SFC = () => <P className={styles.Loader}>Loading...</P>;

export default Loader;
