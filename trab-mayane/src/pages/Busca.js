import { Button, Flex, Input } from "@chakra-ui/react";
import Header from "../components/Header";

const Busca = () => {

    const renderSearchInput = () => {
        return (
            <Flex
                gap={8}
                px={16}
                justifyContent="center"
                alignItems="center"
                marginTop={8}>
                <Input
                    placeholder="Digite o personagem, feitiço, poção, filme ou livro"
                    size="lg"
                    variant='filled'
                />
                <Button size="lg">Accio!</Button>
            </Flex>
        );
    };

    return (
        <div>
            <Header title="Busca Universo Harry Potter" />
            {renderSearchInput()}
        </div>
    )
}

export default Busca;