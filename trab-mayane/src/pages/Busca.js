import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Flex,
    Heading,
    Input,
    useToast,
    Image,
    Box,
    InputGroup,
    InputRightElement,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

const PersonagemInfo = ({ personagem }) => {
    if (!personagem) return <div></div>

    return (
        <Card
            bgColor="gray.50"
            marginTop={8}
            maxW="500px"
            alignItems="center">
            <CardHeader>
                <Heading size="lg">{personagem.data.attributes.name}
                </Heading>
            </CardHeader>
            <CardBody>
                <Image
                    marginBottom={4}
                    paddingLeft="25%"
                    src={personagem.data.attributes.image}></Image>
                {personagem.data.attributes.alias_names.map(alias_names => (
                    <div>{alias_names}</div>
                ))}
            </CardBody>
            <CardFooter></CardFooter>
        </Card>
    );
}

const Busca = () => {

    const [input, setInput] = useState();
    const [loading, setLoading] = useState();
    const [personagem, setPersonagem] = useState();
    const toast = useToast()

    console.log(input);

    const onChangeInput = (event) => {
        setInput(event.target.value);
    }

    const getHarryPotter = async () => {
        try {
            setLoading(true)
            const response = await axios.get(`https://api.potterdb.com/v1/characters/${input}`)
            setPersonagem(response.data);
            console.log(response.data);
        } catch (error) {
            toast({
                title: 'Erro',
                description: "Not found",
                status: "error",
                duration: 3000,
                isClosable: true,
            })
        } finally {
            setLoading(false)
        }
    }



    const renderSearchInput = () => {
        return (
            <Flex
                gap={8}
                px={16}
                justifyContent="center"
                alignItems="center"
                marginTop={8}>
                <InputGroup>
                    <Input
                        placeholder="Digite o personagem, feitiço, poção, filme ou livro"
                        size="lg"
                        variant='filled'
                        value={input}
                        onChange={onChangeInput}
                    />
                    <InputRightElement opacity="20%" h="100%">
                        <Button
                            onClick={() => {
                                setInput("");
                                setPersonagem(undefined);
                            }}>x</Button>
                    </InputRightElement>
                </InputGroup>
                <Button
                    isLoading={loading}
                    size="lg"
                    onClick={getHarryPotter}>
                    Accio!</Button>
            </Flex>
        );
    };

    return (
        <Box>
            <Header title="Busca no Universo Harry Potter" />
            {renderSearchInput()}
            <Flex justifyContent="center">
                <PersonagemInfo personagem={personagem} />
            </Flex>
        </Box>
    )
}

export default Busca;