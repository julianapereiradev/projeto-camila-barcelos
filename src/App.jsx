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
const ChevronLeft = Icons.ChevronLeft;
const Stethoscope = Icons.Stethoscope;
const Activity = Icons.Activity;
const Menu = Icons.Menu;
const X = Icons.X;
const Clock = Icons.Clock;
const Video = Icons.Video;
const Building2 = Icons.Building2;
const ChevronDown = Icons.ChevronDown;
const CheckCircle2 = Icons.CheckCircle2;
const Sparkles = Icons.Sparkles;
const ShieldCheck = Icons.ShieldCheck;
const Award = Icons.Award;
const FileText = Icons.FileText;
const Target = Icons.Target;
const HeartHandshake = Icons.HeartHandshake;
const ExternalLink = Icons.ExternalLink;

// Cores da Paleta Oficial (Exatamente os mesmos tons de produção)
const colors = {
  creme: '#FCF5EA',
  rosa: '#E3A8B5',
  lilas: '#B3669E',
  azul: '#758FAF',
  branco: '#FFFFFF',
};

const ASSET_BASE = `${import.meta.env.BASE_URL}assets`;

const WHATSAPP_URL =
  'https://wa.me/5521995202426?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20particular%20com%20a%20Dra.%20Camila.%20Poderia%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F';

const INSTAGRAM_URL = 'https://www.instagram.com/dracamilabarcelos.endocrino/';

// Para incorporar um Reel específico, basta colar a URL do Reel abaixo (ex: 'https://www.instagram.com/reel/CODIGO_DO_REEL/embed')
const INSTAGRAM_EMBED_URL = 'https://www.instagram.com/dracamilabarcelos.endocrino/embed';

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
const AnimatedSection = ({ children, className = '', direction = 'up', delay = 0, style = {} }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  let transformClass = 'translate-y-12';
  if (direction === 'left') transformClass = '-translate-x-12';
  if (direction === 'right') transformClass = 'translate-x-12';

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out ${className} ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${transformClass}`
      }`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </div>
  );
};

