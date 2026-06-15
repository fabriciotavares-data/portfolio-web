/**
 * Portfólio Premium - Lógica Front-End e Analytics
 * Desenvolvido com foco em performance, acessibilidade e interatividade de dados.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ==========================================================================
       1. NAVEGAÇÃO RESPONSIVA (MOBILE MENU)
       ========================================================================== */
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            const isActive = navMenu.classList.toggle('active');
            mobileMenuToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
        });

        // Fechar o menu móvel ao clicar em qualquer link (.nav-link)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }


    /* ==========================================================================
       2. CONTADOR DE CARACTERES NO FORMULÁRIO
       ========================================================================== */
    const contactMessage = document.getElementById('contact-message');
    const charCountDisplay = document.getElementById('char-count-display');

    if (contactMessage && charCountDisplay) {
        contactMessage.addEventListener('input', () => {
            const length = contactMessage.value.length;
            charCountDisplay.textContent = `${length} / 500`;
        });
    }


    /* ==========================================================================
       3. VALIDAÇÃO E ENVIO DO FORMULÁRIO DE CONTATO
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const contactName = document.getElementById('contact-name');
    const contactEmail = document.getElementById('contact-email');
    const contactSubject = document.getElementById('contact-subject');
    const btnSubmitContact = document.getElementById('btn-submit-contact');
    const spinner = btnSubmitContact ? btnSubmitContact.querySelector('.spinner') : null;
    const submitSuccessMsg = document.getElementById('submit-success-msg');
    const submitErrorMsg = document.getElementById('submit-error-msg');

    // Elementos de erro individuais
    const errorName = document.getElementById('error-name');
    const errorEmail = document.getElementById('error-email');
    const errorSubject = document.getElementById('error-subject');
    const errorMessage = document.getElementById('error-message');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;

            // 1. Limpar mensagens de erro e classes 'invalid' anteriores
            const formFields = [
                { input: contactName, errorEl: errorName },
                { input: contactEmail, errorEl: errorEmail },
                { input: contactSubject, errorEl: errorSubject },
                { input: contactMessage, errorEl: errorMessage }
            ];

            formFields.forEach(field => {
                if (field.input) {
                    field.input.classList.remove('invalid');
                    field.input.removeAttribute('aria-invalid');
                    field.input.removeAttribute('aria-describedby');
                }
                if (field.errorEl) {
                    field.errorEl.textContent = '';
                    field.errorEl.classList.add('hidden');
                }
            });

            if (submitSuccessMsg) submitSuccessMsg.classList.add('hidden');
            if (submitErrorMsg) submitErrorMsg.classList.add('hidden');

            // 2. Realizar Validações específicas
            // Validar Nome
            if (!contactName || !contactName.value.trim()) {
                isValid = false;
                if (contactName) {
                    contactName.classList.add('invalid');
                    contactName.setAttribute('aria-invalid', 'true');
                    contactName.setAttribute('aria-describedby', 'error-name');
                }
                if (errorName) {
                    errorName.textContent = 'Por favor, preencha o seu nome.';
                    errorName.classList.remove('hidden');
                }
            }

            // Validar E-mail (Presença e Formato)
            if (contactEmail) {
                const emailValue = contactEmail.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailValue) {
                    isValid = false;
                    contactEmail.classList.add('invalid');
                    contactEmail.setAttribute('aria-invalid', 'true');
                    contactEmail.setAttribute('aria-describedby', 'error-email');
                    if (errorEmail) {
                        errorEmail.textContent = 'Por favor, preencha o seu e-mail.';
                        errorEmail.classList.remove('hidden');
                    }
                } else if (!emailRegex.test(emailValue)) {
                    isValid = false;
                    contactEmail.classList.add('invalid');
                    contactEmail.setAttribute('aria-invalid', 'true');
                    contactEmail.setAttribute('aria-describedby', 'error-email');
                    if (errorEmail) {
                        errorEmail.textContent = 'Por favor, insira um endereço de e-mail válido.';
                        errorEmail.classList.remove('hidden');
                    }
                }
            } else {
                isValid = false;
            }

            // Validar Objetivo (Select)
            if (!contactSubject || !contactSubject.value) {
                isValid = false;
                if (contactSubject) {
                    contactSubject.classList.add('invalid');
                    contactSubject.setAttribute('aria-invalid', 'true');
                    contactSubject.setAttribute('aria-describedby', 'error-subject');
                }
                if (errorSubject) {
                    errorSubject.textContent = 'Por favor, selecione o objetivo do contato.';
                    errorSubject.classList.remove('hidden');
                }
            }

            // Validar Mensagem
            if (!contactMessage || !contactMessage.value.trim()) {
                isValid = false;
                if (contactMessage) {
                    contactMessage.classList.add('invalid');
                    contactMessage.setAttribute('aria-invalid', 'true');
                    contactMessage.setAttribute('aria-describedby', 'error-message');
                }
                if (errorMessage) {
                    errorMessage.textContent = 'Por favor, escreva a sua mensagem.';
                    errorMessage.classList.remove('hidden');
                }
            }

            // 3. Se passar na validação, simular envio com Loading
            if (isValid) {
                // Desativar botão e mostrar spinner
                if (btnSubmitContact) btnSubmitContact.disabled = true;
                if (spinner) spinner.classList.remove('hidden');

                // Simular delay de rede (1500ms)
                setTimeout(() => {
                    // Ocultar spinner
                    if (spinner) spinner.classList.add('hidden');
                    
                    // Reativar botão
                    if (btnSubmitContact) btnSubmitContact.disabled = false;

                    // Mostrar mensagem de sucesso
                    if (submitSuccessMsg) {
                        submitSuccessMsg.classList.remove('hidden');
                    }

                    // Limpar formulário e redefinir contador
                    contactForm.reset();
                    if (charCountDisplay) {
                        charCountDisplay.textContent = '0 / 500';
                    }

                    // Fazer mensagem de sucesso sumir após 5000ms
                    setTimeout(() => {
                        if (submitSuccessMsg) {
                            submitSuccessMsg.classList.add('hidden');
                        }
                    }, 5000);

                }, 1500);
            } else {
                // Caso falhe na validação local, opcionalmente mostramos o feedback geral de erro
                if (submitErrorMsg) {
                    submitErrorMsg.classList.remove('hidden');
                    setTimeout(() => {
                        if (submitErrorMsg) {
                            submitErrorMsg.classList.add('hidden');
                        }
                    }, 5000);
                }
            }
        });
    }


    /* ==========================================================================
       4. DASHBOARD INTERATIVO E GRÁFICOS (CHART.JS)
       ========================================================================== */
    
    // Variáveis globais para armazenar as instâncias dos gráficos
    let commitsChart = null;
    let hoursChart = null;

    // Configurar preferências visuais globais para o Chart.js
    if (window.Chart) {
        Chart.defaults.font.family = "'JetBrains Mono', 'Plus Jakarta Sans', monospace";
        Chart.defaults.color = '#94A3B8'; // Muted Silver
    }

    // Estrutura de dados para os 3 filtros
    const filterData = {
        "btn-filter-30": {
            commits: "158",
            commitsChange: "+8.2% vs mês anterior",
            uptime: "99.99%",
            uptimePeriod: "Últimos 30 dias",
            stack: "TypeScript",
            stackRatio: "58.3% do codebase",
            coffee: "62 xícaras",
            areaLabels: ["Semana 1", "Semana 2", "Semana 3", "Semana 4"],
            areaData: [32, 45, 38, 43],
            donutData: [50, 30, 10, 10]
        },
        "btn-filter-6m": {
            commits: "924",
            commitsChange: "+10.5% vs sem. anterior",
            uptime: "99.97%",
            uptimePeriod: "Últimos 6 meses",
            stack: "TypeScript",
            stackRatio: "55.1% do codebase",
            coffee: "385 xícaras",
            areaLabels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"],
            areaData: [120, 145, 160, 138, 172, 189],
            donutData: [46, 34, 10, 10]
        },
        "btn-filter-all": {
            commits: "1.842",
            commitsChange: "+12.4% vs 2025",
            uptime: "99.98%",
            uptimePeriod: "Últimos 12 meses",
            stack: "TypeScript",
            stackRatio: "54.2% do codebase",
            coffee: "742 xícaras",
            areaLabels: ["T1-25", "T2-25", "T3-25", "T4-25", "T1-26", "T2-26"],
            areaData: [220, 280, 310, 350, 380, 420],
            donutData: [45, 35, 10, 10]
        }
    };

    // Seletores dos elementos de KPIs na tela
    const kpiCommits = document.getElementById('kpi-commits');
    const kpiCommitsChange = document.getElementById('kpi-commits-change');
    const kpiUptime = document.getElementById('kpi-uptime');
    const kpiUptimePeriod = document.getElementById('kpi-uptime-period');
    const kpiStack = document.getElementById('kpi-stack');
    const kpiStackRatio = document.getElementById('kpi-stack-ratio');
    const kpiCoffee = document.getElementById('kpi-coffee');

    /**
     * Atualiza os KPIs textuais na tela
     */
    function updateKPIs(filterType) {
        const data = filterData[filterType];
        if (!data) return;

        if (kpiCommits) kpiCommits.textContent = data.commits;
        if (kpiCommitsChange) {
            kpiCommitsChange.textContent = data.commitsChange;
            kpiCommitsChange.setAttribute('aria-label', `Variação: ${data.commitsChange}`);
        }
        if (kpiUptime) kpiUptime.textContent = data.uptime;
        if (kpiUptimePeriod) kpiUptimePeriod.textContent = data.uptimePeriod;
        if (kpiStack) kpiStack.textContent = data.stack;
        if (kpiStackRatio) kpiStackRatio.textContent = data.stackRatio;
        if (kpiCoffee) kpiCoffee.textContent = data.coffee;
    }

    /**
     * Inicializa ou atualiza os gráficos Chart.js com os dados do filtro
     */
    function initCharts(filterType) {
        if (!window.Chart) {
            console.error('Chart.js não está carregado.');
            return;
        }

        const data = filterData[filterType];
        if (!data) return;

        const canvasCommits = document.getElementById('commitsChart');
        const canvasHours = document.getElementById('hoursChart');

        if (!canvasCommits || !canvasHours) return;

        // 1. Destruir instâncias existentes se houver
        if (commitsChart) {
            commitsChart.destroy();
        }
        if (hoursChart) {
            hoursChart.destroy();
        }

        // 2. Obter contextos 2D dos Canvas
        const ctxCommits = canvasCommits.getContext('2d');
        const ctxHours = canvasHours.getContext('2d');

        // 3. Criar gradiente Cyber Teal para o gráfico de Área
        const gradient = ctxCommits.createLinearGradient(0, 0, 0, canvasCommits.clientHeight || 200);
        gradient.addColorStop(0, 'rgba(0, 242, 254, 0.35)'); // Cyber Teal transparente
        gradient.addColorStop(1, 'rgba(0, 242, 254, 0.01)'); // Quase invisível no fundo

        // 4. Configurar e desenhar Gráfico de Área (Commits)
        commitsChart = new Chart(ctxCommits, {
            type: 'line',
            data: {
                labels: data.areaLabels,
                datasets: [{
                    label: 'Commits',
                    data: data.areaData,
                    borderColor: 'rgba(0, 242, 254, 1)', // Cyber Teal
                    backgroundColor: gradient,
                    borderWidth: 2,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: 'rgba(0, 242, 254, 1)',
                    pointBorderColor: '#0B0F19', // Deep Void para contraste
                    pointBorderWidth: 2,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false // Não precisa de legenda para série única
                    },
                    tooltip: {
                        backgroundColor: 'rgba(22, 31, 48, 0.95)',
                        titleColor: '#F8FAFC',
                        bodyColor: '#F8FAFC',
                        borderColor: '#24354F',
                        borderWidth: 1,
                        titleFont: { family: "'JetBrains Mono', monospace" },
                        bodyFont: { family: "'JetBrains Mono', monospace" }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(36, 53, 79, 0.35)' // Border Steel suavizado
                        },
                        border: {
                            color: 'rgba(36, 53, 79, 0.35)'
                        },
                        ticks: {
                            color: '#94A3B8', // Muted Silver
                            font: { family: "'JetBrains Mono', monospace" }
                        }
                    },
                    y: {
                        grid: {
                            color: 'rgba(36, 53, 79, 0.35)'
                        },
                        border: {
                            color: 'rgba(36, 53, 79, 0.35)'
                        },
                        ticks: {
                            color: '#94A3B8',
                            font: { family: "'JetBrains Mono', monospace" }
                        }
                    }
                }
            }
        });

        // 5. Configurar e desenhar Gráfico Donut (Hours)
        hoursChart = new Chart(ctxHours, {
            type: 'doughnut',
            data: {
                labels: ["Front-end", "Data Analysis", "UI/UX", "DevOps"],
                datasets: [{
                    data: data.donutData,
                    backgroundColor: [
                        'rgba(0, 242, 254, 1)',   // Cyber Teal
                        'rgba(127, 0, 255, 1)',  // Electric Violet
                        'rgba(255, 42, 84, 1)',  // Cyber Crimson
                        'rgba(36, 53, 79, 1)'    // Border Steel
                    ],
                    borderColor: '#0B0F19', // Deep Void para as bordas do anel
                    borderWidth: 2,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%', // Define o "anel fino"
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#94A3B8',
                            font: {
                                family: "'JetBrains Mono', monospace",
                                size: 11
                            },
                            padding: 15,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(22, 31, 48, 0.95)',
                        titleColor: '#F8FAFC',
                        bodyColor: '#F8FAFC',
                        borderColor: '#24354F',
                        borderWidth: 1,
                        titleFont: { family: "'JetBrains Mono', monospace" },
                        bodyFont: { family: "'JetBrains Mono', monospace" },
                        callbacks: {
                            label: function(context) {
                                return ` ${context.label}: ${context.raw}%`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Configurar o comportamento dinâmico dos botões de filtro
    const filterButtons = document.querySelectorAll('.btn-filter');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const filterId = e.currentTarget.id;
            
            // Alternar classes ativa e os estados de acessibilidade aria-pressed
            filterButtons.forEach(button => {
                if (button.id === filterId) {
                    button.classList.add('active');
                    button.setAttribute('aria-pressed', 'true');
                } else {
                    button.classList.remove('active');
                    button.setAttribute('aria-pressed', 'false');
                }
            });

            // Atualizar os KPIs textuais e reinstanciar os gráficos
            updateKPIs(filterId);
            initCharts(filterId);
        });
    });

    // Inicialização padrão do Dashboard (Últimos 30 Dias)
    const defaultFilter = 'btn-filter-30';
    updateKPIs(defaultFilter);
    initCharts(defaultFilter);

});
