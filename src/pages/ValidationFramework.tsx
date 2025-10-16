import React, { useState } from 'react';
import { Users, TrendingUp, Zap, DollarSign, Target, CheckCircle, Calendar, BarChart3, AlertTriangle, CheckCircle2, XCircle, Clock, ChevronRight, ArrowLeft, ClipboardList, Search, FileText, Mail, MessageSquare, Activity } from 'lucide-react';

const hypotheses = [
  {
    id: 'H1',
    title: 'TARGET MARKET',
    color: 'blue',
    icon: Users,
    hypothesis: 'Empresas con BPO tradicional comprarán más rápido que in-house teams',
    confidence: 60,
    critical: 'Si falso, toda la estrategia de go-to-market cambia. Define tu ICP primario y messaging',
    decisionWeek: 3,
    experiments: [
      { 
        name: 'AI-Powered Market Segmentation & Engagement Analysis',
        budget: 500,
        weeks: '1-3',
        success: 'BPO segment muestra 30%+ mejor engagement (clicks, profile views, content interaction) que in-house',
        description: 'Usar herramientas de AI para segmentar automáticamente el mercado y analizar señales de engagement sin necesidad de entrevistas',
        steps: [
          'Setup Clay.com o Apollo.io: conectar LinkedIn Sales Navigator para enriquecimiento automático de datos de 200 empresas (100 BPO, 100 in-house)',
          'Configurar filtros automáticos: BPO = empresas con keywords "outsourcing", "BPO partner", "contact center partner" en LinkedIn company page; In-house = keywords "internal CX team", "customer service team"',
          'Usar ChatGPT/Claude API integrado en Clay para generar mensajes personalizados automáticamente para cada segmento basado en su profile data',
          'Lanzar automated outreach sequence (3 touchpoints) via LinkedIn automation tool (Phantombuster o Waalaxy - €200/mes)',
          'Trackear engagement signals automáticamente: profile views, message opens, link clicks, content downloads, reply sentiment (usar Gong.io o similar para sentiment analysis si responden)',
          'Usar herramientas de buyer intent data (Clearbit Reveal gratis trial o 6sense) para detectar qué segmento muestra más señales de compra activa',
          'Dashboard en Google Sheets/Airtable con AI-generated insights: engagement score por segmento, time-to-response, quality signals',
          'Análisis final con Claude/ChatGPT: subir toda la data y pedir análisis estadístico de qué segmento es más receptivo'
        ],
        tools: ['Clay.com o Apollo.io (€200)', 'LinkedIn Sales Navigator (€100)', 'Phantombuster o Waalaxy (€200)', 'ChatGPT API o Claude API', 'Clearbit/6sense (trial gratuito)', 'Google Sheets + Zapier para automatización'],
        deliverable: 'Dashboard automatizado con engagement scores por segmento + AI-generated report comparativo + recomendación clara de target primario con 80%+ confianza estadística'
      }
    ]
  },
  {
    id: 'H2',
    title: 'GTM MOTION',
    color: 'green',
    icon: TrendingUp,
    hypothesis: 'ABM quirúrgico en 30 cuentas target + content validation generará 3X más pipeline cualificado que outbound masivo en 8 semanas',
    confidence: 75,
    critical: 'Define si inviertes en escala masiva o en targeting ultra-preciso. Para Enterprise B2B, la calidad >>> cantidad. Esta hipótesis valida tu canal de adquisición primario',
    decisionWeek: 8,
    experiments: [
      { 
        name: 'ABM Quirúrgico + Intent Signals',
        budget: 1800,
        weeks: '1-8',
        success: '10+ SQLs de las 30 cuentas (33% engagement rate), pipeline >€400K, identificar 3+ hot triggers que aceleran conversión',
        description: 'Account-Based Marketing ultra-personalizado combinado con monitoreo de intent signals para alcanzar prospects en el momento perfecto',
        steps: [
          'Identificar 30 cuentas ideales usando Clay.com + 6sense (trial): filtros= sector prioritario según H6, tamaño (200-500 emp), tech stack (usa Zendesk/Salesforce), señales de crecimiento',
          'Research profundo automatizado por cuenta: usar ChatGPT/Claude para analizar earnings calls, press releases, LinkedIn posts de executives → identificar triggers (expansión, new CX leader, funding)',
          'Multi-threading inteligente: identificar 3-5 stakeholders por cuenta (CX VP, COO, CTO) usando Apollo.io enrichment automático',
          'Crear "account dossier" personalizado con IA: pain points específicos, competitors que usan, métricas que les importan, triggers activos',
          'Setup intent monitoring integrado: Clearbit Reveal (website visits), LinkedIn Sales Navigator alerts (job changes), Google Alerts (company news), Zapier para alertas automáticas',
          'Secuencia ABM de 6 touchpoints en 4 semanas SOLO cuando hay trigger/intent signal: (1) LinkedIn personalized video (Loom), (2) Email con case study sector-específico, (3) Direct mail con ROI calculator, (4) Engage con su content, (5) Warm intro via mutual connection, (6) Executive email desde founder',
          'Usar Mutiny.io trial (€500) para personalizar website cuando visitan: headline con company name, case study de su industria',
          'Weekly review: engagement por cuenta, triggers detectados, ajustar messaging, acelerar hot accounts con <24h response time'
        ],
        tools: ['Clay.com + 6sense trial (€500)', 'Apollo.io (€200)', 'ChatGPT/Claude API (€300)', 'Loom Pro (€100)', 'Mutiny.io trial (€500)', 'Clearbit Reveal (€100)', 'Zapier Pro (€100)'],
        deliverable: '30 account dossiers + engagement dashboard por cuenta + 10+ SQLs generados + trigger playbook (qué eventos aceleran compra) + proof que ABM+intent > cold outbound'
      },
      { 
        name: 'Content Validation Lean',
        budget: 150,
        weeks: '1-6',
        success: '20+ engaged prospects orgánicamente (comentan, comparten, profile visits) + identificar 2-3 temas de contenido con >5% engagement rate',
        description: 'Validar qué messaging resuena publicando contenido estratégico en LinkedIn - método lean para identificar hot accounts SIN quemar tu network con cold outreach',
        steps: [
          'Crear 12 piezas de thought leadership con IA (ChatGPT/Claude): posts sobre pain points CX (200-300 palabras) - temas: "BPO tradicional está roto", "Pure AI no funciona", "Hybrid es el futuro", "ROI del BPO 2.0"',
          'Publicar 3X/semana en LinkedIn (founder + equipo): alternar entre educativos, provocativos, y data-driven. Usar Taplio free trial para optimizar timing',
          'Engagement activo calculado: comentar thoughtfully en posts de CX leaders de tus 30 target accounts ABM (15 min/día)',
          'Monitorear "silent buyers": LinkedIn Sales Navigator alerts + Phantombuster (€150) para trackear quién visita profile después de ver content',
          'Crear "engagement scoring": comentarios (5 pts), shares (10 pts), DMs (15 pts), profile visits (3 pts) - objetivo: identificar 20+ hot accounts orgánicamente',
          'NO hacer outbound directo aún - solo responder si te contactan. El objetivo: VALIDAR si messaging atrae antes de cold outreach',
          'Análisis semana 6: qué temas generan más engagement, quiénes engage consistentemente, correlation entre content topics y ABM conversion'
        ],
        tools: ['Taplio free trial o Shield', 'Phantombuster (€150)', 'ChatGPT/Claude API', 'LinkedIn Sales Navigator', 'Engagement tracking spreadsheet'],
        deliverable: 'Content performance report (qué temas resuenan con >5% engagement), lista de 20+ engaged prospects orgánicos + proof que content-led identifica compradores tempranos sin quemar network'
      }
    ]
  },
  {
    id: 'H3',
    title: 'PRICING & PACKAGING',
    color: 'purple',
    icon: DollarSign,
    hypothesis: 'Modelo "Hybrid AI+Human" con pricing €3-5K/mes (base + variable) es óptimo vs alternativas "AI-first" o "flat fee"',
    confidence: 55,
    critical: 'Define unit economics, positioning y estructura comercial. Un error aquí impacta directamente cash flow, conversión y percepción de valor',
    decisionWeek: 5,
    experiments: [
      { 
        name: 'Integrated Pricing & Packaging Validation',
        budget: 150,
        weeks: '2-5',
        success: 'Validar optimal price point (€X-Y) + estructura preferida (flat/variable/hybrid) + feature set ganador con 12+ data points',
        description: 'Experimento integrado que combina Van Westendorp pricing methodology con A/B testing de 3 value propositions y estructuras de servicio en las MISMAS conversaciones de discovery - máxima eficiencia',
        steps: [
          'Preparar 3 "packages" visuales en Canva Pro (€150): (A) "AI-First" €2K/mes - 80% automation, supervisión humana mínima; (B) "Hybrid Excellence" €4K base + €50/ticket extra - 50/50 AI/human, lo mejor de ambos; (C) "Human-First Premium" €6K/mes - humanos con AI tools, máxima personalización',
          'Dividir tus primeras 15 discovery calls en 3 grupos aleatorios de 5 - presentar un package diferente a cada grupo para medir reacción inicial y preferencias',
          'En CADA call, ejecutar secuencia completa: (1) Pitch del valor → (2) Mostrar el package → (3) Van Westendorp (4 preguntas de precio: demasiado barato/excelente/caro/imposible) → (4) "De estos 3 packages, ¿cuál preferirías y por qué?" → (5) "¿Qué te preocupa del modelo híbrido?"',
          'Documentar religiosamente: package mostrado, 4 precios Van Westendorp, estructura preferida final (de los 3), objeciones específicas, willingness to buy signals (1-10), sector y company size',
          'Semana 3: análisis intermedio con 8+ calls - plotear curvas Van Westendorp en Excel, identificar si hay patrón por sector/size, ajustar packages si <30% eligen hybrid',
          'Crear "price sensitivity matrix": correlacionar company size con precio aceptable, sector con estructura preferida, decision maker role con package choice',
          'Semana 5: decisión final con 12-15 data points - optimal price range €X-Y, winning structure, feature priorities, early adopter discount strategy (si necesario)',
          'Bonus: si 2+ prospects dicen "me interesa a ese precio", tienes validation real de payment intent'
        ],
        tools: ['Canva Pro para diseño packages (€150)', 'Van Westendorp spreadsheet template (free)', 'Call recording para análisis (Zoom/Meet free)', 'Google Sheets para data tracking'],
        deliverable: 'Van Westendorp price curve con optimal range €X-Y + 3 professional package one-pagers + winning value prop (AI-first/Hybrid/Human-first) + pricing structure recommendation (flat/variable/hybrid) + price sensitivity by segment + verbatim objections documented'
      }
    ]
  },
  {
    id: 'H4',
    title: 'SALES CYCLE',
    color: 'red',
    icon: Target,
    hypothesis: 'Ciclo será 2-4 meses para empresas con BPO existente, 3-6 meses para in-house teams',
    confidence: 55,
    critical: 'Impacta directamente cash flow planning, resource allocation y forecasting. Necesario para determinar runway y cuándo necesitas levantar capital',
    decisionWeek: 8,
    experiments: [
      { 
        name: 'Pipeline Velocity Tracking + Stakeholder Mapping Integrado',
        budget: 0,
        weeks: '1-8',
        success: 'Data clara de días promedio por stage + identificar si BPO es 30%+ más rápido',
        description: 'Trackear religiosamente TODOS los deals desde día 1 - velocidad por stage + stakeholder complexity en UN solo sistema',
        steps: [
          'Setup CRM simple (HubSpot free o Notion): 5 stages → Lead, MQL, Discovery, Demo, Negotiation, Close',
          'Para CADA deal que entre: timestamp fecha entrada a stage, automático o manual',
          'Crear "deal card" que incluye: (1) Velocidad data (días en cada stage), (2) Stakeholder map (nombres, roles, champion/blocker), (3) Company type (BPO/In-house)',
          'Weekly ritual (30 min cada viernes): actualizar todos los deals, calcular días promedio por stage',
          'Identificar bottlenecks: ¿dónde se atascan los deals? ¿cuántos stakeholders causa delays?',
          'Comparar BPO vs In-house: velocity, # stakeholders, complejidad decisión',
          'Si un deal se estanca >2 semanas en un stage: documentar POR QUÉ (objeción, stakeholder nuevo, budget freeze, etc)',
          'Al final semana 8: proyección realista de sales cycle promedio para planning'
        ],
        tools: ['HubSpot Free CRM o Notion (gratis)', 'Google Sheets para análisis', 'Simple stakeholder map template'],
        deliverable: 'Pipeline velocity dashboard + sales cycle projection (X meses promedio) + stakeholder complexity by segment + bottleneck analysis'
      }
    ]
  },
  {
    id: 'H5',
    title: 'PROOF REQUIREMENTS',
    color: 'teal',
    icon: CheckCircle,
    hypothesis: 'Clientes enterprise necesitan pilot 30 días + case study antes de commitment anual',
    confidence: 55,
    critical: 'Define sales cycle length, costo de adquisición, y qué assets/procesos preparar. Si 80%+ pide pilot, necesitas operación lista desde día 1',
    decisionWeek: 6,
    experiments: [
      { 
        name: 'Proof Threshold Discovery + Pilot Preference',
        budget: 500,
        weeks: '2-6',
        success: '60%+ necesita pilot, identificar duración/precio óptimo del pilot + validation que case studies aceleran cierre',
        description: 'En conversaciones existentes, descubrir qué proof necesitan Y qué tipo de pilot aceptarían - crear case study falso para testear impacto',
        steps: [
          'En cada discovery call, hacer 3 preguntas de proof: (1) "¿Qué necesitarías ver para firmar?" (2) "¿Han comprado CX tech antes, cómo validaron?" (3) "¿Demo suficiente, o necesitan pilot?"',
          'Si mencionan pilot: mostrar 3 opciones en one-pager: Express (2 sem, €500), Standard (30 días, €1.5K), Plus (60 días, €3K) - "¿Cuál considerarías?"',
          'Crear 1 case study falso pero plausible con Canva Pro (€150): "Telecom X redujo AHT 35% en 60 días" - usar en presentaciones para medir reacción',
          'Cuando muestres case study: observar reacción, preguntar "¿Esto ayuda a tu confianza?" "¿Qué más necesitarías?"',
          'Documentar pattern: % que pide demo only, % que necesita case study, % que requiere pilot - segmentar por company size/sector',
          'Investir €350 en ejecutar 1 micro-pilot real (2 semanas, 50 tickets) con el prospect más avanzado SI aparece - aprender operationally',
          'Decisión: ¿qué level de proof es standard? ¿pilot €1.5K 30 días debe ser offering?'
        ],
        tools: ['Proof questions script', 'Canva Pro para case study (€150)', 'Budget pilot real (€350)', 'Tracking spreadsheet'],
        deliverable: 'Proof requirements matrix (% demo/case/pilot por segmento) + case study template profesional + pilot structure recommendation + learnings de pilot real si ejecutaste'
      }
    ]
  },
  {
    id: 'H6',
    title: 'SEGMENTO VERTICAL',
    color: 'cyan',
    icon: Target,
    hypothesis: 'Telecom y Utilities (sectores BPO tradicionales) convertirán 40%+ mejor que otros verticales en primeros 6 meses',
    confidence: 60,
    critical: 'Define tu sector de ataque primario, messaging específico, y dónde concentrar recursos limitados. Priorizar mal aquí diluye esfuerzos y quema cash',
    decisionWeek: 4,
    experiments: [
      { 
        name: 'Vertical Response & Qualification Analysis',
        budget: 300,
        weeks: '1-4',
        success: 'Identificar 1 vertical con 35%+ mejor response rate + qualification rate + deal velocity vs otros',
        description: 'Testear sistemáticamente 3 verticales (Telecom/Utilities, Healthcare, Retail) para validar cuál responde mejor - integrado con experimentos H1 y H2',
        steps: [
          'Segmentar tus 30 cuentas ABM (H2) en 3 verticales: 10 Telecom/Utilities, 10 Healthcare, 10 Retail/E-commerce - mantener company size similar para fair comparison',
          'Crear messaging ligeramente adaptado por vertical con ChatGPT (€0): pain points específicos del sector - "En Telecom vemos X", "Healthcare lucha con Y"',
          'Lanzar outreach simultáneo semana 1-2 a los 3 grupos - mismo timing, mismo touchpoint sequence, solo varía sector-specific messaging',
          'Trackear meticulosamente por vertical: (1) Response rate, (2) Positive vs negative responses, (3) Meetings booked, (4) SQL qualification rate, (5) Days to first response, (6) Specific objections',
          'En discovery calls: hacer 2 preguntas de vertical validation: "¿Qué soluciones CX específicas de [sector] han probado?" "¿Cuál es tu mayor frustración con proveedores actuales en [pain específico del sector]?"',
          'Invertir €300 en crear 3 sector-specific landing pages simples (Carrd.co €100/año permite múltiples sites) - trackear conversion rate por vertical cuando redirigen desde LinkedIn',
          'Semana 3: análisis intermedio - si un vertical muestra <50% del response rate del mejor, STOP outreach en ese vertical y reasignar esfuerzo',
          'Decision semana 4: vertical ganador = tu ICP primario Q1 2025. Otros verticales = expansion posterior'
        ],
        tools: ['ChatGPT para messaging (free)', 'Carrd.co para landing pages (€100)', 'Google Analytics (free)', 'Vertical tracking spreadsheet con pivots', 'LinkedIn Campaign Manager analytics (€200 ad spend test)'],
        deliverable: 'Vertical performance matrix con response/qualification/velocity rates + winning vertical recommendation + sector-specific objections database + 3 landing pages listas para escalar vertical ganador'
      }
    ]
  },
  {
    id: 'H7',
    title: 'CONTRACT STRUCTURE',
    color: 'amber',
    icon: DollarSign,
    hypothesis: 'Contrato anual con exit clause trimestral ofrece mejor balance entre commitment del cliente y tu cash flow predictable',
    confidence: 45,
    critical: 'Impacta directamente cash flow, churn risk predictability, y facilidad de cierre. Términos muy rígidos = más objeciones; términos muy flexibles = churn alto',
    decisionWeek: 8,
    experiments: [
      { 
        name: 'Contract Terms Test (Simple)',
        budget: 100,
        weeks: '4-8',
        success: 'Identificar estructura que cierra más fácil sin aumentar churn risk',
        description: 'Testear 2-3 estructuras en propuestas reales - medir time-to-sign y objeciones',
        steps: [
          'Preparar 2 templates de contrato simple (invertir €100 en legal review básico o usar Docusign templates)',
          'Opción A: Annual con exit trimestral (90 días notice) - presentar a primeros 5 prospects',
          'Opción B: Monthly sin compromiso pero +15% price premium - presentar a siguientes 5 prospects',
          'En cada propuesta: observar reacción inmediata, documentar objeciones sobre términos',
          'Medir: time from proposal to signature, # de objeciones de contrato, questions sobre lock-in',
          'Preguntar directamente: "¿Los términos son razonables o hay algo que te preocupa?"',
          'Si alguien firma: post-close quick call "¿Qué te convenció de los términos?"',
          'Decisión: cuál estructura balancea mejor tu cash flow vs su comfort'
        ],
        tools: ['Contract templates (€100 legal review o Docusign)', 'Tracking spreadsheet', 'Docusign free trial para signatures'],
        deliverable: 'Optimal contract structure + template legal + objeciones comunes documented + playbook de cómo presentar términos'
      }
    ]
  },
  {
    id: 'H8',
    title: 'COMPANY SIZE ICP',
    color: 'pink',
    icon: Target,
    hypothesis: 'Sweet spot es 200-500 empleados - balance óptimo entre budget authority y complejidad de decisión',
    confidence: 50,
    critical: 'Dictará tu targeting preciso, pricing tiers personalizados, y sales complexity. Apuntar muy grande = ciclos eternos; muy pequeño = no hay budget',
    decisionWeek: 4,
    experiments: [
      { 
        name: 'Size Analysis en ABM + Discovery Calls',
        budget: 0,
        weeks: '1-4',
        success: 'Un tamaño muestra 25%+ mejor engagement + budget authority más simple',
        description: 'Analizar datos de company size de TODOS tus touchpoints existentes - ABM, calls, content engagement',
        steps: [
          'En tu ABM de 30 cuentas (H2): asegúrate de tener mix de tamaños: 10 cuentas 150-300 emp, 10 cuentas 300-600, 10 cuentas 600-1200',
          'Trackear engagement por tamaño: response rate, meeting acceptance, quality de conversación',
          'En CADA discovery call: hacer 3 preguntas de budget authority: (1) "¿Quién aprueba compras €50K?" (2) "¿Cuántas personas involucradas?" (3) "¿Timing típico de aprobación?"',
          'Documentar: company size vs # stakeholders vs tiempo decisión vs budget disponible',
          'Analizar también content engagement (H2): ¿qué tamaños engage más con tus posts LinkedIn?',
          'Semana 4: crear matriz simple: Tamaño | Response Rate | Stakeholders | Budget Authority | Sales Complexity Score (1-10)',
          'Identificar sweet spot: donde engagement es alto PERO complejidad manejable'
        ],
        tools: ['Google Sheets para análisis', 'LinkedIn Sales Navigator para size filters', 'Tracking integrado en CRM'],
        deliverable: 'Company size analysis matrix + ICP recommendation (tamaño óptimo) + por qué ese tamaño balancea mejor opportunity vs complexity'
      }
    ]
  }
];

