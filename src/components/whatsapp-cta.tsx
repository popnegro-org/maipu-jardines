import { MessageCircle } from 'lucide-react';

const message = encodeURIComponent(
  'Hola, quiero solicitar un presupuesto para corte de pasto o mantenimiento de jardín en Maipú y alrededores.',
);

export function WhatsAppCta({ className = '' }: { className?: string }) {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '');
  const href = number ? `https://wa.me/${number}?text=${message}` : '#contacto';

  return (
    <a
      className={`button button-primary ${className}`}
      href={href}
      aria-label="Solicitar presupuesto por WhatsApp"
      target={number ? '_blank' : undefined}
      rel={number ? 'noopener noreferrer' : undefined}
    >
      <MessageCircle size={19} aria-hidden="true" />
      Solicitar presupuesto
    </a>
  );
}
