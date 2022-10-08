
import React, { useEffect, useState } from 'react';
import { getRandomJoke } from '../../services/AxiosService'
import { Button } from '@mui/material';

const Joke = () => {

    const [Like, setLike] = useState(0);
    const [Count, setCount] = useState({
        JokeCount: 1,
        LikeCount: 0,
        DislikeCount: 0
    });
    const [Dislike, setDislike] = useState(0);
    const [Joke, setJoke] = useState({ value: null });

    useEffect(() => {
        getJoke();
    }, []);

    const getJoke = () => {
        getRandomJoke()
            .then((response) => {
                if (response.status === 200) {
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

    const LikeSelected = (val) => {
        if (val === 'Like') {
            if (Like === Count.LikeCount) {
                setLike(Count.LikeCount + 1)
            } else {
                setLike(Count.LikeCount)
            }
        } else {
            setLike(Count.LikeCount)
        }
        if (val === 'Dislike') {
            if (Dislike === Count.DislikeCount) {
                setDislike(Count.DislikeCount + 1)
            } else {
                setDislike(Count.DislikeCount)
            }
        } else {
            setDislike(Count.DislikeCount)
        }
    }

    const NextJoke = () => {
        getJoke();
        let tempCount = {
            JokeCount: Count.JokeCount + 1,
            LikeCount: Like,
            DislikeCount: Dislike
        }
        setCount(tempCount)
    }

    return (
        <div className='container bg-dark'>
            <div className='row center text-center text-bg-dark'>
                <h1>Chuck Norris Joke #{Count.JokeCount}: </h1>
                <p>{Joke.value}</p>
                <div className='column'>
                    <Button className='' variant="contained" onClick={NextJoke}>Next Joke</Button>
                    <button className='btn btn-success' onClick={() => LikeSelected('Like')}>Liked {Like}</button>
                    <button className='btn btn-danger' onClick={() => LikeSelected('Dislike')}>Disliked {Dislike}</button>
                </div>
            </div>
        </div>
    );
}

export default Joke;
