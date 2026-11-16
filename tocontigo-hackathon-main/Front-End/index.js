// Elementos do DOM
const form = document.getElementById('patient-form');
const nomeInput = document.getElementById('nome');
const cpfInput = document.getElementById('cpf');
const anotacoesInput = document.getElementById('anotacoes');
const charCount = document.getElementById('char-count');
const btnCancelar = document.getElementById('btn-cancelar');

const toastBanner = document.getElementById('toast-banner');
const toastMessage = document.getElementById('toast-message');
const toastIcon = document.getElementById('toast-icon');

const historySection = document.getElementById('history-section');
const recordsList = document.getElementById('records-list');
const recordsBadge = document.getElementById('records-badge');

const btnVerRegistros = document.getElementById('btn-ver-registros');

let savedRecords = [];

// 1. Máscara automática de CPF (000.000.000-00)
cpfInput.addEventListener('input', (e) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito
    if (value.length > 11) value = value.slice(0, 11);

    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    e.target.value = value;
    clearFieldError(cpfInput, 'error-cpf');
});

// 2. Contador de caracteres nas anotações e limpeza de erros ao digitar
anotacoesInput.addEventListener('input', () => {
    const length = anotacoesInput.value.length;
    charCount.textContent = `${length} ${length === 1 ? 'caractere' : 'caracteres'}`;
    clearFieldError(anotacoesInput, 'error-anotacoes');
});

nomeInput.addEventListener('input', () => {
    clearFieldError(nomeInput, 'error-nome');
});

// Funções auxiliares de validação visual
function showFieldError(inputEl, errorId) {
    inputEl.classList.add('border-rose-400', 'bg-rose-50/30');
    inputEl.classList.remove('border-slate-200');
    document.getElementById(errorId).classList.remove('hidden');
}

function clearFieldError(inputEl, errorId) {
    inputEl.classList.remove('border-rose-400', 'bg-rose-50/30');
    inputEl.classList.add('border-slate-200');
    document.getElementById(errorId).classList.add('hidden');
}

