import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Feiticos = () => {

    const { id } = useParams();
    const [feitico, setFeitico] = useState();

    useEffect(() => {
        const buscaFeitico = async () => {
            try {
                const response = await axios.get(`https://api.potterdb.com/v1/spells/${id}`);
                setFeitico(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };

        buscaFeitico();
    }, [id]);

    if (!feitico) {
        return <div>Carregando...</div>
    }


    return (
        <div>
            <h1>{feitico.attributes.name}</h1>
            <p>{feitico.attributes.description}</p>
        </div>
    );
}

export default Feiticos;