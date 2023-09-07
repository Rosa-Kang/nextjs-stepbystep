import Seo from '@/components/Seo';
import styles from './home.module.css';
import { useRouter } from 'next/router';

export default function Home({ results }) {
    const router = useRouter();
    const onClick = (id, title) => {
        router.push(`/movies/${title}/${id}`);
    };

    return (
        <>
            <Seo title="Home" />
            <div className={styles.contentWrapper}>
                <div className={styles.cardsContainer}>
                    {results?.map((movie) => (
                        <div key={movie.id} onClick={() => onClick(movie.id, movie.original_title)} className={styles.card}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            <h4>{movie.original_title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export async function getServerSideProps() {
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();

    return {
        props: {
            results,
        },
    };
}
