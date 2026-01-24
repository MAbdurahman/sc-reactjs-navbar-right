import MetaData from '../../layouts/MetaData/index.jsx';
import styles from './NoResults.module.css';
import {Link} from 'react-router-dom';
import NoResultsImage from '../../assets/img/no-results.svg';



export default function NoResults() {

   return (
      <div className='utils-container'>
         <MetaData title="No Results"/>
         <div className={styles.no__results__page}>
            <div className={styles.no__results__container}>
               <img className={styles.no__results__image} src={NoResultsImage} alt='No Results Face'/>
               <p className={styles.no__results__paragraph}>No Results</p>
               <Link to='/services' className={styles.no__results__button}>
                  Back To Services
               </Link>
            </div>
         </div>
      </div>

   );
}