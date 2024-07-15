import React, { useState, FormEvent } from 'react';
import '../form/index.css';

interface LoginFormProps {
    onLogin: (isAuthenticated: boolean) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (username === 'doctor' && password === 'doctor321') {
            onLogin(true);
            setError('');
        } else {
            onLogin(false);
            setError('Invalid username or password');
        }
    };

    return (
        <div className="form-container login-form">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h3>Увійдіть в систему</h3>
                    <input
                        type="text"
                        id="username"
                        placeholder="Логін"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        placeholder="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p className="error">{error}</p>}
                <button type="submit">Увійти</button>
            </form>
        </div>
    );
};

export default LoginForm;
