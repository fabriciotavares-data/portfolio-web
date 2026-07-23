import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ErrorsState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const Contact = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<ErrorsState>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear individual errors on change
    setErrors(prev => ({
      ...prev,
      [name]: ''
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: ErrorsState = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
    let isValid = true;

    if (!form.name.trim()) {
      newErrors.name = 'Por favor, preencha o seu nome.';
      isValid = false;
    }

    const emailValue = form.email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailValue) {
      newErrors.email = 'Por favor, preencha o seu e-mail.';
      isValid = false;
    } else if (!emailRegex.test(emailValue)) {
      newErrors.email = 'Por favor, insira um endereço de e-mail válido.';
      isValid = false;
    }

    if (!form.subject) {
      newErrors.subject = 'Por favor, selecione o objetivo do contato.';
      isValid = false;
    }

    if (!form.message.trim()) {
      newErrors.message = 'Por favor, escreva a sua mensagem.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowSuccess(false);
    setShowError(false);

    if (validateForm()) {
      setIsLoading(true);

      // Simulate network request
      setTimeout(() => {
        setIsLoading(false);
        setShowSuccess(true);
        setForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }, 1500);
    } else {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className="section-title">Iniciar um Projeto</h2>
        <p className="section-subtitle">Vamos conectar os dados à interface e gerar resultados reais.</p>
        
        <div className="contact-grid">
          
          {/* Coluna da Esquerda: Mockup Terminal */}
          <div className="contact-info-column" aria-label="Informações de contato em formato terminal">
            <div className="terminal-mockup glass-card">
              <div className="terminal-header">
                <span className="terminal-dot close" aria-hidden="true"></span>
                <span className="terminal-dot minimize" aria-hidden="true"></span>
                <span className="terminal-dot maximize" aria-hidden="true"></span>
                <span className="terminal-title">contact_sys.sh</span>
              </div>
              <div className="terminal-body mono">
                <p className="terminal-line"><span className="terminal-prompt">$</span> cat developer.json</p>
                <pre className="terminal-output"><code>{`{
  "nome": "Fabricio Salvador Tavares",
  "disponibilidade": "Buscando vagas de Estágio e Trainee",
  "localizacao": "Brasil (UTC-3)",
  "interesses": [
    "Análise de Dados & BI",
    "Automação de Processos",
    "Desenvolvimento de Aplicações"
  ],
  "status_atual": "Foco total em evolução técnica"
}`}</code></pre>
                <p className="terminal-line"><span className="terminal-prompt">$</span> curl -X GET info_contato</p>
                <p className="terminal-output text-teal">
                  e-mail: <a href="mailto:fahsalvadortavares02@gmail.com" className="hover:underline text-teal-400">fahsalvadortavares02@gmail.com</a>
                </p>
                <p className="terminal-output text-teal">
                  github: <a href="https://github.com/fabriciotavares-data" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-400">github.com/fabriciotavares-data</a>
                </p>
                <p className="terminal-output text-teal">
                  linkedin: <a href="https://www.linkedin.com/in/fabricio-salvador-tavares07/" target="_blank" rel="noopener noreferrer" className="hover:underline text-teal-400">linkedin.com/in/fabricio-salvador-tavares07/</a>
                </p>
                <p className="terminal-line"><span className="terminal-prompt">$</span> <span className="blink">_</span></p>
              </div>
            </div>
          </div>
          
          {/* Coluna da Direita: Formulário */}
          <div className="contact-form-column">
            <div className="form-wrapper glass-card">
              <form id="contact-form" onSubmit={handleSubmit} noValidate aria-label="Formulário para envio de mensagem de contato">
                
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Nome</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name" 
                    className={`form-input ${errors.name ? 'invalid' : ''}`} 
                    placeholder="Seu nome" 
                    value={form.name}
                    onChange={handleInputChange}
                    required 
                    aria-required="true"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'error-name' : undefined}
                  />
                  <span className={`error-msg ${errors.name ? '' : 'hidden'}`} id="error-name" aria-live="polite">
                    {errors.name}
                  </span>
                </div>
                
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">E-mail</label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="email" 
                    className={`form-input ${errors.email ? 'invalid' : ''}`} 
                    placeholder="seu.email@exemplo.com" 
                    value={form.email}
                    onChange={handleInputChange}
                    required 
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'error-email' : undefined}
                  />
                  <span className={`error-msg ${errors.email ? '' : 'hidden'}`} id="error-email" aria-live="polite">
                    {errors.email}
                  </span>
                </div>
                
                <div className="form-group">
                  <label htmlFor="contact-subject" className="form-label">Objetivo do Contato</label>
                  <select 
                    id="contact-subject" 
                    name="subject" 
                    className={`form-select ${errors.subject ? 'invalid' : ''}`} 
                    value={form.subject}
                    onChange={handleInputChange}
                    required 
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'error-subject' : undefined}
                  >
                    <option value="" disabled>Selecione o objetivo...</option>
                    <option value="web-dev">Desenvolvimento de Projeto Web</option>
                    <option value="data-analysis">Análise de Dados / Inteligência de Negócios</option>
                    <option value="opportunity">Oportunidade Profissional (CLT / PJ)</option>
                    <option value="other">Outro Assunto</option>
                  </select>
                  <span className={`error-msg ${errors.subject ? '' : 'hidden'}`} id="error-subject" aria-live="polite">
                    {errors.subject}
                  </span>
                </div>
                
                <div className="form-group">
                  <div className="textarea-header">
                    <label htmlFor="contact-message" className="form-label">Mensagem</label>
                    <span className="char-counter" id="char-count-display" aria-live="polite">
                      {form.message.length} / 500
                    </span>
                  </div>
                  <textarea 
                    id="contact-message" 
                    name="message" 
                    className={`form-textarea ${errors.message ? 'invalid' : ''}`} 
                    rows={5} 
                    maxLength={500} 
                    placeholder="Olá! Gostaria de conversar sobre..." 
                    value={form.message}
                    onChange={handleInputChange}
                    required 
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'error-message' : undefined}
                  ></textarea>
                  <span className={`error-msg ${errors.message ? '' : 'hidden'}`} id="error-message" aria-live="polite">
                    {errors.message}
                  </span>
                </div>
                
                <button type="submit" id="btn-submit-contact" className="btn btn-primary btn-submit" disabled={isLoading}>
                  <span className="btn-text">{isLoading ? 'Enviando...' : 'Enviar Mensagem'}</span>
                  {isLoading && <span className="spinner" aria-hidden="true"></span>}
                </button>
                
                {/* Mensagens de Status de Envio */}
                <div id="submit-success-msg" className={`submit-feedback success-feedback ${showSuccess ? '' : 'hidden'}`} role="alert">
                  <svg className="success-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" width="20" height="20">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>Mensagem enviada com sucesso!</span>
                </div>
                
                <div id="submit-error-msg" className={`submit-feedback error-feedback ${showError ? '' : 'hidden'}`} role="alert">
                  <span>Por favor, preencha todos os campos corretamente.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
