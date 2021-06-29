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
                                    <img className={styles.activityImage} src={a.image || "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_960_720.jpg"}/>
                                    <div className={styles.activitiesText}>
                                        <strong>{a.name}</strong><br></br>
                                        {a.description || "No description available"}<br></br>                                
                                        <strong>Level</strong> {a.level}/5<br></br>
                                        <strong>Length</strong> {a.length} hour(s)<br></br>
                                        <span className={styles.season}>Best season: {a.season}</span><br></br>
                                        <div id={styles.offers}>
                                            <a target="_blank" href={`https://www.google.com/search?q=${a.name}+${props.detail.name}+buy+trip+classes`}><button className='homeButton'>Look for offers!</button></a>
                                        </div>
                                    </div>
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