// Sistema de Notificação (Toast Banner)
function showToast(message, type = 'success') {
    toastBanner.classList.remove('hidden', 'bg-teal-50', 'border-teal-200', 'text-petrol', 'bg-slate-100', 'border-slate-300', 'text-slate-700', 'bg-rose-50', 'border-rose-200', 'text-rose-800');

    if (type === 'success') {
        toastBanner.classList.add('bg-teal-50', 'border-teal-200', 'text-petrol');
        toastIcon.innerHTML = `<svg class="w-5 h-5 text-turquoise-dark" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
    } else if (type === 'neutral') {
        toastBanner.classList.add('bg-slate-100', 'border-slate-300', 'text-slate-700');
        toastIcon.innerHTML = `<svg class="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
    } else {
        toastBanner.classList.add('bg-rose-50', 'border-rose-200', 'text-rose-800');
        toastIcon.innerHTML = `<svg class="w-5 h-5 text-rose-600" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
    }

    toastMessage.textContent = message;
    toastBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideToast() {
    toastBanner.classList.add('hidden');
}

// 3. Ação do Botão SALVAR
form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nome = nomeInput.value.trim();
    const cpfDigits = cpfInput.value.replace(/\D/g, '');
    const anotacoes = anotacoesInput.value.trim();

    let isValid = true;

    if (nome.length < 3) {
        showFieldError(nomeInput, 'error-nome');
        isValid = false;
    }

    if (cpfDigits.length !== 11) {
        showFieldError(cpfInput, 'error-cpf');
        isValid = false;
    }

    if (anotacoes.length === 0 || anotacoes.length > 5000) {
        showFieldError(anotacoesInput, 'error-anotacoes');
        isValid = false;
    }

    if (!isValid) {
        showToast('Verifique os campos destacados.', 'error');
        return;
    }

    const btnSalvar = document.getElementById('btn-salvar');

    try {
        btnSalvar.disabled = true;

        const resposta = await fetch(
            `${API_URL}/pacientes/${PACIENTE_ID}/registros`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    mensagem: anotacoes
                })
            }
        );

        if (!resposta.ok) {
            throw new Error('Erro ao salvar registro');
        }

        const registro = await resposta.json();

        // Adiciona o registro retornado pelo banco ao histórico
        savedRecords.unshift({
            id: registro.id,
            nome,
            cpf: cpfInput.value,
            anotacoes: registro.mensagem,
            timestamp: new Date(
                registro.criado_em.replace(' ', 'T') + 'Z'
            ).toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit'
            })
        });

        // Limpa apenas a anotação
        anotacoesInput.value = '';
        charCount.textContent = '0 caracteres';
        clearFieldError(anotacoesInput, 'error-anotacoes');

        showToast('Anotação salva com sucesso!', 'success');

    } catch (erro) {
        console.error(erro);
        showToast(
            'Erro ao salvar. Verifique se a API está funcionando.',
            'error'
        );
    } finally {
        btnSalvar.disabled = false;
    }
});

// 4. Ação do Botão Cancelar
btnCancelar.addEventListener('click', () => {
    const tinhaAnotacao = anotacoesInput.value.trim() !== '';

    anotacoesInput.value = '';
    charCount.textContent = '0 caracteres';
    clearFieldError(anotacoesInput, 'error-anotacoes');

    if (tinhaAnotacao) {
        showToast('Anotação cancelada.', 'neutral');
    } else {
        hideToast();
    }
});

function resetFormFields() {
    form.reset();
    charCount.textContent = '0 caracteres';
    clearFieldError(nomeInput, 'error-nome');
    clearFieldError(cpfInput, 'error-cpf');
    clearFieldError(anotacoesInput, 'error-anotacoes');
}

// Renderiza os cards de histórico salvo para demonstração ao vivo
function renderHistory() {
    if (savedRecords.length === 0) {
        historySection.classList.add('hidden');
        return;
    }

    historySection.classList.remove('hidden');
    recordsBadge.textContent = `${savedRecords.length} ${savedRecords.length === 1 ? 'registro' : 'registros'}`;

    recordsList.innerHTML = savedRecords.map(rec => `
                <div class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-turquoise/50 transition-colors">
                    <div class="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-2.5 border-b border-slate-100">
                        <div>
                            <h4 class="font-display font-bold text-petrol text-sm sm:text-base">${escapeHTML(rec.nome)}</h4>
                            <span class="text-xs font-mono text-slate-500">CPF: ${escapeHTML(rec.cpf)}</span>
                        </div>
                        <span class="inline-flex items-center gap-1 text-xs font-medium text-turquoise-dark bg-teal-50 px-2.5 py-1 rounded-lg">
                            Salvo às ${rec.timestamp}
                        </span>
                    </div>
                    <p class="text-sm text-slate-600 whitespace-pre-line leading-relaxed">${escapeHTML(rec.anotacoes)}</p>
                </div>
            `).join('');
}

// Prevenção básica contra XSS na exibição
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    }[tag]));
}


const API_URL = 'http://localhost:3000';
const PACIENTE_ID = 1;

async function carregarPaciente() {
    try {
        const resposta = await fetch(
            `${API_URL}/pacientes/${PACIENTE_ID}`
        );

        if (!resposta.ok) {
            throw new Error('Paciente não encontrado');
        }

        const paciente = await resposta.json();

        // Preenche o nome
        nomeInput.value = paciente.nome;

        // Formata o CPF: 12345678909 -> 123.456.789-09
        const cpf = paciente.cpf;

        cpfInput.value = cpf.replace(
            /(\d{3})(\d{3})(\d{3})(\d{2})/,
            '$1.$2.$3-$4'
        );

        //Impede a edição dos dados
        nomeInput.readOnly = true
        cpfInput.readOnly = true


    } catch (erro) {
        console.error(erro);
        showToast(
            'Erro ao carregar os dados do paciente.',
            'error'
        );
    }
}

carregarPaciente();

let historicoVisivel = false;

btnVerRegistros.addEventListener('click', async () => {
    if (historicoVisivel) {
        historySection.classList.add('hidden');
        btnVerRegistros.textContent = 'Ver registros do paciente';
        historicoVisivel = false;
        return;
    }

    try {
        btnVerRegistros.disabled = true;
        btnVerRegistros.textContent = 'Carregando...';

        const resposta = await fetch(
            `${API_URL}/pacientes/${PACIENTE_ID}/registros`
        );

        if (!resposta.ok) {
            throw new Error('Erro ao buscar registros');
        }

        const registros = await resposta.json();

        savedRecords = registros.map(registro => ({
            id: registro.id,
            nome: nomeInput.value,
            cpf: cpfInput.value,
            anotacoes: registro.mensagem,
            timestamp: new Date(
                registro.criado_em.replace(' ', 'T') + 'Z'
            ).toLocaleString('pt-BR', {
                dateStyle: 'short',
                timeStyle: 'short'
            })
        }));

        renderHistory();

        if (savedRecords.length === 0) {
            historySection.classList.remove('hidden');
            recordsList.innerHTML = `
                <p class="text-center text-slate-500 py-6">
                    Nenhum registro encontrado para este paciente.
                </p>
            `;
        }

        historicoVisivel = true;
        btnVerRegistros.textContent = 'Ocultar registros';

    } catch (erro) {
        console.error(erro);
        showToast('Não foi possível carregar os registros.', 'error');
        btnVerRegistros.textContent = 'Ver registros do paciente';
    } finally {
        btnVerRegistros.disabled = false;
    }
});