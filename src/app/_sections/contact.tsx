import { SiWhatsapp } from "react-icons/si";

export function Contact() {
  const mynumber: Number = 5588996418498
  const message: string = "Olá Daniel! Ví seu portfólio e gostaria de conversar."

  return (
    <section id="contact" className="max-w-7xl mx-auto px-5 py-20">
      <h2 className="text-4xl font-bold text-center mb-10 bg-linear-to-b from-indigo-600 to-purple-900 text-transparent bg-clip-text">
        Contato
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="flex flex-col gap-5">
          <h3 className="text-2xl font-semibold">Vamos conversar?</h3>
          <p className="text-gray-600">
            Sinta-se à vontade para me chamar para projetos ou apenas para trocar uma ideia sobre dev!
          </p>
          <a 
            href={`https://wa.me/${mynumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:scale-105 transition shadow-lg"
          >
            <SiWhatsapp/>Chamar no WhatsApp
          </a>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-4">

          <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />

          <input 
            type="text" 
            name="name" 
            placeholder="Seu Nome" 
            required 
            autoComplete="name"
            className="border p-3 rounded-lg focus:outline-indigo-600"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Seu E-mail" 
            required 
            autoComplete="email"
            className="border p-3 rounded-lg focus:outline-indigo-600"
          />
          <textarea 
            name="message" 
            placeholder="Sua Mensagem" 
            rows={4} 
            required 
            className="border p-3 rounded-lg focus:outline-indigo-600"
          ></textarea>

          <button 
            type="submit" 
            className="bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-purple-900 transition cursor-pointer"
          >
            Enviar E-mail
          </button>
        </form>
      </div>
    </section>
  )
}