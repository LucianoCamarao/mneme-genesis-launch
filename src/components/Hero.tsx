import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        {/* Glass Morphism Card */}
        <div className="backdrop-blur-md bg-gray-900/40 rounded-2xl p-12 border border-white/10 shadow-2xl">
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-6xl font-bold text-accent mb-4 tracking-tight">
              Mneme <span className="text-3xl md:text-4xl opacity-80">(μνήμη)</span>
            </h1>
            <p className="text-xl md:text-2xl text-accent/90 font-medium">
              Plataforma de cursos para empreendedores
            </p>
          </div>
          
          {/* Separator */}
          <div className="h-px bg-accent/20 my-8" />
          
          {/* Main Message */}
          <div className="space-y-6 mb-10">
            <p className="text-lg md:text-xl text-accent leading-relaxed">
              Pare de buscar respostas em mil lugares diferentes. Aqui você encontra informação prática, clara e aplicável.
            </p>
            
            {/* Available Now Section */}
            <div className="bg-black/30 rounded-lg p-6 border border-accent/20">
              <h2 className="text-accent font-semibold text-lg mb-3">
                Disponível agora:
              </h2>
              <p className="text-accent/90">
                <span className="font-bold">Importação Simplificada</span> — Guia completo para importar produtos legalmente e estruturar seu negócio de importação
              </p>
            </div>
          </div>
          
          {/* Value Proposition */}
          <div className="flex flex-wrap gap-4 mb-10">
            <div className="flex-1 min-w-[200px] text-center">
              <p className="text-accent font-medium text-sm md:text-base">
                Conhecimento que fica
              </p>
            </div>
            <div className="flex-1 min-w-[200px] text-center">
              <p className="text-accent font-medium text-sm md:text-base">
                Respostas quando você precisa
              </p>
            </div>
            <div className="flex-1 min-w-[200px] text-center">
              <p className="text-accent font-medium text-sm md:text-base">
                Resultados que acontecem
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg px-12 py-6 rounded-xl shadow-lg hover:shadow-accent/20 transition-all duration-300 hover:scale-105"
            >
              Comece agora sua jornada empreendedora
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
