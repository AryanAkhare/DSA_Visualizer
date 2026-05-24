/* eslint-disable react/prop-types */
import style from '../Stylesheets/Home.module.css';
import dsaimg from '../assets/DsaImg.jpg'
export default function Home({ onLearnMoreClick }) {
    return (
        <div className={style.container}>
            <section className={style.content}>
                <h2 className={style.tagLine}>
                    DSA sharpens problem-solving skills, unlocking efficient solutions to challenges.
                </h2>
                <p className={style.para}>
                    This is to learn DSA from the tutorials, quizzes, and videos on data structures and algorithms, helping users build strong problem-solving skills efficiently.
                </p>
                <button
                    type="button"
                    className={style.LearnBtn}
                    onClick={onLearnMoreClick}
                >
                    Learn More
                </button>
            </section>

            <section className={style.animation}>
                <img src={dsaimg} alt="A representation of data structures and algorithms" className={style.heroImage} />
            </section>
        </div>
    );
}
