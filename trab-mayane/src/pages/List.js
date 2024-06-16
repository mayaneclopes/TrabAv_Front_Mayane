import { useCallback, useEffect, useState } from "react"
import axios from 'axios';

const List = () => {
    const [harryPotter, setHarryPotter] = useState([])

    const getHarryPotter = useCallback(async () => {
        try {
            const response = await axios.get('https://api.potterdb.com/v1/characters');
            setHarryPotter(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        getHarryPotter();
    }, [getHarryPotter]);

    if (!harryPotter.length) {
        return (
            <div>
                Carregando personagens...
            </div>
        );
    }

    return (
        <div>
            {harryPotter.map((character, index) => {
                return <div key={index}>{character.attributes.slug}</div>
            })}
        </div>
    )

}

export default List;