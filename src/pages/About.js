import { Carousel, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import homePage from "../images/homePage.png";
import boardPage from "../images/boardPage.png";
import rulesPage from "../images/rulesPage.png";
import logoFondBleu from "../images/logoFondBleu.png";
import iconDesigner from "../images/iconDesigner.png";
import iconCoder from "../images/iconCoder.png";
import iconGithub from "../images/iconGithub.png";
import iconLinkedin from "../images/iconLinkedin.png";
import iconFacebook from "../images/iconFacebook.png";
// const Home = () => {

function About() {
    // const [auth, setAuth] = useState({ isAuth: false, token: null });
    return (
        <>
            <div className="container-fluid">
                <div className="about">
                    <div className="row">
                        <div className="col-6 title1">
                            <div>
                                <h1>Allo!</h1>
                            </div>
                        </div>
                        <div className="col-6 title2">
                            <h2>
                                Je suis <span>Maurice</span> GAGNON
                            </h2>
                            <p>Un étudiant FULLSTACK orienté UI/UX Designer</p>
                        </div>
                    </div>
                </div>

                <div className="projet">
                    <div className="row">
                        <div className="col-8">
                            <Carousel fade style={{ height: "400px" }}>
                                <Carousel.Item>
                                    <img className="d-block w-75 mx-auto" src={logoFondBleu} alt="Logo de Modern Battleship" />

                                    <div className="d-block w-50 mx-auto">
                                        <h3>Logo</h3>
                                        <p>Le concept du logo se veut être simple, moderne, avec une touche personnalisé.</p>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img className="d-block w-75 mx-auto" src={homePage} alt="Page d'accueil" />
                                    <div className="d-block w-50 mx-auto">
                                        <h3>Page d'accueil</h3>
                                        <p>Puisqu'il s'agit d'un projet scolaire et non commercial, je me suis permis d'utiliser une image non libre de droit que j'ai trouvé sur internet.</p>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img className="d-block w-75 mx-auto" src={boardPage} alt="Page des tableau de jeu" />
                                    <div className="d-block w-50 mx-auto">
                                        <h3>Tableau de jeu</h3>
                                        <p>Le tableau de jeu a été pensé et concu pour permettre au joueur une expérience intuitive.</p>
                                    </div>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img className="d-block w-75 mx-auto" src={rulesPage} alt="Page des règlements" />
                                    <div className="d-block w-50 mx-auto">
                                        <h3>Règlements</h3>
                                        <p>Une page expliquant les règles du jeu.</p>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <div className="col-4 text">
                            <p>
                                Vous voyez présentement <span>mon premier projet React.js</span> dans le cadre de mon AEC en "Programmation Web Transactionnel" (Fullstack). Le projet était de créer un jeu de Battleship qui utilise une
                                connexion au serveur, afin de jouer avec d'autres joueurs à distance. Malheureusement, comme la formation était très condensé, nous n'avons pu finaliser notre projet pour qu'il fonctionne. J'ai tout de même
                                acquis des connaissances et des aptitudes qui m'aide dans la poursuite de ma carrière.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-flex profil">
                <div className="container">
                    <div>
                        <h2 className="mx-auto">Mon profil professionnel</h2>
                        <div className="row">
                            <div className="col-6">
                                <div class="card">
                                    <div class="card-header">
                                        <img className="d-block mx-auto" src={iconCoder} alt="Icone programmeur" />
                                    </div>

                                    <div class="card-body">
                                        <h1>Développeur</h1>
                                        <br />
                                        <p>J'aime coder des choses à partir de zéro et donner vie à des idées dans le navigateur.</p>
                                        <br />
                                        <h3>Langues que je parle :</h3>
                                        <ul>
                                            <li>HTML</li>
                                            <li>Bootstrap</li>
                                            <li>CSS</li>
                                            <li>Sass</li>
                                            <li>React.js</li>
                                            <li>Javascript</li>
                                            <li>Pug</li>
                                        </ul>

                                        <h3>Outils de développement :</h3>
                                        <ul>
                                            <li>Visual Studio Code</li>
                                            <li>MongoDB</li>
                                            <li>phpMySql</li>
                                            <li>XAMPP</li>
                                            <li>GitHub</li>
                                            <li>Express.js</li>
                                            <li>Node.js</li>
                                            <li>Postman</li>
                                        </ul>
                                    </div>
                                    {/* <div class="card-footer">Footer</div> */}
                                </div>
                            </div>
                            <div className="col-6">
                                <div class="card">
                                    <div class="card-header">
                                        <img className="d-block mx-auto" src={iconDesigner} alt="Icone designer" />
                                    </div>
                                    <div class="card-body">
                                        <h1>Designer</h1>
                                        <br />
                                        <p>J'apprécie une structure de contenu simple, des modèles de conception épurés et des interactions réfléchies.</p>
                                        <br />
                                        <h3>Ce que j'aime concevoir :</h3>
                                        <ul>
                                            <li>UX</li>
                                            <li>UI</li>
                                            <li>Web</li>
                                            <li>Logos</li>
                                            <li>et bien sur, la communication d'impact!</li>
                                        </ul>

                                        <h3>Outils de conception :</h3>
                                        <ul>
                                            <li>CorelDRAW</li>
                                            <li>Photo-Paint</li>
                                            <li>Illustrator</li>
                                            <li>AfterEffect</li>
                                            <li> Adobe XD</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="footerAbout">
                    <ul>
                        <li>
                            <a href="https://github.com/MauriceGagnon/">
                                <img className="d-block mx-auto" src={iconGithub} alt="Icone programmeur" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/maurice-gagnon-66b388b3">
                                <img className="d-block mx-auto" src={iconLinkedin} alt="Icone programmeur" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/maurice.gagnon.35">
                                <img className="d-block mx-auto" src={iconFacebook} alt="Icone programmeur" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default About;
