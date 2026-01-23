import MetaData from '../../layouts/MetaData/index.jsx';
import styles from '../Services/Services.module.css';

export default function Services() {

   return (
      <div className='utils-container'>
         <MetaData title='Services'/>
         <div className={styles.services__page}>
            <h2 className={styles.services__page__title}>Services</h2>
         </div>
      </div>

   );
}