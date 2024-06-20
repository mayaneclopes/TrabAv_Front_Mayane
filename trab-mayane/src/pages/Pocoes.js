import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Pocoes = () => {

    const { id } = useParams;
    const [pocoes, setPocoes] = useState();

    useEffect(() => {
        const buscaPocao = async () => {
            try {
                const response = await axios.get(`https://api.potterdb.com/v1/potions/${id}`);
                setPocoes(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        buscaPocao();
    }, [id]);

    if (!pocoes) {
        return <div>Carregando...</div>
    }

    return (
        <div>
            <h1>{pocoes.attributes.name}</h1>
            <p>{pocoes.attributes.description}</p>
        </div>
    );
}

export default Pocoes;