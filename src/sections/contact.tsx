"use client"

import { useState, FormEvent } from "react";
import { Send, Mail, MapPin, MessageCircle } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappMessage = "Olá Daniel! Vi seu portfólio e gostaria de conversar.";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
        name: form.name,
        email: form.email,
        subject: form.subject,
        message: form.message,
      }),
    });

    if (res.ok) {
      toast.success("Mensagem enviada com sucesso!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      toast.error("Erro ao enviar. Tente novamente.");
    }

    setSending(false);
  }

  return (
    <section id="contact" className="bg-muted py-24 border-t border-border">
      <div className="max-w-310 mx-auto px-10 max-md:px-5">
        <div className="mb-14 text-center">
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-foreground tracking-tight leading-tight mb-4">
            Vamos conversar?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-120 mx-auto">
            Estou disponível para projetos freelance, oportunidades de emprego e parcerias. Entre em contato!
          </p>
        </div>

        <div className="grid grid-cols-[1fr_1.6fr] gap-8 items-start max-md:grid-cols-1">
          <div className="flex flex-col gap-4">
            <ContactInfo icon={<Mail size={16} />} label="Email" value="danielmuniz.works@gmail.com" />
            <ContactInfo icon={<MapPin size={16} />} label="Localização" value="Brasil" />
            <ContactInfo icon={<MessageCircle size={16} />} label="Disponibilidade" value="Imediata" />

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2.5 bg-[#25D366] text-white no-underline rounded-lg px-6 py-3.5 text-sm font-bold transition-all duration-200 hover:bg-[#20BF5A] hover:-translate-y-0.5"
            >
              <WhatsAppIcon />
              Chamar no WhatsApp
            </a>

            <div className="flex gap-2.5 pt-2 border-t border-border mt-1">
              <SocialChip href="https://github.com/zsleinadg" label="GitHub" />
              <SocialChip href="https://www.linkedin.com/in/danielmunizworks/" label="LinkedIn" />
            </div>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-3.5 max-md:grid-cols-1">
                <FormField
                  label="Nome"
                  name="name"
                  placeholder="Seu nome"
                  autoComplete="name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                />
                <FormField
                  label="Email"
                  name="email"
                  placeholder="seu@email.com"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                />
              </div>
              <FormField
                label="Assunto"
                name="subject"
                placeholder="Como posso te ajudar?"
                value={form.subject}
                onChange={(v) => setForm({ ...form, subject: v })}
              />
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-muted-foreground tracking-wide">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  placeholder="Descreva seu projeto ou oportunidade..."
                  rows={5}
                  required
                  autoComplete="off"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="font-sans text-sm text-foreground bg-muted border border-border rounded-lg px-3.5 py-3 outline-none resize-y leading-relaxed transition-colors duration-200 focus:border-[rgba(124,58,237,0.5)]"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground border-none rounded-lg px-6 py-3 text-sm font-bold cursor-pointer transition-all duration-200 hover:bg-[#8B5CF6] hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0 mt-1"
              >
                <Send size={15} />
                {sending ? "Enviando..." : "Enviar mensagem"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  placeholder,
  value,
  onChange,
  type = "text",
  autoComplete,
}: {
  label: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-muted-foreground tracking-wide">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="font-sans text-sm text-foreground bg-muted border border-border rounded-lg px-3.5 py-2.5 outline-none transition-colors duration-200 focus:border-[rgba(124,58,237,0.5)]"
      />
    </div>
  );
}

function ContactInfo({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-card border border-border rounded-xl px-5 py-4 flex items-center gap-3.5">
      <div className="w-9 h-9 rounded-lg bg-[rgba(124,58,237,0.12)] border border-[rgba(124,58,237,0.2)] flex items-center justify-center text-accent shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-[11px] text-muted-foreground font-medium">{label}</p>
        <p className="text-sm text-foreground font-semibold">{value}</p>
      </div>
    </div>
  );
}

function SocialChip({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1 inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground no-underline border border-border rounded-lg px-4 py-2.5 bg-card transition-all duration-200 hover:border-[rgba(124,58,237,0.3)] hover:text-accent"
    >
      {label}
    </a>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