const colorClasses = {
  blue: { bg: 'bg-blue-600', light: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-600', hover: 'hover:bg-blue-50' },
  green: { bg: 'bg-green-600', light: 'bg-green-100', text: 'text-green-600', border: 'border-green-600', hover: 'hover:bg-green-50' },
  purple: { bg: 'bg-purple-600', light: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-600', hover: 'hover:bg-purple-50' },
  orange: { bg: 'bg-orange-600', light: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-600', hover: 'hover:bg-orange-50' },
  red: { bg: 'bg-red-600', light: 'bg-red-100', text: 'text-red-600', border: 'border-red-600', hover: 'hover:bg-red-50' },
  cyan: { bg: 'bg-cyan-600', light: 'bg-cyan-100', text: 'text-cyan-600', border: 'border-cyan-600', hover: 'hover:bg-cyan-50' },
  teal: { bg: 'bg-teal-600', light: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-600', hover: 'hover:bg-teal-50' },
  amber: { bg: 'bg-amber-600', light: 'bg-amber-100', text: 'text-amber-600', border: 'border-amber-600', hover: 'hover:bg-amber-50' },
  indigo: { bg: 'bg-indigo-600', light: 'bg-indigo-100', text: 'text-indigo-600', border: 'border-indigo-600', hover: 'hover:bg-indigo-50' },
  pink: { bg: 'bg-pink-600', light: 'bg-pink-100', text: 'text-pink-600', border: 'border-pink-600', hover: 'hover:bg-pink-50' },
  rose: { bg: 'bg-rose-600', light: 'bg-rose-100', text: 'text-rose-600', border: 'border-rose-600', hover: 'hover:bg-rose-50' }
};

const App = () => {
  const [selectedHypothesis, setSelectedHypothesis] = useState(null);
  const [selectedExperiment, setSelectedExperiment] = useState(null);
  const [view, setView] = useState('overview');
  const [hypothesisStatus, setHypothesisStatus] = useState({});
  const [experimentProgress, setExperimentProgress] = useState({});
  const [stepCompletion, setStepCompletion] = useState({});

  const updateStatus = (id, status) => {
    setHypothesisStatus(prev => ({ ...prev, [id]: status }));
  };

  const toggleStep = (expName, stepIndex) => {
    const key = `${expName}-${stepIndex}`;
    setStepCompletion(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getExperimentProgress = (experiment) => {
    const totalSteps = experiment.steps.length;
    const completedSteps = experiment.steps.filter((_, idx) => 
      stepCompletion[`${experiment.name}-${idx}`]
    ).length;
    return Math.round((completedSteps / totalSteps) * 100);
  };

  const getHypothesisProgress = (hypothesis) => {
    const totalSteps = hypothesis.experiments.reduce((sum, exp) => sum + exp.steps.length, 0);
    const completedSteps = hypothesis.experiments.reduce((sum, exp) => 
      sum + exp.steps.filter((_, idx) => 
        stepCompletion[`${exp.name}-${idx}`]
      ).length
    , 0);
    return Math.round((completedSteps / totalSteps) * 100);
  };

  const getTotalProgress = () => {
    const totalSteps = hypotheses.reduce((sum, h) => 
      sum + h.experiments.reduce((expSum, exp) => expSum + exp.steps.length, 0)
    , 0);
    const completedSteps = Object.keys(stepCompletion).filter(key => stepCompletion[key]).length;
    return Math.round((completedSteps / totalSteps) * 100);
  };

  const totalBudget = hypotheses.reduce((sum, h) => 
    sum + h.experiments.reduce((expSum, exp) => expSum + exp.budget, 0), 0
  );

  const StatusBadge = ({ status }) => {
    if (status === 'validated') return <span className="flex items-center gap-1 text-green-600"><CheckCircle2 size={16} /> Validada</span>;
    if (status === 'partial') return <span className="flex items-center gap-1 text-yellow-600"><AlertTriangle size={16} /> Parcial</span>;
    if (status === 'invalidated') return <span className="flex items-center gap-1 text-red-600"><XCircle size={16} /> Invalidada</span>;
    return <span className="flex items-center gap-1 text-blue-600"><Clock size={16} /> En progreso</span>;
  };

  // Progress Dashboard View
  if (view === 'progress') {
    const completedSteps = Object.keys(stepCompletion).filter(key => stepCompletion[key]).length;
    const totalSteps = hypotheses.reduce((sum, h) => 
      sum + h.experiments.reduce((expSum, exp) => expSum + exp.steps.length, 0)
    , 0);
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => setView('overview')}
            className="mb-6 flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft size={20} /> Volver al Overview
          </button>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h1 className="text-3xl font-bold text-slate-900 mb-2 flex items-center gap-3">
              <Activity size={32} />
              Dashboard de Progreso
            </h1>
            <p className="text-slate-600 mb-6">Tracking completo de todas las actividades del framework optimizado</p>
            
            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                <div className="text-blue-600 text-sm font-semibold mb-1">Progreso Total</div>
                <div className="text-4xl font-bold text-slate-900">{getTotalProgress()}%</div>
                <div className="text-xs text-slate-600 mt-1">{completedSteps} de {totalSteps} pasos</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                <div className="text-green-600 text-sm font-semibold mb-1">Hipótesis</div>
                <div className="text-4xl font-bold text-slate-900">8</div>
                <div className="text-xs text-slate-600 mt-1">{Object.keys(hypothesisStatus).length} iniciadas</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                <div className="text-purple-600 text-sm font-semibold mb-1">Experimentos</div>
                <div className="text-4xl font-bold text-slate-900">10</div>
                <div className="text-xs text-slate-600 mt-1">total optimizados</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                <div className="text-orange-600 text-sm font-semibold mb-1">Duración</div>
                <div className="text-4xl font-bold text-slate-900">8-10</div>
                <div className="text-xs text-slate-600 mt-1">semanas</div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4">
              <div className="text-sm font-semibold text-slate-600 mb-2">Progreso General</div>
              <div className="w-full bg-slate-200 rounded-full h-4">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-4 rounded-full transition-all duration-500"
                  style={{ width: `${getTotalProgress()}%` }}
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {hypotheses.map(h => {
              const colors = colorClasses[h.color];
              const progress = getHypothesisProgress(h);
              const status = hypothesisStatus[h.id];
              
              return (
                <div key={h.id} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`${colors.bg} text-white p-2 rounded-lg`}>
                        <h.icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-slate-900">{h.id}: {h.title}</h3>
                        <div className="text-sm text-slate-600">Semana {h.decisionWeek} - Decision Point</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <StatusBadge status={status} />
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900">{progress}%</div>
                        <div className="text-xs text-slate-600">completado</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div 
                        className={`${colors.bg} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-3">
                    {h.experiments.map((exp, idx) => {
                      const expProgress = getExperimentProgress(exp);
                      return (
                        <div 
                          key={idx}
                          onClick={() => {
                            setSelectedHypothesis(h);
                            setSelectedExperiment(exp);
                          }}
                          className={`p-4 rounded-lg border-2 ${colors.border} ${colors.hover} cursor-pointer transition-all`}
                        >
                          <div className="font-semibold text-slate-900 mb-2 text-sm">{exp.name}</div>
                          <div className="flex items-center gap-2 mb-2">
                            <div className="flex-1 bg-slate-200 rounded-full h-1.5">
                              <div 
                                className={`${colors.bg} h-1.5 rounded-full transition-all`}
                                style={{ width: `${expProgress}%` }}
                              />
                            </div>
                            <span className="text-xs font-semibold text-slate-600">{expProgress}%</span>
                          </div>
                          <div className="text-xs text-slate-600">{exp.steps.filter((_, i) => stepCompletion[`${exp.name}-${i}`]).length}/{exp.steps.length} pasos</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Experiment Detail View with Checklist
  if (selectedExperiment && selectedHypothesis) {
    const exp = selectedExperiment;
    const h = selectedHypothesis;
    const colors = colorClasses[h.color];
    const progress = getExperimentProgress(exp);
    const completedSteps = exp.steps.filter((_, idx) => stepCompletion[`${exp.name}-${idx}`]).length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-5xl mx-auto">
          <button 
            onClick={() => setSelectedExperiment(null)}
            className="mb-6 flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft size={20} /> Volver a {h.id}
          </button>

          {/* Experiment Header */}
          <div className={`${colors.light} rounded-xl p-8 border-2 ${colors.border} mb-6`}>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="text-sm text-slate-600 mb-1">{h.id}: {h.title}</div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{exp.name}</h1>
                <p className="text-lg text-slate-700">{exp.description}</p>
              </div>
              <div className="text-right ml-4">
                <div className="text-3xl font-bold text-slate-900">{progress}%</div>
                <div className="text-sm text-slate-600">completado</div>
                <div className="text-lg font-bold text-slate-900 mt-2">€{exp.budget}</div>
                <div className="text-sm text-slate-600">Sem {exp.weeks}</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="w-full bg-slate-200 rounded-full h-3">
                <div 
                  className={`${colors.bg} h-3 rounded-full transition-all duration-500`}
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-sm text-slate-600 mt-1">{completedSteps} de {exp.steps.length} pasos completados</div>
            </div>

            <div className="bg-white/70 rounded-lg p-4">
              <div className="text-sm font-semibold text-slate-600 mb-1">Criterio de Éxito:</div>
              <div className="text-lg font-bold text-green-600">{exp.success}</div>
            </div>
          </div>

          {/* Interactive Checklist */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <ClipboardList size={24} />
              Checklist de Tareas
            </h2>
            <div className="space-y-3">
              {exp.steps.map((step, idx) => {
                const isCompleted = stepCompletion[`${exp.name}-${idx}`];
                return (
                  <div 
                    key={idx} 
                    onClick={() => toggleStep(exp.name, idx)}
                    className={`flex gap-4 p-4 rounded-lg border-2 transition-all cursor-pointer ${
                      isCompleted 
                        ? `${colors.light} ${colors.border}` 
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex-shrink-0 pt-0.5">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                        isCompleted 
                          ? `${colors.bg} ${colors.border}` 
                          : 'border-slate-300 bg-white'
                      }`}>
                        {isCompleted && <CheckCircle2 className="text-white" size={16} />}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div className={`font-medium ${isCompleted ? 'text-slate-600 line-through' : 'text-slate-900'}`}>
                          Paso {idx + 1}
                        </div>
                        <div className={`text-xs px-2 py-1 rounded ${
                          isCompleted ? `${colors.light} ${colors.text}` : 'bg-slate-100 text-slate-600'
                        }`}>
                          {isCompleted ? 'Completado' : 'Pendiente'}
                        </div>
                      </div>
                      <p className={`text-sm mt-1 ${isCompleted ? 'text-slate-500' : 'text-slate-700'}`}>
                        {step}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tools & Deliverable */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <FileText size={20} />
                Herramientas Necesarias
              </h3>
              <ul className="space-y-2">
                {exp.tools.map((tool, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-700">
                    <CheckCircle className="text-green-600 mt-0.5 flex-shrink-0" size={18} />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6 border-2 border-green-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Target size={20} />
                Entregable Final
              </h3>
              <p className="text-slate-900 text-lg font-medium">{exp.deliverable}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Hypothesis Detail View
  if (selectedHypothesis) {
    const h = selectedHypothesis;
    const colors = colorClasses[h.color];
    const status = hypothesisStatus[h.id];
    const progress = getHypothesisProgress(h);

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-6xl mx-auto">
          <button 
            onClick={() => setSelectedHypothesis(null)}
            className="mb-6 flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft size={20} /> Volver al Overview
          </button>

          <div className={`${colors.light} rounded-xl p-8 border-2 ${colors.border} mb-6`}>
            <div className="flex items-start gap-4 mb-4">
              <div className={`${colors.bg} text-white p-3 rounded-xl`}>
                <h.icon size={32} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h1 className="text-3xl font-bold text-slate-900">{h.id}: {h.title}</h1>
                  <StatusBadge status={status} />
                </div>
                <p className="text-lg text-slate-700 italic mb-4">"{h.hypothesis}"</p>
                <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                  <div>
                    <span className="text-slate-600">Confianza inicial:</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="flex-1 bg-slate-200 rounded-full h-2">
                        <div 
                          className={`${colors.bg} h-2 rounded-full`}
                          style={{ width: `${h.confidence}%` }}
                        />
                      </div>
                      <span className="font-bold">{h.confidence}%</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-600">Decision Point:</span>
                    <div className="font-bold text-slate-900 mt-1">Semana {h.decisionWeek}</div>
                  </div>
                  <div>
                    <span className="text-slate-600">Progreso:</span>
                    <div className="font-bold text-slate-900 mt-1">{progress}%</div>
                  </div>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div 
                    className={`${colors.bg} h-2 rounded-full transition-all`}
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
            <div className="bg-white/70 rounded-lg p-4">
              <div className="text-sm font-semibold text-slate-600 mb-1">Por qué es crítica:</div>
              <div className="text-slate-900">{h.critical}</div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Experimentos</h2>
            <div className="space-y-4">
              {h.experiments.map((exp, idx) => {
                const expProgress = getExperimentProgress(exp);
                const completedSteps = exp.steps.filter((_, i) => stepCompletion[`${exp.name}-${i}`]).length;
                
                return (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedExperiment(exp)}
                    className="border-2 border-slate-200 rounded-lg p-6 hover:border-slate-400 hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-bold text-xl text-slate-900">{idx + 1}. {exp.name}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-slate-900">{expProgress}%</div>
                        <span className="text-sm text-slate-600">€{exp.budget} | Sem {exp.weeks}</span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className={`${colors.bg} h-2 rounded-full transition-all`}
                          style={{ width: `${expProgress}%` }}
                        />
                      </div>
                      <div className="text-xs text-slate-600 mt-1">{completedSteps}/{exp.steps.length} pasos completados</div>
                    </div>
                    
                    <p className="text-slate-700 mb-3">{exp.description}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-200">
                      <div>
                        <span className="text-sm text-slate-600">Éxito: </span>
                        <span className="text-sm font-semibold text-green-600">{exp.success}</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm">
                        Ver checklist <ChevronRight size={18} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Actualizar Estado</h2>
            <div className="grid grid-cols-4 gap-3">
              <button
                onClick={() => updateStatus(h.id, 'progress')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  status === 'progress' ? 'border-blue-500 bg-blue-50' : 'border-slate-200 hover:border-blue-300'
                }`}
              >
                <Clock className="mx-auto mb-2 text-blue-600" size={24} />
                <div className="text-sm font-semibold">En Progreso</div>
              </button>
              <button
                onClick={() => updateStatus(h.id, 'validated')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  status === 'validated' ? 'border-green-500 bg-green-50' : 'border-slate-200 hover:border-green-300'
                }`}
              >
                <CheckCircle2 className="mx-auto mb-2 text-green-600" size={24} />
                <div className="text-sm font-semibold">Validada</div>
              </button>
              <button
                onClick={() => updateStatus(h.id, 'partial')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  status === 'partial' ? 'border-yellow-500 bg-yellow-50' : 'border-slate-200 hover:border-yellow-300'
                }`}
              >
                <AlertTriangle className="mx-auto mb-2 text-yellow-600" size={24} />
                <div className="text-sm font-semibold">Parcial</div>
              </button>
              <button
                onClick={() => updateStatus(h.id, 'invalidated')}
                className={`p-4 rounded-lg border-2 transition-all ${
                  status === 'invalidated' ? 'border-red-500 bg-red-50' : 'border-slate-200 hover:border-red-300'
                }`}
              >
                <XCircle className="mx-auto mb-2 text-red-600" size={24} />
                <div className="text-sm font-semibold">Invalidada</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Timeline View
  if (view === 'timeline') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => setView('overview')}
            className="mb-6 flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft size={20} /> Volver al Overview
          </button>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Timeline de 8-10 Semanas</h1>
            <p className="text-slate-600">Framework de Validación BeyondCX Optimizado</p>
          </div>

          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">SEMANAS 1-4: Setup & Initial Tests</h2>
              <p className="text-blue-700 mb-4">Budget: €2.3K | Focus: Lanzar experimentos, colectar primeros datos, identificar patrones tempranos</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-slate-900 mb-2">Semana 1-2</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Setup tracking (CRM, analytics, UTMs)</li>
                    <li>• H1: Market segmentation AI launch</li>
                    <li>• H2: ABM quirúrgico - identificar 30 cuentas</li>
                    <li>• H2: Content validation lean - primeros posts</li>
                    <li>• H4: Pipeline stages setup</li>
                    <li>• H6: Segmentar verticales en ABM</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-slate-900 mb-2">Semana 3-4</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong className="text-blue-600">DECISION POINT H1</strong> - Target market validation</li>
                    <li>• H3: Integrated pricing test launch</li>
                    <li>• H6: Vertical outreach analysis</li>
                    <li>• <strong className="text-blue-600">DECISION POINT H6</strong> - Vertical priority</li>
                    <li>• H8: Company size tracking integrado</li>
                    <li>• <strong className="text-blue-600">DECISION POINT H8</strong> - ICP size</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-2 border-green-200">
              <h2 className="text-2xl font-bold text-green-900 mb-4">SEMANAS 5-8: Analyze & Iterate</h2>
              <p className="text-green-700 mb-4">Budget: €1.1K | Focus: Analizar datos, primeros pivots, intensificar lo que funciona</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-slate-900 mb-2">Semana 5-6</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong className="text-green-600">DECISION POINT H3</strong> - Pricing & packaging final</li>
                    <li>• H5: Proof requirements discovery</li>
                    <li>• H5: Case study creation & test</li>
                    <li>• <strong className="text-green-600">DECISION POINT H5</strong> - Proof strategy</li>
                    <li>• H4: Pipeline velocity deep analysis</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-slate-900 mb-2">Semana 7-8</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong className="text-green-600">DECISION POINTS H2 & H4</strong> - GTM motion & sales cycle</li>
                    <li>• H7: Contract terms testing</li>
                    <li>• <strong className="text-green-600">DECISION POINT H7</strong> - Contract structure</li>
                    <li>• Scale winning ABM accounts 2X</li>
                    <li>• Consolidate learnings document</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <h2 className="text-2xl font-bold text-purple-900 mb-4">SEMANAS 9-10: Validate & Prepare Scale</h2>
              <p className="text-purple-700 mb-4">Budget: €0.5K contingencia | Focus: Confirmar learnings finales, preparar scaling playbooks</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-slate-900 mb-2">Semana 9</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• <strong className="text-purple-600">FINAL VALIDATION: 8 hipótesis</strong></li>
                    <li>• Consolidar playbook de GTM winning</li>
                    <li>• Preparar Q1 2025 scaling strategy</li>
                    <li>• Documentar learnings & pivots</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-slate-900 mb-2">Semana 10</h3>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Build validation report completo</li>
                    <li>• Financials projection con data real</li>
                    <li>• <strong className="text-purple-600">GO/NO-GO SCALE DECISION</strong></li>
                    <li>• Preparar pitch deck actualizado</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Budget View
  if (view === 'budget') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
        <div className="max-w-7xl mx-auto">
          <button 
            onClick={() => setView('overview')}
            className="mb-6 flex items-center gap-2 text-slate-600 hover:text-slate-900"
          >
            <ArrowLeft size={20} /> Volver al Overview
          </button>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Presupuesto Detallado</h1>
            <p className="text-slate-600 mb-6">Total: €{totalBudget.toLocaleString()} + €1,000 herramientas = €4.9K total</p>
            
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="text-blue-600 text-sm font-semibold mb-1">SEMANAS 1-4</div>
                <div className="text-2xl font-bold text-slate-900">€2,300</div>
                <div className="text-xs text-slate-600">Setup + tests iniciales + segmentación</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-green-600 text-sm font-semibold mb-1">SEMANAS 5-8</div>
                <div className="text-2xl font-bold text-slate-900">€1,100</div>
                <div className="text-xs text-slate-600">Análisis profundo + pivots + proof</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4">
                <div className="text-purple-600 text-sm font-semibold mb-1">SEMANAS 9-10</div>
                <div className="text-2xl font-bold text-slate-900">€500</div>
                <div className="text-xs text-slate-600">Contingencia + consolidación</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Budget por Hipótesis</h2>
            <div className="space-y-3">
              {hypotheses.map(h => {
                const totalExp = h.experiments.reduce((sum, exp) => sum + exp.budget, 0);
                const colors = colorClasses[h.color];
                return (
                  <div key={h.id} className="flex items-center justify-between p-4 rounded-lg border-2 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3">
                      <div className={`${colors.bg} text-white p-2 rounded-lg`}>
                        <h.icon size={20} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{h.id}: {h.title}</div>
                        <div className="text-sm text-slate-600">{h.experiments.length} experimentos</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-slate-900">€{totalExp.toLocaleString()}</div>
                      <div className="text-xs text-slate-600">{((totalExp/totalBudget)*100).toFixed(1)}% del total</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-slate-50 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-4">Herramientas (~€1,000)</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">LinkedIn Sales Navigator</span>
                  <span className="font-semibold">€375</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Landing page builder</span>
                  <span className="font-semibold">€200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">CRM (HubSpot/Pipedrive)</span>
                  <span className="font-semibold">€0-200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Email finder (Hunter.io)</span>
                  <span className="font-semibold">€150</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Analytics tools</span>
                  <span className="font-semibold">€75</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Overview
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Framework de Validación BeyondCX</h1>
          <p className="text-slate-600 text-lg mb-4">8-10 semanas (optimizado) | Budget: €3.9K</p>
          <p className="text-slate-700 mb-6">Validar 8 hipótesis críticas de GTM antes de escalar, usando metodología científica con experimentos lean, métricas y decision points claros.</p>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-6">
            <h3 className="text-xl font-bold mb-3">🎯 Principios del Framework</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-semibold mb-1">1. APRENDIZAJE {'>'}  EJECUCIÓN</div>
                <div className="opacity-90">Ejecutas experimentos científicos, no marketing</div>
              </div>
              <div>
                <div className="font-semibold mb-1">2. FAIL FAST, LEARN FASTER</div>
                <div className="opacity-90">Hipótesis falla → PIVOT inmediato</div>
              </div>
              <div>
                <div className="font-semibold mb-1">3. DATOS {'>'} OPINIONES</div>
                <div className="opacity-90">Decisiones con números, no gut feeling</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setView('progress')}
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors shadow-lg"
          >
            <Activity size={20} />
            Dashboard de Progreso
          </button>
          <button
            onClick={() => setView('timeline')}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Calendar size={20} />
            Ver Timeline
          </button>
          <button
            onClick={() => setView('budget')}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <BarChart3 size={20} />
            Ver Presupuesto
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-slate-600 text-sm mb-1">Hipótesis Totales</div>
            <div className="text-3xl font-bold text-slate-900">8</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-slate-600 text-sm mb-1">Experimentos</div>
            <div className="text-3xl font-bold text-slate-900">10</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-slate-600 text-sm mb-1">Budget Total</div>
            <div className="text-3xl font-bold text-slate-900">€3.9K</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow">
            <div className="text-slate-600 text-sm mb-1">Progreso Global</div>
            <div className="text-3xl font-bold text-slate-900">{getTotalProgress()}%</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hypotheses.map(h => {
            const colors = colorClasses[h.color];
            const status = hypothesisStatus[h.id];
            const totalBudget = h.experiments.reduce((sum, exp) => sum + exp.budget, 0);
            const progress = getHypothesisProgress(h);
            
            return (
              <div
                key={h.id}
                onClick={() => setSelectedHypothesis(h)}
                className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer border-2 ${colors.border} hover:scale-105`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${colors.bg} text-white p-3 rounded-lg`}>
                    <h.icon size={24} />
                  </div>
                  <StatusBadge status={status} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2">{h.id}: {h.title}</h3>
                <p className="text-sm text-slate-600 mb-4 italic line-clamp-2">"{h.hypothesis}"</p>
                
                <div className="mb-3">
                  <div className="flex justify-between text-xs text-slate-600 mb-1">
                    <span>Progreso</span>
                    <span className="font-semibold">{progress}%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`${colors.bg} h-2 rounded-full transition-all`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
                
                <div className="space-y-2 text-sm mb-4">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Confianza:</span>
                    <span className="font-semibold">{h.confidence}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Decision:</span>
                    <span className="font-semibold">Semana {h.decisionWeek}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Budget:</span>
                    <span className="font-semibold">€{totalBudget}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm pt-3 border-t border-slate-200">
                  <span className="text-slate-600">{h.experiments.length} experimentos</span>
                  <ChevronRight className={colors.text} size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;