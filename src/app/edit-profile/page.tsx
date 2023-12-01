'use client';

// Importe módulos e componentes necessários
import React, { useState } from 'react';
import Header from '@/components/Header';

// Seu componente ProfileEdit existente
export default function ProfileEdit() {
  const [userData, setUserData] = useState({
    username: 'xxxxxxx xxxxxxx xxxxxxxxxx',
    age: 'xx',
    sex: 'x',
    cpf: 'xxx-xxx-xxx-xx',
    planNumber: 'xx xxxxxxxx',
    password: '********',
    newPassword: '*********'
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChange = (field: string, value: string | number) => {
    setUserData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleEditPassword = () => {
    // Simulando uma atualização bem-sucedida aqui
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Oculta o aviso após 3 segundos
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-emerald-200 via-neutral-800 to-cyan-100">
        <section className="flex flex-col h-screen justify-center items-center">
          <Header />
          <main className="bg-white p-8 rounded-xl shadow-md mt-8 max-w-lg">
            <h1 className="text-2xl mb-4 text-violet-900 font-bold">Editar Perfil</h1>
            <div className="flex flex-col gap-4">
              {/* Seus campos de entrada vão aqui */}
              <div className="flex items-center gap-2">
                <label>Nome de Usuário:</label>
                <input
                  type="text"
                  value={userData.username}
                  onChange={(e) => handleChange("username", e.target.value)}
                  className="bg-gray-100 px-2 py-1 rounded-md w-full focus:outline-none focus:border focus:border-violet-900"
                />
              </div>
              <div className="flex items-center gap-2">
                <label>Idade:</label>
                <input
                  type="number"
                  value={userData.age}
                  onChange={(e) => handleChange("age", parseInt(e.target.value))}
                  className="bg-gray-100 px-2 py-1 rounded-md w-full focus:outline-none focus:border focus:border-violet-900"
                />
              </div>
              <div className="flex items-center gap-2">
                <label>Sexo:</label>
                <input
                  type="text"
                  value={userData.sex}
                  onChange={(e) => handleChange("sex", e.target.value)}
                  className="bg-gray-100 px-2 py-1 rounded-md w-full focus:outline-none focus:border focus:border-violet-900"
                />
              </div>
              <div className="flex items-center gap-2">
                <label>CPF:</label>
                <input
                  type="text"
                  value={userData.cpf}
                  onChange={(e) => handleChange("cpf", e.target.value)}
                  className="bg-gray-100 px-2 py-1 rounded-md w-full focus:outline-none focus:border focus:border-violet-900"
                />
              </div>
              <div className="flex items-center gap-2">
                <label>Número do Plano:</label>
                <input
                  type="text"
                  value={userData.planNumber}
                  onChange={(e) => handleChange("planNumber", e.target.value)}
                  className="bg-gray-100 px-2 py-1 rounded-md w-full focus:outline-none focus:border focus:border-violet-900"
                />
              </div>
              <div className="flex items-center gap-2">
                <label>Senha atual:</label>
                <input
                  type="password"
                  value={userData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  className="bg-gray-100 px-2 py-1 rounded-md w-full focus:outline-none focus:border focus:border-violet-900"
                />
              </div>
              <div className="flex items-center gap-2">
                <label>Nova senha:</label>
                <input
                  type="newPassword"
                  value={userData.newPassword}
                  onChange={(e) => handleChange("newPassword", e.target.value)}
                  className="bg-gray-100 px-2 py-1 rounded-md w-full focus:outline-none focus:border focus:border-violet-900"
                />
              </div>
              <button 
                onClick={handleEditPassword}
                className="bg-blue-500 text-white px-4 py-2 rounded-md bg-green-700"
              >
                Atualizar Perfil
              </button>
              {showSuccessMessage && (
                <p className="text-green-500 mt-2">Perfil atualizado com sucesso!</p>
              )}
            </div>
          </main>
        </section>
      </body>
    </html>
  );
}
