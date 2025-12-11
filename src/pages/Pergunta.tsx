import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Pergunta = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 via-gray-600 to-gray-400 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar
        </Link>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-light text-accent mb-12">
          Faça sua pergunta
        </h1>

        {/* Form */}
        <div className="space-y-8">
          {/* First field */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-accent text-lg">
              <span className="text-accent">•</span>
              Como posso ajudar:
            </label>
            <Input 
              className="bg-white border-2 border-accent/50 h-14 text-foreground placeholder:text-muted-foreground"
              placeholder="Digite sua dúvida..."
            />
          </div>

          {/* Second field */}
          <div className="space-y-3">
            <label className="flex items-center gap-2 text-accent text-lg">
              <span className="text-accent">•</span>
              Vamos lá:
            </label>
            <Textarea 
              className="bg-white border-2 border-accent/50 min-h-[200px] text-foreground placeholder:text-muted-foreground resize-none"
              placeholder="Descreva com mais detalhes..."
            />
          </div>

          {/* Submit button */}
          <div className="pt-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-6"
            >
              Enviar pergunta
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pergunta;
