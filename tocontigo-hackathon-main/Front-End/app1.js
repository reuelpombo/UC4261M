const STORAGE_KEY = 'tocontigo_demo_state_v1';

const ESTADO_INICIAL = {
  lembretes: [],
  historico: [
    {
      origem: 'Base SUS • GEMUS',
      titulo: 'Cadastro Territorial Vinculado',
      descricao: 'Paciente vinculada à UBS Centro. Histórico ambulatorial pronto para integração.',
      hora: 'Hoje, 08:00',
      tipo: 'sistema'
    }
  ]
};

function obterEstado() {
  const salvo = localStorage.getItem(STORAGE_KEY);
  return salvo ? JSON.parse(salvo) : JSON.parse(JSON.stringify(ESTADO_INICIAL));
}

function salvarEstado(novoEstado) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(novoEstado));
}

function horaAtual() {
  const agora = new Date();
  return agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

/* =========================================================
   FUNÇÕES DA VISÃO DO PACIENTE (paciente.html)
   ========================================================= */
function iniciarVisaoPaciente() {
  const relogio = document.getElementById('relogio-celular');
  if (relogio) relogio.textContent = horaAtual();
  executarEtapa(1);
}

function adicionarMensagem(remetente, htmlConteudo, botoes = []) {
  const container = document.getElementById('chat-messages');
  if (!container) return;

  const isUser = remetente === 'user';
  const wrapper = document.createElement('div');
  wrapper.className = `flex flex-col ${isUser ? 'items-end' : 'items-start'} mb-2`;

  let botoesHtml = '';
  if (botoes.length > 0) {
    botoesHtml = `<div class="mt-2.5 space-y-1.5 border-t border-slate-100 pt-2">
      ${botoes.map(b => `
        <button onclick="${b.acao}" class="w-full py-2 px-3 rounded-lg border border-teal-200 bg-teal-50/80 hover:bg-teal-100 text-[#0f4c5c] font-semibold text-xs transition flex items-center justify-center gap-1.5 shadow-sm">
          ${b.texto}
        </button>
      `).join('')}
    </div>`;
  }

  wrapper.innerHTML = `
    <div class="max-w-[85%] rounded-2xl px-3.5 py-2.5 shadow-sm ${isUser ? 'bg-[#d9fdd3] text-slate-800 rounded-tr-none' : 'bg-white text-slate-700 rounded-tl-none'}">
      <div class="leading-relaxed text-xs sm:text-sm">${htmlConteudo}</div>
      ${botoesHtml}
      <div class="text-[10px] text-slate-400 text-right mt-1">${horaAtual()} ${isUser ? '✓✓' : ''}</div>
    </div>
  `;

  container.appendChild(wrapper);
  container.scrollTop = container.scrollHeight;
}

function executarEtapa(etapa) {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  container.innerHTML = ''; // Limpa o chat antes de carregar a etapa

  if (etapa === 1) {
    adicionarMensagem('user', 'Oi, quero acompanhar minhas consultas e remédios.');
    setTimeout(() => {
      adicionarMensagem(
        'bot',
        `Olá! Eu sou o <strong>TôContigo</strong>, seu assistente de saúde integrado ao SUS.<br><br>
        Para localizar seu cadastro no <strong>GEMUS/SUS</strong> com segurança (LGPD), confirme seus dados:<br>
        🪪 <strong>CPF:</strong> 123.456.789-00<br>
        🎂 <strong>Nascimento:</strong> 14/05/1958`,
        [{ texto: '✅ Aceitar LGPD e Confirmar Dados', acao: 'confirmarCadastro()' }]
      );
    }, 250);
  }

  else if (etapa === 2) {
    adicionarMensagem('user', '📎 <em>Foto_Receita_Medica.jpg</em>');
    setTimeout(() => {
      adicionarMensagem(
        'bot',
        `Li sua prescrição! Identifiquei o seguinte horário:<br><br>
        💊 <strong>Losartana 50mg</strong><br>
        ⏰ Todos os dias às <strong>08:00</strong> e <strong>20:00</strong><br>
        <span class="text-[11px] text-slate-500">(Não alteramos doses, apenas organizamos os horários).</span><br><br>
        Posso ativar esses lembretes para você?`,
        [
          { texto: '✅ Sim, ativar lembretes', acao: 'ativarLembretePrescricao()' },
          { texto: '✏️ Corrigir horário', acao: 'alert("Modo de edição de horário aberto para o paciente.")' }
        ]
      );
    }, 250);
  }

  else if (etapa === 3) {
    adicionarMensagem('user', 'Minha pressão hoje deu 14/9 e senti uma tontura leve pela manhã.');
    setTimeout(() => {
      adicionarMensagem(
        'bot',
        `Entendi, Dona Maria. Conferindo seu registro antes de enviar para a equipe da <strong>UBS Centro</strong>:<br><br>
        🩺 <strong>Pressão Arterial:</strong> 140×90 mmHg (14/9)<br>
        📝 <strong>Relato ao médico:</strong> "Minha pressão hoje deu 14/9 e senti uma tontura leve pela manhã."<br><br>
        Confirma o envio dessas informações para seu prontuário?`,
        [{ texto: '✅ Confirmar e salvar no prontuário', acao: 'enviarPressaoUBS()' }]
      );
    }, 250);
  }

  else if (etapa === 4) {
    adicionarMensagem('user', 'Estou com uma dor muito forte no peito e falta de ar agora.');
    setTimeout(() => {
      adicionarMensagem(
        'bot',
        `<div class="bg-rose-50 border border-rose-200 text-rose-800 p-2.5 rounded-xl mb-1">
          <strong>🚨 SINAL DE ALERTA IDENTIFICADO</strong><br>
          Não fazemos diagnóstico por mensagem. Procure atendimento de urgência imediatamente!
        </div><br>
        🚑 <strong>SAMU:</strong> Ligue <strong>192</strong> agora.<br>
        🏥 <strong>UPA mais próxima:</strong> UPA 24h Centro (a 1,8 km do seu endereço).`
      );
    }, 250);
  }
}

function confirmarCadastro() {
  adicionarMensagem('user', 'Sim, aceito e confirmo meus dados.');
  setTimeout(() => {
    adicionarMensagem(
      'bot',
      `Perfeito, <strong>Dona Maria da Silva</strong>! Seu endereço na Rua das Flores, 123 está vinculado à <strong>UBS Centro</strong> (aberta hoje até 17h).`
    );
  }, 200);
}

function ativarLembretePrescricao() {
  const estado = obterEstado();
  const jaExiste = estado.lembretes.some(l => l.medicamento === 'Losartana 50mg');
  if (!jaExiste) {
    estado.lembretes.push({
      medicamento: 'Losartana 50mg',
      horarios: '08:00 e 20:00',
      status: 'Ativo via WhatsApp'
    });
    estado.historico.unshift({
      origem: 'WhatsApp Paciente • OCR',
      titulo: 'Lembrete de Medicação Ativado',
      descricao: 'Losartana 50mg configurada para 08:00 e 20:00 após confirmação da paciente.',
      hora: `Hoje, ${horaAtual()}`,
      tipo: 'lembrete'
    });
    salvarEstado(estado);
  }

  adicionarMensagem('user', 'Sim, ativar lembretes.');
  setTimeout(() => {
    adicionarMensagem(
      'bot',
      `⏰ <strong>Lembretes ativados!</strong> Vou te avisar todos os dias às 08:00 e 20:00 e sincronizei essa informação com a <strong>UBS Centro</strong>.`
    );
  }, 200);
}

function enviarPressaoUBS() {
  const estado = obterEstado();
  estado.historico.unshift({
    origem: 'WhatsApp Paciente • Telemonitoramento',
    titulo: 'Aferição de Pressão: 140×90 mmHg (14/9)',
    descricao: 'Relato da paciente: "Minha pressão hoje deu 14/9 e senti uma tontura leve pela manhã."',
    hora: `Hoje, ${horaAtual()}`,
    tipo: 'paciente'
  });
  salvarEstado(estado);

  adicionarMensagem('user', 'Confirmar e salvar no prontuário.');
  setTimeout(() => {
    adicionarMensagem(
      'bot',
      `✅ <strong>Registrado com sucesso!</strong> A equipe da <strong>UBS Centro</strong> já pode visualizar sua aferição e seu relato no prontuário.`
    );
  }, 200);
}

function enviarMensagemUsuario(event) {
  event.preventDefault();
  const input = document.getElementById('user-input');
  const texto = input.value.trim();
  if (!texto) return;

  adicionarMensagem('user', texto);
  input.value = '';

  setTimeout(() => {
    adicionarMensagem(
      'bot',
      `Recebi sua mensagem: <em>"${texto}"</em>. Deseja registrar esse relato no prontuário da <strong>UBS Centro</strong> ou falar com um atendente?`,
      [{ texto: '📝 Salvar relato para o médico', acao: `salvarRelatoLivre('${texto.replace(/'/g, "\\'")}')` }]
    );
  }, 400);
}

function salvarRelatoLivre(texto) {
  const estado = obterEstado();
  estado.historico.unshift({
    origem: 'WhatsApp Paciente • Relato Livre',
    titulo: 'Mensagem enviada para equipe de saúde',
    descricao: texto,
    hora: `Hoje, ${horaAtual()}`,
    tipo: 'paciente'
  });
  salvarEstado(estado);
  adicionarMensagem('bot', '✅ Relato salvo no prontuário da UBS Centro com sucesso!');
}

/* =========================================================
   FUNÇÕES DA VISÃO DO PROFISSIONAL (ubs.html)
   ========================================================= */
function iniciarVisaoUBS() {
  renderizarPainelUBS();
  window.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
      renderizarPainelUBS();
    }
  });
}

