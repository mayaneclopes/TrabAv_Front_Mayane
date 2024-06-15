import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [user, setUser] = useState('');
    const [password, setPasswor] = useState('');

    const validForm = (e) => {
        e.preventDefault();
        if (!user || !password) {
            alert('Preencha ambos os campos.')
            return;
        }
        console.log(user, password)
    };

    return (
        <div>
            <div className='title'>
                <h1>Bem vindo!</h1>
                <h2>Faça seu login:</h2>
            </div>
            <div>
                <h3>Login:</h3>
                <form onSubmit={validForm} >
                    <div>
                        <label htmlFor='user'>Usuário:</label>
                        <input
                            type='text'
                            id='user'
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                        />
                        <label htmlFor='password'>Senha:</label>
                        <input
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPasswor(e.target.value
                            )}
                        />
                    </div>
                    <button type='submit'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Home;