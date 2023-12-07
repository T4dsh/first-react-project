import { ThumbsUp, Trash } from '@phosphor-icons/react';
import styles from './Comment.module.css';
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment}) {

function handleDeleteComment(){
    onDeleteComment(content);
}

return (
    <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/T4dsh.png"/>
        <div className={styles.commentBox}>
            <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    
                        <strong>Tadeu Henrique</strong>
                        <time title='27 de novembro às 12:08' dateTime='2023-11-27'> Cerca de 1h atrás</time>
                </div>
                        <button onClick={handleDeleteComment} title='Deletar Comentário'>
                            <Trash size={20}/>
                        </button>
            </header>
                <p>{content}</p>
            </div>
            <footer>
                <button type='submit'>
                    <ThumbsUp/>Aplaudir<span>20</span>
                </button>
            </footer>
        </div>
    </div>
    )
}