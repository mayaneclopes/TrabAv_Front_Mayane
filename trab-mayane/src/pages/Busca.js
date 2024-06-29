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
    Text,
    Badge,
} from "@chakra-ui/react";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";

const PersonagemInfo = ({ personagem, onShowDetails }) => {
    if (!personagem) return null;

    return (
        <Card
            bgColor="gray.50"
            marginTop={8}
            maxW="500px"
            width='100%'
            alignItems="center"
        >
            <CardHeader justifyContent='center'>
                <Heading size="lg">{personagem.data.attributes.name}</Heading>
            </CardHeader>
            <CardBody>
                <Image
                    marginBottom={4}
                    paddingLeft="25%"
                    src={personagem.data.attributes.image}
                />
                <Text as='b' size='lg'>ALIAS NAMES:</Text>
                {personagem.data.attributes.alias_names.map((alias, index) => (
                    <div key={index}>{alias}</div>
                ))}
                <Text marginTop='5'>House:
                    <Badge bg='blue.50' color='black' fontSize='1em'>
                        {personagem.data.attributes.house}
                    </Badge>
                </Text>
            </CardBody>
            <CardFooter display='flex'>
                <Button onClick={onShowDetails}>
                    More info
                </Button>
            </CardFooter>
        </Card>
    );
};

const Busca = () => {
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const [personagem, setPersonagem] = useState();
    const [mostraDetalhes, setDetalhes] = useState(false);
    const toast = useToast();

    const normalizeString = (str) => {
        return str.toLowerCase().replace(/ /g, "-");
    };

    const onChangeInput = (event) => {
        setInput(event.target.value);
    };

    const getHarryPotter = async () => {
        try {
            setLoading(true);
            const normalizedInput = normalizeString(input);
            const response = await axios.get(`https://api.potterdb.com/v1/characters/${normalizedInput}`);
            setPersonagem(response.data);
            console.log(response.data);
        } catch (error) {
            toast({
                title: 'Erro',
                description: "Not found",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        } finally {
            setLoading(false);
        }
    };

    const mostraBuscaDetalhes = () => {
        setDetalhes(true);
    };

    const renderSearchInput = () => {
        return (
            <Flex
                gap={8}
                px={16}
                justifyContent="center"
                alignItems="center"
                marginTop={8}
            >
                <InputGroup>
                    <Input
                        placeholder="Type the desired character"
                        size="lg"
                        variant='filled'
                        value={input}
                        onChange={onChangeInput} />
                    <InputRightElement opacity="20%" h="100%">
                        <Button onClick={() => setInput("")}>
                            x
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <Button isLoading={loading} size="lg" onClick={getHarryPotter}>
                    Accio!
                </Button>
            </Flex>
        );
    };

    return (
        <Box>
            <Header
                title="Search Harry Potter" />
            {!mostraDetalhes &&
                renderSearchInput()}
            {personagem &&
                !mostraDetalhes && (
                    <Flex justifyContent="center">
                        <PersonagemInfo
                            personagem={personagem}
                            onShowDetails={mostraBuscaDetalhes}
                        />
                    </Flex>
                )}
            {personagem &&
                mostraDetalhes && (
                    <Flex
                        justifyContent="center">
                        <Card
                            alignItems="center"
                            bgColor="gray.50"
                            marginTop={8}
                            maxW="500px"
                            width='100%'>
                            <CardBody>
                                <Text
                                    fontSize="xl"
                                    fontWeight="bold"
                                    justifyText='center'>
                                    More info about <br /> {personagem.data.attributes.name}:
                                </Text>
                                <Text
                                    marginTop='5'>
                                    Species: {personagem.data.attributes.species} <br />
                                    Gender: {personagem.data.attributes.gender}<br />
                                    Marital Status: {personagem.data.attributes.marital_status}<br />
                                    Nationality: {personagem.data.attributes.nationality}<br />
                                    Patronus: {personagem.data.attributes.patronus}<br />
                                    Skin color: {personagem.data.attributes.skin_color}<br />
                                </Text>
                                <Text as='b' size='lg'
                                    marginTop='5'>FAMILY MEMBERS:</Text>
                                {personagem.data.attributes.family_members.map((familyMember, index) => (
                                    <div key={index}>{familyMember}</div>
                                ))}

                            </CardBody>
                            <CardFooter display="flex">
                                <Button onClick={() => setDetalhes(false)}>
                                    Back to image
                                </Button>
                            </CardFooter>
                        </Card>
                    </Flex>
                )}
        </Box>
    );
};

export default Busca;