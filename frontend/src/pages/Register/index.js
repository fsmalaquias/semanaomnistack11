import React,  {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import './styles.css';
import logoImg from '../../assets/logo.svg';

import api from "../../services/api";

export default function Register(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUF] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();
    const data = {nome, email, whatsapp, cidade, uf};

    const response = await api.post('ongs', data);

    try {
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push('/')
    } catch (error) {
      alert(`Erro no cadastro, tente novamente`);
    }
    
  }
  return(
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>
          <h1>Cadastro</h1>
          <p>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.
          </p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={18} color="#E02041"/>
            Não tenho cadastro
          </Link>
        </section>
      
        <form onSubmit={handleRegister}> 
          <input placeholder="Nome da Ong" value={nome} onChange={e => setNome(e.target.value)}/>
          <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)}/>

          <div className="input-group">
            <input placeholder="Cidade" value={cidade} onChange={e => setCidade(e.target.value)}/>
            <input placeholder="UF" value={uf} style={{width: 80}} onChange={e => setUF(e.target.value)}/>
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
      
    </div>
  )

}