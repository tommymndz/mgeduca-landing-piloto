import React from 'react';
import Link from 'next/link';

export default function Gracias() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-cyan-100 text-center space-y-6 relative overflow-hidden">
        
        {/* Barra superior decorativa */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0f2e5a] via-cyan-500 to-amber-400"></div>

        {/* Ícono de éxito */}
        <div className="w-16 h-16 bg-cyan-50 text-cyan-600 rounded-full flex items-center justify-center mx-auto text-3xl font-black border border-cyan-200">
          ✓
        </div>

        <div className="space-y-2">
          <span className="bg-amber-100 text-amber-900 text-xs font-bold px-3 py-1 rounded-full border border-amber-300">
            Inscripción Exitosa
          </span>
          <h1 className="text-2xl font-black text-[#0f2e5a]">
            ¡Gracias por matricularte!
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            Hemos registrado tus datos correctamente. En los próximos minutos recibirás un correo electrónico con los detalles del taller y las instrucciones de acceso.
          </p>
        </div>

        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs text-slate-500 space-y-1">
          <p className="font-semibold text-slate-700">¿Tienes dudas o consultas urgentes?</p>
          <p>Escríbenos directamente a nuestro soporte de WhatsApp institucional.</p>
        </div>

        <Link 
          href="/" 
          className="block w-full bg-[#0f2e5a] hover:bg-cyan-700 text-white font-extrabold py-3.5 px-6 rounded-xl transition-all text-sm shadow-md"
        >
          Volver al Inicio
        </Link>

      </div>
    </div>
  );
}