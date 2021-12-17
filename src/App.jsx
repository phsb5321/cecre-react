import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  AppWrapper,
  NavBar,
  FirstSection,
  Divisor,
  SectionImg,
  SecondSection,
  ThirdSection,
  FourthSection,
  Footer,
  FifthSection,
  SixthSection
} from './styles';

import {
  Logo,
  FirstSectionImg,
  BackGroundImg,
  PuzzlePiece,
  PuzzlePiece2,
  PuzzlePiece3,
  Book,
  Heart,
  Other,
  Instagram,
  Zap,
  Email,
  One,
  Two,
  Three,
  Line,
  Phone,
  Email2,
  DividerImg,
} from './assets';

import TestImg from './assets/Teste.jpg';

import { Slider } from './components/Slider';


function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

const App = () => {


  const [pictureURLs, setPictureURLs] = useState([]);
  const [sepatePictureURL, setSeparatePictureURL] = useState("");
  const [info, setInfo] = useState({});

  const forceUpdate = useForceUpdate();
  const handleSectionChange = (input) => {
    document.querySelector('.active')?.classList.remove('active');
    if (input === "link-fifth") return forceUpdate();
    document.getElementById(input)?.classList.add('active');
    forceUpdate();
  };

  useEffect(() => {
    const getPictures = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/pictures`, {
        headers: {
          Authorization: process.env.REACT_APP_API_TOKEN
        }
      });

      setSeparatePictureURL(data[0].separate.url);
      setPictureURLs(data[0].carousel.map(picture => picture.url));
    };

    const getInfo = async () => {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/info`, {
        headers: {
          Authorization: process.env.REACT_APP_API_TOKEN
        }
      });

      setInfo({ ...data });

    };

    getPictures();
    getInfo();

  }, []);

  const [name, setName] = useState([]);
  const [email, setEmail] = useState([]);
  const [message, setMessage] = useState([]);

  const emailContent = {
    name, email, message
  };


  const sendEmail = async (event) => {
    try {
      event.preventDefault();
      console.log(emailContent);
      await axios.post(`${process.env.REACT_APP_API_URL}/email`, {
        "name": `${emailContent.name} - ${emailContent.email}`,
        "message": emailContent.message,
<<<<<<< HEAD
        "email": info.email,
        "to": "ongcecre@gmail.com"
=======
        "from": info.email,
>>>>>>> 27239a9dfd7e1a02532fb4d97424e1837c018170
      }, {
        headers: {
          Authorization: process.env.REACT_APP_API_TOKEN
        }
      }); // aqui usamos o axios para fazer uma requisição post
      alert("Sucesso! Sua mensagem foi enviada!"); // alerta de sucesso
      setName(""); // limpando os estados
      setEmail("");
      setMessage("");
    } catch (error) {
      alert(`Algo deu errado: ${error}`); // aviso de erro caso algo dê errado
    }
  };

  return (
    <AppWrapper className="App" id="first">
      <NavBar>
        <Logo />

        <ul>
          <li><a onClick={() => handleSectionChange("link-first")} className='active' id="link-first" href="#first">Início</a></li>
          <li><a onClick={() => handleSectionChange("link-second")} id="link-second" href="#second">Quem somos</a></li>
          <li><a onClick={() => handleSectionChange("link-third")} id="link-third" href="#third">Impactos</a></li>
          <li><a onClick={() => handleSectionChange("link-fourth")} id="link-fourth" href="#fourth">Pilares</a></li>
          <li><a onClick={() => handleSectionChange("link-fifth")} id="link-fifth" href="#fifth">Contato</a></li>
        </ul>
      </NavBar>

      <FirstSection >

        <span>
          <p>quem ama cuida</p>
          <h1>Reinventar
            alternativas que
            produzam o bem</h1>
          <h3>
            Um programa do Centro Educacional Comunitário Redenção que promove o cuidado de pessoas por meios educacionais, sociais e econômicos
          </h3>
          <a href="#fifth">
            <button type='button'>
              Quero contribuir
            </button>
          </a>
        </span>

        <FirstSectionImg />
      </FirstSection>

      <span id="second" />
      <Divisor />

      <SecondSection >
        <h1>
          Quem somos
        </h1>
        <h3>
          Como refletimos em uma melhor qualidade de vida
        </h3>


        <span>

          <div className='image-wrapper'>
            <SectionImg img={sepatePictureURL} />
            <BackGroundImg />
          </div>

          <div>
            <ul>
              <li>
                <PuzzlePiece />
                <p>
                  Somos frutos de ações sociais que impactaram nossas
                  histórias nascendo em
                  nós o propósito de
                  semear, saborear e
                  ecoar o bem.
                </p>
              </li>
              <li>
                <PuzzlePiece2 />
                <p>
                  Investimos desde a primeira infância aos comunitários, conectando atividades educacionais, físicas, psíquicas e alimentares.
                </p>
              </li>
              <li>
                <PuzzlePiece3 />
                <p>
                  Pessoas autônomas, solidárias e competentes
                </p>
              </li>
            </ul>
          </div>
        </span>

      </SecondSection>

      <span id="third" />
      <ThirdSection  >
        <h1>Nossos impactos</h1>
        <h3>Como nossas ações impactaram vidas de diversas famílias, crianças, <br /> adolescentes e dos próprios voluntários que atuam no programa.</h3>
        <Slider picturesURLs={pictureURLs} />
      </ThirdSection>

      <span id="fourth" />
      <FourthSection>
        <h1>Nossos pilares</h1>
        <h3>Atuamos há mais de 35 anos de forma participativa, contribuindo no<br /> desenvolvimento biopsicossocial do próximo...</h3>

        <span>
          <div>
            <Book />
            <h3 style={{ "color": '#F2A922' }}>Educação</h3>
          </div>
          <div>
            <Heart />
            <h3 style={{ "color": '#F23827' }}>Bem-Estart</h3>
          </div>
          <div>
            <Other />
            <h3 style={{ "color": '#39BFB2' }}>Sustentabilidade</h3>
          </div>
        </span>
      </FourthSection>

      <span id="fifth" />
      <FifthSection>
        <div>
          <h1>Faça sua contribuição</h1>
          <span>
            <ul>
              <li>
                <One />
                <p>
                  Doando produtos ou serviços
                </p>
              </li>
              <li>
                <Two />
                <p>
                  Promovendo mobilizações (jantar beneficente, bazar e brechó)
                </p>
              </li>
              <li>
                <Three />
                <p>
                  Comprando nossos produtos (ECOE, Abraçar para Semear e Sabor do Bem)
                </p>
              </li>
            </ul>

            <div>
              <p><b>Aceitamos Pix </b></p>
              <p>{info.pix}</p>
              <p><b>Ou</b></p>
              <p><b>Transferência bancária</b></p>
              <p>{info.account}</p>
            </div>
          </span>
        </div>


        <span>
          <Line />
        </span>

        <div>
          <h1>Entre em contato</h1>

          <ul>
            <li>
              <Phone />
              <p>{info.phone}</p>
            </li>

            <li>
              <Email2 />
              <p>
                {info.email}
              </p>
            </li>
          </ul>

          <DividerImg />


          <form action="submit">
            <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="E-mail" valye={email} onChange={(e) => setEmail(e.target.value)} />
            <textarea name="message" id="message" cols="30" rows="10" placeholder="Mensagem" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button button type='submit' onClick={sendEmail}><p>Enviar Mensagem</p></button>
          </form>
          {/* <p>Mensagem enviada com sucesso!</p> */}
        </div>
      </FifthSection>


      <Footer>
        <span>
          <div>
            <h2>ENDEREÇO</h2>
            <p>
              {info.adress}
            </p>
          </div>
          <div>
            <h2>CONTATO</h2>
            <p>
              {info.email}
            </p>
          </div>

          <a href={info.instagram}>
            <Instagram />
          </a>
          <a href={info.whatsapp}>
            <Zap />
          </a>
        </span>

        <hr />

        <span>
          <p>
            2021 Desenvolvido por CITi  |  Todos os direitos reservados
          </p>

          <span>
            <p>
              Termos de uso
            </p>
            <p>|</p>
            <p>
              Política de privacidade
            </p>
          </span>
        </span>

      </Footer>

    </AppWrapper>
  );
};

export default App;
