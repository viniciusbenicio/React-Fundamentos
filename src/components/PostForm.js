import { useState } from 'react';

import '../styles/PostForm.css';

import userIcon from '../images/user.svg';
import paperPlaneIcon from '../images/paper-plane.svg';
import loader from '../images/loader-white.svg';

export default function PostForm (props) {
    const [history, setHistory] = useState('');
    const [userName, setUserName] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(event){
        event.preventDefault();

        setIsLoading(true);

        fetch('http://localhost:3001/posts', {
            method: 'POST',
            body: JSON.stringify({
                content: history,
                userName,
            }),
            headers: {
                'Content-Type': "application/json",
            },
        }).then(() => {
            props.onSubmit({history, userName});
            setIsLoading(false);
            setHistory('');
            setUserName('');
        })
    }

    return (
        <form className="post-form" onSubmit={handleSubmit}>
            <input 
            value={history}
            placeholder="Escreva uma nova historia..."
            onChange={(event) => setHistory(event.target.value)}
            />

            <div>
                <img src={userIcon} alt="User" />
                <input 
                value={userName}
                placeholder="Digite seu nome..."
                onChange={(event) => setUserName(event.target.value)}
                />

                <button type="submit" disabled={isLoading}>
                    {!isLoading && <img src={paperPlaneIcon} alt="Paper Planne" /> }
                    {isLoading &&  <img src={loader} alt="Loading" className="spin" /> }
                    Publicar
                </button>
            </div>
         </form>
    );
}