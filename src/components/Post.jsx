import { Comment } from './Comment';
import styles from './Post.module.css';



export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/T4dsh.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Tadeu Henrique</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='26 de novembro às 15h25' dateTime='2023-11-26'>
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href="">{' '}jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixei seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer> 
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}></div>
            <Comment/>
            <Comment/>
            <Comment/>
        </article>
    )
}