import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Stack,
    Box,
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    Text,
} from '@chakra-ui/react';

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    //Apesar da validação ter "dados incorretos", coloquei apenas para
    //fins de simulação, minha intenção foi considerar o login um sucesso
    //ao preenchimento de qualquer valor em usuário e senha, e erro apenas
    //caso um deses não esteja preenchido. O sucesso leva p/ a 2ª page

    const validSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (user === '' || password === '') {
            setError('Dados incorretos ou ausentes, tente novamente');
        } else {
            setError('');
            // Simulação de chamada API
            await new Promise((resolve) => setTimeout(resolve, 2000));
            navigate('/busca');
        }
    }, [user, password, navigate]);

    return (
        <Container centerContent>
            <Stack
                direction='column'
                alignItems='center'
                spacing={8}>
                <Box
                    textAlign='center'
                    padding={5}
                    marginTop={4}>
                    <Text
                        as='b'
                        fontSize='40px'>Bem vindo!</Text>
                    <Text
                        fontSize='30px'>Faça seu login</Text>
                </Box>
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    width='100%'
                    py={4}
                    bgPosition='center'
                    mb={20}
                >
                    <div>
                        <FormControl isInvalid={error !== ''}>
                            <form onSubmit={validSubmit}>
                                <FormLabel htmlFor='user' color='red.50'>
                                    Usuário:</FormLabel>
                                <Input
                                    placeholder='Nome de usuário'
                                    _placeholder={{ color: 'red.50' }}
                                    type='text'
                                    id='user'
                                    value={user}
                                    borderColor="gray.600"
                                    onChange={(e) => setUser(e.target.value)}
                                />
                                <FormLabel
                                    htmlFor='password' color='red.50' marginTop={2}>
                                    Senha:</FormLabel>
                                <Input
                                    placeholder='Senha do usuário'
                                    _placeholder={{ color: 'red.50' }}
                                    borderColor="gray.600"
                                    type='password'
                                    id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {error && (
                                    <FormErrorMessage>{error}</FormErrorMessage>
                                )}
                                <Box as='button' marginTop={4} bg='red.50' borderRadius='md' px={4} h={8} type='submit'>
                                    Login
                                </Box>
                            </form>
                        </FormControl>
                    </div>
                </Box>
            </Stack>
        </Container>
    );
}

export default Login;
