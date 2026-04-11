import { useState, useEffect, useRef } from 'react';
import * as Icons from 'lucide-react';

const Instagram = function InstagramIcon({ size = 16, style = {} }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      width={size}
      height={size}
      style={{
        ...style,
      }}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
};

const Calendar = Icons.Calendar;
const MapPin = Icons.MapPin;
const MessageCircle = Icons.MessageCircle;
const ChevronRight = Icons.ChevronRight;
const Stethoscope = Icons.Stethoscope;
const Activity = Icons.Activity;
const Menu = Icons.Menu;
const X = Icons.X;
const Clock = Icons.Clock;
const Video = Icons.Video;
const Building2 = Icons.Building2;
const ChevronDown = Icons.ChevronDown;
const CheckCircle2 = Icons.CheckCircle2;

// Cores da Paleta Oficial
const colors = {
  creme: '#FCF5EA',
  rosa: '#E3A8B5',
  lilas: '#B3669E',
  azul: '#758FAF',
  branco: '#FFFFFF'
};

const ASSET_BASE = `${import.meta.env.BASE_URL}assets`;

const LogoMark = ({ size = 40, iconSize = 26, className = '' }) => (
  <div
    className={`relative flex items-center justify-center rounded-full overflow-hidden shrink-0 ${className}`}
    style={{ width: size, height: size, backgroundColor: colors.lilas, border: `1px solid ${colors.lilas}` }}
  >
    <img
      src={`${ASSET_BASE}/icons/Creme.png`}
      alt="Logo da marca"
      className="w-[88%] h-[88%] object-contain"
      style={{ width: iconSize, height: iconSize }}
    />
  </div>
);

