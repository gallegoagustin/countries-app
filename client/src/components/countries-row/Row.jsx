import React from 'react';
import { connect } from 'react-redux';
import Card from '../countries-card/Card.jsx';
import Loading from '../loading/Loading.jsx';
import NoCountries from '../no-countries/NoCountries.jsx';
import Pagination from '../pagination/Pagination.jsx';
import styles from './Row.module.css';

function Row(props) {

    const countriesPerPage = 12;
    const lastCountry =  props.currentPage * countriesPerPage;
    const firstCountry = lastCountry - countriesPerPage;
    const currentCountries = props.countries?.slice(firstCountry, lastCountry);

    return (
        <>
            <div className={styles.rowContainer}>
                {
                    props.loading === true ? <Loading/> : 
                    
                    !currentCountries.length ? <NoCountries/> :
                    
                    currentCountries?.map((country) => 
                        <Card key={country.id} flag={country.flag} name={country.name} continent={country.continent} capital={country.capital} id={country.id}/>
                    )
                }
            </div>
            
            {
                props.countries.length <= countriesPerPage ? null :
                <Pagination countriesPerPage={countriesPerPage} totalCountries={props.countries.length}/>
            }
        </>
    )
}

function mapStateToProps(state) {
    return {
      countries: state.initialCountries,
      loading: state.loading,
      currentPage: state.currentPage
    }; 
}

export default connect(mapStateToProps, null)(Row);