import {useState} from 'react';

import './styles/App.css';
import './styles/PostForm.css';
import './styles/Feed.css';

import userIcon from './images/user.svg';
import paperPlaneIcon from './images/paper-plane.svg';
import clockItem from './images/clock.svg';
import emptyFolderIcon from './images/empty-folder.svg';

export default function App(){
    const [history, setHistory] = useState('');
    const [userName, setUserName] = useState('');
    const [posts, setPosts] = useState([]);

function handleSubmit(event){
   event.preventDefault();
   
   setPosts([
    ...posts,
    {
        id: Math.random(),
        content : history,
        userName,
        publishedAt: new Date(),
    }
    ]);

    setHistory('');
    setUserName('');
}

    return (
        <div className="wrapper">
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

                <button type="submit">
                    <img src={paperPlaneIcon} alt="Paper Planne" />
                    Publicar
                </button>
            </div>
         </form>
         <main>
            {posts.length === 0 && (
             <div className="feed-status">
              <img src={emptyFolderIcon} alt="Empty folder"/>
                <h1>Não encontramos nada</h1>
                <h2>
                Parece que você e seus amigos não postaram nada, 
                Comece a escrever uma nova história!
                </h2>
                </div>
            )}
            {posts.length > 0  && 
            (
            <>
            <header>
                <h1>Seu Feed</h1>
                <h2>Acompanhe o que seus amigos estão pensando em tempo real</h2>
            </header>

            <section className="feed">
            {posts.map((posts) => (
                <article key={posts.id}>
                <p>{posts.content}</p>
                <footer>
                    <div className="user-details">
                        <img src={userIcon} alt="User" />
                        <strong>{posts.userName}</strong>
                    </div>
                    <div className="time">
                        <img src={clockItem} alt="Clock" />
                        <span>{posts.publishedAt.toLocaleDateString('pt-br')}</span>
                    </div>
                </footer>
            </article>
            ))}
            </section>
            </>
            )}
         </main>
        </div>
    );
}