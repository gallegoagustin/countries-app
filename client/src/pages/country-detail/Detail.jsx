import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import DetailCard from '../../components/detail-card/DetailCard';
import styles from './Detail.module.css';

function Detail(props) {

    return (
        <div className={styles.detailContainer}>

            <div className={styles.boxContainer}>
                <DetailCard />
            </div>

            <div className={styles.activitiesColumn}>

                <div className={styles.activitiesContainer}>

                    <h1 className={styles.activitiesTitle}>Other travelers also recommended these activities </h1>

                    <div className={styles.activitiesRow}>
                        
                        {
                            !props.detail.activities?.length ?
                            
                            <span className={styles.emptyList}><i class="fas fa-exclamation-triangle"></i>There are no suggested activities for this country yet <Link to='/activity'><button className='orangeButton' id={styles.firstButton}>Be the first!</button></Link></span> :
                            
                            props.detail.activities?.map((a) => 
                                <div className={styles.activityBox}>
                                    <strong>Name:</strong> {a.name}<br></br>
                                    <strong>Level:</strong> {a.level}/5<br></br>
                                    <strong>Length:</strong> {a.length} hour(s)<br></br>
                                    <strong>Season:</strong> {a.season}<br></br>
                                    
                                </div>
                            )
                        }

                    </div>


                </div>

            </div>

        </div>

    )
}

function mapStateToProps(state) {
    return {
      detail: state.countryDetail
    }; 
}

export default connect(mapStateToProps, null)(Detail);