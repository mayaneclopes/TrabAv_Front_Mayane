import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Busca = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [buscaTermo, setBuscaTermo] = useState();

    const buscaData = useCallback(async () => {
        try {
            const [personagemResponse, livroResponse, feiticoResponse,
                filmeResponse, pocaoResponse] = await Promise.all([
                    axios.get('https://api.potterdb.com/v1/characters'),
                    axios.get('https://api.potterdb.com/v1/books'),
                    axios.get('https://api.potterdb.com/v1/spells'),
                    axios.get('https://api.potterdb.com/v1/movies'),
                    axios.get('https://api.potterdb.com/v1/potions'),
                ]);
            setData([
                ...personagemResponse.data.data.map(item => ({ ...item, type: 'personagem' })),
                ...livroResponse.data.data.map(item => ({ ...item, type: 'livro' })),
                ...feiticoResponse.data.data.map(item => ({ ...item, type: 'feitico' })),
                ...filmeResponse.data.data.map(item => ({ ...item, type: 'filme' })),
                ...pocaoResponse.data.data.map(item => ({ ...item, type: 'pocao' })),
            ]);
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        buscaData();
    }, [buscaData])

    const handleBusca = (event) => {
        setBuscaTermo(event.target.value);
    }

    const handleClick = (id, type) => {
        navigate(`/${type}/${id}`)
    };

    const filtroData = data.filter(item =>
        item.attributes.name.toLowerCase().includes(buscaTermo.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                value={buscaTermo}
                onChange={handleBusca}
                placeholder="Buscar" />
            <div>
                {filtroData.map((item, index) => (
                    <div key={index} onClick={() =>
                        handleClick(item.id, item.type)}>
                        {item.attributes.name}
                        ({item.type})
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Busca;











// import {
//     Button,
//     Card,
//     CardBody,
//     CardFooter,
//     CardHeader,
//     Flex,
//     Heading,
//     Input,
//     useToast,
//     Image,
//     Box,
//     InputGroup,
//     InputRightElement,
// } from "@chakra-ui/react";
// import Header from "../components/Header";
// import { useState } from "react";
// import axios from "axios";

// const PersonagemInfo = ({ personagem }) => {
//     if (!personagem) return <div></div>

//     return (
//         <Card
//             bgColor="gray.50"
//             marginTop={8}
//             maxW="500px"
//             alignItems="center">
//             <CardHeader>
//                 <Heading size="lg">{personagem.data.attributes.name}
//                 </Heading>
//             </CardHeader>
//             <CardBody>
//                 <Image
//                     marginBottom={4}
//                     paddingLeft="25%"
//                     src={personagem.data.attributes.image}></Image>
//                 {personagem.data.attributes.alias_names.map(alias_names => (
//                     <div>{alias_names}</div>
//                 ))}
//             </CardBody>
//             <CardFooter></CardFooter>
//         </Card>
//     );
// }

// const Busca = () => {

//     const [input, setInput] = useState();
//     const [loading, setLoading] = useState();
//     const [personagem, setPersonagem] = useState();
//     const toast = useToast()

//     console.log(input);

//     const onChangeInput = (event) => {
//         setInput(event.target.value);
//     }

//     const getHarryPotter = async () => {
//         try {
//             setLoading(true)
//             const response = await axios.get(`https://api.potterdb.com/v1/characters/${input}`)
//             setPersonagem(response.data);
//             console.log(response.data);
//         } catch (error) {
//             toast({
//                 title: 'Erro',
//                 description: "Not found",
//                 status: "error",
//                 duration: 3000,
//                 isClosable: true,
//             })
//         } finally {
//             setLoading(false)
//         }
//     }



//     const renderSearchInput = () => {
//         return (
//             <Flex
//                 gap={8}
//                 px={16}
//                 justifyContent="center"
//                 alignItems="center"
//                 marginTop={8}>
//                 <InputGroup>
//                     <Input
//                         placeholder="Digite o personagem, feitiço, poção, filme ou livro"
//                         size="lg"
//                         variant='filled'
//                         value={input}
//                         onChange={onChangeInput}
//                     />
//                     <InputRightElement opacity="20%" h="100%">
//                         <Button
//                             onClick={() => {
//                                 setInput("");
//                                 setPersonagem(undefined);
//                             }}>x</Button>
//                     </InputRightElement>
//                 </InputGroup>
//                 <Button
//                     isLoading={loading}
//                     size="lg"
//                     onClick={getHarryPotter}>
//                     Accio!</Button>
//             </Flex>
//         );
//     };

//     return (
//         <Box>
//             <Header title="Busca no Universo Harry Potter" />
//             {renderSearchInput()}
//             <Flex justifyContent="center">
//                 <PersonagemInfo personagem={personagem} />
//             </Flex>
//         </Box>
//     )
// }

// export default Busca;