import React, { useState } from 'react';
import { ShoppingBag, MapPin, Instagram, Clock, Award, ChevronRight, Menu, X } from 'lucide-react';

const GELATOS = [
  {
    id: 1,
    nome: 'Baunilha com Fava Natural',
    descricao: 'Base cremosa e aveludada infusionada com favas de baunilha selecionadas.',
    tag: 'Clássico',
    corTag: 'bg-amber-100 text-amber-800',
  },
  {
    id: 2,
    nome: 'Gelato de Pudim',
    descricao: 'A verdadeira experiência do pudim artesanal transformada em gelato super cremoso.',
    tag: 'Mais Vendido',
    corTag: 'bg-red-100 text-red-800',
  },
  {
    id: 3,
    nome: 'Manga Doce & Natural',
    descricao: '100% fruta, refrescante e sem conservantes. O sabor puro da estação.',
    tag: '100% Fruta',
    corTag: 'bg-orange-100 text-orange-800',
  },
  {
    id: 4,
    nome: 'Alfajor com Doce de Leite',
    descricao: 'Gelato artesanal com pedaços marcantes de alfajor e entremeio generoso de doce de leite.',
    tag: 'Autoral',
    corTag: 'bg-yellow-100 text-yellow-800',
  },
  {
    id: 5,
    nome: 'Pistache Premium',
    descricao: 'Pistache puro italiano com calda crocante de pistache e pedaços inteiros.',
    tag: 'Premium',
    corTag: 'bg-emerald-100 text-emerald-800',
  },
  {
    id: 6,
    nome: 'Iogurte com Frutas Vermelhas',
    descricao: 'Leve acidez do iogurte natural combinada com mescla artesanal de frutas vermelhas.',
    tag: 'Refrescante',
    corTag: 'bg-pink-100 text-pink-800',
  }
];

