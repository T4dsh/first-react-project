import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Comment } from './components/Comment';

import style from './App.module.css';

import './global.css';

// author: {avatarUrl:"", name:"", role:"" }
// publishedAt: Date
// content: String

const post = [
  {
    id:1,
    author: {
      avatarUrl: "https://github.com/T4dsh.png",
      name:"Tadeu Henrique",
      role:"Web Developer"
    },
    content: [
        { type: 'paragraph', content:'Fala galeraa 👋'},
        { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type:'link', content: 'jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2023-12-03 20:00:00')
  },
  {
    id:2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name:"Mayk Brito",
      role:"Educator @Rocketseat"
    },
    content: [
        { type: 'paragraph', content:'Fala galeraa 👋'},
        { type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa.É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        { type:'link', content: 'jane.design/doctorcare'},      
    ],
    publishedAt: new Date('2023-12-05 20:00:00')
  },

]



function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar/>  
        <main>
        {post.map(post=> {
          return (
          <Post
            key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
          />
          )
        })}
        </main>
      </div>
    </div>
  )
}


export default App
