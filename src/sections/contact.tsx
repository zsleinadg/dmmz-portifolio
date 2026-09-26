"use client"

import { useState, FormEvent } from "react";
import { Send, Mail, Phone, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { WhatsAppIcon } from "@/components/icons";

const CONTACT_EMAIL = "danielmuniz.works@gmail.com";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      toast.success("E-mail copiado!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Não foi possível copiar. Tente manualmente.");
    }
  }

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const whatsappMessage = "Olá Daniel! Vi seu portfólio e gostaria de conversar.";
  const formattedWhatsapp = (whatsappNumber || "")
    .replace(/^55/, "+55 ")
    .replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);

    try {
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
    } catch {
      toast.error("Erro de conexão. Tente novamente.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="bg-background py-24">
      <div className="max-w-310 mx-auto px-10 max-md:px-5">
        <div className="mb-14 text-center" data-aos="fade-up">
          <h2 className="text-[clamp(28px,4vw,42px)] font-bold text-foreground tracking-tight leading-tight mb-4">
            Vamos conversar?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-120 mx-auto">
            Estou disponível para projetos freelance, oportunidades de emprego e parcerias. Entre em contato!
          </p>
        </div>

        <div className="grid grid-cols-[1fr_1.6fr] gap-8 items-start max-md:grid-cols-1">
          <div
            className="flex flex-col gap-4 bg-card border border-border rounded-2xl p-8"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3.5 p-4 rounded-xl bg-green-600 text-white no-underline hover:bg-green-700 transition-all hover:scale-[1.02] active:scale-[0.98] group"
            >
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <WhatsAppIcon />
              </div>
              <div>
                <div className="text-sm font-medium">Chamar no WhatsApp</div>
                <div className="text-sm text-green-100">Resposta mais rápida</div>
              </div>
            </a>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-input transition-all group">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3.5 flex-1 no-underline min-w-0"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-medium text-foreground truncate">{CONTACT_EMAIL}</div>
                  <div className="text-sm text-muted-foreground">Email oficial — clique para abrir</div>
                </div>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                aria-label="Copiar e-mail"
                title="Copiar e-mail"
                className="shrink-0 w-9 h-9 rounded-lg bg-accent/10 hover:bg-accent/20 flex items-center justify-center cursor-pointer border-none transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4 text-accent" />}
              </button>
            </div>

            <div className="flex items-center gap-3.5 p-4 rounded-xl bg-input transition-all group">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                <Phone className="w-5 h-5 text-accent" />
              </div>
              <div>
                <div className="text-sm font-medium text-foreground">{formattedWhatsapp}</div>
                <div className="text-sm text-muted-foreground">Telefone</div>
              </div>
            </div>

            <div className="flex gap-2.5 pt-2 border-t border-border mt-1">
              <SocialChip href="https://github.com/zsleinadg" label="GitHub" />
              <SocialChip href="https://www.linkedin.com/in/danielmunizworks/" label="LinkedIn" />
            </div>
          </div>

          <div
            className="bg-card border border-border rounded-2xl p-8"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
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
                  className="font-medium text-sm text-foreground bg-input border border-border rounded-lg px-3.5 py-3 outline-none resize-y leading-relaxed transition-colors duration-200 focus:border-[rgba(124,58,237,0.5)]"
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
        className="font-medium text-sm text-foreground bg-input border border-border rounded-lg px-3.5 py-2.5 outline-none transition-colors duration-200 focus:border-[rgba(124,58,237,0.5)]"
      />
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
