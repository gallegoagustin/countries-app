import React from 'react';
import { connect } from 'react-redux';
import styles from './DetailCard.module.css';

function DetailCard(props) {

    const language = props.detail.language.toLowerCase();

    const demonym = props.detail.demonym.toLowerCase();

    return (
        <div className={styles.detailRow}>

            <div className={styles.columnLeft}>
                <h1>Thinking about visiting {props.detail.name}?</h1>
                <p>Take note of this information you may need</p>
                <i class="fas fa-map-marked" id={styles.map}></i>
            </div>

            <div className={styles.columnRight}>
                
                <p><strong>{props.detail.name}</strong> ({props.detail.id}) is a country located at <strong>{props.detail.subregion}</strong> which has around <strong>{props.detail.population} citizens</strong> distributed in is <strong>{props.detail.area} km2</strong>.
                <br></br>
                <br></br>
                If you are close to traveling there you should not forget to visit its capital city, <strong>{props.detail.capital}</strong>, and taking some <strong>{props.detail.currencies}s</strong> with you.
                <br></br>
                <br></br>
                And remember learning some <strong>{language}</strong> to have a nice chat with <strong>{demonym}s</strong>!
                <br></br>
                <br></br>
                </p>

                <img className={styles.detailFlag} src={props.detail.flag} alt="flag" />
            </div>

        </div>
    )
}

function mapStateToProps(state) {
    return {
      detail: state.countryDetail
    }; 
}

export default connect(mapStateToProps, null)(DetailCard);