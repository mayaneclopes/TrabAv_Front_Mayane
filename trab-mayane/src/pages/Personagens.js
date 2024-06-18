import { useCallback, useState } from "react"
import axios from 'axios';
import { useParams } from "react-router-dom";

const Personagens = () => {
    const { id } = useParams();
    const [harryPotter, setHarryPotter] = useState([])

    const getHarryPotter = useCallback(async () => {
        try {
            const response = await axios.get(`https://api.potterdb.com/v1/characters/${id}`);
            setHarryPotter(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error)
        }
        getHarryPotter();
    }, [id]);


    if (!harryPotter.length) {
        return (
            <div>
                Carregando personagens...
            </div>
        );
    }

    return (
        <div>
            <h1>{harryPotter.attributes.name}</h1>
            <p>{harryPotter.attributes.description}</p>
        </div>
    )

}

export default Personagens;