// COMPONENTE VISUAL DE FLUXOGRAMA "COMO FUNCIONA" (INTEGRADO DIRETAMENTE NA SEÇÃO, SEM MOLDURA)
const HowItWorksSteps = () => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center relative w-full">
      {/* LINHA 1: ANAMNESE COMPLETA + EXAMES ESPECÍFICOS */}
      <div className="w-full grid grid-cols-11 items-start gap-1.5 sm:gap-6">
        {/* Passo 1: Anamnese Completa */}
        <div className="col-span-5 flex flex-col items-center text-center min-w-0">
          <div className="relative flex items-center justify-center mb-3">
            <div
              className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full blur-xl pointer-events-none"
              style={{ backgroundColor: colors.rosa, opacity: 0.28 }}
            />
            {/* Ilustração SVG: Prontuário + Coração + Lupa */}
            <svg viewBox="0 0 100 100" className="relative z-10 w-20 h-20 sm:w-32 sm:h-32 drop-shadow-sm" fill="none">
              {/* Folha do prontuário */}
              <rect x="18" y="12" width="48" height="66" rx="8" fill={colors.creme} stroke={colors.azul} strokeWidth="2.5" />
              {/* Coração no topo esquerdo */}
              <path
                d="M34 30C31.5 27.5 27.5 27.5 25 30C22.5 32.5 22.5 36.5 25 39L34 48L43 39C45.5 36.5 45.5 32.5 43 30C40.5 27.5 36.5 27.5 34 30Z"
                fill={colors.rosa}
              />
              {/* Linhas de anamnese */}
              <line x1="26" y1="56" x2="56" y2="56" stroke={colors.lilas} strokeWidth="3" strokeLinecap="round" />
              <line x1="26" y1="64" x2="50" y2="64" stroke={colors.azul} strokeWidth="3" strokeLinecap="round" />
              {/* Lupa */}
              <circle cx="62" cy="44" r="16" fill="#FFFFFF" fillOpacity="0.9" stroke={colors.lilas} strokeWidth="4" />
              <line x1="54" y1="41" x2="70" y2="41" stroke={colors.rosa} strokeWidth="3" strokeLinecap="round" />
              <line x1="54" y1="47" x2="66" y2="47" stroke={colors.azul} strokeWidth="3" strokeLinecap="round" />
              <line x1="72" y1="57" x2="81" y2="75" stroke={colors.azul} strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <h4
            className="font-serif font-medium text-lg sm:text-2xl leading-snug mb-1.5"
            style={{ color: colors.lilas }}
          >
            Anamnese Completa
          </h4>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-[230px]">
            Alimentação + Atividade Física
            <br />
            Qualidade do Sono + Emocional
          </p>
        </div>

        {/* Símbolo + central */}
        <div className="col-span-1 flex items-center justify-center pt-8 sm:pt-14">
          <span className="text-2xl sm:text-4xl font-serif font-medium select-none" style={{ color: colors.lilas }}>
            +
          </span>
        </div>

        {/* Passo 2: Exames Específicos */}
        <div className="col-span-5 flex flex-col items-center text-center min-w-0">
          <div className="relative flex items-center justify-center mb-3">
            <div
              className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full blur-xl pointer-events-none"
              style={{ backgroundColor: colors.azul, opacity: 0.22 }}
            />
            {/* Ilustração SVG: Microscópio + Exames + Tubo de Ensaio */}
            <svg viewBox="0 0 100 100" className="relative z-10 w-20 h-20 sm:w-32 sm:h-32 drop-shadow-sm" fill="none">
              {/* Prancheta de exames ao fundo */}
              <rect x="44" y="14" width="40" height="52" rx="6" fill={colors.creme} stroke={colors.lilas} strokeWidth="2.5" />
              <text x="64" y="30" fontSize="10.5" fontWeight="bold" fill={colors.lilas}>A+</text>
              <rect x="50" y="35" width="6" height="6" rx="1.5" fill={colors.lilas} />
              <line x1="60" y1="38" x2="76" y2="38" stroke={colors.azul} strokeWidth="2.5" strokeLinecap="round" />
              <rect x="50" y="45" width="6" height="6" rx="1.5" fill={colors.lilas} />
              <line x1="60" y1="48" x2="76" y2="48" stroke={colors.azul} strokeWidth="2.5" strokeLinecap="round" />
              {/* Microscópio à esquerda */}
              <path d="M20 74H48" stroke={colors.azul} strokeWidth="5" strokeLinecap="round" />
              <path d="M32 74V56C32 46 24 40 28 28" stroke={colors.azul} strokeWidth="4.5" strokeLinecap="round" />
              <rect x="26" y="18" width="9" height="18" rx="3" transform="rotate(20 26 18)" fill={colors.lilas} />
              <line x1="25" y1="52" x2="42" y2="52" stroke={colors.lilas} strokeWidth="3.5" strokeLinecap="round" />
              {/* Tubo de ensaio */}
              <rect x="64" y="48" width="9" height="30" rx="4.5" transform="rotate(-12 64 48)" fill="#FFFFFF" stroke={colors.lilas} strokeWidth="2.5" />
              <rect x="66" y="58" width="6" height="17" rx="3" transform="rotate(-12 66 58)" fill={colors.rosa} />
            </svg>
          </div>
          <h4
            className="font-serif font-medium text-lg sm:text-2xl leading-snug mb-1.5"
            style={{ color: colors.lilas }}
          >
            Exames Específicos
          </h4>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed max-w-[230px]">
            Bioimpedância e exames relacionados ao seu metabolismo
          </p>
        </div>
      </div>

      {/* SETAS CURVAS CONVERGENTES (↘ e ↙) */}
      <div className="w-full max-w-lg my-2 sm:my-3 flex justify-center">
        <svg viewBox="0 0 340 80" className="w-full max-w-[260px] sm:max-w-[380px] h-14 sm:h-20" fill="none">
          {/* Seta esquerda curvando para o centro */}
          <path
            d="M65 6 C 74 36, 98 56, 138 70"
            stroke={colors.lilas}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M123 71 L 140 71 L 131 55"
            stroke={colors.lilas}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Seta direita curvando para o centro */}
          <path
            d="M275 6 C 266 36, 242 56, 202 70"
            stroke={colors.lilas}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M217 71 L 200 71 L 209 55"
            stroke={colors.lilas}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* NÓ CENTRAL 1: ANÁLISE DE COMO SEU METABOLISMO REAGE AOS SEUS HÁBITOS */}
      <div className="flex flex-col items-center text-center max-w-lg mx-auto px-2">
        <div className="relative flex items-center justify-center mb-3">
          <div
            className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-xl pointer-events-none"
            style={{ backgroundColor: colors.lilas, opacity: 0.18 }}
          />
          {/* Ilustração SVG: Gráficos Metabólicos + DNA + Coração */}
          <svg viewBox="0 0 120 100" className="relative z-10 w-24 h-20 sm:w-36 sm:h-28 drop-shadow-sm" fill="none">
            {/* Card de barras */}
            <rect x="16" y="22" width="48" height="46" rx="8" fill={colors.creme} stroke={colors.azul} strokeWidth="2.5" />
            <rect x="25" y="48" width="6" height="13" rx="2" fill={colors.rosa} />
            <rect x="35" y="40" width="6" height="21" rx="2" fill={colors.azul} />
            <rect x="45" y="32" width="6" height="29" rx="2" fill={colors.lilas} />
            {/* Card de gráfico circular */}
            <rect x="56" y="12" width="48" height="44" rx="8" fill="#FFFFFF" stroke={colors.lilas} strokeWidth="2.5" />
            <circle cx="80" cy="34" r="12" stroke={colors.rosa} strokeWidth="5" />
            <path d="M80 22 A 12 12 0 0 1 92 34" stroke={colors.lilas} strokeWidth="5" strokeLinecap="round" />
            {/* Coração com sinal de + */}
            <path
              d="M78 60C74.5 56.5 68.5 56.5 65 60C61.5 63.5 61.5 69.5 65 73L78 86L91 73C94.5 69.5 94.5 63.5 91 60C87.5 56.5 81.5 56.5 78 60Z"
              fill={colors.azul}
            />
            <line x1="78" y1="66" x2="78" y2="76" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
            <line x1="73" y1="71" x2="83" y2="71" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <h4
          className="font-serif font-medium text-xl sm:text-2xl md:text-3xl leading-snug mb-2"
          style={{ color: colors.lilas }}
        >
          Melhor análise do seu metabolismo e hábitos
        </h4>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-md leading-relaxed">
          Investigação aprofundada em consulta com mais de uma hora de duração
        </p>
      </div>

      {/* SETAS DE IDA E VOLTA (↑ ↓) */}
      <div className="my-3 sm:my-4 flex justify-center">
        <svg viewBox="0 0 80 68" className="w-14 h-12 sm:w-20 sm:h-16" fill="none">
          {/* Seta Subindo (Esquerda) */}
          <path d="M28 60 C 27 42, 27 26, 26 10" stroke={colors.lilas} strokeWidth="3" strokeLinecap="round" />
          <path
            d="M17 22 L 26 9 L 36 21"
            stroke={colors.lilas}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Seta Descendo (Direita) */}
          <path d="M52 8 C 53 26, 53 42, 54 58" stroke={colors.lilas} strokeWidth="3" strokeLinecap="round" />
          <path
            d="M44 47 L 54 59 L 63 46"
            stroke={colors.lilas}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* NÓ CENTRAL 2: DEFINIÇÃO DO TRATAMENTO E OBJETIVOS CLAROS */}
      <div className="flex flex-col items-center text-center max-w-lg mx-auto px-2">
        <div className="relative flex items-center justify-center gap-2 sm:gap-5 mb-3">
          <div
            className="absolute w-40 sm:w-48 h-20 sm:h-24 rounded-full blur-xl pointer-events-none"
            style={{ backgroundColor: colors.rosa, opacity: 0.25 }}
          />
          {/* Ilustração Terapia + Hábitos */}
          <svg viewBox="0 0 100 90" className="relative z-10 w-20 h-20 sm:w-28 sm:h-28 drop-shadow-sm" fill="none">
            {/* Frasco / suplemento */}
            <rect x="26" y="28" width="26" height="36" rx="6" fill={colors.creme} stroke={colors.azul} strokeWidth="2.5" />
            <rect x="31" y="20" width="16" height="8" rx="2" fill={colors.lilas} />
            <line x1="39" y1="41" x2="39" y2="51" stroke={colors.rosa} strokeWidth="3" strokeLinecap="round" />
            <line x1="34" y1="46" x2="44" y2="46" stroke={colors.rosa} strokeWidth="3" strokeLinecap="round" />
            {/* Caneta injetável / terapia moderna */}
            <rect x="14" y="18" width="7" height="52" rx="3.5" fill={colors.azul} />
            <rect x="14" y="30" width="7" height="16" fill={colors.creme} />
            {/* Haltere / estilo de vida */}
            <line x1="58" y1="36" x2="78" y2="56" stroke={colors.lilas} strokeWidth="4" strokeLinecap="round" />
            <rect x="53" y="31" width="10" height="6" rx="2" transform="rotate(-45 53 31)" fill={colors.azul} />
            <rect x="73" y="51" width="10" height="6" rx="2" transform="rotate(-45 73 51)" fill={colors.azul} />
            {/* Tigela saudável */}
            <path d="M36 62 H74 C74 74 64 80 55 80 C46 80 36 74 36 62Z" fill={colors.rosa} />
          </svg>

          <span className="relative z-10 text-2xl sm:text-4xl font-serif font-medium select-none" style={{ color: colors.lilas }}>
            +
          </span>

          {/* Ilustração Alvo / Objetivos */}
          <svg viewBox="0 0 100 90" className="relative z-10 w-20 h-20 sm:w-28 sm:h-28 drop-shadow-sm" fill="none">
            <circle cx="48" cy="46" r="28" fill={`${colors.azul}25`} stroke={colors.azul} strokeWidth="3" />
            <circle cx="48" cy="46" r="18" fill={colors.creme} stroke={colors.rosa} strokeWidth="3" />
            <circle cx="48" cy="46" r="8" fill={colors.lilas} />
            {/* Seta no alvo */}
            <line x1="48" y1="46" x2="78" y2="22" stroke={colors.lilas} strokeWidth="3.5" strokeLinecap="round" />
            <polygon points="74,20 84,18 80,27" fill={colors.rosa} />
          </svg>
        </div>

        <h4
          className="font-serif font-medium text-xl sm:text-2xl md:text-3xl leading-snug mb-2"
          style={{ color: colors.lilas }}
        >
          Definição de Tratamento e Objetivos Claros
        </h4>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-md leading-relaxed">
          Plano terapêutico individualizado e metas reais para a sua rotina
        </p>
      </div>

      {/* SETAS DE IDA E VOLTA (↑ ↓) */}
      <div className="my-3 sm:my-4 flex justify-center">
        <svg viewBox="0 0 80 68" className="w-14 h-12 sm:w-20 sm:h-16" fill="none">
          {/* Seta Subindo (Esquerda) */}
          <path d="M28 60 C 27 42, 27 26, 26 10" stroke={colors.lilas} strokeWidth="3" strokeLinecap="round" />
          <path
            d="M17 22 L 26 9 L 36 21"
            stroke={colors.lilas}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Seta Descendo (Direita) */}
          <path d="M52 8 C 53 26, 53 42, 54 58" stroke={colors.lilas} strokeWidth="3" strokeLinecap="round" />
          <path
            d="M44 47 L 54 59 L 63 46"
            stroke={colors.lilas}
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* NÓ FINAL: ACOMPANHAMENTO CONTÍNUO DOS RESULTADOS POR WHATSAPP */}
      <div className="flex flex-col items-center text-center max-w-lg mx-auto px-2">
        <div className="relative flex items-center justify-center mb-3">
          <div
            className="absolute w-28 h-20 sm:w-32 sm:h-24 rounded-full blur-xl pointer-events-none"
            style={{ backgroundColor: colors.azul, opacity: 0.2 }}
          />
          {/* Ilustração SVG: Smartphone + Mensagens + Ícone WhatsApp */}
          <svg viewBox="0 0 130 95" className="relative z-10 w-28 h-20 sm:w-36 sm:h-28 drop-shadow-sm" fill="none">
            {/* Smartphone */}
            <rect x="22" y="12" width="38" height="68" rx="7" fill={colors.creme} stroke={colors.azul} strokeWidth="3" />
            <line x1="36" y1="18" x2="46" y2="18" stroke={colors.azul} strokeWidth="2.5" strokeLinecap="round" />
            <rect x="28" y="26" width="26" height="12" rx="3" fill={colors.rosa} />
            <rect x="28" y="42" width="22" height="10" rx="3" fill={colors.lilas} />
            <rect x="28" y="56" width="26" height="10" rx="3" fill={colors.azul} />
            {/* Balão WhatsApp */}
            <rect x="70" y="24" width="44" height="44" rx="12" fill="#25D366" />
            <path
              d="M92 34C85.4 34 80 39.1 80 45.5C80 48 80.8 50.3 82.2 52.2L80.8 57.2L86 55.8C87.8 56.8 89.8 57.3 92 57.3C98.6 57.3 104 52.2 104 45.8C104 39.4 98.6 34 92 34Z"
              stroke="#FFFFFF"
              strokeWidth="2.8"
              strokeLinejoin="round"
            />
            <path
              d="M88.5 41.5C89.2 43.8 91.2 46.2 94.5 47.8"
              stroke="#FFFFFF"
              strokeWidth="2.8"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <h4
          className="font-serif font-medium text-xl sm:text-2xl md:text-3xl leading-snug mb-2"
          style={{ color: colors.lilas }}
        >
          Acompanhamento Contínuo dos Resultados por WhatsApp
        </h4>
        <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-md leading-relaxed">
          Suporte direto e próximo pelo WhatsApp pessoal da Dra. Camila
        </p>
      </div>
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
        className={`px-6 text-slate-600 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
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
      setCurrent((prev) => (prev + 1) % total);
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

  const getSlides = () => {
    return [-1, 0, 1].map((offset) => (current + offset + total) % total);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex items-center justify-center gap-4 px-4" style={{ height: '440px' }}>
        {getSlides().map((idx, pos) => (
          <div
            key={idx}
            className={`transition-all duration-500 rounded-2xl overflow-hidden shadow-lg shrink-0 ${
              pos === 1 ? 'scale-100 opacity-100 z-10' : 'scale-90 opacity-40 hidden md:block'
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
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'shadow-md' : 'shadow-sm'
        }`}
        style={{ backgroundColor: colors.branco }}
      >
        {/* Top Bar Unificada de Ponta a Ponta */}
        <div
          className="w-full px-4 border-b"
          style={{
            backgroundColor: '#F3E3E9',
            borderColor: `${colors.rosa}90`,
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
        >
          <div
            className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-0.5 sm:gap-3 text-center text-xs sm:text-[13px] font-medium tracking-wide leading-snug"
            style={{ color: colors.lilas, fontWeight: 500 }}
          >
            <span>🩺 Endocrinologia e Metabologia Particular</span>
            <span className="hidden sm:inline opacity-60" style={{ color: colors.lilas }} aria-hidden="true">
              |
            </span>
            <span>📄 Emitimos Nota Fiscal para Reembolso</span>
          </div>
        </div>

        {/* Barra Principal do Header */}
        <div
          className={`container mx-auto px-3 sm:px-6 md:px-12 flex justify-between items-center gap-2 transition-all duration-300 ${
            isScrolled ? 'py-2.5 sm:py-3' : 'py-3 sm:py-4'
          }`}
        >
          {/* Logo e Especialidade */}
          <div
            className="flex items-center gap-2 cursor-pointer min-w-0"
            onClick={() => scrollToSection('home')}
          >
            <LogoMark size={36} iconSize={24} className="sm:w-10 sm:h-10" />
            <div className="flex flex-col min-w-0">
              <span className="font-serif font-medium text-base sm:text-lg leading-tight" style={{ color: colors.lilas }}>
                Dra. Camila Barcelos
              </span>
              <span className="text-[9.5px] sm:text-xs tracking-normal sm:tracking-widest uppercase leading-tight" style={{ color: colors.azul }}>
                Endocrinologista e Metabologia
              </span>
            </div>
          </div>

          {/* Desktop Navigation na Ordem Exata Solicitada */}
          <nav className="hidden xl:flex items-center gap-7 shrink-0">
            <button
              onClick={() => scrollToSection('como-funciona')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: colors.azul }}
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection('tratamentos')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: colors.azul }}
            >
              Tratamentos
            </button>
            <button
              onClick={() => scrollToSection('atendimento')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: colors.azul }}
            >
              Locais de Atendimento
            </button>
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: colors.azul }}
            >
              Sobre Mim
            </button>
            <button
              onClick={() => scrollToSection('avaliacoes')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: colors.azul }}
            >
              Avaliações
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-sm font-medium hover:opacity-70 transition-opacity"
              style={{ color: colors.azul }}
            >
              Dúvidas
            </button>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-white text-sm font-medium transition-transform hover:scale-105 shadow-sm flex items-center gap-2"
              style={{ backgroundColor: colors.lilas }}
            >
              <Calendar size={16} />
              Agendar Consulta Particular
            </a>
          </nav>

          {/* Mobile / Tablet Actions: CTA responsivo + Menu Toggle sem espremer o logo */}
          <div className="flex xl:hidden items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white text-xs font-medium shadow-sm flex items-center gap-1.5 transition-transform active:scale-95 whitespace-nowrap"
              style={{ backgroundColor: colors.lilas }}
            >
              <Calendar size={13} className="shrink-0" />
              <span className="sm:hidden">Agendar</span>
              <span className="hidden sm:inline">Agendar Consulta Particular</span>
            </a>
            <button
              className="p-1.5 sm:p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ color: colors.lilas }}
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div
            className="xl:hidden absolute top-full left-0 w-full shadow-lg border-t"
            style={{ backgroundColor: colors.branco, borderColor: colors.creme }}
          >
            <div className="flex flex-col p-6 gap-4">
              <button
                onClick={() => scrollToSection('como-funciona')}
                className="text-left font-medium p-2"
                style={{ color: colors.azul }}
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection('tratamentos')}
                className="text-left font-medium p-2"
                style={{ color: colors.azul }}
              >
                Tratamentos
              </button>
              <button
                onClick={() => scrollToSection('atendimento')}
                className="text-left font-medium p-2"
                style={{ color: colors.azul }}
              >
                Locais de Atendimento
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="text-left font-medium p-2"
                style={{ color: colors.azul }}
              >
                Sobre Mim
              </button>
              <button
                onClick={() => scrollToSection('avaliacoes')}
                className="text-left font-medium p-2"
                style={{ color: colors.azul }}
              >
                Avaliações
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-left font-medium p-2"
                style={{ color: colors.azul }}
              >
                Dúvidas
              </button>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 py-3 rounded-full text-white text-sm font-medium flex justify-center items-center gap-2"
                style={{ backgroundColor: colors.lilas }}
              >
                <Calendar size={18} />
                Agendar Consulta Particular
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        id="home"
        className="pt-40 sm:pt-36 pb-16 md:pt-44 md:pb-24 overflow-hidden relative"
        style={{ backgroundColor: colors.creme }}
      >
        {/* Imagem decorativa atrás do texto à esquerda */}
        <img
          src={`${ASSET_BASE}/icons/Branco.png`}
          alt=""
          aria-hidden="true"
          className="absolute left-0 top-[55%] -translate-y-1/2 h-auto w-auto object-contain pointer-events-none select-none"
          style={{ opacity: 1.0, maxHeight: '75%', maxWidth: '35%' }}
        />
        <div
          className="absolute top-20 right-0 w-96 h-96 rounded-full filter blur-3xl opacity-25"
          style={{ backgroundColor: colors.rosa }}
        />
        <div
          className="absolute bottom-0 left-10 w-72 h-72 rounded-full filter blur-3xl opacity-15"
          style={{ backgroundColor: colors.creme }}
        />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <AnimatedSection direction="left" className="lg:col-span-7 flex flex-col justify-center lg:pr-6 xl:pr-10">
              {/* Badges de Posicionamento Particular com o estilo original */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <div
                  className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                  style={{
                    backgroundColor: colors.branco,
                    color: colors.azul,
                    border: `1px solid ${colors.rosa}`,
                  }}
                >
                  ENDOCRINOLOGIA & METABOLISMO
                </div>
                <div
                  className="px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase"
                  style={{
                    backgroundColor: colors.lilas,
                    color: colors.branco,
                  }}
                >
                  CONSULTA PARTICULAR
                </div>
              </div>

              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-6 max-w-2xl"
                style={{ color: colors.lilas }}
              >
                Seu metabolismo em equilíbrio, sua saúde em transformação.
              </h1>

              {/* Texto de Apoio focado em Problemas e Objetivos Clínicos */}
              <ul className="space-y-2.5 mb-8 text-base md:text-[17px] leading-relaxed text-slate-600 max-w-lg md:pr-4">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="mt-1 shrink-0" style={{ color: colors.lilas }} />
                  <span>
                    <span className="font-medium text-slate-700">Emagrecimento definitivo e saudável:</span> tratamento da raiz do ganho de peso.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="mt-1 shrink-0" style={{ color: colors.lilas }} />
                  <span>
                    <span className="font-medium text-slate-700">Equilíbrio hormonal e disposição:</span> recupere sua energia e bem-estar.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={18} className="mt-1 shrink-0" style={{ color: colors.lilas }} />
                  <span>
                    <span className="font-medium text-slate-700">Tratamento especializado:</span> foco em obesidade, menopausa e outros distúrbios endocrinológicos.
                  </span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full text-white font-medium transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                  style={{ backgroundColor: colors.lilas }}
                >
                  Agendar Avaliação Particular
                  <ChevronRight size={18} />
                </a>
                <button
                  onClick={() => scrollToSection('como-funciona')}
                  className="px-8 py-3.5 rounded-full font-medium transition-all hover:bg-slate-50 hover:-translate-y-1 flex items-center justify-center"
                  style={{ color: colors.azul, border: `1.5px solid ${colors.azul}` }}
                >
                  Como Funciona
                </button>
              </div>
            </AnimatedSection>

            {/* Hero Image Ampliada (Troca da 1ª foto pela 2ª foto: IMG_2571) */}
            <AnimatedSection
              direction="right"
              delay={200}
              className="lg:col-span-5 relative flex justify-center lg:justify-end mt-8 lg:mt-0"
            >
              <div
                className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"
                style={{ maxWidth: '26rem' }}
              >
                {/* Borda interna sutil e elegante */}
                <div className="absolute inset-0 border-2 border-white/30 rounded-3xl z-20 m-3 pointer-events-none" />
                <img
                  src={`${ASSET_BASE}/profile/IMG_2571.jpg.jpg`}
                  alt="Dra. Camila Barcelos"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* 3 Cards Inferiores Largos e Chamativos com os Pilares do Atendimento */}
          <AnimatedSection direction="up" delay={300} className="grid md:grid-cols-3 gap-6 mt-12 md:mt-16">
            {/* Card 1: Locais */}
            <div
              className="p-6 md:p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              style={{ backgroundColor: colors.branco, borderColor: `${colors.rosa}60` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${colors.lilas}18`, color: colors.lilas }}
              >
                <MapPin size={26} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest block mb-1" style={{ color: colors.azul }}>
                  Locais
                </span>
                <h2 className="text-xl font-serif font-medium leading-snug mb-2" style={{ color: colors.lilas }}>
                  Botafogo, Barra &amp; Online
                </h2>
                <p className="text-[15px] md:text-base text-slate-700 leading-relaxed">
                  Consultórios presenciais no RJ e Telemedicina para todo o Brasil.
                </p>
              </div>
            </div>

            {/* Card 2: Tempo & Exames */}
            <div
              className="p-6 md:p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              style={{ backgroundColor: colors.branco, borderColor: `${colors.rosa}60` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${colors.azul}18`, color: colors.azul }}
              >
                <Clock size={26} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest block mb-1" style={{ color: colors.azul }}>
                  Tempo &amp; Exames
                </span>
                <h2 className="text-xl font-serif font-medium leading-snug mb-2" style={{ color: colors.lilas }}>
                  Consulta com mais de uma hora de duração
                </h2>
                <p className="text-[15px] md:text-base text-slate-700 leading-relaxed">
                  Avaliação sem pressa com bioimpedância inclusa e nota para reembolso.
                </p>
              </div>
            </div>

            {/* Card 3: Suporte */}
            <div
              className="p-6 md:p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all flex items-start gap-4"
              style={{ backgroundColor: colors.branco, borderColor: `${colors.rosa}60` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${colors.rosa}28`, color: colors.lilas }}
              >
                <MessageCircle size={26} />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest block mb-1" style={{ color: colors.azul }}>
                  Suporte
                </span>
                <h2 className="text-xl font-serif font-medium leading-snug mb-2" style={{ color: colors.lilas }}>
                  WhatsApp Direto
                </h2>
                <p className="text-[15px] md:text-base text-slate-700 leading-relaxed">
                  Acompanhamento próximo e contato direto com a médica no pós-consulta.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 1. SEÇÃO COMO FUNCIONA (ANTIGA "A CONSULTA") */}
      <section id="como-funciona" className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: colors.branco }}>
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: colors.azul }}>
              Como Funciona
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: colors.lilas }}>
              O passo a passo do nosso acompanhamento
            </h3>
            <p className="text-slate-600">
              Conheça cada etapa da consulta particular para investigar seu metabolismo com profundidade e construir resultados duradouros.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={150}>
            <HowItWorksSteps />
          </AnimatedSection>
        </div>
      </section>

      {/* 2. SEÇÃO TRATAMENTOS E ESPECIALIDADES ("SAIBA COMO POSSO AJUDAR VOCÊ") */}
      <section
        id="tratamentos"
        className="py-20 md:py-32 relative overflow-hidden"
        style={{ backgroundColor: colors.creme }}
      >
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: colors.azul }}>
              Tratamentos
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: colors.lilas }}>
              Saiba como posso ajudar você
            </h3>
            <p className="text-slate-600">
              No meu acompanhamento, minha missão é trazer a clareza e segurança que você busca através de um cuidado humanizado.
            </p>
          </AnimatedSection>

          {/* Grid com Cards Maiores e Alternância Visual com Imagens */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection direction="up" delay={0}>
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-2xl font-serif font-medium mb-5 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: colors.rosa }} />
                  Emagrecimento e Obesidade
                </h4>
                <ul className="space-y-3.5 text-slate-600 text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} />
                    Emagrecimento saudável e sustentável
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} />
                    Pré e Pós-bariátrica
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} />
                    Tratamento da obesidade com base científica e terapias modernas
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} />
                    Avaliação de obesidade clínica e pré-clínica
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={100}>
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-2xl font-serif font-medium mb-5 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: colors.lilas }} />
                  Menopausa
                </h4>
                <ul className="space-y-3.5 text-slate-600 text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.lilas }} />
                    Avaliação para reposição hormonal
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.lilas }} />
                    Investigação de fogachos, alterações de libido, sono e humor
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Card Visual Intercalado 1 */}
            <AnimatedSection direction="up" delay={150}>
              <div className="rounded-3xl h-full min-h-[300px] overflow-hidden shadow-sm relative group">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80"
                  alt="Avaliação metabólica individualizada"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(179, 102, 158, 0.92) 0%, rgba(179, 102, 158, 0.45) 60%, transparent 100%)',
                  }}
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/90 mb-2">
                    Cuidado Individualizado
                  </span>
                  <p className="font-serif text-xl text-white leading-snug">
                    Cada metabolismo tem uma história. O seu tratamento é desenhado para a sua rotina real.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-2xl font-serif font-medium mb-5 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: colors.azul }} />
                  Pré-diabetes e Diabetes
                </h4>
                <ul className="space-y-3.5 text-slate-600 text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.azul }} />
                    Avaliação de alterações glicêmicas e resistência insulínica
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.azul }} />
                    Acompanhamento personalizado (DM1, DM2 e gestacional)
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.azul }} />
                    Rastreamento de complicações e comorbidades
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-2xl font-serif font-medium mb-5 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: colors.rosa }} />
                  Dislipidemia e Gordura no Fígado
                </h4>
                <ul className="space-y-3.5 text-slate-600 text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} />
                    Avaliação de colesterol e triglicerídeos
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} />
                    Estratificação de risco cardiovascular
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} />
                    Tratamento moderno da esteatose hepática
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-2xl font-serif font-medium mb-5 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: colors.lilas }} />
                  Tireoide
                </h4>
                <ul className="space-y-3.5 text-slate-600 text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.lilas }} />
                    Avaliação hormonal tireoidiana
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.lilas }} />
                    Investigação de nódulos
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.lilas }} />
                    Doenças autoimunes (Hashimoto e Graves)
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            {/* Card Visual Intercalado 2 */}
            <AnimatedSection direction="up" delay={450}>
              <div className="rounded-3xl h-full min-h-[300px] overflow-hidden shadow-sm relative group">
                <img
                  src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=900&q=80"
                  alt="Acompanhamento médico humanizado"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 flex flex-col justify-end p-8"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(117, 143, 175, 0.92) 0%, rgba(117, 143, 175, 0.45) 60%, transparent 100%)',
                  }}
                >
                  <span className="text-xs font-semibold uppercase tracking-widest text-white/90 mb-2">
                    Clareza & Ciência
                  </span>
                  <p className="font-serif text-xl text-white leading-snug">
                    Entenda seus exames de forma descomplicada e tenha segurança em cada etapa do cuidado.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={500}>
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-2xl font-serif font-medium mb-5 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: colors.azul }} />
                  Outras Doenças Hormonais
                </h4>
                <ul className="space-y-3.5 text-slate-600 text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.azul }} />
                    Síndrome dos Ovários Policísticos (SOP)
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.azul }} />
                    Hirsutismo e acne
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.azul }} />
                    Hipogonadismo (libido e função sexual)
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.azul }} />
                    Nódulos de adrenal e hipófise
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.azul }} />
                    Alterações de prolactina
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={600}>
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-3xl h-full shadow-sm hover:shadow-md transition-shadow">
                <h4 className="text-2xl font-serif font-medium mb-5 flex items-center gap-3" style={{ color: colors.lilas }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: colors.rosa }} />
                  Osteoporose e Saúde Óssea
                </h4>
                <ul className="space-y-3.5 text-slate-600 text-base">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} />
                    Avaliação da qualidade óssea
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} />
                    Tratamento com terapias modernas
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: colors.rosa }} />
                    Avaliação do metabolismo de cálcio, fósforo e magnésio
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* INCORPORAÇÃO DE MÍDIA DO INSTAGRAM */}
          <AnimatedSection direction="up" delay={200} className="mt-16">
            <div
              className="rounded-3xl p-5 sm:p-8 md:p-12 shadow-sm border overflow-hidden flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-10 items-center"
              style={{ backgroundColor: colors.branco, borderColor: `${colors.rosa}50` }}
            >
              <div className="w-full lg:col-span-6 space-y-5 min-w-0">
                <div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider"
                  style={{ backgroundColor: colors.creme, color: colors.lilas }}
                >
                  <Instagram size={15} />
                  Conteúdo no Instagram
                </div>
                <h4 className="text-2xl md:text-4xl font-serif leading-tight" style={{ color: colors.lilas }}>
                  Acompanhe conteúdos sobre metabolismo e hormônios
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base break-words">
                  No perfil <strong>@dracamilabarcelos.endocrino</strong>, compartilho vídeos explicativos, orientações baseadas em ciência e respostas para as principais dúvidas sobre emagrecimento, menopausa e saúde metabólica.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-4 sm:px-7 py-3.5 rounded-full text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-105 min-w-0"
                    style={{ backgroundColor: colors.lilas }}
                  >
                    <Instagram size={18} className="shrink-0" />
                    <span className="truncate">Seguir @dracamilabarcelos.endocrino</span>
                    <ExternalLink size={15} className="shrink-0" />
                  </a>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 sm:px-7 py-3.5 rounded-full font-medium text-xs sm:text-sm flex items-center justify-center gap-2 border transition-colors hover:bg-slate-50"
                    style={{ borderColor: colors.azul, color: colors.azul }}
                  >
                    Agendar Consulta Particular
                  </a>
                </div>
              </div>

              <div className="w-full lg:col-span-6 flex justify-center min-w-0">
                <div
                  className="w-full max-w-md rounded-2xl overflow-hidden shadow-sm border"
                  style={{ borderColor: `${colors.rosa}40`, backgroundColor: colors.creme }}
                >
                  <iframe
                    src={INSTAGRAM_EMBED_URL}
                    title="Instagram Dra. Camila Barcelos"
                    className="w-full max-w-full block"
                    style={{ height: '420px', border: 'none' }}
                    loading="lazy"
                    allowTransparency="true"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3. SEÇÃO LOCAIS DE ATENDIMENTO E MÍDIA VISUAL */}
      <section id="atendimento" className="py-20 md:py-32" style={{ backgroundColor: colors.branco }}>
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: colors.azul }}>
              Locais de Atendimento
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: colors.lilas }}>
              Escolha a forma da sua consulta
            </h3>
            <p className="text-slate-600">
              Ofereço modalidades flexíveis para que você tenha acesso a um cuidado médico particular de excelência, independente de onde estiver.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Presencial */}
            <AnimatedSection
              direction="up"
              delay={100}
              className="rounded-3xl p-8 border-2 flex flex-col h-full"
              style={{ borderColor: `${colors.rosa}60`, backgroundColor: colors.branco }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${colors.rosa}22`, color: colors.rosa }}
              >
                <Building2 size={32} />
              </div>
              <h4 className="text-2xl font-serif mb-3" style={{ color: colors.rosa }}>
                Consulta Presencial (Botafogo ou Barra)
              </h4>
              <p className="text-slate-600 mb-6 flex-grow">
                Atendimento em consultório no <strong>Rio de Janeiro</strong> (unidades Livance Botafogo e Livance Barra da Tijuca), com toda a estrutura necessária para uma avaliação clínica completa.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 mb-8 font-medium">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} style={{ color: colors.rosa }} /> Ambiente acolhedor e acessível
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} style={{ color: colors.rosa }} /> Consulta com mais de 1h de duração, sem pressa
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} style={{ color: colors.rosa }} /> Avaliação física completa e Bioimpedância
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} style={{ color: colors.rosa }} /> Suporte direto via WhatsApp pessoal da médica
                </li>
              </ul>
              <a
                href="https://wa.me/5521995202426?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20consulta%20presencial%20com%20a%20Dra.%20Camila.%20Poderia%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full text-white font-medium transition-transform hover:scale-105 flex items-center justify-center"
                style={{ backgroundColor: colors.rosa }}
              >
                Agendar consulta particular
              </a>
            </AnimatedSection>

            {/* Teleconsulta */}
            <AnimatedSection
              direction="up"
              delay={200}
              className="rounded-3xl p-8 flex flex-col h-full relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${colors.lilas}18 0%, ${colors.rosa}28 100%)`,
                border: `2px solid ${colors.lilas}40`,
              }}
            >
              <div
                className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl"
                style={{ backgroundColor: colors.rosa, opacity: 0.12 }}
              />
              <div
                className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl"
                style={{ backgroundColor: colors.lilas, opacity: 0.1 }}
              />
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                style={{ backgroundColor: `${colors.lilas}22`, color: colors.lilas }}
              >
                <Video size={32} />
              </div>
              <h4 className="text-2xl font-serif mb-3 relative z-10" style={{ color: colors.lilas }}>
                Teleconsulta
              </h4>
              <p className="text-slate-600 mb-6 flex-grow relative z-10">
                Atendimento online para <strong>todo o Brasil</strong> e exterior, com conforto e praticidade da sua casa.
              </p>
              <ul className="space-y-3 text-sm text-slate-700 mb-8 font-medium relative z-10">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} style={{ color: colors.lilas }} /> Disponível de qualquer lugar
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} style={{ color: colors.lilas }} /> Solicitação e envio de exames com orientação detalhada
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} style={{ color: colors.lilas }} /> Consulta com mais de 1h de duração, sem pressa
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={18} style={{ color: colors.lilas }} /> Suporte direto via WhatsApp pessoal da médica
                </li>
              </ul>
              <a
                href="https://wa.me/5521995202426?text=Ol%C3%A1%21%20Gostaria%20de%20agendar%20uma%20teleconsulta%20com%20a%20Dra.%20Camila.%20Poderia%20me%20informar%20os%20hor%C3%A1rios%20dispon%C3%ADveis%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-full text-white font-medium transition-transform hover:scale-105 relative z-10 flex items-center justify-center"
                style={{ backgroundColor: colors.lilas }}
              >
                Agendar consulta particular
              </a>
            </AnimatedSection>
          </div>

          {/* Galeria Visual dos Espaços de Atendimento (Livance Botafogo & Barra) */}
          <AnimatedSection direction="up" delay={250} className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h4 className="text-xl md:text-2xl font-serif" style={{ color: colors.lilas }}>
                Nossos espaços de atendimento presencial
              </h4>
              <p className="text-sm text-slate-500 mt-1">
                Ambientes modernos e acolhedores nas unidades Livance em Botafogo e na Barra da Tijuca.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl overflow-hidden shadow-sm border group" style={{ borderColor: `${colors.rosa}40` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.prismic.io/livance-domus/ZyP6F68jQArT0GY0_sala_multi_bar.png?auto=format,compress"
                    alt="Consultório moderno padrão Livance"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: colors.lilas }}>
                    Consultório Médico
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    Estrutura equipada com bioimpedância e ambiente acolhedor.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm border group" style={{ borderColor: `${colors.rosa}40` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.prismic.io/livance-domus/ZyP8t68jQArT0GZt_recepcao_bot.png?auto=format,compress"
                    alt="Recepção acolhedora Livance Botafogo"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: colors.lilas }}>
                    Unidade Botafogo • Livance
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    R. Visc. de Ouro Preto, 5 — Botafogo, Rio de Janeiro.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-sm border group" style={{ borderColor: `${colors.rosa}40` }}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSURG2HuqZ_mFLp8jR4Rhw8UMz0foXqF6GGKcX9SF-7ODJIsXWtLe11TG-C&s=10"
                    alt="Espaço Livance Barra da Tijuca CEO"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4 bg-white">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: colors.lilas }}>
                    Unidade Barra da Tijuca • Livance
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    Av. João Cabral de Mello Neto, 850 — Torre Norte, 10º andar.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 4. SOBRE MIM SECTION (COM RQE VISÍVEL E FOTO TROCADA) */}
      <section id="sobre" className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: colors.creme }}>
        <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left" className="order-2 md:order-1 relative">
            <div
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl"
              style={{ backgroundColor: colors.rosa, opacity: 0.3 }}
            />
            <img
              src={`${ASSET_BASE}/profile/IMG_2557.jpg.jpg`}
              alt="Dra. Camila Barcelos"
              className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] object-cover rounded-3xl shadow-lg"
            />
            <svg
              className="absolute -top-10 -left-10 w-24 h-24 opacity-50 z-0"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 90 Q 50 10 90 90" stroke={colors.azul} strokeWidth="2" fill="none" />
              <path d="M30 90 Q 50 30 70 90" stroke={colors.rosa} strokeWidth="2" fill="none" />
            </svg>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={200} className="order-1 md:order-2">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: colors.azul }}>
              Sobre a Dra. Camila Barcelos
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: colors.lilas }}>
              Uma trajetória dedicada a cuidar da sua saúde integral.
            </h3>

            {/* Registro RQE Visível na Seção Sobre Mim */}
            <div
              className="inline-flex flex-wrap items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-2xl sm:rounded-full text-[11px] sm:text-xs font-semibold tracking-wide sm:tracking-wider mb-6 max-w-full"
              style={{
                backgroundColor: colors.branco,
                color: colors.azul,
                border: `1px solid ${colors.rosa}`,
              }}
            >
              <Award size={15} className="shrink-0" style={{ color: colors.lilas }} />
              <span>CRM-RJ 1207644 • RQE 60297 (ENDOCRINOLOGIA E METABOLOGIA)</span>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed mb-8">
              <p>
                Olá! Sou a <strong>Dra. Camila Barcelos</strong>, médica endocrinologista e metabologista (CRM-RJ 1207644 | RQE 60297). Acredito que a medicina vai além de exames e prescrições — envolve escuta ativa e compreensão do seu momento de vida.
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
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: colors.creme, color: colors.azul }}
                >
                  <Activity size={20} />
                </div>
                <h4 className="font-serif font-medium text-slate-800">Residência Médica</h4>
                <p className="text-sm text-slate-500">Endocrinologia e Metabologia — UERJ (RQE 60297)</p>
              </div>
              <div className="p-4 rounded-2xl border" style={{ borderColor: colors.creme, backgroundColor: '#ffffff' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: colors.creme, color: colors.rosa }}
                >
                  <Activity size={20} />
                </div>
                <h4 className="font-serif font-medium text-slate-800">Residência Médica</h4>
                <p className="text-sm text-slate-500">Clínica Médica — Hospital Central da Aeronáutica</p>
              </div>
              <div className="p-4 rounded-2xl border" style={{ borderColor: colors.creme, backgroundColor: '#ffffff' }}>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: colors.creme, color: colors.lilas }}
                >
                  <Stethoscope size={20} />
                </div>
                <h4 className="font-serif font-medium text-slate-800">Graduação em Medicina</h4>
                <p className="text-sm text-slate-500">Universidade Federal Fluminense</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 5. AVALIAÇÕES DOS PACIENTES */}
      <section id="avaliacoes" className="py-20 md:py-32 overflow-hidden" style={{ backgroundColor: colors.branco }}>
        <div className="container mx-auto px-6 md:px-12">
          <AnimatedSection direction="up" className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: colors.azul }}>
              Avaliações
            </h2>
            <h3 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: colors.lilas }}>
              O que dizem minhas pacientes
            </h3>
            <p className="text-slate-600">
              Cada relato é um presente. Acompanhe algumas das experiências de quem já percorreu esse caminho comigo.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={150}>
            <ReviewsCarousel />
          </AnimatedSection>
        </div>
      </section>

      {/* 6. FAQ SECTION */}
      <section id="faq" className="py-20 md:py-32" style={{ backgroundColor: colors.creme }}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            <AnimatedSection direction="up" className="lg:col-span-4">
              <h2 className="text-sm font-bold tracking-widest uppercase mb-2" style={{ color: colors.azul }}>
                Dúvidas Frequentes
              </h2>
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
                  answer={
                    <>
                      <p className="mb-3">
                        Meus atendimentos são particulares, pois priorizo consultas mais longas, humanizadas e sem a pressa imposta pelos planos de saúde. Com formação sólida e experiência clínica, estou preparada para cuidar de diversas condições endócrinas, sempre com o objetivo de promover mais saúde e qualidade de vida.
                      </p>
                      <p>
                        Emitimos nota fiscal, possibilitando solicitação de reembolso junto ao convênio ou utilização para declaração no imposto de renda.
                      </p>
                    </>
                  }
                />
                <FAQItem
                  question="Como funciona a teleconsulta?"
                  answer={
                    <>
                      <p className="mb-3">
                        A telemedicina é regulamentada pela Lei nº 14.510/22, que autoriza e disciplina a prática da telessaúde em todo o território nacional.
                      </p>
                      <p className="mb-3">
                        A teleconsulta é realizada por vídeo, em uma plataforma segura e de fácil acesso, sem necessidade de instalar aplicativos. O link é enviado previamente pelo WhatsApp. A consulta mantém a mesma duração, qualidade e cuidado do atendimento presencial.
                      </p>
                      <p className="mb-3">
                        Na endocrinologia, especialmente no acompanhamento do emagrecimento, todo o protocolo pode ser adaptado para o formato online, sem prejuízo na avaliação. Quando necessário, são solicitados exames complementares que permitem uma análise metabólica completa.
                      </p>
                      <p>
                        Receitas, laudos e pedidos de exames são emitidos com certificação digital, com validade em todo o Brasil.
                      </p>
                    </>
                  }
                />
                <FAQItem
                  question="Preciso levar exames prontos na primeira consulta?"
                  answer={
                    <>
                      <p className="mb-3">
                        <strong>É OPCIONAL!</strong> Sempre realizo inicialmente uma avaliação clínica completa e detalhada nas consultas.
                      </p>
                      <p className="mb-3">
                        Se você já tiver exames recentes (últimos 6 meses), é importante trazê-los. Exames mais antigos também ajudam a entender melhor o seu histórico de saúde.
                      </p>
                      <p>
                        Caso não tenha, não se preocupe — após a consulta, solicitarei os exames necessários para o seu caso. A reavaliação é feita em até 45 dias para acompanhamento e definição das próximas condutas.
                      </p>
                    </>
                  }
                />
                <FAQItem
                  question="Como são as consultas de acompanhamento?"
                  answer={
                    <>
                      <p className="mb-3">
                        A frequência das consultas de acompanhamento varia conforme cada caso, considerando queixas clínicas, exames e tratamentos em uso. Os retornos podem ser mensais, trimestrais ou semestrais, sempre ajustados às necessidades de saúde e à realidade do paciente.
                      </p>
                      <p>
                        O suporte médico via WhatsApp permanece disponível, permitindo acompanhamento de resultados e ajustes no plano terapêutico entre as consultas.
                      </p>
                    </>
                  }
                />
                <FAQItem
                  question="A Dra. fornece contato para dúvidas?"
                  answer={
                    <>
                      <p className="mb-3">
                        Sim. O contato direto comigo é disponibilizado desde a primeira consulta para dúvidas e acompanhamento de resultados.
                      </p>
                      <p>
                        No entanto, é importante ressaltar que o WhatsApp não substitui a consulta médica, sendo utilizado com responsabilidade para preservar a segurança das informações e do seu cuidado.
                      </p>
                    </>
                  }
                />
                <FAQItem
                  question="Existe reembolso da consulta?"
                  answer="Será disponibilizada, caso o paciente deseje, nota fiscal da consulta para solicitação de reembolso junto ao plano de saúde ou para declaração no imposto de renda."
                />
                <FAQItem
                  question="Moro em outro estado, como receberei minhas receitas médicas?"
                  answer={
                    <>
                      <p className="mb-3">
                        Fique tranquilo! As receitas médicas têm validade em todo o território nacional. São emitidas com certificação digital e podem ser enviadas por e-mail ou WhatsApp.
                      </p>
                      <p>Você pode apresentá-las normalmente nas farmácias, tanto no formato digital quanto impresso.</p>
                    </>
                  }
                />
                <FAQItem
                  question="Quais as formas de pagamento?"
                  answer={
                    <>
                      <p className="mb-3">
                        Aceitamos pagamento via PIX. Também é possível pagar com cartão de débito ou crédito, com acréscimo de uma pequena taxa da operadora.
                      </p>
                      <p>Para mais detalhes, nossa equipe de agendamento está disponível pelo WhatsApp.</p>
                    </>
                  }
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CONTATO / AGENDAMENTO SECTION */}
      <section id="contato" className="py-20 md:py-24 overflow-hidden" style={{ backgroundColor: colors.lilas }}>
        <div className="container mx-auto px-6 md:px-12">
          <div
            className="flex flex-col lg:flex-row items-center gap-16 rounded-3xl overflow-hidden p-8 md:p-12 relative"
            style={{ backgroundColor: '#ffffff10' }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 rounded-full mix-blend-overlay filter blur-3xl opacity-50"
              style={{ backgroundColor: colors.rosa }}
            />
            <div
              className="absolute bottom-0 left-0 w-72 h-72 rounded-full mix-blend-overlay filter blur-3xl opacity-30"
              style={{ backgroundColor: colors.azul }}
            />

            <AnimatedSection direction="left" className="lg:w-1/2 text-white relative z-10">
              <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
                Cuidado e qualidade de vida para quem é importante pra você.
              </h2>
              <p className="text-white/80 mb-10 text-lg">
                Ofereça a si mesma a segurança de um acompanhamento médico que valoriza o bem-estar em cada detalhe.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: colors.branco, color: colors.lilas }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Endereço (Presencial Botafogo)</h5>
                    <p className="text-white/80">
                      R. Visc. de Ouro Preto, 5 - Livance Botafogo
                      <br />
                      Botafogo, Rio de Janeiro - RJ, 22250-180
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: colors.branco, color: colors.lilas }}
                  >
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Endereço (Presencial Barra)</h5>
                    <p className="text-white/80">
                      Av. João Cabral de Mello Neto, 850
                      <br />
                      Torre Norte - 10º andar
                      <br />
                      Barra da Tijuca, Rio de Janeiro - RJ, 22775-057
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: colors.branco, color: colors.lilas }}
                  >
                    <Clock size={20} />
                  </div>
                  <div>
                    <h5 className="font-semibold text-lg">Horário de Atendimento</h5>
                    <p className="text-white/80">
                      Segunda a Sexta: 09:00 às 20:00
                      <br />
                      Sábado: 09:00 às 13:00
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200} className="lg:w-1/2 w-full relative z-10">
              <div className="bg-white rounded-3xl p-8 shadow-2xl">
                <div className="text-center mb-8">
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    style={{ backgroundColor: `${colors.lilas}22`, color: colors.lilas }}
                  >
                    <Calendar size={32} />
                  </div>
                  <h3 className="text-2xl font-serif" style={{ color: colors.lilas }}>
                    Agende seu Horário
                  </h3>
                  <p className="text-sm text-slate-500 mt-2">Nossa equipe responderá rapidamente.</p>
                </div>

                <div className="space-y-4">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-3 py-4 rounded-xl text-white font-medium transition-transform hover:scale-[1.02]"
                    style={{ backgroundColor: '#25D366' }}
                  >
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
      <footer className="pt-16 pb-20 md:pb-8" style={{ backgroundColor: colors.branco }}>
        <div className="container mx-auto px-6 md:px-12">
          <div
            className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 border-b pb-12"
            style={{ borderColor: colors.creme }}
          >
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 mb-4">
                <LogoMark size={32} iconSize={24} />
                <span className="font-serif font-medium text-xl" style={{ color: colors.lilas }}>
                  Dra. Camila Barcelos
                </span>
              </div>
              <p className="text-slate-500 text-sm max-w-xs">
                Cuidado integral e humanizado para promover o equilíbrio da sua saúde e metabolismo.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 md:gap-16 text-center md:text-left justify-center md:justify-start">
              <div>
                <h6 className="font-bold mb-4" style={{ color: colors.azul }}>
                  Navegação
                </h6>
                <ul className="space-y-2 text-sm text-slate-500">
                  <li>
                    <button onClick={() => scrollToSection('home')} className="hover:text-slate-800">
                      Início
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('como-funciona')} className="hover:text-slate-800">
                      Como Funciona
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('tratamentos')} className="hover:text-slate-800">
                      Tratamentos
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('atendimento')} className="hover:text-slate-800">
                      Locais de Atendimento
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('sobre')} className="hover:text-slate-800">
                      Sobre Mim
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('avaliacoes')} className="hover:text-slate-800">
                      Avaliações
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('faq')} className="hover:text-slate-800">
                      Dúvidas
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h6 className="font-bold mb-4" style={{ color: colors.azul }}>
                  Contato Direto
                </h6>
                <ul className="space-y-3 text-sm text-slate-500">
                  <li>
                    <a
                      href={INSTAGRAM_URL}
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

      {/* ELEMENTOS FLUTUANTES FIXOS (WHATSAPP + ATALHO INSTAGRAM DURANTE TODA A ROLAGEM) */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        {/* Atalho Flutuante para o Instagram */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram da Dra. Camila Barcelos"
          title="Instagram @dracamilabarcelos.endocrino"
          className="w-12 h-12 rounded-full text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          style={{ backgroundColor: colors.lilas }}
        >
          <Instagram size={22} />
        </a>

        {/* Botão Flutuante do WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Agendar consulta via WhatsApp"
          title="Agendar Consulta Particular via WhatsApp"
          className="w-14 h-14 rounded-full text-white shadow-xl flex items-center justify-center transition-transform hover:scale-110"
          style={{ backgroundColor: '#25D366' }}
        >
          <MessageCircle size={26} />
        </a>
      </div>
    </div>
  );
};

export default App;
