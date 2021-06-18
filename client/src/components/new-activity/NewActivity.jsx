import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getAllCountries } from '../../actions';
import styles from './NewActivity.module.css';

const axios = require('axios').default;

function NewActivity(props) {

    const [state, setState] = useState({
        name: "",
        level: 1,
        length: 1,
        season: "summer",
    });

    const [countries, setCountries] = useState([]);

    const [response, setResponse] = useState({});

    function clearAll(event) {

        event.preventDefault();

        setState({
            name: "",
            level: 1,
            length: 1,
            season: "summer"
        })

        setCountries([]);

    }

    function clearCountries(event) {

        event.preventDefault();
        
        setCountries([]);

    }

    function handleChange(event) {

        if(event.target.name === "countries"){
            setCountries([...countries, event.target.value])  
        }

        setState({
            ...state,
            [event.target.name]: event.target.value
        })

    }

    async function handleSubmit(event) {

        event.preventDefault();
        
        if(!state.name.length){
            return alert("Please enter a valid name")
        }

        if(state.length <= 0) {
            return alert("Please enter a valid length")
        }

        setResponse(await axios({
            method: 'post',
            url: 'http://localhost:3001/activity', 
            data: {     
                name: state.name,
                level: parseInt(state.level),
                length: parseInt(state.length),
                season: state.season,
                countries: countries
            }
        }))

        await props.getAllCountries();
        
        clearAll(event);

    }

    return (

        <div className={styles.formContainer}>

            <form className={styles.form} onSubmit={(e) => {handleSubmit(e)}}>

                <div className={styles.formSet}>

                    <label className={styles.formTitles}>
                        Name*:
                    </label>

                    <input
                        name="name"
                        className={styles.formBox}
                        onChange={(e) => {handleChange(e)}}
                        value={state.name}
                        placeholder="Example: Trecking"
                    />

                </div>

                <div className={styles.formSet}>

                    <label className={styles.formTitles} htmlFor="level">
                        Level*:
                    </label>

                    <select 
                        name="level"
                        onChange={(e) => {handleChange(e)}}
                        value={state.level}
                        className={styles.formBox}
                    >

                        <option value = {1} defaultValue>1 (no sweat)</option>

                        <option value = {2}>2 (slight)</option>
                        
                        <option value = {3}>3 (regular)</option>
                        
                        <option value = {4}>4 (heavy)</option>
                        
                        <option value = {5}>5 (rocky)</option>
                    
                    </select>

                </div>

                <div className={styles.formSet}>

                    <label className={styles.formTitles}>
                        Length* (hours):
                    </label>

                    <input
                        name="length"
                        type="number"
                        onChange={(e) => {handleChange(e)}}
                        value={state.length}
                        className={styles.formBox}
                    />

                </div>

                <div className={styles.formSet}>

                    <label className={styles.formTitles} htmlFor="season">
                        Season*:
                    </label>

                    <select 
                        name="season"
                        onChange={(e) => {handleChange(e)}}
                        value={state.season}
                        className={styles.formBox}
                    >

                        <option value = "summer" defaultValue>Summer</option>

                        <option value = "spring">Spring</option>
                        
                        <option value = "autumn">Autumn</option>
                        
                        <option value = "winter">Winter</option>

                    </select>

                </div>

                <div className={styles.formSet}>

                    <label className={styles.formTitles} htmlFor="countries">
                        Countries:
                    </label>

                    <select 
                        name="countries" 
                        multiple
                        onChange={(e) => {handleChange(e)}}
                        value={countries}
                        className={styles.formBox}
                        id={styles.boxHeight}
                    >

                        {
                            props.allCountries?.map((country) =>
                                <option key={country.name} value = {country.name}>{country.name}</option>
                            )
                        }

                    </select>

                </div>

                <div className={styles.buttonContainer}>

                    <button className={styles.formButton} onClick={(e) => {clearCountries(e)}}>Reset countries</button>

                    <button className={styles.formButton} onClick={(e) => {clearAll(e)}}>Reset all</button>
                    
                    <button className={styles.formButton} type="submit">Add activity</button>

                </div>
                
                {
                    response.data === "Activity created" ? 
                    <span className={styles.success}>{response.data}</span> : 
                    <span className={styles.error}>{response.data}</span>
                }

                <span className={styles.alert}>(*) obligatory fields</span>

            </form>

        </div>

    )
}

function mapStateToProps(state) {
    return {
      allCountries: state.allCountries
    };
}

function mapDispatchToProps(dispatch) {
    return {
      getAllCountries: () => dispatch(getAllCountries()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewActivity);