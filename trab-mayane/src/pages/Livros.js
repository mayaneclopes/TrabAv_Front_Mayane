import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Livros = () => {
    const { id } = useParams();
    const [livro, setLivro] = useState();

    useEffect(() => {
        const buscaLivro = async () => {
            try {
                const response = await axios.get(`https://api.potterdb.com/v1/books/${id}`)
                setLivro(response.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        buscaLivro();
    }, [id]);

    if (!livro) {
        return <div>Carregando...</div>
    }

    return (
        <div>
            <h1>{livro.attributes.name}</h1>
            <p>{livro.attributes.description}</p>
        </div>
    );
}

export default Livros;