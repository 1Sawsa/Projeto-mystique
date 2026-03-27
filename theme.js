// ===== DARK MODE / LIGHT MODE =====

// Detecta a preferência do sistema
function detectarTemaSistema() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Obter tema salvo ou usar preferência do sistema
function obterTemaSalvo() {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo) {
        return temaSalvo;
    }
    return detectarTemaSistema();
}

// Aplicar tema
function aplicarTema(tema) {
    const html = document.documentElement;
    
    if (tema === 'dark') {
        html.setAttribute('data-tema', 'dark');
        document.getElementById('tema-toggle').textContent = '☀️';
    } else {
        html.setAttribute('data-tema', 'light');
        document.getElementById('tema-toggle').textContent = '🌙';
    }
    
    // Salvar preferência no localStorage
    localStorage.setItem('tema', tema);
}

// Alternar tema
function alternarTema() {
    const temaAtual = document.documentElement.getAttribute('data-tema');
    const novoTema = temaAtual === 'dark' ? 'light' : 'dark';
    aplicarTema(novoTema);
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    const temaInicial = obterTemaSalvo();
    aplicarTema(temaInicial);
    
    // Listener para botão de toggle
    const botaoTema = document.getElementById('tema-toggle');
    if (botaoTema) {
        botaoTema.addEventListener('click', alternarTema);
    }
    
    // Listener para mudanças no sistema operacional
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            const novoTema = e.matches ? 'dark' : 'light';
            aplicarTema(novoTema);
        });
    }
});
