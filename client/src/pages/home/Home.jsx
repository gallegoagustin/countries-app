import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getActivities } from '../../actions/index.js';
import Search from '../../components/search-bar/Search.jsx';
import Filter from '../../components/filters/Filter.jsx';
import Row from '../../components/countries-row/Row.jsx';
import styles from './Home.module.css';

function Home(props) {

    useEffect(() => {

        props.getActivities();

    }, [])

    return (

        <>

            <div className={styles.homeContainer}>

                <div className={styles.findersBox}>

                    <Search/>
                    
                    <p className={styles.filterText}>Or filter/sort by</p>
                    
                    <Filter/>

                </div>
                
                <Row/>

            </div>
        </>

    )
}

function mapDispatchToProps(dispatch) {
    return {
      getActivities: () => dispatch(getActivities())
    };
  }
  
  export default connect(null, mapDispatchToProps)(Home);