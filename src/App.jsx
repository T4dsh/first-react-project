import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';

import style from './App.module.css';

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <div className={style.wrapper}>
        <Sidebar/>  
        <main>
        <Post 
          author="Tadeu Henrique"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quisquam consectetur numquam. Tempore quo cupiditate voluptas repellat hic fugiat veniam, numquam commodi consequatur optio ullam libero praesentium vero qui totam!"
        />
        </main>
      </div>
    </div>
  )
}


export default App
