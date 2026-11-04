import { MessageCircle } from 'lucide-react';

const message = encodeURIComponent(
  'Hola, quiero solicitar un presupuesto para corte de pasto o mantenimiento de jardín. Estoy en [mi localidad] y quisiera coordinar una visita.',
);

export function WhatsAppCta({ className = '' }: { className?: string }) {
  const number = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5492612456584').replace(/\D/g, '');
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
