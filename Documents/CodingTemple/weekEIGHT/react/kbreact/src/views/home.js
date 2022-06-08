
import {useEffect, useState} from 'react';
import axios from 'axios';

let Home = props => {

    const [dndclass, setDndclass] = useState();

    const getDndClass = async () => {
        let response = await axios.get('https://www.dnd5eapi.co/api/classes');
        return response.status === 200 ? response.data : null;
    }

    const loadDndClass = async () => {
        let dclass = await getDndClass();
        console.log(dclass, typeof dclass);
        setDndclass(dclass.results.name);
    }

    useEffect(() => {loadDndClass();}, [dndparty]);


    return(
    <div className="container mt-3">
        <div className='row justify-content-center'>
            <h1 className="dndparty">{props.dndparty}</h1>
        </div>
        <div className='row justify-content-center'>
            <button className="btn btn-success" onClick={props.shuffleDnd}>Shuffle Party</button>
        </div>
        <br />
        <div className="row justify-content-center">
            <h2>{props.dndparty[0]}'s DnD Class:</h2>
        </div>
        <div className="row justify-content-center">
            <h3>{dndclass}</h3>
        </div>
    </div>
    )}

export default Home;