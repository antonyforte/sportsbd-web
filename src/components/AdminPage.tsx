import React, { useState } from 'react';
import axios from 'axios';

const AdminPage: React.FC = () => {
  const [playerData, setPlayerData] = useState({
    nome: '',
    apelido: '',
    posicao: '',
    time_nome: '',
    time_complemento: '',
    time_anterior: '',
    data_nascimento: '',
    nacionalidade: '',
    suspenso: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPlayerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('URL_DO_SEU_BACKEND', playerData); //MUDAR AQUI A URL
      console.log('Jogador registrado:', response.data);
      setPlayerData({
        nome: '',
        apelido: '',
        posicao: '',
        time_nome: '',
        time_complemento: '',
        time_anterior: '',
        data_nascimento: '',
        nacionalidade: '',
        suspenso: false,
      });
    } catch (error) {
      console.error('Erro ao registrar jogador:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-500 text-black">
      <form onSubmit={handleSubmit} className="w-full max-w-lg bg-black p-8 rounded-lg shadow-md">
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          value={playerData.nome}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-md bg-orange-300 text-black"
        />
        <input
          type="text"
          name="apelido"
          placeholder="Apelido"
          value={playerData.apelido}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-md bg-orange-300 text-black"
        />
        {/* Adicione os campos restantes conforme necessário */}
        <input
          type="text"
          name="posicao"
          placeholder="Posição"
          value={playerData.posicao}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-md bg-orange-300 text-black"
        />
        <input
          type="text"
          name="time_nome"
          placeholder="Nome do time"
          value={playerData.time_nome}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-md bg-orange-300 text-black"
        />

        <input
          type="text"
          name="time_complemento"
          placeholder="Time Complemento"
          value={playerData.time_complemento}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-md bg-orange-300 text-black"
        />
        <input
          type="text"
          name="time_anterior"
          placeholder="Time anterior"
          value={playerData.time_anterior}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-md bg-orange-300 text-black"
        />
        <input
            type="date"
            name="data_nascimento"
            placeholder="Data de Nascimento"
            value={playerData.data_nascimento}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 rounded-md bg-orange-300 text-black"
        />
        <input
          type="text"
          name="nacionalidade"
          placeholder="Nacionalidade"
          value={playerData.nacionalidade}
          onChange={handleChange}
          className="w-full mb-4 px-4 py-2 rounded-md bg-orange-300 text-black"
        />
        <div className="flex items-center mb-4">
            <input
            type="checkbox"
            name="suspenso"
            checked={playerData.suspenso}
            onChange={() =>
                setPlayerData((prevData) => ({
                ...prevData,
                suspenso: !prevData.suspenso,
                }))
            }
            className="mr-2 rounded border-orange-300"
            />
            <label htmlFor="suspenso" className="text-orange-300">
            Suspenso
            </label>
        </div>

        <button type="submit" className="w-full py-2 bg-orange-400 text-black rounded-md">
          Registrar Jogador
        </button>
      </form>
    </div>
  );
};

export default AdminPage;
