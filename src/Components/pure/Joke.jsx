
import React, {useEffect, useState} from 'react';
import { getRandomJoke } from '../../services/AxiosService'
import { Button } from '@mui/material';

const Joke = () => {
    
    const [Joke, setJoke] = useState({value: null});

    useEffect(() => {
        obtainJoke();
    }, []);

    const obtainJoke = async () => {
        await getRandomJoke()
            .then((response) => {
                if(response.status === 200){
                    // console.table(response.data.results[0])
                    console.log("peticion")
                    console.log(response)
                    setJoke(response.data)
                }
            })
            .catch((error) => {
                alert(`Somethin went wrong: ${error}`);
            })
    }

    return (
        <div className='container bg-dark'>
            <div className='row center text-center text-bg-dark'>
                <h1>Chuck Norris Joke: </h1>
                <p>{Joke.value}</p>
                <Button className='' variant="contained" onClick={obtainJoke}>Next Joke</Button>
            </div>
        </div>
    );
}

export default Joke;
