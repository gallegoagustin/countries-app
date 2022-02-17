import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { countryDetail } from '../../actions';
import styles from './Card.module.css';

function Card(props) {
    return (
        <div className={styles.cardContainer}>

            <img className={styles.cardFlag} src={props.flags.png} alt="" />

            <div className={styles.cardTitle}>
                Visit {props.name}!
            </div>

            <div className={styles.cardText}>
                Continent: {props.continent}
            </div>

            <div className={styles.cardText}>
                Capital: {props.capital}
            </div>

            <div>
                <Link
                    to={`/detail/${props.id}`}>
                    <span 
                        className={styles.seeMore}
                        onClick={() => {props.countryDetail(props.id)}}>
                        <strong>
                            More about {props.name}
                        </strong>
                    </span>
                </Link>
            </div>

        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
      countryDetail: (id) => dispatch(countryDetail(id)),
    };
}
  
export default connect(null, mapDispatchToProps)(Card);