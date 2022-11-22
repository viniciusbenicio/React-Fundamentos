import userIcon from '../images/user.svg';
import clockItem from '../images/clock.svg';
import emptyFolderIcon from '../images/empty-folder.svg';
import cloudErrorIcon from '../images/cloud-error.svg';
import loader from '../images/loader-primary.svg'


import '../styles/Feed.css';

import FeedStatus from './FeedStatus';

export default function Feed(props){
    if(props.isLoading){
        return <img src={loader} alt="Loading" className="spin" />
    }
    if(props.hasError){
        return <FeedStatus 
        image={cloudErrorIcon}
        title="Algo deu errado"
        subtitle="Não foi possível carregar o seu feed. Tente novamente mais tarde." 
        />
    }

    if(props.posts.length === 0){
        return <FeedStatus 
            image={emptyFolderIcon}
            title="Não encontramos nada"
            subtitle="Parece que você e seus amigos não postaram nada, 
            Comece a escrever uma nova história!" 
            />
    }

    return (
        <>
            <header>
                <h1>{props.title}</h1>
                <h2>{props.subtitle}</h2>
            </header>

            <section className="feed">
            {props.posts.map((posts) => (
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
    );
}