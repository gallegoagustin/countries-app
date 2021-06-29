import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getAllCountries } from '../../actions';
import swal from 'sweetalert';
import styles from './NewActivity.module.css';

const axios = require('axios').default;

function NewActivity(props) {
    
    const [state, setState] = useState({
        name: "",
        level: 1,
        length: 1,
        season: "any",
        description: "",
        image: ""
    });
    
    const [countries, setCountries] = useState([]);
    
    const [response, setResponse] = useState({});
    
    function clearAll(event) {

        event.preventDefault();

        setState({
            name: "",
            level: 1,
            length: 1,
            season: "summer",
            description: "",
            image: ""
        })

        setCountries([]);

    }

    function clearCountries(event) {

        event.preventDefault();
        
        setCountries([]);

    }

    function validateUrl(input) {

        if(!input.length) {
            return false;
        }

        if (!/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/.test(input)) {
            return true;
        }
    }

    function handleChange(event) {

        if(event.target.name === "countries"){
            setCountries([...countries, event.target.value])  
        };

        setState({
            ...state,
            [event.target.name]: event.target.value
        });

    }

    async function handleSubmit(event) {

        event.preventDefault();
        
        if(!state.name.length){
            return swal("Please enter a valid name")
        }

        if(state.length <= 0) {
            return swal("Please enter a valid length")
        }

        setResponse(await axios({
            method: 'post',
            url: 'http://localhost:3001/activity', 
            data: {     
                name: state.name,
                level: parseInt(state.level),
                length: parseInt(state.length),
                season: state.season,
                description: state.description,
                image: state.image,
                countries: countries
            }
        }))

        await props.getAllCountries();
        
        clearAll(event);

    }

    return (

        <div>

            <form className={styles.form} onSubmit={(e) => {handleSubmit(e)}}>

                <div className={styles.formSet}>

                    <label className={styles.formTitles}>
                        Activity name*:
                    </label>

                    <input
                        name="name"
                        className={styles.formBox}
                        onChange={(e) => {handleChange(e)}}
                        value={state.name}
                        placeholder="Paris city tour"
                    />
                    
                </div>
                    
                <span className={state.name.length > 20 ? styles.alert : 'disabled'}> maximum of 20 characters exceeded</span>

                <div className={styles.formSet}>

                    <label className={styles.formTitles}>
                        Short description*:
                    </label>

                    <textarea
                        rows="5"
                        cols="25"
                        name="description"
                        className={styles.formBox}
                        onChange={(e) => {handleChange(e)}}
                        value={state.description}
                        placeholder="A nice walk through Paris during the afternoon..."
                    />

                </div>

                <span className={state.description.length > 140 ? styles.alert : 'disabled'}> maximum of 140 characters exceeded</span>

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
                        id={styles.lengthBox}
                        />

                </div>

                <div className={styles.formSet}>

                    <label className={styles.formTitles} htmlFor="season">
                        Best season:
                    </label>

                    <select 
                        name="season"
                        onChange={(e) => {handleChange(e)}}
                        value={state.season}
                        className={styles.formBox}
                    >

                        <option value = "any" defaultValue>Any</option>

                        <option value = "summer">Summer</option>

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

                <div className={styles.formSet}>

                    <label className={styles.formTitles}>
                        Image:
                    </label>

                    <input
                        name="image"
                        className={styles.formBox}
                        onChange={(e) => {handleChange(e)}}
                        value={state.image}
                        placeholder="INSERT URL"
                    />

                </div>

                <span className={validateUrl(state.image) ? styles.alert : 'disabled'}> you must enter an image url</span>

                <div className={styles.buttonContainer}>

                    <button className='homeButton' onClick={(e) => {clearCountries(e)}}>Reset countries</button>

                    <button className='homeButton' onClick={(e) => {clearAll(e)}}>Reset all</button>
                    
                    <button className={state.description.length > 140 || state.name.length > 20 === true || validateUrl(state.image) ? 'disabled' :'orangeButton'} type="submit">Add activity</button>

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