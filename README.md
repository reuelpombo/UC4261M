# 💙 TôContigo  https://github.com/reuelpombo/UC4261M/tree/main/tocontigo-hackathon-main

**O cuidado não termina quando a consulta acaba.**

O **TôContigo** é um assistente virtual de saúde desenvolvido com o objetivo de fortalecer a continuidade do cuidado no Sistema Único de Saúde (SUS), aproximando pacientes das unidades de saúde e facilitando o acompanhamento após uma consulta.

Por meio do WhatsApp, a solução oferece orientações, lembretes e organização de informações de saúde, tornando a comunicação entre pacientes e serviços de saúde mais acessível e eficiente.

---

## 🎯 Problema

Muitas vezes, o acompanhamento do paciente se perde após o atendimento na unidade de saúde. Dúvidas sobre medicamentos, esquecimento de horários, dificuldade para encontrar informações sobre a unidade de referência e falta de comunicação com os profissionais comprometem a continuidade do cuidado.

O TôContigo surge para reduzir essa distância, oferecendo um canal acessível e contínuo de comunicação entre o cidadão e a rede pública de saúde.

---

## 💡 Nossa solução

Um assistente virtual integrado ao WhatsApp, pensado para acompanhar o paciente também fora do ambiente da unidade de saúde.

### Principais funcionalidades

* **Identificação do paciente:** autenticação por CPF e data de nascimento, com confirmação dos dados cadastrais.
* **Localização da unidade de referência:** consulta à unidade de saúde vinculada ao paciente e seus horários de funcionamento.
* **Orientações de saúde:** respostas baseadas exclusivamente em informações institucionais e fontes previamente validadas.
* **Lembretes de medicamentos:** identificação de medicamentos e horários a partir de uma fotografia da prescrição, com confirmação obrigatória do paciente.
* **Acompanhamento:** registro de medições e informações que podem ser compartilhadas com os profissionais de saúde.
* **Encaminhamento adequado:** direcionamento para atendimento humano, UPAs ou SAMU (192), conforme a situação e os protocolos definidos.

---

## 🚀 Diferenciais

* Utiliza o WhatsApp, uma ferramenta já conhecida pela população.
* Facilita o acesso às informações da rede pública de saúde.
* Incentiva a continuidade do cuidado após as consultas.
* Ajuda a reduzir esquecimentos relacionados ao tratamento.
* Considera especialmente as necessidades de idosos e pessoas com dificuldade de acesso a ferramentas digitais tradicionais.

---

## 🏗️ Arquitetura do projeto

O projeto está organizado em dois diretórios principais:

```text
TôContigo/
├── api/
│   ├── src/
│   │   ├── app.ts
│   │   ├── app.test.ts
│   │   ├── db.ts
│   │   ├── schemas.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
└── web/
    ├── index.html
    └── index.js
```

* **API:** responsável pela lógica de negócio, processamento das solicitações e comunicação com os serviços necessários.
* **Web:** interface web de apoio à solução.

---

## ⚙️ Como executar o projeto

### Pré-requisitos

* Node.js
* npm

### 1. Clonar o repositório

```bash
git clone URL_DO_REPOSITORIO
cd TôContigo
```

### 2. Configurar a API

```bash
cd api
npm install
```

Crie um arquivo `.env` com base no arquivo de exemplo:

```bash
cp .env.example .env
```

Configure as variáveis de ambiente necessárias.

### 3. Executar a API

```bash
npm run dev
```

A API será iniciada em modo de desenvolvimento.

---

## 🔒 Privacidade e segurança

O TôContigo considera a privacidade e a proteção dos dados pessoais como princípios fundamentais.

Entre as diretrizes da solução estão:

* Minimização da coleta de dados pessoais.
* Confidencialidade das informações de saúde.
* Utilização de informações institucionais validadas.
* Confirmação do paciente antes de registrar informações extraídas de prescrições.
* Não realização de diagnósticos ou alterações nas prescrições médicas.

---

## 🧪 Contexto do desenvolvimento

O TôContigo está sendo desenvolvido como proposta para um hackathon, com foco na validação de uma solução tecnológica para melhorar a experiência dos cidadãos no SUS.

Nesta etapa, são utilizados dados simulados para demonstrar o funcionamento da solução, preservando informações pessoais e de saúde.

Uma possível evolução do projeto envolve a integração com sistemas utilizados pela rede pública de saúde, como o GEMUS, mediante autorização e viabilidade técnica e institucional.

---

## 🌱 Visão de futuro

Queremos contribuir para um SUS mais próximo, acessível e conectado, no qual o paciente não precise esperar pela próxima consulta para encontrar orientação e apoio.

**TôContigo: porque o cuidado precisa continuar. 💙**
