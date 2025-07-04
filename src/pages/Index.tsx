
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from "lucide-react";

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <Button 
      className={`w-full max-w-lg mx-auto bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-bold py-6 px-8 rounded-2xl text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-gentle ${className}`}
      onClick={() => window.open('https://araceliprudente51-0583.freshlearn.com/checkout/Course/33936', '_blank')}
    >
      {children}
    </Button>
  );

  const faqData = [
    {
      question: "¿Para quién es Unlock Viral?",
      answer: "Para cualquier persona que quiera crear videos virales, crecer en redes, posicionarse y/o escalar su negocio digital gracias a la visibilidad orgánica. Si sentís que subís contenido y no pasa nada… este curso es para vos."
    },
    {
      question: "¿En qué se diferencia este curso de otros?",
      answer: "Unlock Viral va directo al grano. No hay relleno innecesario. Te enseño exactamente lo que tenés que saber para hacerte viral rápido y con intención, usando los mismos pasos que yo aplico cada vez que hago reels que explotan."
    },
    {
      question: "¿Ofrecés ayuda más personalizada?",
      answer: "Sí. Una vez que accedés al curso, vas a tener la posibilidad de aplicar a mis asesorías 1:1, con un precio exclusivo para estudiantes."
    },
    {
      question: "¿Cuánto tiempo tendré acceso al curso?",
      answer: "Vas a tener acceso de por vida al contenido del curso. Comprás una sola vez, y el contenido queda disponible para siempre."
    },
    {
      question: "¿Cuánto tiempo tengo que dedicarle?",
      answer: "El curso es 100% a tu ritmo, pero con solo un par de horas a la semana vas a poder avanzar y aplicar."
    },
    {
      question: "¿Te puedo hacer preguntas si tengo dudas?",
      answer: "¡Sí! En este primer lanzamiento quiero acompañar de cerca a quienes confíen primero, así que si accedés ahora, vas a poder acceder a clases en vivo conmigo."
    },
    {
      question: "¿Hay comunidad?",
      answer: "Sí. Vas a poder sumarte a una comunidad privada en WhatsApp, donde comparto valor exclusivo, ejemplos, ideas virales y donde vas a poder conocer a otros creadores."
    },
    {
      question: "¿Sirve para mi nicho?",
      answer: "Unlock Viral está diseñado para que funcione en cualquier nicho."
    },
    {
      question: "¿Funciona si estoy empezando desde cero?",
      answer: "Totalmente. Diseñé este curso pensando en las Aracelis del pasado 😅 — esas que tenían mil ideas pero no sabían por dónde arrancar."
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=60&fit=crop&crop=face" 
              alt="Unlock Viral Logo" 
              className="h-12 object-contain"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-cyan-100 text-cyan-800 px-6 py-3 rounded-full inline-block mb-8 font-semibold">
              La llave Que Usan Los Influencers y Negocios Para Viralizarse
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              Los 5 Pasos Que Me Llevó Años y Miles de Dólares Descubrir, Y Que Hoy Podés Aplicar Vos Para{" "}
              <span className="highlight-text">Crecer, Posicionarte Y Vender</span> Con Contenido
            </h1>

            {/* Video Section */}
            <div className="relative max-w-3xl mx-auto mb-12">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop" 
                  alt="Video Preview" 
                  className="w-full h-64 md:h-96 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button className="bg-white/20 hover:bg-white/30 text-white p-6 rounded-full backdrop-blur-sm">
                    <Play className="w-8 h-8 ml-1" />
                  </Button>
                </div>
              </div>
            </div>

            <CTAButton>
              <div className="text-center">
                <div className="text-xl font-bold">¡Quiero Desbloquear El Curso Ahora!</div>
                <div className="text-sm opacity-90 mt-1">+3 Bonus Especiales, Por Tan Solo 47usd</div>
              </div>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop&crop=face" 
                alt="Araceli Prudente" 
                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700">
                Mi nombre es <strong><span className="highlight-text">Araceli Prudente</span></strong> y hace 2 años entré al mundo digital con una misión clara: aprender todo lo que pudiera sobre <span className="text-cyan-600 font-semibold">contenido</span>, <span className="text-cyan-600 font-semibold">viralidad</span> y <span className="text-cyan-600 font-semibold">crecimiento orgánico</span>… y aplicarlo hasta volverme referente.
              </p>
              
              <p className="text-lg text-gray-700">Crecí rápido, pero no fue casualidad.</p>
              
              <p className="text-lg text-gray-700">
                Estudié <strong><span className="text-cyan-600">Licenciatura en Publicidad</span></strong>, invertí en <strong><span className="text-cyan-600">mentorías</span></strong>, y trabajé con más de <strong><span className="text-cyan-600">21 marcas y creadores</span></strong> de distintos nichos y países, creando estrategias de contenido que generaron <strong><span className="text-cyan-600">resultados reales y medibles</span></strong>.
              </p>

              <div className="bg-cyan-50 p-6 rounded-xl">
                <p className="font-semibold text-gray-800 mb-4">Además:</p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-cyan-500 font-bold mr-3">•</span>
                    Formé a más de 300 alumnos,
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 font-bold mr-3">•</span>
                    Crecí más de 100.000 seguidores en menos de 1 año,
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 font-bold mr-3">•</span>
                    Logré algo que muy pocas personas consiguen: hacerme un nombre en la industria del marketing digital desde cero siendo mujer, solo con contenido.
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-6 rounded-xl">
                <p className="font-semibold mb-4">Gracias a eso:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-cyan-200 font-bold mr-3">•</span>
                    Generé +800.000 dólares para mis clientes
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-200 font-bold mr-3">•</span>
                    Ayudé a personas que nunca se animaban a mostrar su cara, a convertirse en creadores
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-200 font-bold mr-3">•</span>
                    Y creé una comunidad que no solo me sigue, sino que me agradece por cambiarles la vida
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <p className="text-lg text-gray-700 mb-4">
                  Y no, no te doy hacks vacíos como qué hashtag tenes que poner.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Te entrego <strong><span className="highlight-text">el método exacto</span></strong> que yo misma usé para viralizar, crecer y posicionarme. El mismo que aplican hoy creadores de contenido, emprendedores y alumnos míos que pagaron hasta <strong><span className="text-cyan-600">$2.000 USD por aprenderlo en mentorías 1 a 1</span></strong>.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Hoy, por primera vez, <strong><span className="highlight-text">lo empaqué en un curso accesible y directo al grano</span></strong>.
                </p>
                <p className="text-lg text-gray-700 font-semibold">
                  Y si estás leyendo esto, podés desbloquearlo ahora.
                </p>
              </div>

              <div className="pt-6">
                <CTAButton>
                  <div className="text-center">
                    <div className="text-xl font-bold">¡Quiero Desbloquear El Curso Ahora!</div>
                    <div className="text-sm opacity-90 mt-1">+3 Bonus Especiales, Por Tan Solo 47usd</div>
                  </div>
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section 1 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">He ayudado a...</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[...Array(6)].map((_, i) => (
              <img 
                key={i}
                src={`https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=200&h=250&fit=crop&crop=face&seed=${i}`}
                alt={`Testimonio ${i + 1}`}
                className="rounded-xl shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section 2 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Algunos Testimonios...</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="space-y-6">
              {[...Array(4)].map((_, i) => (
                <img 
                  key={i}
                  src={`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop&seed=${i}`}
                  alt={`Testimonio ${i + 1}`}
                  className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
            <div className="space-y-6">
              {[...Array(5)].map((_, i) => (
                <img 
                  key={i + 4}
                  src={`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop&seed=${i + 4}`}
                  alt={`Testimonio ${i + 5}`}
                  className="rounded-xl shadow-lg w-full hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formula Introduction */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto shadow-2xl border-0">
            <CardContent className="p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gray-900">
                Dediqué Los Últimos 2 Años A Descifrar Esta Fórmula
              </h2>
              
              <p className="text-xl text-center mb-8 font-semibold text-gray-800">
                <strong>Y NADA me ayudó más a crecer mi marca personal y escalar mi negocio que lo que enseño en <em className="highlight-text">Unlock Viral</em>.</strong>
              </p>

              <div className="space-y-6 text-lg text-gray-700 max-w-4xl mx-auto">
                <p>
                  Empecé en redes porque sabía que, si quería escalar mi agencia y convertirme en una referente, <strong>tenía que hacerme visible, viral y deseada.</strong>
                </p>
                
                <p>
                  Probé absolutamente de todo: me equivoqué, acerté, invertí en formaciones, testeé miles de ideas y formatos…
                </p>
                
                <p>
                  Hasta que logré ordenar todo lo que funciona en <strong>una fórmula concreta, accionable y simple</strong>.
                </p>

                <div className="bg-cyan-100 p-8 rounded-2xl text-center my-8">
                  <p className="text-2xl font-bold text-cyan-800">
                    Unlock Viral no es otro curso de contenido.
                  </p>
                  <p className="text-xl text-cyan-700 mt-4">
                    Es la llave que desbloqueó mi visibilidad, mi posicionamiento y mis ventas.
                  </p>
                </div>

                <div className="text-center my-12">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop" 
                    alt="Los 5 Pasos" 
                    className="rounded-2xl shadow-xl mx-auto max-w-full"
                  />
                </div>

                <p>
                  No te lo digo desde los millones de seguidores. Te lo digo desde el lugar real de quien construyó todo <strong>desde cero</strong>, convirtiendo cada error en parte de una metodología.
                </p>
                
                <p>
                  Desde que uso este sistema, <strong>mi marca personal no dejó de crecer</strong>, mi comunidad se volvió sólida y empecé a generar resultados no solo para mí, sino también para las alumnas que aplican esta fórmula con compromiso.
                </p>

                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-8 rounded-2xl text-center">
                  <p className="text-xl mb-4">Hoy te doy acceso a esa fórmula:</p>
                  <p className="text-2xl font-bold mb-4">
                    Los <span className="text-cyan-200">5 pasos exactos</span> que me llevaron a diferenciarme, ser escuchada, generar deseo… y vender.
                  </p>
                  <p className="text-lg mb-4">
                    Los mismos por los que muchos me han pagado mentorías personalizadas de hasta $2.000 USD…
                  </p>
                  <p className="text-2xl font-bold">
                    Y que hoy te entrego prácticamente <span className="text-cyan-200">regalados por solo $47.</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=500&fit=crop" 
                alt="Mockups del curso" 
                className="rounded-2xl shadow-2xl mx-auto max-w-full"
              />
            </div>

            {/* Modules */}
            <div className="space-y-16">
              {[
                {
                  step: "PASO #1: Abrí el cofre de Herramientas",
                  title: "LA LLAVE PARA DEJAR DE SENTIRTE INVISIBLE EN REDES",
                  description: "¿Te pasó alguna vez que subiste un video con toda la ilusión del mundo y... 423 views? Ahí llega la frustración de que el algoritmo te odia. La verdad es que las redes no están en tu contra, sino que estás hablando un idioma que el algoritmo no entiende.",
                  points: [
                    "Cómo piensan las redes sociales y por qué premian ciertos videos",
                    "Qué busca el algoritmo realmente (spoiler: no es estética, es retención)",
                    "Por qué la viralidad es la primera etapa de tu embudo de ventas",
                    "Las bases para dejar de improvisar y empezar a jugar estratégicamente"
                  ],
                  conclusion: "No más posteos al azar. Vas a entender cómo funciona este juego, y vas a tener la llave para jugarlo a tu favor."
                },
                {
                  step: "PASO #2: ENCONTRÁ TU IDEA VIRAL",
                  title: "DEJÁ DE INVENTAR EN EL AIRE. CREA CON DIRECCIÓN.",
                  description: "¿Alguna vez te sentaste a crear contenido y… te quedaste en blanco? O peor… ¿tenías ideas, pero ninguna te convencía o sentías que ya estaba todo hecho? En este módulo te enseño a generar ideas que tengan potencial real de viralizarse.",
                  points: [
                    "Cómo generar ideas virales sin copiar",
                    "Dónde buscar inspiración real (y qué mirar)",
                    "Cómo adaptar contenido de otros sin perder tu esencia",
                    "Checklist para saber si tu idea tiene chance de explotar"
                  ],
                  conclusion: "Acá empezás a crear con intención, no por intuición."
                },
                {
                  step: "PASO #3: ESTRUCTURÁ TU MENSAJE",
                  title: "DECÍ LO QUE TENÉS QUE DECIR DE UNA MANERA QUE NO PUEDAN IGNORAR",
                  description: "Una gran idea mal contada… no se viraliza. ¿Querés que vean tu video hasta el final, lo compartan, lo guarden y lo comenten? Tenés que aprender a estructurar tu guión como un verdadero estratega.",
                  points: [
                    "Cómo escribir guiones con estructura viral",
                    "Técnicas de retención y emoción que generan interacción",
                    "Hooks que capturan la atención en 3 segundos o menos",
                    "Plantillas listas para usar y adaptar a tu contenido"
                  ],
                  conclusion: "Vas a dejar de subir videos que nadie entiende o que se cortan justo cuando se ponían buenos."
                },
                {
                  step: "PASO #4: GRABATE COMO UN REFERENTE",
                  title: "TU ENERGÍA Y TU PRESENCIA TAMBIÉN SE PUEDEN ENTRENAR",
                  description: "Muchas veces tenés una idea increíble, un guión buenísimo… Pero lo grabás y algo no se siente bien. Sentís que no transmitís lo que querías. Tranquila. No es tu culpa. Solo nadie te enseñó a comunicar con intención.",
                  points: [
                    "Lenguaje corporal y expresividad frente a cámara",
                    "Cómo modular tu voz para impactar (sin sobreactuar)",
                    "Técnicas para hablar natural y con claridad",
                    "Tips para grabarte sin inseguridad y sin trabarte"
                  ],
                  conclusion: "Vas a pasar de 'se nota que está incómodo' a 'me atrapó desde que empezó a hablar'."
                },
                {
                  step: "PASO #5: EDITÁ, PUBLICÁ Y ORGANIZATE",
                  title: "SIN PLAN, NO HAY REPETICIÓN DE RESULTADOS.",
                  description: "Este es el paso que todos subestiman. ¿De qué sirve grabar si lo editás mal o perdés todos tus videos en carpetas desordenadas? Este módulo es donde todo se junta.",
                  points: [
                    "Cómo editar con ritmo aunque no seas experta",
                    "Qué publicar, cuándo y por qué",
                    "Cómo organizar tus guiones, videos y posteos en Drive",
                    "Cómo mantener constancia sin sacrificar tu salud mental"
                  ],
                  conclusion: "Este es el módulo que convierte tu talento en resultados reales y sostenibles."
                }
              ].map((module, index) => (
                <Card key={index} className="shadow-2xl border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 p-8 text-white flex items-center justify-center">
                        <img 
                          src={`https://images.unsplash.com/photo-${index % 2 === 0 ? '1649972904349-6e44c42644a7' : '1486312338219-ce68d2c6f44d'}?w=400&h=300&fit=crop&seed=${index}`}
                          alt={`Módulo ${index + 1}`}
                          className="rounded-xl shadow-lg max-w-full"
                        />
                      </div>
                      <div className="p-8">
                        <div className="bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                          {module.step}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{module.title}</h3>
                        <p className="text-gray-700 mb-6">{module.description}</p>
                        <ul className="space-y-3 mb-6">
                          {module.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <span className="text-cyan-500 font-bold mr-3 text-lg">✔️</span>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-gray-800 font-semibold bg-cyan-50 p-4 rounded-xl">
                          {module.conclusion}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <CTAButton>
                <div className="text-center">
                  <div className="text-xl font-bold">¡Quiero Desbloquear El Curso Ahora!</div>
                  <div className="text-sm opacity-90 mt-1">+3 Bonus Especiales, Por Tan Solo 47usd</div>
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
              🎁 Además, desbloqueás 3 BONUS exclusivos (totalmente GRATIS)
            </h2>

            <div className="space-y-12">
              {[
                {
                  label: "BONUS #1",
                  step: "🔓 BONUS #1: 400 Hooks Virales",
                  title: "El archivo secreto que vale oro en vistas",
                  description: "Los primeros segundos son el 80% del éxito o el fracaso. Y si no captás la atención ahí… perdiste. Por eso te regalo mi colección personal de +400 hooks virales: ideas de inicio diseñadas para detener el scroll, generar retención y activar el algoritmo.",
                  points: [
                    "Hooks para reels educativos, emocionales, de venta y de opinión",
                    "Frases listas para copiar, pegar y adaptar a tu nicho",
                    "Categorías según tipo de contenido para que elijas en segundos",
                    "Bonus extra: cómo combinar hooks con tu guión para retención máxima"
                  ],
                  conclusion: "Este es el archivo que me habría encantado tener cuando empecé. Hoy te lo regalo con el curso."
                },
                {
                  label: "BONUS #2",
                  step: "🧠 BONUS #2: Mentalidad Viral",
                  title: "El código interno de los creadores que perduran",
                  description: "Viralizarte una vez es fácil. Sostener tu crecimiento, tu energía y tu creatividad… eso es lo que nadie te enseña. La mayoría abandona antes de explotar su potencial, no porque no sepa editar o escribir… Sino porque se sabotea con creencias, miedos o exigencias imposibles.",
                  points: [
                    "Mentalidad de crecimiento y consistencia (más allá del algoritmo)",
                    "Cómo superar la comparación, el miedo al qué dirán y al fracaso",
                    "Cómo sostener tu motivación sin depender de los resultados inmediatos",
                    "Qué hábitos mentales tengo como creadora que me permiten seguir creciendo"
                  ],
                  conclusion: "Este módulo no es un 'extra de relleno'. Es lo que te va a mantener vivo en el juego cuando todos los demás se rindan."
                },
                {
                  label: "BONUS #3",
                  step: "📝 BONUS #3: Plantillas de Guiones Virales",
                  title: "Escribí como estratega, no como improvisada",
                  description: "Yo quiero que lo hagas fácil y lo más rápido posible. Por eso te regalo mis plantillas reales de guiones virales, las mismas que uso yo con mis clientes y que ya ayudaron a explotar reels con miles y millones de views.",
                  points: [
                    "Estructuras base para videos virales (emocionales, educativos, narrativos, etc.)",
                    "Plantillas editables para que no empieces de cero nunca más",
                    "Explicaciones de cada parte del guión y cómo usarla para retener",
                    "Ejemplos reales y fórmulas listas para adaptar a tu estilo"
                  ],
                  conclusion: "Este bonus es como tener mi cabeza al lado tuyo cada vez que escribís un video."
                }
              ].map((bonus, index) => (
                <Card key={index} className="shadow-2xl border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 text-center">
                      <span className="font-bold text-lg">{bonus.label}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="bg-gradient-to-br from-cyan-100 to-cyan-200 p-8 flex items-center justify-center">
                        <img 
                          src={`https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop&seed=${index + 10}`}
                          alt={`Bonus ${index + 1}`}
                          className="rounded-xl shadow-lg max-w-full"
                        />
                      </div>
                      <div className="p-8">
                        <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                          {bonus.step}
                        </div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">{bonus.title}</h3>
                        <p className="text-gray-700 mb-6">{bonus.description}</p>
                        <ul className="space-y-3 mb-6">
                          {bonus.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <span className="text-yellow-500 font-bold mr-3 text-lg">✔️</span>
                              <span className="text-gray-700">{point}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-gray-800 font-semibold bg-yellow-50 p-4 rounded-xl">
                          {bonus.conclusion}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <CTAButton>
                <div className="text-center">
                  <div className="text-xl font-bold">¡Quiero Desbloquear El Curso Ahora!</div>
                  <div className="text-sm opacity-90 mt-1">+3 Bonus Especiales, Por Tan Solo 47usd</div>
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Esto Es Todo Lo Que Vas a Desbloquear Dentro de Unlock Viral
            </h2>

            <div className="mb-12">
              <img 
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=500&fit=crop" 
                alt="Mockups completos" 
                className="rounded-2xl shadow-2xl mx-auto max-w-full"
              />
            </div>

            <Card className="shadow-2xl border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-12">
                <p className="text-xl text-gray-700 mb-8">
                  La fórmula completa para crear contenido viral, crecer en redes, posicionarte y vender…<br />
                  <span className="font-bold">Por una fracción ridícula de su verdadero valor.</span>
                </p>

                <div className="space-y-6 text-left max-w-4xl mx-auto mb-8">
                  {[
                    { title: "MÓDULO 1: ENTENDÉ EL JUEGO", desc: "Descubrí cómo funciona el algoritmo, cómo piensan las plataformas y por qué la viralidad es parte clave del embudo de ventas.", value: "$240 USD" },
                    { title: "MÓDULO 2: ENCONTRÁ IDEAS QUE SE PUEDEN VIRALIZAR", desc: "Aprendé a encontrar temas irresistibles, analizar tendencias, y adaptar contenido sin copiar.", value: "$285 USD" },
                    { title: "MÓDULO 3: ESCRIBÍ GUIONES QUE RETIENEN", desc: "Te doy mis plantillas de guión y técnicas para mantener la atención hasta el final (y generar interacción real).", value: "$420 USD" },
                    { title: "MÓDULO 4: DOMINÁ TU PRESENCIA EN CÁMARA", desc: "Mejorá cómo te comunicás, usá tu lenguaje corporal y grabate con claridad y seguridad.", value: "$265 USD" },
                    { title: "MÓDULO 5: EDITÁ, PUBLICÁ Y ESCALÁ", desc: "Aprendé a editar sin complicarte, publicá con intención y organizá tu contenido para crecer sin quemarte.", value: "$360 USD" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-start">
                        <span className="text-cyan-500 font-bold mr-4 text-xl">✓</span>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                          <p className="text-gray-700 mb-2">{item.desc}</p>
                          <p className="text-cyan-600 font-bold">💸 VALOR REAL: {item.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">🎁 Además, desbloqueás estos 3 BONUSES totalmente GRATIS:</h3>
                  <div className="space-y-4 text-left">
                    {[
                      { title: "BONUS #1: +400 HOOKS VIRALES", desc: "El archivo que te resuelve el '¿cómo empiezo este video?'", value: "$90 USD" },
                      { title: "BONUS #2: MENTALIDAD VIRAL", desc: "Tu mente es el algoritmo más importante. Acá lo entrenamos.", value: "$250 USD" },
                      { title: "BONUS #3: PLANTILLAS DE GUIONES VIRALES", desc: "Para que no pierdas tiempo armando todo desde cero.", value: "$190 USD" }
                    ].map((bonus, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border border-yellow-200">
                        <div className="flex items-start">
                          <span className="text-yellow-500 font-bold mr-4">🎁</span>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900">{bonus.title}</h4>
                            <p className="text-gray-700 text-sm mb-1">{bonus.desc}</p>
                            <p className="text-yellow-600 font-bold text-sm">💸 VALOR REAL: {bonus.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-900 text-white p-8 rounded-2xl mb-8">
                  <div className="text-center">
                    <p className="text-xl mb-4">💰 VALOR TOTAL DEL PAQUETE:</p>
                    <p className="text-4xl font-bold text-cyan-400 mb-8">$2,110 USD</p>
                    
                    <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 p-6 rounded-xl">
                      <p className="text-lg mb-2">🔓 PRECIO DE LANZAMIENTO HOY:</p>
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="text-2xl line-through text-gray-300">$2,110</span>
                        <span className="text-5xl font-bold text-white">$47 USD</span>
                      </div>
                      <p className="text-cyan-100">Un curso que vale más que muchas mentorías. Y vos lo desbloqueás con un solo clic.</p>
                    </div>
                  </div>
                </div>

                <CTAButton>
                  <div className="text-center">
                    <div className="text-2xl font-bold">¡Quiero Desbloquear El Curso Ahora!</div>
                    <div className="text-lg opacity-90 mt-2">+3 Bonus Especiales, Por Tan Solo 47usd</div>
                  </div>
                </CTAButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Preguntas Frecuentes</h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="shadow-lg border-0">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-6 text-left font-semibold text-lg text-gray-900 hover:bg-gray-50 transition-colors duration-200 flex justify-between items-center"
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                      <span className={`transform transition-transform duration-200 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            ¿Estás listo para desbloquear tu potencial viral?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Miles de personas ya están aplicando estos pasos. Es tu momento.
          </p>
          <CTAButton className="bg-white text-cyan-600 hover:bg-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold">¡Quiero Desbloquear El Curso Ahora!</div>
              <div className="text-lg mt-2">+3 Bonus Especiales, Por Tan Solo 47usd</div>
            </div>
          </CTAButton>
        </div>
      </section>
    </div>
  );
};

export default Index;
