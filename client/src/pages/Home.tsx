import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock, Instagram, Facebook } from "lucide-react";

/**
 * VILA GYM - Design Philosophy: Raw Athletic Authority
 * Dark backgrounds with vibrant orange accents, bold uppercase typography,
 * dramatic imagery, and functional layout. No minimalism, no softness.
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Fixed WhatsApp Button */}
      <a
        href="https://api.whatsapp.com/send?phone=5514997442220&text=Olá%21%20Gostaria%20de%20saber%20a%20respeito%20dos%20planos%20da%20VILA%20GYM."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-primary hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110"
        aria-label="Contato WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <a href="/" className="flex items-center">
            <img src="/logo-vila-gym.png" alt="VILA GYM" className="h-32 w-auto" />
          </a>
          <div className="hidden md:flex gap-8 text-sm font-semibold uppercase">
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#modalidades" className="hover:text-primary transition-colors">Modalidades</a>
            <a href="#planos" className="hover:text-primary transition-colors">Planos</a>
            <a href="#horarios" className="hover:text-primary transition-colors">Horários</a>
            <a href="#checkin" className="hover:text-primary transition-colors">Check-in</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/RDoRXpqifE4txw5hLBFTZe/sandbox/ijpkxyIAajp7w12CgNDTZF-img-1_1771865605000_na1fn_aGVyby1hdGhsZXRl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUkRvUlhwcWlmRTR0eHc1aExCRlRaZS9zYW5kYm94L2lqcGt4eUlBYWpwN3cxMkNnTkRUWkYtaW1nLTFfMTc3MTg2NTYwNTAwMF9uYTFmbl9hR1Z5YnkxaGRHaHNaWFJsLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=WrkvWSnNmeEC4RT3HnIzox66uJEa8J5bk~hRvKxC9NNEgb8KaH-1GNwa7MPLa05ndWHRmTxy5EuJhgp~WfHlqHwU4yRPOiuoyxxTmKVf1C9C5w7I3deeUYTHctBqxfC53Ygm0WN-woFSQFlFc49vG2cKEP4Oq3~oXMhMnot3fRcdPSNrevs4fgyLnJn9LcJT9pZfTUaxM0CTZy1MN1KsQdjDqGpo-lM9lH9sQy01SKl3-DzaD6WfuyDjNijXC5pHop7WoVSO-SvaVqtX03mXKECXwFJj~qe5mBAWCC0bS8uMagmpXM8TIWjog5eGG52OqwcWAJrLok-av5WwyJS8-g__')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container text-center max-w-4xl mx-auto px-4">
          <h1 className="heading-xl mb-6">
            NO PAIN.
            <br />
            NO GAIN.
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light">
            Construa a melhor versão de você.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="cta-button">Agendar Aula Experimental</button>
            <a
              href="https://api.whatsapp.com/send?phone=5514997442220&text=Olá%21%20Gostaria%20de%20saber%20a%20respeito%20dos%20planos%20da%20VILA%20GYM."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-primary text-primary font-bold uppercase tracking-wider hover:bg-primary/10 transition-colors"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. SOBRE A VILA GYM */}
      <section id="sobre" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="orange-line mb-8"></div>
              <h2 className="heading-lg mb-8">Sobre a <span className="text-primary">VILA GYM</span></h2>
              <p className="text-lg leading-relaxed mb-6">
                Desde 2021, a VILA GYM vem mudando a rotina e a saúde de Duartina. Nascemos com um propósito simples: melhorar a vida das pessoas através do movimento, da disciplina e de um ambiente que puxa você pra frente.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-primary font-semibold">
                Aqui você treina com estrutura, orientação e energia de verdade — do jeito que academia tem que ser.
              </p>
              <div className="space-y-3 text-muted-foreground">
                <p className="italic">"Resultado não é sorte. É constância."</p>
                <p className="italic">"Treino de verdade. Evolução de verdade."</p>
              </div>
            </div>
            <div className="relative h-96 md:h-full">
              <img
                src="https://private-us-east-1.manuscdn.com/sessionFile/RDoRXpqifE4txw5hLBFTZe/sandbox/ijpkxyIAajp7w12CgNDTZF-img-2_1771865606000_na1fn_YmVuZWZpdHMtc2VjdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUkRvUlhwcWlmRTR0eHc1aExCRlRaZS9zYW5kYm94L2lqcGt4eUlBYWpwN3cxMkNnTkRUWkYtaW1nLTJfMTc3MTg2NTYwNjAwMF9uYTFmbl9ZbVZ1WldacGRITXRjMlZqZEdsdmJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=M-GdM1GWE6LXzvWIHweiu2Bm0g2HQHsnpGpDx0gHLu6~OVk4EwGcci8UiFHV315lCwMLy3H39sm383NQaVhyU3ai6EfM2NuHiY8dPUvqxXgyzpWQVBak3hRqDtqOyGchAcTMAngsAufySZQO0VeNNzWaZHYqF4xJTxTayGQiFDO4vOYUEkyStoosnrIKfDaZU0ZKIlbsNMU~nwIGI9va7MW3gL1I2Gc3sw7dzif8l-LratFsfiSeF3JGHKzmh1-XEG1lpp-9LdJ3frK~0vPb6SmbJTL788uQSsRVYSRyR9M9V7ZM7Nnr3IcSBaEPSjV60lPyd4wTpTRJ8l0VQLLzWA__"
                alt="Atleta treinando na VILA GYM"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. MODALIDADES */}
      <section id="modalidades" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="orange-line"></div>
            </div>
            <h2 className="heading-lg">Nossas <span className="text-primary">Modalidades</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Musculação", desc: "Ganho de massa muscular com técnica e segurança", price: "R$ 90,00/mês", whatsappLink: "https://api.whatsapp.com/send?phone=5514997442220&text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20como%20funciona%20o%20plano%20de%20Muscula%C3%A7%C3%A3o%20na%20VILA%20GYM.%20Podem%20me%20passar%20valores%2C%20hor%C3%A1rios%20e%20como%20fa%C3%A7o%20para%20come%C3%A7ar%3F" },
              { title: "Dança", desc: "Ritmo, energia e diversão em grupo", price: "R$ 65,00/mês", whatsappLink: "https://api.whatsapp.com/send?phone=5514997442220&text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20como%20funciona%20o%20plano%20de%20Dan%C3%A7a%20na%20VILA%20GYM.%20Podem%20me%20passar%20valores%2C%20hor%C3%A1rios%20e%20como%20fa%C3%A7o%20para%20come%C3%A7ar%3F" },
              { title: "Kickboxing", desc: "Treinamento intenso de luta e condicionamento", price: "R$ 90,00/mês", whatsappLink: "https://api.whatsapp.com/send?phone=5514997442220&text=Ol%C3%A1%21%20Tenho%20interesse%20no%20Kickboxing%20da%20VILA%20GYM.%20Como%20funciona%20o%20plano%2C%20os%20hor%C3%A1rios%20das%20aulas%20e%20como%20fa%C3%A7o%20para%20iniciar%3F" },
              { title: "Jiu-Jitsu", desc: "Arte marcial completa para defesa e evolução", price: "R$ 55,00/mês", whatsappLink: "https://api.whatsapp.com/send?phone=5514997442220&text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20Jiu-Jitsu%20na%20VILA%20GYM.%20Quais%20s%C3%A3o%20os%20hor%C3%A1rios%2C%20valores%20e%20como%20fa%C3%A7o%20para%20come%C3%A7ar%3F" },
            ].map((mod, idx) => (
              <div
                key={idx}
                className="bg-card border border-border p-8 hover:border-primary transition-colors group"
              >
                <h3 className="heading-md text-primary mb-2">{mod.title}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{mod.price}</p>
                <p className="text-muted-foreground mb-6">{mod.desc}</p>
                <a
                  href={mod.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold uppercase text-sm hover:text-orange-400 transition-colors"
                >
                  Saiba Mais →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PLANOS */}
      <section id="planos" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="orange-line"></div>
            </div>
            <h2 className="heading-lg">Escolha seu <span className="text-primary">Plano</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Musculação",
                price: "R$ 90,00",
                period: "/mês",
                features: ["Acesso ilimitado", "Todos os equipamentos", "Acompanhamento profissional"],
                whatsappLink: "https://api.whatsapp.com/send?phone=5514997442220&text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20como%20funciona%20o%20plano%20de%20Muscula%C3%A7%C3%A3o%20na%20VILA%20GYM.%20Podem%20me%20passar%20valores%2C%20hor%C3%A1rios%20e%20como%20fa%C3%A7o%20para%20come%C3%A7ar%3F",
              },
              {
                name: "Plano Anual",
                subtitle: "(musculação)",
                price: "R$ 67,00",
                period: "/mês",
                badge: "MELHOR CUSTO BENEFÍCIO!!",
                features: ["Economize R$ 316,00 por ano", "Isento de matrícula", "Acesso a todas as modalidades"],
                highlight: true,
                whatsappLink: "https://api.whatsapp.com/send?phone=5514997442220&text=Ol%C3%A1%21%20Quero%20saber%20mais%20sobre%20o%20Plano%20Anual%20da%20VILA%20GYM%20%28R%24%2067%2C00%2Fm%C3%AAs%29.%20Como%20funciona%2C%20quais%20as%20condi%C3%A7%C3%B5es%20e%20como%20fa%C3%A7o%20para%20fechar%3F",
              },
              {
                name: "Jiu-Jitsu",
                price: "R$ 55,00",
                period: "/mês",
                features: ["Aulas em grupo", "Arte marcial completa", "Defesa pessoal"],
                whatsappLink: "https://api.whatsapp.com/send?phone=5514997442220&text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20Jiu-Jitsu%20na%20VILA%20GYM.%20Quais%20s%C3%A3o%20os%20hor%C3%A1rios%2C%20valores%20e%20como%20fa%C3%A7o%20para%20come%C3%A7ar%3F",
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`p-8 border-2 transition-all ${
                  plan.highlight
                    ? "border-primary bg-primary/5 scale-105"
                    : "border-border bg-background"
                }`}
              >
                {plan.highlight && plan.badge && (
                  <div className="mb-4 inline-block px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}
                <h3 className="heading-md mb-2">{plan.name}</h3>
                {plan.subtitle && <p className="text-sm text-muted-foreground mb-4">{plan.subtitle}</p>}
                <div className="mb-6">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors"
                >
                  Escolher Plano
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. HORÁRIOS */}
      <section id="horarios" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="orange-line"></div>
            </div>
            <h2 className="heading-lg">Nossos <span className="text-primary">Horários</span></h2>
          </div>

          <div className="bg-card border border-border p-8 text-center">
            <h3 className="heading-md text-primary mb-6">Segunda à Sexta</h3>
            <p className="text-2xl font-bold mb-4">6h às 21h</p>
            <p className="text-lg text-muted-foreground mb-8">Horário ininterrupto para sua comodidade</p>
            
            <div className="border-t border-border pt-8 mt-8">
              <h3 className="heading-md text-primary mb-4">Sábado</h3>
              <p className="text-2xl font-bold">9h às 12h</p>
            </div>
            
            <div className="border-t border-border pt-8 mt-8">
              <p className="text-muted-foreground"><strong>Domingo:</strong> Fechado</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BENEFÍCIOS */}
      <section className="py-20 md:py-32 bg-card relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/RDoRXpqifE4txw5hLBFTZe/sandbox/ijpkxyIAajp7w12CgNDTZF-img-2_1771865606000_na1fn_YmVuZWZpdHMtc2VjdGlvbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUkRvUlhwcWlmRTR0eHc1aExCRlRaZS9zYW5kYm94L2lqcGt4eUlBYWpwN3cxMkNnTkRUWkYtaW1nLTJfMTc3MTg2NTYwNjAwMF9uYTFmbl9ZbVZ1WldacGRITXRjMlZqZEdsdmJnLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=M-GdM1GWE6LXzvWIHweiu2Bm0g2HQHsnpGpDx0gHLu6~OVk4EwGcci8UiFHV315lCwMLy3H39sm383NQaVhyU3ai6EfM2NuHiY8dPUvqxXgyzpWQVBak3hRqDtqOyGchAcTMAngsAufySZQO0VeNNzWaZHYqF4xJTxTayGQiFDO4vOYUEkyStoosnrIKfDaZU0ZKIlbsNMU~nwIGI9va7MW3gL1I2Gc3sw7dzif8l-LratFsfiSeF3JGHKzmh1-XEG1lpp-9LdJ3frK~0vPb6SmbJTL788uQSsRVYSRyR9M9V7ZM7Nnr3IcSBaEPSjV60lPyd4wTpTRJ8l0VQLLzWA__')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-xl mb-8">TREINAR MUDA TUDO.</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {[
                "Reduz ansiedade e estresse",
                "Aumenta disposição e energia",
                "Melhora autoestima e confiança",
                "Fortalece mente e corpo",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-lg">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. CHAMADA FINAL */}
      <section className="relative w-full h-96 md:h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/RDoRXpqifE4txw5hLBFTZe/sandbox/ijpkxyIAajp7w12CgNDTZF-img-3_1771865606000_na1fn_ZmluYWwtY3Rh.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvUkRvUlhwcWlmRTR0eHc1aExCRlRaZS9zYW5kYm94L2lqcGt4eUlBYWpwN3cxMkNnTkRUWkYtaW1nLTNfMTc3MTg2NTYwNjAwMF9uYTFmbl9abWx1WVd3dFkzUmgucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JqHNTQMpTmHmMd6WTGDEftmwbp0Q~jhV9P~xaPXeXXe4Ti54-wnz3kWNYLYYTX5GuzeIfWcvNdLORvuzDCOTDviSADqQdlNoM38Fi5rxQAqp8GWat-ZenRWAhdVp6flzYXwpAC0w9NwtII8WaTKTK8LE5O20BKraL-ONvQ2cVtmprxAjYBDuleYcLsgofLCY4XocWs51fRceXGALocjCKMFFulcChx7p8Gy0XMQIQdW-AT0XJnzdZORUI11Jpk8x1i8Cdt7DVmpO4asztPetUN1J3pcEMzsOEQarIt-rMBXF-6kpmzowIueaPh~HNEYdkhNzv2-I59liURMMuTzRcg__')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 container text-center max-w-3xl mx-auto px-4">
          <h2 className="heading-xl mb-12">
            TRANSFORME O
            <br />
            <span className="text-primary">"EU DEVERIA"</span>
            <br />
            EM
            <br />
            <span className="text-primary">"EU VOU"</span>
          </h2>
          <a
            href="https://api.whatsapp.com/send?phone=5514997442220&text=Olá%21%20Gostaria%20de%20saber%20a%20respeito%20dos%20planos%20da%20VILA%20GYM."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors text-lg"
          >
            COMEÇAR AGORA
          </a>
        </div>
      </section>

      {/* 8. CHECK-IN */}
      <section id="checkin" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="orange-line"></div>
            </div>
            <h2 className="heading-lg">Faca seu <span className="text-primary">Check-in</span></h2>
            <p className="text-lg text-muted-foreground mt-4">
              Conta com o beneficio do Wellhub ou do TotalPass? Faca seu check-in aqui.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border-2 border-border p-8 text-center hover:border-primary transition-colors">
              <h3 className="heading-md text-primary mb-6">Wellhub</h3>
              <a
                href="https://wellhub.com/pt-br/search/partners/academia-vila-gym/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors"
              >
                Fazer Check-in no Wellhub
              </a>
            </div>

            <div className="bg-card border-2 border-border p-8 text-center hover:border-primary transition-colors">
              <h3 className="heading-md text-primary mb-6">TotalPass</h3>
              <a
                href="https://totalpass.com/br/academias/academia-vila-gym/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors"
              >
                Fazer Check-in na TotalPass
              </a>
            </div>
          </div>

          <div className="text-center bg-background/50 border border-border p-6 rounded">
            <p className="text-sm text-muted-foreground">
              ⚠️ A disponibilidade do check-in depende do plano contratado no Wellhub ou no TotalPass.
              <br />
              Esse é um benefício oferecido por diversas empresas aos seus colaboradores.
            </p>
          </div>
        </div>
      </section>

      {/* 9. INSTAGRAM FEED */}
      <section id="instagram" className="py-20 md:py-32 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="orange-line"></div>
            </div>
            <h2 className="heading-lg">Acompanhe a VILA GYM no <span className="text-primary">Instagram</span></h2>
            <p className="text-lg text-muted-foreground mt-4">
              Treinos reais, resultados reais e o dia a dia da nossa academia.
            </p>
          </div>

          <div className="instagram-feed-container mb-12">
            <iframe
              src="https://www.instagram.com/vilagymduartina/embed"
              width="100%"
              height="600"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              className="w-full"
            ></iframe>
          </div>

          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/vilagymduartina/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors text-lg"
            >
              Ver Perfil Completo
            </a>
          </div>
        </div>
      </section>

      {/* 10. CONTATO */}
      <section id="contato" className="py-20 md:py-32 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <div className="orange-line"></div>
            </div>
            <h2 className="heading-lg">Entre em <span className="text-primary">Contato</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="heading-md mb-2">Endereço</h3>
              <p className="text-muted-foreground">
                Av São Paulo 299<br />
                Vila Duartina
              </p>
            </div>
            <div className="text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="heading-md mb-2">Horário</h3>
              <p className="text-muted-foreground">
                Segunda à Sexta: 6h às 21h<br />
                Sábado: 9h às 12h
              </p>
            </div>
            <div className="text-center">
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="heading-md mb-2">WhatsApp</h3>
              <p className="text-muted-foreground">
                <a
                  href="https://api.whatsapp.com/send?phone=5514997442220&text=Olá%21%20Gostaria%20de%20saber%20a%20respeito%20dos%20planos%20da%20VILA%20GYM."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors font-semibold"
                >
                  (14) 99744-2220
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 justify-center mb-16">
            <a
              href="https://api.whatsapp.com/send?phone=5514997442220&text=Olá%21%20Gostaria%20de%20saber%20a%20respeito%20dos%20planos%20da%20VILA%20GYM."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold uppercase hover:bg-orange-600 transition-colors"
            >
              <MessageCircle size={20} />
              Chamar no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/vilagymduartina/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-orange-400 transition-colors flex items-center justify-center gap-2 font-bold uppercase"
            >
              <Instagram size={20} />
              @vilagymduartina
            </a>
          </div>

          <div className="bg-background border border-border p-8">
            <p className="text-center text-sm text-muted-foreground">
              © 2025-2026 VILA GYM. Todos os direitos reservados. | Transformando disciplina em resultado.
            </p>
            <p className="text-center text-xs text-muted-foreground/70 mt-4">
              Site desenvolvido por <a href="https://serftecnologia.github.io/serf-tecnologia-web/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Serf Tecnologia</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
