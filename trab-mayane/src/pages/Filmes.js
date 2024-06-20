import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Filmes = () => {
    const { id } = useParams();
    const [filme, setFilme] = useState();

    useEffect(() => {
        const buscaFilme = async () => {
            try {
                const response = await axios.get(`https://api.potterdb.com/v1/movies/${id}`);
                setFilme(response.data.data);
            } catch (error) {
                console.log(error);
            }
        };
        buscaFilme()
    }, [id]);

    if (!filme) {
        return <div>Carregando...</div>
    }

    return (
        <div>
            <h1>{filme.attributes.name}</h1>
            <p>{filme.attributes.description}</p>
        </div>
    );
}

export default Filmes;