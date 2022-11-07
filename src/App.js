import {useState} from 'react';

import './styles/App.css';


import Feed from './components/Feed';
import PostForm from './components/PostForm';

export default function App(){
    const [posts, setPosts] = useState([]);

function handleSubmit({history, userName}){

   setPosts([
    ...posts,
    {
        id: Math.random(),
        content : history,
        userName,
        publishedAt: new Date(),
    }
    ]);
  }

    return (
        <div className="wrapper">
          <PostForm onSubmit={handleSubmit}/>
         <main>
            <Feed posts={posts}/>
         </main>
        </div>
    );
}