// COMPONENTE DE ANIMAÇÃO AO ROLAR A PÁGINA
const AnimatedSection = ({ children, className = "", direction = "up", delay = 0, style = {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  let transformClass = "translate-y-12";
  if (direction === "left") transformClass = "-translate-x-12";
  if (direction === "right") transformClass = "translate-x-12";

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${className} ${isVisible ? "opacity-100 translate-y-0 translate-x-0" : `opacity-0 ${transformClass}`
        }`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
};

// COMPONENTE DE ACORDEÃO PARA FAQ
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm" style={{ backgroundColor: colors.branco }}>
      <button
        className="w-full text-left p-6 flex justify-between items-center font-serif text-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        style={{ color: colors.lilas }}
      >
        <span className="pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          style={{ color: colors.azul }}
        />
      </button>
      <div
        className={`px-6 text-slate-600 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        {answer}
      </div>
    </div>
  );
};

// COMPONENTE DE CARROSSEL DE AVALIAÇÕES
const ReviewsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = 10;
  const intervalRef = useRef(null);

  const goTo = (index) => {
    setCurrent((index + total) % total);
  };

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % total);
    }, 4000);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  const resetAuto = (index) => {
    clearInterval(intervalRef.current);
    goTo(index);
    startAuto();
  };

  // Visíveis: current-1, current, current+1 (mobile: só current)
  const getSlides = () => {
    return [-1, 0, 1].map(offset => (current + offset + total) % total);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Track — altura fixa para evitar saltos no layout */}
      <div className="flex items-center justify-center gap-4 px-4" style={{ height: '440px' }}>
        {getSlides().map((idx, pos) => (
          <div
            key={idx}
            className={`transition-all duration-500 rounded-2xl overflow-hidden shadow-lg shrink-0 ${pos === 1
              ? 'scale-100 opacity-100 z-10'
              : 'scale-90 opacity-40 hidden md:block'
              }`}
            style={{
              width: pos === 1 ? '340px' : '260px',
              height: pos === 1 ? '420px' : '320px',
              maxWidth: '90vw',
            }}
          >
            <img
              src={`${ASSET_BASE}/avaliacoes/avaliacao${idx + 1}.jpeg`}
              alt={`Avaliação de paciente ${idx + 1}`}
              className="w-full h-full object-contain"
              style={{ backgroundColor: '#f9f4ef' }}
            />
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button
        onClick={() => resetAuto(current - 1)}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110 z-20"
        style={{ backgroundColor: colors.branco, color: colors.lilas }}
        aria-label="Anterior"
      >
        <ChevronRight size={20} className="rotate-180" />
      </button>
      <button
        onClick={() => resetAuto(current + 1)}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-md transition-all hover:scale-110 z-20"
        style={{ backgroundColor: colors.branco, color: colors.lilas }}
        aria-label="Próximo"
      >
        <ChevronRight size={20} />
      </button>

      {/* Indicadores */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => resetAuto(i)}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              backgroundColor: i === current ? colors.lilas : colors.rosa,
              opacity: i === current ? 1 : 0.45,
            }}
            aria-label={`Ir para avaliação ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efeito para sombra do header ao rolar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans text-slate-700 min-h-screen" style={{ backgroundColor: colors.creme }}>

      {/* HEADER / NAVBAR */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md py-3' : 'py-5'
          }`}
        style={{ backgroundColor: colors.branco }}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Placeholder */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <LogoMark size={40} iconSize={28} />
            <div className="flex flex-col">
              <span className="font-serif font-medium text-lg leading-tight" style={{ color: colors.lilas }}>Dra. Camila Barcelos</span>
              <span className="text-xs tracking-widest uppercase" style={{ color: colors.azul }}>Endocrinologia Integrativa</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('sobre')} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: colors.azul }}>Sobre mim</button>
            <button onClick={() => scrollToSection('tratamentos')} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: colors.azul }}>Tratamentos</button>
            <button onClick={() => scrollToSection('atendimento')} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: colors.azul }}>Atendimento</button>
            <button onClick={() => scrollToSection('avaliacoes')} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: colors.azul }}>Avaliações</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:opacity-70 transition-opacity" style={{ color: colors.azul }}>Dúvidas</button>
            <button
              onClick={() => scrollToSection('contato')}
              className="px-6 py-2.5 rounded-full text-white text-sm font-medium transition-transform hover:scale-105 shadow-sm flex items-center gap-2"
              style={{ backgroundColor: colors.lilas }}
            >
              <Calendar size={16} />
              Agendar Consulta
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: colors.lilas }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full shadow-lg border-t" style={{ backgroundColor: colors.branco, borderColor: colors.creme }}>
            <div className="flex flex-col p-6 gap-4">
              <button onClick={() => scrollToSection('sobre')} className="text-left font-medium p-2" style={{ color: colors.azul }}>Sobre mim</button>
              <button onClick={() => scrollToSection('tratamentos')} className="text-left font-medium p-2" style={{ color: colors.azul }}>Tratamentos</button>
              <button onClick={() => scrollToSection('atendimento')} className="text-left font-medium p-2" style={{ color: colors.azul }}>Atendimento</button>
              <button onClick={() => scrollToSection('avaliacoes')} className="text-left font-medium p-2" style={{ color: colors.azul }}>Avaliações</button>
              <button onClick={() => scrollToSection('faq')} className="text-left font-medium p-2" style={{ color: colors.azul }}>Dúvidas</button>
              <button
                onClick={() => scrollToSection('contato')}
                className="mt-2 py-3 rounded-full text-white text-sm font-medium flex justify-center items-center gap-2"
                style={{ backgroundColor: colors.lilas }}
              >
                <Calendar size={18} />
                Agendar Consulta
              </button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden relative" style={{ backgroundColor: colors.creme }}>
        {/* Imagem decorativa atrás do texto à esquerda */}
        <img
          src={`${ASSET_BASE}/icons/Branco.png`}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-[55%] -translate-y-1/2 h-auto w-auto object-contain pointer-events-none select-none"
          style={{ opacity: 1.0, maxHeight: '75%', maxWidth: '35%' }}
        />
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-25" style={{ backgroundColor: colors.rosa }}></div>
        <div className="absolute bottom-0 left-10 w-72 h-72 rounded-full filter blur-3xl opacity-15" style={{ backgroundColor: colors.creme }}></div>

        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <AnimatedSection direction="left" className="flex flex-col justify-center max-w-xl">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider w-max" style={{ backgroundColor: '#FFFFFF', color: colors.azul, border: `1px solid ${colors.rosa}` }}>
              ENDOCRINOLOGIA & METABOLISMO
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6" style={{ color: colors.lilas }}>
              Cuidado especializado para equilibrar sua saúde e bem-estar.
            </h1>
            <p className="text-lg mb-8 leading-relaxed text-slate-600">
              Atendimento endocrinológico focado em promover um funcionamento saudável do seu corpo, desenvolvendo qualidade de vida e serenidade para a sua rotina.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('contato')}
                className="px-8 py-3.5 rounded-full text-white font-medium transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                style={{ backgroundColor: colors.lilas }}
              >
                Agendar Avaliação
                <ChevronRight size={18} />
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="px-8 py-3.5 rounded-full font-medium transition-all hover:bg-slate-50 hover:-translate-y-1 flex items-center justify-center"
                style={{ color: colors.azul, border: `1.5px solid ${colors.azul}` }}
              >
                Conhecer a Dra.
              </button>
            </div>
          </AnimatedSection>

          {/* Hero Image */}
          <AnimatedSection direction="right" delay={200} className="relative flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl" style={{ maxWidth: '22rem' }}>
              {/* Borda interna sutil e elegante */}
              <div className="absolute inset-0 border-2 border-white/30 rounded-3xl z-20 m-3 pointer-events-none"></div>
              <img
                src={`${ASSET_BASE}/profile/IMG_2557.jpg.jpg`}
                alt="Dra. Camila Barcelos"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SOBRE MIM SECTION */}
      <section id="sobre" className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: colors.branco }}>
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

          <AnimatedSection direction="left" className="order-2 md:order-1 relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl" style={{ backgroundColor: colors.rosa, opacity: 0.3 }}></div>
            <img
              src={`${ASSET_BASE}/profile/IMG_2571.jpg.jpg`}
              alt="Dra. Camila Barcelos 2"
              className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] object-cover rounded-3xl shadow-lg"
            />
            <svg className="absolute -top-10 -left-10 w-24 h-24 opacity-50 z-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 90 Q 50 10 90 90" stroke={colors.azul} strokeWidth="2" fill="none" />
              <path d="M30 90 Q 50 30 70 90" stroke={colors.rosa} strokeWidth="2" fill="none" />
            </svg>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200} className="order-1 md:order-2">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: colors.azul }}>Sobre a Dra. Camila Barcelos</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-6" style={{ color: colors.lilas }}>
              Uma trajetória dedicada a cuidar da sua saúde integral.
            </h3>

            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                Olá! Sou a <strong>Dra. Camila Barcelos</strong>, médica endocrinologista. Acredito que a medicina vai além de exames e prescrições — envolve escuta ativa e compreensão do seu momento de vida.
              </p>
              <p>
                Desde o início da minha formação, aprendi a olhar o paciente de forma integral. Meu objetivo é entender seu organismo, avaliar metabolismo e hormônios com clareza, acolher suas dúvidas e tomar decisões com base científica.
              </p>
              <p>
                O atendimento endocrinológico organiza o seu cuidado de forma individualizada, ajudando você a recuperar vitalidade, autoestima e qualidade de vida.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl border" style={{ borderColor: colors.creme, backgroundColor: '#ffffff' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: colors.creme, color: colors.azul }}>
                  <Activity size={20} />
                </div>
                <h4 className="font-serif font-medium text-slate-800">Residência Médica</h4>
                <p className="text-sm text-slate-500">Endocrinologia e Metabologia — UERJ</p>
              </div>
              <div className="p-4 rounded-2xl border" style={{ borderColor: colors.creme, backgroundColor: '#ffffff' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: colors.creme, color: colors.rosa }}>
                  <Activity size={20} />
                </div>
                <h4 className="font-serif font-medium text-slate-800">Residência Médica</h4>
                <p className="text-sm text-slate-500">Clínica Médica — Hospital Central da Aeronáutica</p>
              </div>
              <div className="p-4 rounded-2xl border" style={{ borderColor: colors.creme, backgroundColor: '#ffffff' }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3" style={{ backgroundColor: colors.creme, color: colors.lilas }}>
                  <Stethoscope size={20} />
                </div>
                <h4 className="font-serif font-medium text-slate-800">Graduação em Medicina</h4>
                <p className="text-sm text-slate-500">Universidade Federal Fluminense</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* TRATAMENTOS E ÁREAS DE ATUAÇÃO */}
      <section id="tratamentos" className="py-20 md:py-32 relative overflow-hidden" style={{ backgroundColor: colors.creme }}>
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: colors.azul }}>Especialidades</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: colors.lilas }}>Saiba como posso ajudar você</h3>
            <p className="text-slate-600">
              No meu acompanhamento, minha missão é trazer a clareza e segurança que você busca através de um cuidado humanizado.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="bg-white p-8 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-serif font-medium mb-4 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.rosa }}></span>
                  Emagrecimento e Obesidade
                </h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} /> Emagrecimento saudável e sustentável</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} /> Pré e Pós-bariátrica</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} /> Tratamento da obesidade com base científica e terapias modernas</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} /> Avaliação de obesidade clínica e pré-clínica</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={100}>
              <div className="bg-white p-8 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-serif font-medium mb-4 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.lilas }}></span>
                  Menopausa
                </h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.lilas }} /> Avaliação para reposição hormonal</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.lilas }} /> Investigação de fogachos, alterações de libido, sono e humor</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <div className="bg-white p-8 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-serif font-medium mb-4 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.azul }}></span>
                  Pré-diabetes e Diabetes
                </h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.azul }} /> Avaliação de alterações glicêmicas e resistência insulínica</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.azul }} /> Acompanhamento personalizado (DM1, DM2 e gestacional)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.azul }} /> Rastreamento de complicações e comorbidades</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <div className="bg-white p-8 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-serif font-medium mb-4 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.rosa }}></span>
                  Dislipidemia e Gordura no Fígado
                </h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} /> Avaliação de colesterol e triglicerídeos</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} /> Estratificação de risco cardiovascular</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} /> Tratamento moderno da esteatose hepática</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <div className="bg-white p-8 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-serif font-medium mb-4 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.lilas }}></span>
                  Tireoide
                </h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.lilas }} /> Avaliação hormonal tireoidiana</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.lilas }} /> Investigação de nódulos</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.lilas }} /> Doenças autoimunes (Hashimoto e Graves)</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={500}>
              <div className="bg-white p-8 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-serif font-medium mb-4 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.azul }}></span>
                  Outras Doenças Hormonais
                </h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.azul }} /> Síndrome dos Ovários Policísticos (SOP)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.azul }} /> Hirsutismo e acne</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.azul }} /> Hipogonadismo (libido e função sexual)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.azul }} /> Nódulos de adrenal e hipófise</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.azul }} /> Alterações de prolactina</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={600} className="lg:col-start-2">
              <div className="bg-white p-8 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-xl font-serif font-medium mb-4 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.rosa }}></span>
                  Osteoporose e Saúde Óssea
                </h4>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} /> Avaliação da qualidade óssea</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} /> Tratamento com terapias modernas</li>
                  <li className="flex items-start gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} /> Avaliação do metabolismo de cálcio, fósforo e magnésio</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FORMAS DE ATENDIMENTO */}
      <section id="atendimento" className="py-20 md:py-32" style={{ backgroundColor: colors.branco }}>
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <h3 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: colors.lilas }}>Escolha a forma da sua consulta</h3>
            <p className="text-slate-600">
              Ofereço modalidades flexíveis para que você tenha acesso a um cuidado médico de excelência, independente de onde estiver.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Presencial */}
            <AnimatedSection direction="up" delay={100} className="rounded-3xl p-8 border-2 flex flex-col h-full" style={{ borderColor: `${colors.rosa}60`, backgroundColor: colors.branco }}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${colors.rosa}22`, color: colors.rosa }}>
                <Building2 size={32} />
              </div>
              <h4 className="text-2xl font-serif mb-3" style={{ color: colors.rosa }}>Consulta Presencial</h4>
              <p className="text-slate-600 mb-6 flex-grow">
                Atendimento em consultório no <strong>Rio de Janeiro</strong> (Botafogo ou Barra), com toda a estrutura necessária para uma avaliação clínica completa.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 mb-8 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} style={{ color: colors.rosa }} /> Ambiente acolhedor e acessível</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} style={{ color: colors.rosa }} /> Atendimento personalizado, sem pressa</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} style={{ color: colors.rosa }} /> Avaliação física completa</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} style={{ color: colors.rosa }} /> Bioimpedância</li>
              </ul>
              <a
                href="https://wa.me/5521995202426?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20presencial%20com%20a%20Dra.%20Camila.%20Poderia%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full text-white font-medium transition-transform hover:scale-105 flex items-center justify-center"
                style={{ backgroundColor: colors.rosa }}
              >
                Agendar Presencial
              </a>
            </AnimatedSection>

            {/* Teleconsulta */}
            <AnimatedSection direction="up" delay={200} className="rounded-3xl p-8 flex flex-col h-full relative overflow-hidden" style={{ background: `linear-gradient(135deg, ${colors.lilas}18 0%, ${colors.rosa}28 100%)`, border: `2px solid ${colors.lilas}40` }}>
              <div className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl" style={{ backgroundColor: colors.rosa, opacity: 0.12 }}></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl" style={{ backgroundColor: colors.lilas, opacity: 0.1 }}></div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10" style={{ backgroundColor: `${colors.lilas}22`, color: colors.lilas }}>
                <Video size={32} />
              </div>
              <h4 className="text-2xl font-serif mb-3 relative z-10" style={{ color: colors.lilas }}>Teleconsulta</h4>
              <p className="text-slate-600 mb-6 flex-grow relative z-10">
                Atendimento online para <strong>todo o Brasil</strong> e exterior, com conforto e praticidade da sua casa.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 mb-8 font-medium relative z-10">
                <li className="flex items-center gap-2"><CheckCircle2 size={18} style={{ color: colors.lilas }} /> Disponível de qualquer lugar</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} style={{ color: colors.lilas }} /> Solicitação e envio de exames com orientação detalhada</li>
                <li className="flex items-center gap-2"><CheckCircle2 size={18} style={{ color: colors.lilas }} /> Atendimento personalizado, sem pressa</li>
              </ul>
              <a
                href="https://wa.me/5521995202426?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20teleconsulta%20com%20a%20Dra.%20Camila.%20Poderia%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full text-white font-medium transition-transform hover:scale-105 relative z-10 flex items-center justify-center"
                style={{ backgroundColor: colors.lilas }}
              >
                Agendar Online
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* O QUE ESPERAR */}
      <section className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: colors.creme }}>
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: colors.azul }}>A Consulta</h2>
            <h3 className="text-3xl md:text-5xl font-serif mb-8" style={{ color: colors.lilas }}>
              O que esperar do nosso encontro?
            </h3>

            <div className="space-y-6 text-slate-600">
              <div>
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: colors.lilas }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.azul }}></div>
                  Avaliação global e integrativa
                </h4>
                <p>
                  O foco é a sua saúde como um todo. Vou além dos exames laboratoriais, investigando suas queixas, sono, nível de estresse, rotina alimentar, libido, histórico familiar e aspectos emocionais — com escuta atenta, respeito e acolhimento.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: colors.lilas }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.azul }}></div>
                  Plano personalizado
                </h4>
                <p>
                  Ao final, construímos juntas um plano de ação realista e individualizado. Sem fórmulas prontas, mas com estratégias viáveis que se encaixam na sua rotina e promovem resultados duradouros.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2" style={{ color: colors.lilas }}>
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.azul }}></div>
                  Quando buscar apoio?
                </h4>
                <p>
                  Se você apresenta cansaço, dificuldade para emagrecer, alterações menstruais, queda de libido, fogachos, exames alterados — ou deseja cuidar da sua saúde de forma preventiva e otimizar sua longevidade — este é o momento de ter uma aliada na sua jornada de bem-estar.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200} className="relative">
            <div className="aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
              <img
                src={`${ASSET_BASE}/profile/IMG_2611.jpg.jpg`}
                alt="Médica em consulta"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Elementos Decorativos */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full border-[16px] z-0" style={{ borderColor: colors.azul, opacity: 0.3 }}></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full border-[8px] z-0" style={{ borderColor: colors.rosa, opacity: 0.4 }}></div>
          </AnimatedSection>
        </div>
      </section>

      {/* AVALIAÇÕES DOS PACIENTES */}
      <section id="avaliacoes" className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: colors.branco }}>
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: colors.azul }}>Avaliações</h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: colors.lilas }}>O que dizem minhas pacientes</h3>
            <p className="text-slate-600">
              Cada relato é um presente. Acompanhe algumas das experiências de quem já percorreu esse caminho comigo.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={150}>
            <ReviewsCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 md:py-32" style={{ backgroundColor: 'rgb(252, 245, 234)' }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <AnimatedSection direction="up" className="lg:col-span-4">
              <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: colors.azul }}>Dúvidas Frequentes</h2>
              <h3 className="text-3xl md:text-5xl font-serif mb-6" style={{ color: colors.lilas }}>
                Perguntas que recebo com frequência
              </h3>
              <p className="text-slate-600 mb-8">
                Não encontrou o que procurava? Entre em contato pelo WhatsApp. Terei o maior prazer em conversar e explicar como minha abordagem pode te ajudar.
              </p>
              <button
                onClick={() => scrollToSection('contato')}
                className="flex items-center gap-2 font-medium transition-colors hover:opacity-70"
                style={{ color: colors.azul }}
              >
                Falar com a equipe <ChevronRight size={18} />
              </button>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200} className="lg:col-span-8">
              <div className="space-y-4">
                <FAQItem
                  question="A Dra. atende por plano de saúde/convênio?"
                  answer={<>
                    <p className="mb-3">Meus atendimentos são particulares, pois priorizo consultas mais longas, humanizadas e sem a pressa imposta pelos planos de saúde. Com formação sólida e experiência clínica, estou preparada para cuidar de diversas condições endócrinas, sempre com o objetivo de promover mais saúde e qualidade de vida.</p>
                    <p>Emitimos nota fiscal, possibilitando solicitação de reembolso junto ao convênio ou utilização para declaração no imposto de renda.</p>
                  </>}
                />
                <FAQItem
                  question="Como funciona a teleconsulta?"
                  answer={<>
                    <p className="mb-3">A telemedicina é regulamentada pela Lei nº 14.510/22, que autoriza e disciplina a prática da telessaúde em todo o território nacional.</p>
                    <p className="mb-3">A teleconsulta é realizada por vídeo, em uma plataforma segura e de fácil acesso, sem necessidade de instalar aplicativos. O link é enviado previamente pelo WhatsApp. A consulta mantém a mesma duração, qualidade e cuidado do atendimento presencial.</p>
                    <p className="mb-3">Na endocrinologia, especialmente no acompanhamento do emagrecimento, todo o protocolo pode ser adaptado para o formato online, sem prejuízo na avaliação. Quando necessário, são solicitados exames complementares que permitem uma análise metabólica completa.</p>
                    <p>Receitas, laudos e pedidos de exames são emitidos com certificação digital, com validade em todo o Brasil.</p>
                  </>}
                />
                <FAQItem
                  question="Preciso levar exames prontos na primeira consulta?"
                  answer={<>
                    <p className="mb-3"><strong>É OPCIONAL!</strong> Sempre realizo inicialmente uma avaliação clínica completa e detalhada nas consultas.</p>
                    <p className="mb-3">Se você já tiver exames recentes (últimos 6 meses), é importante trazê-los. Exames mais antigos também ajudam a entender melhor o seu histórico de saúde.</p>
                    <p>Caso não tenha, não se preocupe — após a consulta, solicitarei os exames necessários para o seu caso. A reavaliação é feita em até 45 dias para acompanhamento e definição das próximas condutas.</p>
                  </>}
                />
                <FAQItem
                  question="Como são as consultas de acompanhamento?"
                  answer={<>
                    <p className="mb-3">A frequência das consultas de acompanhamento varia conforme cada caso, considerando queixas clínicas, exames e tratamentos em uso. Os retornos podem ser mensais, trimestrais ou semestrais, sempre ajustados às necessidades de saúde e à realidade do paciente.</p>
                    <p>O suporte médico via WhatsApp permanece disponível, permitindo acompanhamento de resultados e ajustes no plano terapêutico entre as consultas.</p>
                  </>}
                />
                <FAQItem
                  question="A Dra. fornece contato para dúvidas?"
                  answer={<>
                    <p className="mb-3">Sim. O contato direto comigo é disponibilizado desde a primeira consulta para dúvidas e acompanhamento de resultados.</p>
                    <p>No entanto, é importante ressaltar que o WhatsApp não substitui a consulta médica, sendo utilizado com responsabilidade para preservar a segurança das informações e do seu cuidado.</p>
                  </>}
                />
                <FAQItem
                  question="Existe reembolso da consulta?"
                  answer="Será disponibilizada, caso o paciente deseje, nota fiscal da consulta para solicitação de reembolso junto ao plano de saúde ou para declaração no imposto de renda."
                />
                <FAQItem
                  question="Moro em outro estado, como receberei minhas receitas médicas?"
                  answer={<>
                    <p className="mb-3">Fique tranquilo! As receitas médicas têm validade em todo o território nacional. São emitidas com certificação digital e podem ser enviadas por e-mail ou WhatsApp.</p>
                    <p>Você pode apresentá-las normalmente nas farmácias, tanto no formato digital quanto impresso.</p>
                  </>}
                />
                <FAQItem
                  question="Quais as formas de pagamento?"
                  answer={<>
                    <p className="mb-3">Aceitamos pagamento via PIX. Também é possível pagar com cartão de débito ou crédito, com acréscimo de uma pequena taxa da operadora.</p>
                    <p>Para mais detalhes, nossa equipe de agendamento está disponível pelo WhatsApp.</p>
                  </>}
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CONTATO / AGENDAMENTO SECTION */}
      <section id="contato" className="py-20 md:py-24 overflow-hidden" style={{ backgroundColor: colors.lilas }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-16 rounded-3xl overflow-hidden p-8 md:p-12 relative" style={{ backgroundColor: '#ffffff10' }}>

            <div className="absolute top-0 right-0 w-64 h-64 rounded-full mix-blend-overlay filter blur-3xl opacity-50" style={{ backgroundColor: colors.rosa }}></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full mix-blend-overlay filter blur-3xl opacity-30" style={{ backgroundColor: colors.azul }}></div>

            <AnimatedSection direction="left" className="lg:w-1/2 text-white relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                Cuidado e qualidade de vida para quem é importante pra você.
              </h2>
              <p className="text-white/80 mb-10 text-lg">
                Ofereça a si mesma a segurança de um acompanhamento médico que valoriza o bem-estar em cada detalhe.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: colors.branco, color: colors.lilas }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Endereço (Presencial Botafogo)</h5>
                    <p className="text-white/80">R. Visc. de Ouro Preto, 5 - Livance Botafogo<br />Botafogo, Rio de Janeiro - RJ, 22250-180</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: colors.branco, color: colors.lilas }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Endereço (Presencial Barra)</h5>
                    <p className="text-white/80">Av. João Cabral de Mello Neto, 850<br />Torre Norte - 10º andar<br />Barra da Tijuca, Rio de Janeiro - RJ, 22775-057</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: colors.branco, color: colors.lilas }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Horário de Atendimento</h5>
                    <p className="text-white/80">Segunda a Sexta: 09:00 às 20:00<br />Sábado: 09:00 às 13:00</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200} className="lg:w-1/2 w-full relative z-10">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: `${colors.lilas}22`, color: colors.lilas }}>
                    <Calendar size={32} />
                  </div>
                  <h3 className="text-2xl font-serif" style={{ color: colors.lilas }}>Agende seu Horário</h3>
                  <p className="text-sm text-slate-500 mt-2">Nossa equipe responderá rapidamente.</p>
                </div>

                <div className="space-y-4">
                  <a href="https://wa.me/5521995202426?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Camila.%20Poderia%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white font-medium transition-transform hover:scale-[1.02]" style={{ backgroundColor: '#25D366' }}>
                    <MessageCircle size={22} />
                    Agendar via WhatsApp
                  </a>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="pt-16 pb-8" style={{ backgroundColor: colors.branco }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 border-b pb-12" style={{ borderColor: colors.creme }}>

            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-4">
                <LogoMark size={32} iconSize={24} />
                <span className="font-serif font-medium text-xl" style={{ color: colors.lilas }}>Dra. Camila Barcelos</span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs">
                Cuidado integral e humanizado para promover o equilíbrio da sua saúde e metabolismo.
              </p>
            </div>

            <div className="flex gap-16 text-center md:text-left">
              <div>
                <h6 className="font-bold mb-4" style={{ color: colors.azul }}>Navegação</h6>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li><button onClick={() => scrollToSection('home')} className="hover:text-slate-800">Início</button></li>
                  <li><button onClick={() => scrollToSection('sobre')} className="hover:text-slate-800">Sobre Mim</button></li>
                  <li><button onClick={() => scrollToSection('tratamentos')} className="hover:text-slate-800">Especialidades</button></li>
                  <li><button onClick={() => scrollToSection('atendimento')} className="hover:text-slate-800">Atendimento</button></li>
                  <li><button onClick={() => scrollToSection('avaliacoes')} className="hover:text-slate-800">Pacientes</button></li>
                  <li><button onClick={() => scrollToSection('faq')} className="hover:text-slate-800">FAQ</button></li>
                </ul>
              </div>

              <div>
                <h6 className="font-bold mb-4" style={{ color: colors.azul }}>Contato Direto</h6>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li>
                    <a
                      href="https://www.instagram.com/dracamilabarcelos.endocrino/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 justify-center md:justify-start hover:opacity-70 transition-opacity"
                    >
                      <Instagram size={16} style={{ color: colors.lilas }} /> @dracamilabarcelos.endocrino
                    </a>
                  </li>
                  <li className="flex items-center gap-2 justify-center md:justify-start">
                    <MessageCircle size={16} style={{ color: colors.lilas }} /> (21) 99520-2426
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
            <p>&copy; {new Date().getFullYear()} Dra. Camila Barcelos. Todos os direitos reservados.</p>
            <p>CRM-RJ 1207644 | RQE 60297</p>
          </div>

          <div className="mt-4 text-center text-[10px] tracking-wide text-slate-400">
            Website elaborado por{' '}
            <a
              href="https://github.com/julianapereiradev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
              style={{ color: colors.azul }}
            >
              Juliana Pereira
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;