function renderizarPainelUBS() {
  const estado = obterEstado();

  // Renderizar Lembretes
  const listaLembretes = document.getElementById('lista-lembretes');
  const contadorLembretes = document.getElementById('contador-lembretes');
  if (listaLembretes && contadorLembretes) {
    contadorLembretes.textContent = `${estado.lembretes.length} ativo${estado.lembretes.length === 1 ? '' : 's'}`;
    if (estado.lembretes.length === 0) {
      listaLembretes.innerHTML = `
        <div class="border border-dashed border-slate-200 rounded-xl p-5 text-center text-xs text-slate-400">
          <p class="font-semibold text-slate-500 mb-1">Nenhum lembrete ativo no momento.</p>
          <p>Quando a paciente confirmar uma prescrição no WhatsApp, ela aparecerá aqui.</p>
        </div>`;
    } else {
      listaLembretes.innerHTML = estado.lembretes.map(l => `
        <div class="bg-teal-50/60 border border-teal-200 rounded-xl p-3 flex items-center justify-between">
          <div>
            <div class="text-xs font-bold text-[#0f4c5c]">${l.medicamento}</div>
            <div class="text-[11px] text-slate-600">⏰ Horários: <strong>${l.horarios}</strong></div>
          </div>
          <span class="text-[10px] font-bold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">Ativo</span>
        </div>
      `).join('');
    }
  }

  // Renderizar Histórico
  const listaHistorico = document.getElementById('lista-historico');
  const contadorRegistros = document.getElementById('contador-registros');
  if (listaHistorico && contadorRegistros) {
    contadorRegistros.textContent = `${estado.historico.length} registro${estado.historico.length === 1 ? '' : 's'}`;
    listaHistorico.innerHTML = estado.historico.map(item => `
      <div class="border border-slate-200/90 rounded-xl p-4 hover:border-teal-300 transition bg-slate-50/40">
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-md ${
            item.tipo === 'medico' ? 'bg-teal-100 text-[#0f4c5c]' :
            item.tipo === 'paciente' ? 'bg-amber-100 text-amber-800' :
            'bg-slate-200/70 text-slate-700'
          }">
            ${item.origem}
          </span>
          <span class="text-[11px] text-slate-400 font-medium">${item.hora}</span>
        </div>
        <h4 class="text-xs font-bold text-slate-800">${item.titulo}</h4>
        <p class="text-xs text-slate-600 mt-0.5">${item.descricao}</p>
      </div>
    `).join('');
  }
}

function salvarAnotacaoUBS(event) {
  event.preventDefault();
  const nome = document.getElementById('ubs-nome').value.trim();
  const cpf = document.getElementById('ubs-cpf').value.trim();
  const anotacoes = document.getElementById('ubs-anotacoes').value.trim();
  if (!anotacoes) return;

  const estado = obterEstado();
  estado.historico.unshift({
    origem: `Conduta Médica • ${nome} (${cpf})`,
    titulo: 'Evolução Clínica Registrada na UBS',
    descricao: anotacoes,
    hora: `Hoje, ${horaAtual()}`,
    tipo: 'medico'
  });
  salvarEstado(estado);
  document.getElementById('ubs-anotacoes').value = '';
  renderizarPainelUBS();
}

function limparFormularioUBS() {
  document.getElementById('ubs-anotacoes').value = '';
}

function reiniciarDemo() {
  localStorage.removeItem(STORAGE_KEY);
  renderizarPainelUBS();
  // Se estiver na tela do paciente, recarrega a etapa 1
  if (typeof executarEtapa === 'function' && document.getElementById('chat-messages')) {
    executarEtapa(1);
  }
}