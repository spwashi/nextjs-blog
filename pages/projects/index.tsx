import Main from '../../components/layout/Main'
import Layout from '../../components/layout/Layout'
import Head from 'next/head'
import Header from '../../components/layout/Header';
import styles from './style.module.scss'
import Link from 'next/link';
import {Spw} from '../../components/spw/spw';

type Props = {}

const Index = ({}: Props) => {
    const languagesIve = <span style={{display: 'none'}}>Languages I've worked with</span>;
    return (
        <>
            <Layout>
                <Head>
                    <title>Things I'm working on</title>
                </Head>
                <Main className={styles.skillsPage}>
                    <Header/>
                    <article>
                        <h1>What I'm working on</h1>
                        <section id="community-development">
                            <h2>Community development</h2>
                            <details>
                                <summary><h3>Through mentorship</h3></summary>
                                <p>I'm mentoring a developer who has around 1 year of experience working with frontend
                                    technologies.</p>
                                <p>His name is <a href="https://www.linkedin.com/in/jordan-norwood-a971b8186/">Jordan
                                    Norwood</a>.</p>
                                <p>
                                    As we've been going through the HTML, CSS, and JavaScript projects he's worked on,
                                    I've gotten a chance to learn about his experiences, skills, and motivations.
                                </p>
                                <p>
                                    Jordan would be a <em>fantastic</em> contribution to your team; his background in music
                                    lends itself well to some very creative approaches to technology, and serves as a
                                    testament to his familiarity with composition and practice.
                                </p>
                                <p>
                                    Contact him: <a
                                    href="mailto:jjnorwood527@gmail.com?subject=I heard from Sam Washington that you were interested in a frontend development role">
                                    via email
                                </a>
                                </p>
                            </details>
                            <details>
                                <summary><h3>Through tech support</h3></summary>
                                <p>I've been working on MANIFOLD's site, and I'm excited to see it continue.</p>
                                <p>MANIFOLD is a docu-series forefronting the voices of queer people of color in Chicago.</p>
                                <p><a href="https://manifolddocuseries.com">Check it out!</a></p>
                            </details>
                        </section>
                        <section id="language-design">
                            <h2>Language Design</h2>
                            <details id="languages-development" open>
                                <summary>
                                    <h3>So far I've made two languages</h3>
                                </summary>
                                <ol>
                                    <li><a href="#spw">A programming language based in cognition</a></li>
                                    <li><Spw label="A written language based in phonetics"/></li>
                                </ol>
                            </details>
                            <details id="languages-highschool">
                                <summary><h3>I dabbled with language design in high school</h3></summary>
                                <p>In high school, I used to <Spw label="invent writing systems"/> and <a>create
                                    worlds</a> using them.</p>
                                <p>Alphabets I made generally followed English spelling, <Spw label="grammar"/>,
                                    and
                                    phonetics with a
                                    1:1 correlation.</p>
                            </details>
                            <details id="languages-college">
                                <summary><h3>My passion for linguistics grew in <Spw label="college"/></h3></summary>
                                <p> I started working on Spw in college. </p>
                                <div>
                                    <p>
                                        Preparing for college, I created <Spw label="my own shorthand"/>.
                                    </p>
                                    <p>
                                        My shorthand was originally just <a href=":spw">a cursive version of
                                        Samskrit</a>.
                                    </p>
                                    <p>
                                        Eventually,
                                        I changed the <Spw label="graphemes"/> to have a more direct
                                        relationship
                                        to <Spw label="phonetics"/>.
                                    </p>
                                    <p>
                                        I think my shorthand turns out to be <a href=":spw">not much
                                        faster</a> than classic cursive English,
                                        but it is <Spw label="easier for me to write."/></p>
                                    <p>Before I learned that <Spw label="it might hinder comprehension"/> I took
                                        most of my notes using it.</p>
                                    <p>I still use it because I think it looks nice and <Spw
                                        label="I like the way it feels"/></p>
                                </div>
                            </details>
                        </section>
                        <section>
                            <h2>Programming</h2>
                            <details id="programming-origin">
                                <summary><h3>I started programming in 2013</h3></summary>
                                <p>The first programming language I learned was <Spw label="C++"/>.</p>
                                <p>If I'm not mistaken, my first <Link
                                    href="/algorithms"><a>algorithm</a></Link> was an
                                    implementation of a <a href="https://www.wikiwand.com/en/Caesar_cipher"
                                                           rel="noreferrer" target="_blank">Caesar
                                        Cipher</a></p>.
                            </details>
                            <details id="languages-I-know" open>
                                <summary>
                                    <h3>I have experience with several languages</h3>
                                </summary>
                                <div>
                                    <h4>Languages I've programmed in...</h4>
                                    <ul className={styles.skillsList}>
                                        <li>
                                            <h5>{languagesIve}
                                                <dl>
                                                    <dt>a lot</dt>
                                                    <dd>to develop a skill</dd>
                                                </dl>
                                            </h5>
                                            <ul id="i-have-focused-on-some-languages">
                                                <li><Spw label="ECMAScript"/></li>
                                                <li><Spw label="PHP"/></li>
                                                <li><Spw label="HTML"/></li>
                                                <li><Spw label="TypeScript"/></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h5>{languagesIve} for more than 50 hours</h5>
                                            <ul id="i-have-fun-with-cool-languages">
                                                <li><Spw label="Python"/></li>
                                                <li><Spw label="GraphQL"/></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h5>{languagesIve}
                                                <dl>
                                                    <dt>often</dt>
                                                    <dd>when they come up</dd>
                                                </dl>
                                            </h5>
                                            <ul id="i-know-these-languages-as-well-as-i-need-to-when-i-need-to">
                                                <li><Spw label="SQL"/></li>
                                                <li><Spw label="CSS/SCSS"/></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h5>{languagesIve} as markup</h5>
                                            <ul id="i-know-markup-languages">
                                                <li><Spw label="XML"/></li>
                                                <li><Spw label="JSON"/></li>
                                                <li><Spw label="YAML"/></li>
                                                <li><Spw label="Markdown"/></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h5>{languagesIve}
                                                <dl>
                                                    <dt>some</dt>
                                                    <dd>as a beginner or in college</dd>
                                                </dl>
                                            </h5>
                                            <ul id="i-started-with-compiled-languages">
                                                <li><Spw label="C++"/></li>
                                                <li><Spw label="Java"/></li>
                                            </ul>
                                        </li>

                                        <li>
                                            <h5>{languagesIve} a little</h5>
                                            <ul id="i-have-used-old-languages">
                                                <li><Spw label="ColdFusion"/></li>
                                                <li><Spw label="Perl"/></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h5>honorable mentions</h5>
                                            <ul id="i-have-touched-other-languages">
                                                <li><a href="https://pegjs.org/online">PEG.js</a></li>
                                                <li><Spw label="AppleScript"/></li>
                                                <li><Spw label="Swift"/></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </details>
                        </section>
                        <section id="now">
                            <h2>Expanding hobbies, refining practice</h2>
                            <details id="spw" open>
                                <summary><h3>Spw v1.0.0 is coming out <Spw label="soon"/>.</h3></summary>
                                <div>
                                    <p>
                                        <Spw label="Spw"/> is a programming language I've been
                                        developing <Spw label="based on human cognition"/>.
                                    </p>
                                    <p>
                                        I started research for the language while I was in school
                                        for <Spw label="Learning and Education Studies"/>.
                                    </p>
                                    <p>The project was borne out of a <Spw label="consistent interest"/> I've
                                        had
                                        in <Spw label="self-directed learning"/>.</p>
                                    <p>
                                        My original goal was to create flexible knowledge-bases
                                        that could easily be <Spw label="written"/>, <Spw label="read"/>,
                                        and <Spw label="searched"/>.
                                    </p>
                                    <p>
                                        Spw turned into a <Spw label="graph-based language"/>, and I'm really
                                        excited to
                                        see where that goes.
                                    </p>
                                </div>
                            </details>
                            <details>
                                <summary><h3>Excuses to explore</h3></summary>
                                <p>
                                    As I've continued developing the <Spw label="runtime for Spw"/>,
                                    I've gotten way deeper into various programming language <Spw
                                    label="topics"/> and <Spw label="communities"/>.
                                    For example, <a target="_blank"
                                                    rel="noreferrer"
                                                    href="https://reddit.com/r/programminglanguages">the Programming
                                    Languages subreddit</a>.
                                </p>
                                <p>
                                    <Spw label="Functional languages"/> are really interesting to me, at least
                                    conceptually.
                                </p>
                                <p>
                                    Richard Feldman's talks about <a href="https://elm-lang.org">Elm</a> and a new
                                    language he's working on, <a href="https://roc-lang.org">Roc</a> got me into the
                                    space of functional programming.
                                </p>
                                <p>
                                    I've also been <a href="https://fsharpforfunandprofit.com/">reading
                                    articles</a> and <a href="https://vimeo.com/113707214">watching videos</a> about F
                                    Sharp.
                                </p>
                            </details>
                        </section>
                    </article>
                </Main>
            </Layout>
        </>
    )
}

export default Index

export const getStaticProps = async () => {
    return {
        props: {},
    }
}
