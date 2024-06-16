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

    const validSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (user === '' || password === '') {
            setError('Dados incorretos ou ausentes, tente novamente');
        } else {
            setError('');
            // Simulando chamada API
            await new Promise((resolve) => setTimeout(resolve, 2000));
            // Login com sucesso considerei o preenchimento de 
            //qualquer valor em usuário e senha
            //para o botão redirecionar para outra página
            navigate('/outra-pagina');
        }
    }, [user, password, navigate]);

    return (
        <Container centerContent backgroundColor={'blue.100'}>
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
                                <FormLabel htmlFor='user'>Usuário:</FormLabel>
                                <Input
                                    placeholder='Nome de usuário'
                                    type='text'
                                    id='user'
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                />
                                <FormLabel htmlFor='password'>Senha:</FormLabel>
                                <Input
                                    placeholder='Senha do usuário'
                                    type='password'
                                    id='password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {error && (
                                    <FormErrorMessage>{error}</FormErrorMessage>
                                )}
                                <Box as='button' marginTop={4} bg='blue.200' borderRadius='md' px={4} h={8} type='submit'>
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
