"use client"

import { useState, FormEvent } from "react";
import { SiWhatsapp } from "react-icons/si";

export function Contact() {
  const mynumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const message: string = "Olá Daniel! Ví seu portfólio e gostaria de conversar."

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [formMessage, setFormMessage] = useState("")
  const [toast, setToast] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        name,
        email,
        message: formMessage,
      }),
    })

    if (res.ok) {
      setName("")
      setEmail("")
      setFormMessage("")
      setToast({ type: "success", text: "Mensagem enviada com sucesso!" })
    } else {
      setToast({ type: "error", text: "Erro ao enviar. Tente novamente." })
    }

    setTimeout(() => setToast(null), 4000)
  }

  return (
    <section id="contact" className="max-w-7xl mx-auto px-5 py-20 overflow-hidden">
      <h2
        className="text-4xl font-bold text-center mb-10 bg-linear-to-b from-indigo-600 to-purple-900 text-transparent bg-clip-text"
        data-aos="fade-up"
      >
        Contato
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div
          className="flex flex-col gap-5"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
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
            <SiWhatsapp />Chamar no WhatsApp
          </a>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <input
            type="text"
            name="name"
            placeholder="Seu Nome"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-lg focus:outline-indigo-600"
          />
          <input
            type="email"
            name="email"
            placeholder="Seu E-mail"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3 rounded-lg focus:outline-indigo-600"
          />
          <textarea
            name="message"
            placeholder="Sua Mensagem"
            rows={4}
            required
            value={formMessage}
            onChange={(e) => setFormMessage(e.target.value)}
            className="border p-3 rounded-lg focus:outline-indigo-600"
          ></textarea>

          <button
            type="submit"
            className="bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-purple-900 transition cursor-pointer"
          >
            Enviar E-mail
          </button>

          {toast && (
            <div
              className={`text-sm text-white font-bold text-center py-2 px-4 rounded-lg transition-all ${
                toast.type === "success" ? "bg-green-600" : "bg-red-600"
              }`}
              data-aos="fade-up"
            >
              {toast.text}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
