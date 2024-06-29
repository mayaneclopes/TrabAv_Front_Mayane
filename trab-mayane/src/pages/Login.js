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

//Decidi traduzir pro inglês porque a API está em inglês e ficou esquisito.
//Fiz meu melhor

function Login() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validSubmit = useCallback(async (e) => {
        e.preventDefault();
        if (user === '' || password === '') {
            setError('Incorrect or absent data, try again');
        } else if (password.length < 8) {
            setError('Password must have at least 8 characters')
        } else {
            setError('');
            await new Promise((resolve) => setTimeout(resolve, 2000));
            navigate('/search');
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
                        fontSize='40px'>Welcome!</Text>
                    <Text
                        fontSize='30px'>Please, log in</Text>
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
                                    User:</FormLabel>
                                <Input
                                    placeholder='Username'
                                    _placeholder={{ color: 'red.50' }}
                                    type='text'
                                    id='user'
                                    value={user}
                                    borderColor="gray.600"
                                    onChange={(e) => setUser(e.target.value)}
                                />
                                <FormLabel
                                    htmlFor='password' color='red.50' marginTop={2}>
                                    Password:</FormLabel>
                                <Input
                                    placeholder='Password'
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
