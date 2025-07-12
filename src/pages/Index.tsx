import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Lock, Key, Unlock } from "lucide-react";

const Index = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Auto-scroll del carrousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonialImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialImages.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialImages.length) % testimonialImages.length);
  };

  const CTAButton = ({ children, className = "", isLast = false }: { children: React.ReactNode; className?: string; isLast?: boolean }) => (
    <Button 
      className={`w-full max-w-lg mx-auto bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-12 md:py-16 px-3 md:px-4 rounded-2xl text-xs md:text-sm lg:text-base shadow-lg transition-all duration-300 border-0 hover:-translate-y-2 hover:shadow-2xl ${className}`}
      onClick={() => window.open('https://araceliprudente51-0583.freshlearn.com/checkout/Course/33936', '_blank')}
    >
      {children}
    </Button>
  );

  // Imágenes de testimonios "He ayudado a"
  const helpedImages = [
    "/lovable-uploads/b6baa57f-ee97-47e1-b9fc-d624dbeabf28.png",
    "/lovable-uploads/da9fb5ca-97f7-4cfe-ba26-d3918af40e81.png",
    "/lovable-uploads/0a411b4f-3322-42c4-9625-768568d3ca16.png",
    "/lovable-uploads/1fb89345-eab9-4e5f-acbf-204d8688feb7.png",
    "/lovable-uploads/ba0f67e2-bf9b-4e78-95bb-4e029778b431.png"
  ];

  // Imágenes de testimonios para el carrousel
  const testimonialImages = [
    "/lovable-uploads/f149839f-f86f-4160-b471-5ae7590f13dd.png",
    "/lovable-uploads/e3110264-52a6-49f6-b4f8-3fa64cc99612.png",
    "/lovable-uploads/9aeed766-0392-4b4c-a2cd-164b76b97deb.png",
    "/lovable-uploads/458b22d0-869e-4fd8-ace1-e6fbbd8e2280.png",
    "/lovable-uploads/4769216b-dc3e-447f-8861-b878c8290cdb.png",
    "/lovable-uploads/52445746-d60b-4ab6-b4c8-121a2e199ea4.png",
    "/lovable-uploads/d204411a-481c-4b83-9bda-837fed21bf7f.png",
    "/lovable-uploads/abeb6912-6e67-4fab-9bd0-b8b7b7781db3.png",
    "/lovable-uploads/6bb6bff5-a3a4-4e0f-8131-1cc29d96226f.png",
    "/lovable-uploads/c115a6bc-76c7-450b-8139-d9820aefbee7.png",
    "/lovable-uploads/6e633f9c-9a79-4f91-9145-01f9b4cc1fec.png",
    "/lovable-uploads/e4519468-b90e-4918-969e-0a741d667d74.png",
    "/lovable-uploads/7a7be652-1ca2-430d-87a0-015a17359a4f.png",
    "/lovable-uploads/a9b2e28a-e4df-494d-9489-061f7a22e61b.png",
    "/lovable-uploads/6cc5eb8c-a121-431e-9a41-e9940e157d3c.png",
    "/lovable-uploads/870af22a-38be-43a0-a13a-55b25ea31b0f.png"
  ];

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
              src="/lovable-uploads/d52eb172-4f26-4f4a-919d-72050880f3b8.png" 
              alt="Unlock Viral Logo" 
              className="h-8 md:h-10 object-contain"
            />
          </div>
        </div>
      </header>

      {/* Hero Section - Cyan gradient background */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-cyan-50 via-cyan-25 to-blue-50 relative overflow-hidden">
        {/* Enhanced Background Icons with more elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-cyan-200 opacity-15">
            <Lock className="w-14 h-14 animate-float" />
          </div>
          <div className="absolute top-32 right-20 text-purple-200 opacity-15">
            <Key className="w-12 h-12 animate-bounce-subtle" />
          </div>
          <div className="absolute bottom-40 left-20 text-cyan-200 opacity-15">
            <Unlock className="w-16 h-16 animate-pulse" />
          </div>
          <div className="absolute top-60 right-10 text-purple-200 opacity-15">
            <Lock className="w-10 h-10 animate-float" />
          </div>
          <div className="absolute bottom-20 right-32 text-cyan-200 opacity-15">
            <Key className="w-18 h-18 animate-bounce-subtle" />
          </div>
          <div className="absolute top-80 left-32 text-purple-200 opacity-15">
            <Unlock className="w-12 h-12 animate-pulse" />
          </div>
          <div className="absolute top-40 left-1/2 text-cyan-200 opacity-10">
            <Lock className="w-22 h-22 animate-float" />
          </div>
          <div className="absolute bottom-60 right-1/2 text-purple-200 opacity-10">
            <Key className="w-20 h-20 animate-bounce-subtle" />
          </div>
          {/* Additional floating icons */}
          <div className="absolute top-16 left-1/4 text-cyan-300 opacity-12">
            <Unlock className="w-8 h-8 animate-pulse" />
          </div>
          <div className="absolute bottom-32 left-1/3 text-purple-300 opacity-12">
            <Lock className="w-11 h-11 animate-float" />
          </div>
          <div className="absolute top-72 right-1/4 text-cyan-300 opacity-12">
            <Key className="w-9 h-9 animate-bounce-subtle" />
          </div>
          <div className="absolute bottom-16 left-2/3 text-purple-300 opacity-12">
            <Unlock className="w-13 h-13 animate-pulse" />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="bg-cyan-100 text-cyan-800 px-4 md:px-6 py-2 md:py-3 rounded-full inline-block mb-4 md:mb-6 font-semibold text-xs md:text-sm">
              LA LLAVE QUE DESBLOQUEA VIRALIDAD REAL EN REDES
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight max-w-6xl mx-auto px-2">
              Los 5 Pasos Que Me Llevaron De{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                0 A +100K Seguidores
              </span>{" "}
              Y Hoy Podés Usar Para{" "}
              <span className="bg-gradient-to-r from-cyan-500 via-cyan-600 to-purple-600 bg-clip-text text-transparent">
                Vender Con Tu Contenido
              </span>
            </h1>

            <div className="mb-6 md:mb-8 font-semibold text-sm md:text-base max-w-3xl mx-auto">
              <strong className="text-red-600">IMPORTANTE:</strong> <span className="text-gray-800">"Mirá hasta el final si querés saber cómo conseguirlo con el mismo sistema que YA usan mis alumnos."</span>
            </div>

            {/* Video Section - Changed to Loom */}
            <div className="relative max-w-3xl mx-auto mb-6 md:mb-8 px-4">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                <div className="aspect-video">
                  <iframe 
                    src="https://www.loom.com/embed/f812f47443004b04a81f26d59cfae3c0"
                    title="Unlock Viral VSL"
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <CTAButton>
              <div className="flex flex-col items-center gap-1">
                <span className="text-sm md:text-base lg:text-lg font-bold">¡Quiero Desbloquear El Curso Ahora!</span>
                <div className="text-xs opacity-90 font-medium">+3 Bonus Especiales, Por Tan Solo 67usd</div>
              </div>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* About Section - White background for contrast */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-4 text-sm md:text-base">
              <p className="text-gray-700">
                <strong><span className="highlight-text">Soy Araceli Prudente.</span></strong>
              </p>

              {/* Araceli's image moved here and centered */}
              <div className="animate-fade-in my-6 flex justify-center">
                <img 
                  src="/lovable-uploads/9dacb8c7-8bf2-496c-9f71-9c1d73de4f6e.png" 
                  alt="Araceli Prudente" 
                  className="rounded-3xl shadow-2xl w-full max-w-xs md:max-w-sm"
                />
              </div>
              
              <p className="text-gray-700">
                No me hice viral de casualidad, me hice viral porque estudié y <strong>EXPERIMENTÉ</strong> cómo hacerlo.
              </p>
              
              <p className="text-gray-700">
                Hace dos años arranqué en el mundo digital con una sola obsesión: entender qué hace que un contenido <strong>EXPLOTE</strong>.
              </p>

              <div className="bg-cyan-50 p-4 md:p-6 rounded-xl max-w-3xl mx-auto">
                <p className="font-semibold text-gray-800 mb-4">Hoy:</p>
                <ul className="space-y-2 text-gray-700 text-left">
                  <li className="flex items-start">
                    <span className="text-cyan-500 font-bold mr-3">•</span>
                    Formé a más de 300 alumnos con resultados,
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 font-bold mr-3">•</span>
                    Crecí más de 100.000 seguidores en menos de 1 año,
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 font-bold mr-3">•</span>
                    trabajé con más de 21 marcas y creadores de distintos nichos y países
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 font-bold mr-3">•</span>
                    Logré hacerme un nombre en la industria del marketing digital desde cero siendo mujer.
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-500 font-bold mr-3">•</span>
                    Generé +800.000 dólares para mis clientes
                  </li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 md:p-6 rounded-xl max-w-3xl mx-auto">
                <p className="text-gray-700 mb-4">
                  Y no, no te doy hacks vacíos como qué hashtag tenés que poner.
                </p>
                <p className="text-gray-700 mb-4">
                  Desarrollé un método replicable que hoy usan creadores, emprendedores y profesionales que pagan hasta <strong><span className="text-cyan-600">2.000 USD en otras mentorías 1 a 1</span></strong>.
                </p>
                <p className="text-gray-700 mb-4">
                  Por primera vez, <strong><span className="highlight-text">lo empaqué en un curso directo al grano. Accesible. Efectivo.</span></strong>
                </p>
                <p className="text-gray-700 mb-4">
                  Si querés dejar de probar al azar y empezar a crear contenido que realmente funcione, esto es para vos.
                </p>
                <p className="text-gray-700 font-semibold">
                  Y si estás leyendo esto, podés desbloquearlo ahora.
                </p>
              </div>

              <div className="pt-6">
                <CTAButton>
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <span className="text-base md:text-lg lg:text-xl font-bold">¡Quiero Desbloquear El Curso Ahora!</span>
                    <div className="text-xs md:text-sm opacity-90 font-medium">+3 Bonus Especiales, Por Tan Solo 67usd</div>
                  </div>
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Target Section - Cyan background */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#06B0CA' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-white">
              🔍 Unlock Viral es para vos si…
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 text-left">
              {[
                "Sentís que hacés contenido pero nadie lo ve ni lo comparte.",
                "Tenés ideas, pero te cuesta estructurarlas y grabarte con seguridad.",
                "Querés crecer en redes, pero sin copiar lo que hacen todos.",
                "Estás cansado de probar tips sueltos y querés una fórmula que funcione en serio."
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-cyan-100">
                  <div className="flex items-start">
                    <span className="text-cyan-500 font-bold mr-4 text-lg md:text-xl">✓</span>
                    <p className="text-black text-sm md:text-lg leading-relaxed">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section 1 - Cyan gradient background */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">He ayudado a...</h2>
          
          {/* First row - 3 images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto mb-4">
            {helpedImages.slice(0, 3).map((image, i) => (
              <img 
                key={i}
                src={image}
                alt={`Cliente ${i + 1}`}
                className="rounded-xl shadow-lg w-full h-auto max-h-96 md:max-h-[420px] object-contain bg-white hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
          
          {/* Second row - 2 images centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {helpedImages.slice(3, 5).map((image, i) => (
              <img 
                key={i + 3}
                src={image}
                alt={`Cliente ${i + 4}`}
                className="rounded-xl shadow-lg w-full h-auto max-h-96 md:max-h-[420px] object-contain bg-white hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section 2 - Darker cyan background for contrast */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-cyan-200 to-blue-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-900">Algunos Testimonios...</h2>
          
          {/* Desktop Carousel - Enhanced photo size */}
          <div className="hidden md:block relative max-w-6xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * (100 / 3)}%)` }}
              >
                {testimonialImages.map((image, i) => (
                  <div key={i} className="w-1/3 flex-shrink-0 px-2">
                    <img 
                      src={image}
                      alt={`Testimonio ${i + 1}`}
                      className="rounded-xl shadow-lg w-full h-96 object-contain bg-gray-50"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Controles del carrousel */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-200"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            {/* Indicadores */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonialImages.slice(0, testimonialImages.length - 2).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentTestimonial === i ? 'bg-cyan-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile Vertical Grid */}
          <div className="md:hidden grid grid-cols-1 gap-4 max-w-sm mx-auto">
            {testimonialImages.slice(0, 15).map((image, i) => (
              <img 
                key={i}
                src={image}
                alt={`Testimonio ${i + 1}`}
                className="rounded-xl shadow-lg w-full h-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Formula Introduction - White background */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-5xl mx-auto shadow-2xl border-0">
            <CardContent className="p-6 md:p-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6 md:mb-8 text-gray-900">
                Dediqué Los Últimos 2 Años A Descifrar Esta Fórmula
              </h2>
              
              <p className="text-lg md:text-xl text-center mb-6 md:mb-8 font-semibold text-gray-800">
                <strong>Y NADA me ayudó más a crecer mi marca personal y escalar mi negocio que lo que enseño en <em className="highlight-text">Unlock Viral</em>.</strong>
              </p>

              <div className="space-y-4 md:space-y-6 text-base md:text-lg text-gray-700 max-w-4xl mx-auto">
                <p>
                  Empecé en redes porque sabía que, si quería escalar mi agencia y convertirme en una referente, <strong>tenía que hacerme visible, viral y deseada.</strong>
                </p>
                
                <p>
                  Probé absolutamente de todo: me equivoqué, acerté, invertí en formaciones, testeé miles de ideas y formatos…
                </p>
                
                <p>
                  Hasta que logré ordenar todo lo que funciona en <strong>una fórmula concreta, accionable y simple</strong>.
                </p>

                <div className="flex justify-center my-6">
                  <img 
                    src="/lovable-uploads/5pasos1.png" 
                    alt="Ejemplo viral Pope in the Pool" 
                    className="rounded-xl shadow-lg max-w-full w-48 md:w-64"
                  />
                </div>

                <div className="bg-cyan-100 p-6 md:p-8 rounded-2xl text-center my-6 md:my-8">
                  <p className="text-xl md:text-2xl font-bold text-cyan-800">
                    Unlock Viral no es otro curso de contenido.
                  </p>
                  <p className="text-lg md:text-xl text-cyan-700 mt-4">
                    Es la llave que desbloqueó mi visibilidad, mi posicionamiento y mis ventas.
                  </p>
                </div>

                <p>
                  No te lo digo desde los millones de seguidores. Te lo digo desde el lugar real de quien construyó todo <strong>desde cero</strong>, convirtiendo cada error en parte de una metodología.
                </p>
                
                <p>
                  Desde que uso este sistema, <strong>mi marca personal no dejó de crecer</strong>, mi comunidad se volvió sólida y empecé a generar resultados no solo para mí, sino también para las alumnas que aplican esta fórmula con compromiso.
                </p>

                <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white p-6 md:p-8 rounded-2xl text-center">
                  <p className="text-lg md:text-xl mb-4">Hoy te doy acceso a esa fórmula:</p>
                  <p className="text-xl md:text-2xl font-bold mb-4">
                    Los <span className="text-cyan-200">5 pasos exactos</span> que me llevaron a diferenciarme, ser escuchada, generar deseo… y vender.
                  </p>
                  <p className="text-base md:text-lg mb-4">
                    Los mismos por los que muchos me han pagado mentorías personalizadas de hasta $2.000 USD…
                  </p>
                  <p className="text-xl md:text-2xl font-bold">
                    Y que hoy te entrego prácticamente <span className="text-cyan-200">regalados por solo $67.</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Content - Gray gradient background */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <img 
                src="/lovable-uploads/f081edd5-0715-449a-a196-292ae7497ab4.png" 
                alt="Los 5 Pasos" 
                className="rounded-2xl shadow-xl mx-auto max-w-full w-80 md:w-96"
              />
            </div>

            {/* Modules */}
            <div className="space-y-12 md:space-y-16">
              {[
                {
                  image: "/lovable-uploads/13561307-0c64-46c4-aa64-39396fdd7823.png",
                  step: "🧰 PASO 1 – Abrí El Cofre: Entendé el juego antes de jugarlo mal.",
                  stepNumber: "01",
                  title: "LA LLAVE PARA DEJAR DE SENTIRTE INVISIBLE EN REDES",
                  description: "¿Te pasó alguna vez que subiste un video con toda la ilusión del mundo y... 423 views?\nEl algoritmo no te odia. Solo no entiende tu idioma.\nAcá te enseño a hablarle claro, para que te muestre y te escuche.",
                  points: [
                    "Cómo piensa el algoritmo y por qué todavía no te muestra",
                    "Qué busca el algoritmo en cada video (pista: no es la estética)",
                    "Cómo usar la viralidad como puerta de entrada a las ventas",
                    "La estrategia para dejar de subir por intuición y empezar a escalar con intención"
                  ],
                  conclusion: "No más posteos al azar. Vas a entender cómo funciona este juego, y vas a tener la llave para jugarlo a tu favor."
                },
                {
                  image: "/lovable-uploads/bd100388-8932-4bb3-954a-7a050b0c0925.png",
                  step: "PASO #2: Encontrá Tu Idea Viral: Dejá de tirar ideas al aire y empezá a crear con intención.",
                  stepNumber: "02",
                  title: "Deja de improvisar, el algoritmo no sabe a quién mostrarte.",
                  description: "¿Alguna vez te sentaste a grabar y no supiste por dónde empezar?\n¿O tenías varias ideas... pero ninguna te convencía?\n\nEsa incertidumbre te frena más de lo que pensás.\n\nEn este módulo vas a aprender a detectar ideas con potencial real de viralidad, adaptarlas a tu estilo, y encontrar oportunidades incluso en lo que hoy estás pasando por alto.\n\nNada de copiar. Nada de repetir fórmulas vacías.\nAcá empezás a crear con dirección, no con dudas.",
                  points: [
                    "Cómo generar ideas virales sin copiar",
                    "Dónde encontrar inspiración real, basta de scrollear sin rumbo",
                    "Cómo adaptar contenido de otros",
                    "Checklist para validar si tu idea tiene el potencial de explotar antes de grabar"
                  ],
                  conclusion: "No necesitás más ideas. Necesitás saber cuál vale la pena.\nAcá empezás a crear con intención, no por intuición."
                },
                {
                  image: "/lovable-uploads/a5a2ce66-34c8-4aae-84de-856c15715ec5.png",
                  step: "PASO 3 – Estructurá Tu Mensaje: Aprendé a decirlo como alguien que quiere ser escuchado.",
                  stepNumber: "03",
                  title: "No es lo que decís. Es cómo lo decís lo que hace que te escuchen.",
                  description: "Seguro alguna vez tuviste una buena idea, pero cuando la grabaste y publicaste… no generó nada.\n\nNi likes, ni compartidos, ni comentarios.\n\nEl problema no era la idea. Era cómo la dijiste.\n\nEn este módulo vas a aprender a estructurar tus guiones para captar atención desde el primer segundo, mantenerla hasta el final y provocar interacción real.\n\nNo es actuar, es saber cómo guiar la atención segundo a segundo.",
                  points: [
                    "Cómo escribir guiones con estructura viral",
                    "Técnicas de retención y emoción",
                    "Hooks para enganchar desde el segundo uno",
                    "Plantillas listas para tener todo claro desde el comienzo"
                  ],
                  conclusion: "Vas a dejar de subir videos que nadie entiende o que se cortan justo cuando se ponían buenos."
                },
                {
                  image: "/lovable-uploads/37b60711-53c0-475e-996f-92434c993a2a.png",
                  step: "🎥 PASO 4 – Grabate Como Un Referente: Mostrate con seguridad, incluso si nunca te sentiste cómodo frente a cámara.",
                  stepNumber: "04",
                  title: "Tu presencia también se puede entrenar. Y cuando aparece, se nota.",
                  description: "¿Tenés una buena idea y un guión sólido… pero al grabarte, no se siente bien?\n¿Sentís que no transmitís lo que querías, que algo se pierde en cámara?\n\nTranquila. No es tu culpa. Solo nadie te enseñó a comunicar con intención.\n\nEn este módulo vas a aprender a comunicar con presencia, claridad y confianza, sin actuar ni forzar nada.\nPorque mostrarte no debería ser un peso… sino una herramienta.",
                  points: [
                    "Cómo usar el lenguaje corporal y tus expresiones para transmitir con claridad",
                    "Técnicas para sentirte cómodo frente a cámara, incluso si hoy no te gusta cómo salís",
                    "Herramientas para hablar natural, sin trabarte ni olvidar lo que querías decir",
                    "Tips para grabarte sin inseguridad y empezar a disfrutar el proceso"
                  ],
                  conclusion: "Vas a pasar de 'se nota que está incómodo' a 'me atrapó desde que empezó a hablar'."
                },
                {
                  image: "/lovable-uploads/993b0e75-dddb-4015-9472-03d0a3c1406c.png",
                  step: "🧩 PASO 5 – Editá, Publicá y Organizate: Creá contenido sin sentirte desbordado ni improvisar nunca más.",
                  stepNumber: "05",
                  title: "Sin un plan, no hay repetición de resultados. Y sin repetición, no hay crecimiento.",
                  description: "Este es el paso que todos subestiman. ¿De qué sirve grabar si lo editás mal o perdés todos tus videos en carpetas desordenadas? Este módulo es donde todo se junta.",
                  points: [
                    "Cómo editar con ritmo aunque no seas experta",
                    "Qué publicar, cuándo y por qué",
                    "Cómo organizar tus guiones, videos y posteos en Drive",
                    "Cómo mantener constancia sin sacrificar tu salud mental"
                  ],
                  conclusion: "Vas a dejar de 'hacer lo que podés' para empezar a crear con un plan que podés sostener en el tiempo. Convirtiendo tu talento en resultados reales y sostenibles."
                }
              ].map((module, index) => (
                <Card key={index} className="shadow-2xl border-0 overflow-hidden bg-white hover:shadow-3xl transition-all duration-300 relative">
                  {/* Step Number Overlay - moved to top-left */}
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white px-3 md:px-4 py-2 rounded-full font-bold text-sm md:text-base shadow-lg">
                    PASO {module.stepNumber}
                  </div>
                  
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 flex items-center justify-center relative pt-16 md:pt-8">
                        <img 
                          src={module.image}
                          alt={`Módulo ${index + 1}`}
                          className="rounded-xl shadow-lg max-w-full w-48 md:w-72 hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6 md:p-8 bg-white pt-16 md:pt-8">
                        <div className="bg-gradient-to-r from-cyan-100 to-cyan-50 text-cyan-800 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 inline-block border border-cyan-200">
                          {module.step}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 leading-tight">{module.title}</h3>
                        <p className="text-gray-700 mb-4 md:mb-6 whitespace-pre-line text-sm md:text-base leading-relaxed">{module.description}</p>
                        <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                          {module.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <span className="text-cyan-500 font-bold mr-3 text-base md:text-lg">✔️</span>
                              <span className="text-gray-700 text-sm md:text-base leading-relaxed">{point}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="bg-gradient-to-r from-cyan-50 to-cyan-25 p-3 md:p-4 rounded-xl border-l-4 border-cyan-500">
                          <p className="text-gray-800 font-semibold whitespace-pre-line text-sm md:text-base leading-relaxed">
                            {module.conclusion}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 md:mt-16">
              <CTAButton>
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm md:text-base lg:text-lg font-bold">¡Quiero Desbloquear El Curso Ahora!</span>
                  <div className="text-xs opacity-90 font-medium">+3 Bonus Especiales, Por Tan Solo 67usd</div>
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section - Dark blue gradient background */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16 text-white">
              🎁 Además, desbloqueás 3 BONUS exclusivos (totalmente GRATIS)
            </h2>

            <div className="space-y-8 md:space-y-12">
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
                  conclusion: "Este es el archivo que me habría encantado tener cuando empecé. Hoy te lo regalo con el curso.",
                  image: "/lovable-uploads/cb6e40fb-4a8b-452b-8be2-cbaed9a3976c.png"
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
                  conclusion: "Este módulo no es un 'extra de relleno'. Es lo que te va a mantener vivo en el juego cuando todos los demás se rindan.",
                  image: "/lovable-uploads/7b112151-c5ee-4f42-a409-65889da8f519.png"
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
                  conclusion: "Este bonus es como tener mi cabeza al lado tuyo cada vez que escribes un video.",
                  image: "/lovable-uploads/3b318131-11ca-478c-bfd7-c8955d4d6696.png"
                }
              ].map((bonus, index) => (
                <Card key={index} className="shadow-2xl border-0 overflow-hidden bg-white">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-3 md:p-4 text-center">
                      <span className="font-bold text-base md:text-lg">{bonus.label}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="bg-white p-6 md:p-8 flex items-center justify-center">
                        <img 
                          src={bonus.image}
                          alt={`Bonus ${index + 1}`}
                          className="rounded-xl shadow-lg max-w-full w-48 md:w-72"
                        />
                      </div>
                      <div className="p-6 md:p-8">
                        <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold mb-4 inline-block">
                          {bonus.step}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">{bonus.title}</h3>
                        <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base">{bonus.description}</p>
                        <ul className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                          {bonus.points.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start">
                              <span className="text-blue-500 font-bold mr-3 text-base md:text-lg">✔️</span>
                              <span className="text-gray-700 text-sm md:text-base">{point}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-gray-800 font-semibold bg-blue-50 p-3 md:p-4 rounded-xl text-sm md:text-base">
                          {bonus.conclusion}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12 md:mt-16">
              <CTAButton>
                <div className="flex flex-col items-center gap-1 md:gap-2">
                  <span className="text-base md:text-lg lg:text-xl font-bold">¡Quiero Desbloquear El Curso Ahora!</span>
                  <div className="text-xs md:text-sm opacity-90 font-medium">+3 Bonus Especiales, Por Tan Solo 67usd</div>
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Light background for contrast */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-cyan-50 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 text-gray-900">
              Esto Es Todo Lo Que Vas a Desbloquear Dentro de Unlock Viral
            </h2>

            <div className="mb-8 md:mb-12">
              <img 
                src="/lovable-uploads/89fb2c1f-04f6-4af2-8d3d-e891bc97e143.png" 
                alt="Mockups completos" 
                className="rounded-2xl shadow-2xl mx-auto max-w-full w-64 md:w-80"
              />
            </div>

            <Card className="shadow-2xl border-0 bg-gradient-to-br from-gray-50 to-white">
              <CardContent className="p-6 md:p-12">
                <p className="text-lg md:text-xl text-gray-700 mb-6 md:mb-8">
                  La fórmula completa para crear contenido viral, crecer en redes, posicionarte y vender…<br />
                  <span className="font-bold">Por una fracción ridícula de su verdadero valor.</span>
                </p>

                <div className="space-y-4 md:space-y-6 text-left max-w-4xl mx-auto mb-6 md:mb-8">
                  {[
                    { title: "MÓDULO 1: ENTENDÉ EL JUEGO", desc: "Descubrí cómo funciona el algoritmo, cómo piensan las plataformas y por qué la viralidad es parte clave del embudo de ventas.", value: "$240 USD" },
                    { title: "MÓDULO 2: ENCONTRÁ IDEAS QUE SE PUEDAN VIRALIZAR", desc: "Aprendé a encontrar temas irresistibles, analizar tendencias, y adaptar contenido sin copiar.", value: "$285 USD" },
                    { title: "MÓDULO 3: ESCRIBÍ GUIONES QUE RETIENEN", desc: "Te doy mis plantillas de guión y técnicas para mantener la atención hasta el final (y generar interacción real).", value: "$420 USD" },
                    { title: "MÓDULO 4: DOMINÁ TU PRESENCIA EN CÁMARA", desc: "Mejorá cómo te comunicás, usá tu lenguaje corporal y grabate con claridad y seguridad.", value: "$265 USD" },
                    { title: "MÓDULO 5: EDITÁ, PUBLICÁ Y ESCALÁ", desc: "Aprendé a editar sin complicarte, publicá con intención y organizá tu contenido para crecer sin quemarte.", value: "$360 USD" }
                  ].map((item, index) => (
                    <div key={index} className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-start">
                        <span className="text-cyan-500 font-bold mr-4 text-lg md:text-xl">✓</span>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-2 text-sm md:text-base">{item.title}</h4>
                          <p className="text-gray-700 mb-2 text-xs md:text-sm">{item.desc}</p>
                          <p className="text-cyan-600 font-bold text-sm md:text-base">💸 VALOR REAL: {item.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 md:p-8 rounded-2xl mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">🎁 Además, desbloqueás estos 3 BONUSES totalmente GRATIS:</h3>
                  <div className="space-y-3 md:space-y-4 text-left">
                    {[
                      { title: "BONUS #1: +400 HOOKS VIRALES", desc: "El archivo que te resuelve el '¿cómo empiezo este video?'", value: "$90 USD" },
                      { title: "BONUS #2: MENTALIDAD VIRAL", desc: "Tu mente es el algoritmo más importante. Acá lo entrenamos.", value: "$250 USD" },
                      { title: "BONUS #3: PLANTILLAS DE GUIONES VIRALES", desc: "Para que no pierdas tiempo armando todo desde cero.", value: "$190 USD" }
                    ].map((bonus, index) => (
                      <div key={index} className="bg-white p-3 md:p-4 rounded-lg border border-yellow-200">
                        <div className="flex items-start">
                          <span className="text-yellow-500 font-bold mr-4">🎁</span>
                          <div className="flex-1">
                            <h4 className="font-bold text-gray-900 text-sm md:text-base">{bonus.title}</h4>
                            <p className="text-gray-700 text-xs md:text-sm mb-1">{bonus.desc}</p>
                            <p className="text-yellow-600 font-bold text-xs md:text-sm">💸 VALOR REAL: {bonus.value}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-900 text-white p-6 md:p-8 rounded-2xl mb-6 md:mb-8">
                  <div className="text-center">
                    <p className="text-lg md:text-xl mb-4">💰 VALOR TOTAL DEL PAQUETE:</p>
                    <p className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6 md:mb-8">$2,110 USD</p>
                    
                    {/* Updated price banner without background */}
                    <div className="p-4 md:p-6 rounded-xl mb-6">
                      <p className="text-base md:text-lg mb-2 text-gray-300">🔓 PRECIO DE LANZAMIENTO HOY:</p>
                      <div className="flex items-center justify-center gap-4 mb-4">
                        <span className="text-xl md:text-2xl line-through text-gray-400">$2,110</span>
                        <span className="text-4xl md:text-5xl font-bold text-white">$67 USD</span>
                      </div>
                      <p className="text-gray-300 text-sm md:text-base">Un curso que vale más que muchas mentorías. Y vos lo desbloqueás con un solo clic.</p>
                    </div>
                  </div>
                </div>

                {/* Updated CTA button to match other CTAs */}
                <CTAButton>
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <span className="text-sm md:text-base lg:text-lg font-bold">¡Quiero Desbloquear El Curso Ahora!</span>
                    <div className="text-xs opacity-90 font-medium">+3 Bonus Especiales, Por Tan Solo 67usd</div>
                  </div>
                </CTAButton>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section - Blue-tinted background */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-cyan-25 to-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-900">Preguntas Frecuentes</h2>
            
            <div className="space-y-3 md:space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="shadow-lg border-0 overflow-hidden bg-white hover:shadow-xl transition-all duration-300 rounded-2xl">
                  <CardContent className="p-0">
                    <button
                      className="w-full p-4 md:p-6 lg:p-8 text-left font-bold text-base md:text-lg lg:text-xl text-gray-900 hover:bg-gradient-to-r hover:from-cyan-50 hover:to-transparent transition-all duration-300 flex justify-between items-center"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <span className={`transform transition-transform duration-300 text-cyan-500 text-xl md:text-2xl flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    {expandedFaq === index && (
                      <div className="px-4 md:px-6 lg:px-8 pb-4 md:pb-6 lg:pb-8 bg-gradient-to-r from-cyan-50 to-transparent">
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base lg:text-lg">{faq.answer}</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Footer CTA - Cyan gradient (same as before) */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8">
            ¿Estás listo para desbloquear tu potencial viral?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90">
            Miles de personas ya están aplicando estos pasos. Es tu momento.
          </p>
          <CTAButton className="bg-white text-cyan-600 hover:bg-gray-100">
            <div className="flex flex-col items-center gap-1">
              <span className="text-sm md:text-base lg:text-lg font-bold">¡Quiero Desbloquear El Curso Ahora!</span>
              <div className="text-xs opacity-90 font-medium">+3 Bonus Especiales, Por Tan Solo 67usd</div>
            </div>
          </CTAButton>
        </div>
      </section>

      {/* Footer - Dark background */}
      <footer className="py-6 md:py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm md:text-base">
            Diseñado por{" "}
            <span className="text-purple-400 font-semibold">
              AdvantX
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
