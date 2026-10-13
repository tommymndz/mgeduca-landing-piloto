'use client';

import React, { useState } from 'react';

export default function Home() {
  const [showPrivacyBanner, setShowPrivacyBanner] = useState(true);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans relative">
      {/* 1. BANNER DE CONSENTIMIENTO DE DATOS Y COOKIES (Ley N° 21.719) */}
      {showPrivacyBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-[#0f2e5a] text-white p-4 sm:p-5 shadow-2xl z-50 border-t border-cyan-500/30 transition-all">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
            <div className="space-y-1 text-center sm:text-left">
              <p className="font-bold text-cyan-300">
                🔒 Protección de Datos Personales (Ley N° 21.719)
              </p>
              <p className="text-slate-300 max-w-2xl leading-relaxed">
                Utilizamos cookies y tecnologías de seguimiento para optimizar tu experiencia y gestionar las inscripciones a nuestros talleres. Al continuar navegando, aceptas nuestra{' '}
                <a href="/privacidad" className="text-cyan-400 underline hover:text-cyan-300 font-semibold">
                  Política de Privacidad
                </a>.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setShowPrivacyBanner(false)}
                className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-2 px-5 rounded-lg text-xs transition-all shadow-sm"
              >
                Aceptar y Continuar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BARRA SUPERIOR DE ANUNCIO ATE */}
      <div className="bg-[#0f2e5a] text-white text-xs py-2 px-4 text-center font-medium border-b border-cyan-700/40">
        <span className="text-cyan-300 font-semibold">Registro ATE MINEDUC</span> | Capacitaciones y Asesorías Educativas para todo Chile
      </div>

      {/* HEADER / NAVBAR */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 flex justify-between items-center shadow-xs sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="flex items-center">
            <span className="font-extrabold text-2xl text-[#0f2e5a] tracking-tight">MG</span>
            <span className="font-light text-2xl text-cyan-600 tracking-tight">educa</span>
          </div>
          <span className="hidden sm:inline-block bg-cyan-50 text-cyan-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-cyan-200">
            ATE Capacitaciones
          </span>
        </div>
        <a 
          href="#inscripcion" 
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm hover:shadow-md"
        >
          Matricularme
        </a>
      </header>

      {/* HERO SECTION */}
      <main className="max-w-4xl mx-auto px-4 py-12 pb-24">
        <div className="text-center mb-10">
          <span className="inline-block bg-amber-100 text-amber-900 text-xs font-bold px-3.5 py-1 rounded-full mb-4 border border-amber-300">
            Inscripciones Abiertas — Cupos Limitados
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0f2e5a] leading-tight mb-4">
            Taller Intensivo: Preparación de Portafolio Docente
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-normal">
            Aprende a estructurar tu evidencia, optimizar tus tiempos y abordar cada módulo con metodologías probadas por expertos ATE.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-8 text-sm text-slate-700 font-semibold">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs">
              <span>📅 Fecha: Próximamente</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs">
              <span>⏰ Horario: 10:00 - 13:00 hrs</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-2xs">
              <span>💻 Modalidad: En vivo vía Online</span>
            </div>
          </div>
        </div>

        {/* CONTENIDO Y BENEFICIOS */}
        <div className="grid md:grid-cols-2 gap-6 my-12">
          <div className="bg-white p-7 rounded-2xl shadow-xs border border-slate-200 hover:border-cyan-200 transition-all">
            <h3 className="font-bold text-xl text-[#0f2e5a] mb-3">¿Qué vas a aprender?</h3>
            <ul className="space-y-2.5 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">✓</span> Estrategias clave para redactar la planificación y evaluación.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">✓</span> Análisis detallado de pautas y rúbricas Mineduc.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-600 font-bold">✓</span> Corrección de errores frecuentes antes del envío final.
              </li>
            </ul>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow-xs border border-slate-200 hover:border-cyan-200 transition-all">
            <h3 className="font-bold text-xl text-[#0f2e5a] mb-3">El taller incluye:</h3>
            <ul className="space-y-2.5 text-slate-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span> Plantillas de trabajo editables y material de apoyo.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span> Acceso ilimitado a la grabación de la sesión por 30 días.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600 font-bold">✓</span> Espacio de resolución de dudas con la relatora.
              </li>
            </ul>
          </div>
        </div>

        {/* FORMULARIO DE INSCRIPCIÓN Y PAGO */}
        <div id="inscripcion" className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl border border-cyan-100 max-w-xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0f2e5a] via-cyan-500 to-amber-400"></div>
          
          <h2 className="text-2xl font-extrabold text-[#0f2e5a] mb-1 text-center">Reserva tu Matrícula</h2>
          <p className="text-sm text-slate-500 mb-6 text-center font-medium">
            Valor de la matrícula: <span className="text-slate-900 font-bold text-base">$45.000 CLP</span> (Pago seguro vía Webpay / Flow)
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#0f2e5a] uppercase tracking-wider mb-1">
                Nombre Completo *
              </label>
              <input 
                type="text" 
                placeholder="Ej: Paula Méndez" 
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none text-sm bg-slate-50/50"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0f2e5a] uppercase tracking-wider mb-1">
                Correo Electrónico *
              </label>
              <input 
                type="email" 
                placeholder="profesora@ejemplo.cl" 
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none text-sm bg-slate-50/50"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0f2e5a] uppercase tracking-wider mb-1">
                Teléfono / WhatsApp *
              </label>
              <input 
                type="tel" 
                placeholder="+56 9 1234 5678" 
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none text-sm bg-slate-50/50"
                required
              />
            </div>

            {/* CHECKBOX DE FORMULARIO */}
            <div className="flex items-start gap-2.5 pt-2">
              <input 
                type="checkbox" 
                id="privacy" 
                className="mt-1 h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-500 cursor-pointer" 
                required 
              />
              <label htmlFor="privacy" className="text-xs text-slate-600 leading-tight">
                Acepto la <a href="/privacidad" className="text-cyan-700 underline font-semibold">Política de Privacidad</a> y autorizo el tratamiento de mis datos personales para gestionar la inscripción conforme a la Ley N° 21.719.
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#0f2e5a] hover:bg-cyan-700 text-white font-extrabold py-4 px-6 rounded-xl shadow-lg shadow-[#0f2e5a]/20 transition-all text-base mt-4 cursor-pointer"
            >
              Ir a Pagar Matrícula ($45.000 CLP)
            </button>
          </form>
        </div>
      </main>

      {/* FOOTER CORPORATIVO */}
      <footer className="bg-[#0f2e5a] text-slate-300 mt-10 py-10 px-4 text-center text-xs border-t border-slate-800">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="flex justify-center items-center gap-2">
            <span className="font-extrabold text-xl text-white">MG</span>
            <span className="font-light text-xl text-cyan-400">educa</span>
          </div>
          <p className="text-slate-400">Asistencia Técnica Educativa con Registro Oficial ATE MINEDUC.</p>
          <p className="text-slate-500">© 2026 MG educa. Todos los derechos reservados. Cumplimiento Ley N° 21.719 de Protección de Datos Personales.</p>
        </div>
      </footer>
    </div>
  );
}