export default function LulosGelato() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C221E] font-sans selection:bg-[#B83227] selection:text-white">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-[#FDFBF7]/90 backdrop-blur-md border-b border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-serif text-3xl font-black tracking-tight text-[#B83227] italic">
              LULO'S
            </span>
            <span className="text-xs uppercase tracking-widest text-[#6E5D53] font-semibold border-l border-[#D1C7BD] pl-2">
              Gelato
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide text-[#52433B]">
            <a href="#sobre" className="hover:text-[#B83227] transition-colors">Nossa História</a>
            <a href="#sabores" className="hover:text-[#B83227] transition-colors">Sabores</a>
            <a href="#diferenciais" className="hover:text-[#B83227] transition-colors">Processo</a>
            <a href="#onde-encontrar" className="hover:text-[#B83227] transition-colors">Onde Encontrar</a>
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.instagram.com/lulosgelato"
              target="_blank"
              rel="noreferrer"
              className="p-2 text-[#52433B] hover:text-[#B83227] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <button className="bg-[#B83227] hover:bg-[#96261E] text-[#FDFBF7] px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 shadow-sm transition-all hover:shadow-md">
              <ShoppingBag className="w-4 h-4" />
              Peça no Delivery
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-[#2C221E]"
            onClick={() => setMenuAberto(!menuAberto)}
          >
            {menuAberto ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuAberto && (
          <div className="md:hidden bg-[#FDFBF7] border-b border-[#E8E1D7] px-6 py-4 flex flex-col gap-4">
            <a href="#sobre" onClick={() => setMenuAberto(false)} className="text-lg font-medium">Nossa História</a>
            <a href="#sabores" onClick={() => setMenuAberto(false)} className="text-lg font-medium">Sabores</a>
            <a href="#diferenciais" onClick={() => setMenuAberto(false)} className="text-lg font-medium">Processo</a>
            <a href="#onde-encontrar" onClick={() => setMenuAberto(false)} className="text-lg font-medium">Onde Encontrar</a>
            <button className="bg-[#B83227] text-white py-3 rounded-full font-medium flex items-center justify-center gap-2 w-full mt-2">
              <ShoppingBag className="w-5 h-5" />
              Peça no Delivery
            </button>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-16 md:py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE8DC] text-[#7A332C] text-xs font-semibold tracking-wider uppercase">
            <Award className="w-4 h-4" /> 100% Artesanal e Autoral
          </div>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-[#2C221E]">
            Tem coisa que <span className="italic font-normal text-[#B83227]">não dá pra apressar.</span>
          </h1>
          <p className="text-lg text-[#6E5D53] max-w-lg leading-relaxed">
            Gelato autêntico, feito diariamente com ingredientes frescos, receitas exclusivas e a textura perfeita que você só encontra na Lulo's.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#sabores"
              className="bg-[#B83227] hover:bg-[#96261E] text-white px-8 py-4 rounded-full font-medium text-center flex items-center justify-center gap-2 transition-all shadow-md"
            >
              Ver Cardápio <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#onde-encontrar"
              className="border border-[#D1C7BD] hover:bg-[#EFE8DC] text-[#2C221E] px-8 py-4 rounded-full font-medium text-center transition-colors"
            >
              Conhecer a Loja
            </a>
          </div>
        </div>

        {/* Hero Card / Visual Showcase */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl bg-[#EFE8DC] overflow-hidden shadow-2xl relative border-4 border-[#FDFBF7]">
            <img 
              src="https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=delicious%20artisanal%20italian%20gelato%20ice%20cream%20in%20elegant%20cup%20with%20caramel%20sauce%20gourmet%20food%20photography&image_size=portrait_4_3" 
              alt="Lulos Gelato Artesanal" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20">
              <span className="text-xs uppercase tracking-widest text-amber-200 font-semibold">Destaque do Dia</span>
              <h3 className="font-serif text-2xl font-bold mt-1">Gelato de Pudim</h3>
              <p className="text-sm text-gray-200 mt-1">Calda caramelizada e cremosidade incomparável.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais / Selos */}
      <section id="diferenciais" className="bg-[#EFE8DC] py-12 border-y border-[#E8E1D7]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="font-serif text-3xl font-bold text-[#B83227]">100%</div>
            <div className="text-sm text-[#6E5D53] font-medium mt-1">Natural & Autoral</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-[#B83227]">Sem</div>
            <div className="text-sm text-[#6E5D53] font-medium mt-1">Conservantes Artificiais</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-[#B83227]">Diário</div>
            <div className="text-sm text-[#6E5D53] font-medium mt-1">Produção Sempre Fresca</div>
          </div>
          <div>
            <div className="font-serif text-3xl font-bold text-[#B83227]">Favas</div>
            <div className="text-sm text-[#6E5D53] font-medium mt-1">Baunilha Natural Integrada</div>
          </div>
        </div>
      </section>

      {/* Cardápio de Sabores */}
      <section id="sabores" className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#B83227]">Nossa Vitrine</span>
          <h2 className="font-serif text-4xl font-bold mt-2 text-[#2C221E]">Sabores que deixam obcecado</h2>
          <p className="text-[#6E5D53] mt-3">Combinamos técnicas tradicionais italianas com receitas autorais marcantes.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {GELATOS.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl p-6 border border-[#E8E1D7] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start gap-2 mb-3">
                  <h3 className="font-serif text-xl font-bold text-[#2C221E]">{item.nome}</h3>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${item.corTag}`}>
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm text-[#6E5D53] leading-relaxed">
                  {item.descricao}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#F5F0EB] flex items-center justify-between">
                <span className="text-xs text-[#8C7A6B] font-medium">Disponível em Pote & Casquinha</span>
                <button className="text-xs font-bold text-[#B83227] hover:underline flex items-center gap-1">
                  Pedir <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Localização & Funcionamento */}
      <section id="onde-encontrar" className="bg-[#2C221E] text-[#FDFBF7] py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-200">Venha nos visitar</span>
            <h2 className="font-serif text-4xl font-bold">Lulo's em Curitiba</h2>
            <p className="text-[#D1C7BD] leading-relaxed">
              Nosso espaço foi pensado para você pausar a rotina e aproveitar o melhor gelato da cidade em um ambiente acolhedor.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#3D302B] rounded-xl text-amber-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Endereço</h4>
                  <p className="text-sm text-[#D1C7BD]">Curitiba — PR</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#3D302B] rounded-xl text-amber-200">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">Horário de Atendimento</h4>
                  <p className="text-sm text-[#D1C7BD]">Terça a Domingo: 12h às 20h</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="https://www.instagram.com/lulosgelato"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#B83227] hover:bg-[#96261E] text-white px-6 py-3 rounded-full font-medium text-sm transition-colors"
              >
                <Instagram className="w-4 h-4" /> Siga no Instagram
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-[#3D302B] p-8 border border-[#52433B] text-center space-y-4">
            <span className="font-serif text-2xl font-bold italic text-amber-200">"Comi e sinceramente: melhor sorvete da vida!"</span>
            <p className="text-xs text-[#D1C7BD] tracking-wider uppercase">— Depoimento de Cliente</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E8E1D7] py-8 px-6 text-center text-xs text-[#8C7A6B]">
        <p>© 2026 Lulo's Gelato. Todos os direitos reservados. Feito com paixão e ingredientes naturais.</p>
      </footer>
    </div>
  );
}