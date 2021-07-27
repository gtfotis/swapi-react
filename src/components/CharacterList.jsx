import { useEffect, useState } from "react";
import { Route, Link, useHistory } from 'react-router-dom';

const CharacterList = () => {
    const [characters, setCharacters] = useState({});
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const url = 'https://swapi.dev/api/people/'
            const characters = await fetch(url).then(res => res.json());
            setCharacters(characters.results)
            console.log('the characters are: ', characters)
            console.log('characters length is: ', characters.results.length)
        })();
    }, [setCharacters]);

    return (
        <>
            <h1>Select a Character: </h1>
            {!!characters.length ? (
                <>
                    <Route exact path='/'>
                        <ul>
                            {characters.map((character, index) => (
                                <li key={index}>
                                    <Link to={`/${character.name}`}>
                                    {character.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Route>
            </>
            ) : (
                <p>Loading Characters...</p>
            )}
        </>
    )
}
        

export default CharacterList;