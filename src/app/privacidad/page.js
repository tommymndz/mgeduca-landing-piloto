import React from 'react';
import Link from 'next/link';

export default function Privacidad() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-200 space-y-6">
        
        {/* ENCABEZADO */}
        <div className="border-b border-slate-200 pb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-extrabold text-2xl text-[#0f2e5a]">MG</span>
            <span className="font-light text-2xl text-cyan-600">educa</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0f2e5a]">
            Política de Privacidad y Protección de Datos
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Actualizado a la normativa vigente en Chile (Cumplimiento Ley N° 21.719)
          </p>
        </div>

        {/* CONTENIDO LEGAL */}
        <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
          <h2 className="text-base font-bold text-[#0f2e5a]">1. Responsable del Tratamiento</h2>
          <p>
            MG educa, institución con Registro Oficial ATE MINEDUC, es responsable del tratamiento de los datos personales suministrados a través de este sitio web institucional y de aterrizaje para talleres de capacitación docente.
          </p>

          <h2 className="text-base font-bold text-[#0f2e5a]">2. Finalidad de la Recopilación de Datos</h2>
          <p>
            Los datos personales solicitados en nuestros formularios (nombre completo, correo electrónico y número de teléfono/WhatsApp) son recopilados con el único y exclusivo propósito de:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Gestionar la inscripción, matrícula y participación en los talleres ATE contratados.</li>
            <li>Enviar los accesos a las sesiones en vivo (Zoom) y material de apoyo digital.</li>
            <li>Comunicar información relevante sobre el desarrollo de la capacitación y emisión de certificados.</li>
          </ul>

          <h2 className="text-base font-bold text-[#0f2e5a]">3. Consentimiento Expreso (Ley N° 21.719)</h2>
          <p>
            De acuerdo con la legislación chilena de protección de datos personales, al marcar la casilla de aceptación en nuestros formularios, el usuario otorga su consentimiento libre, informado y expreso para el tratamiento de sus datos exclusivamente para los fines descritos.
          </p>

          <h2 className="text-base font-bold text-[#0f2e5a]">4. No Cesión a Terceros</h2>
          <p>
            MG educa se compromete a no comercializar, ceder ni transferir los datos personales de los usuarios a terceros ajenos a la organización y gestión académica del taller.
          </p>

          <h2 className="text-base font-bold text-[#0f2e5a]">5. Derechos de los Usuarios</h2>
          <p>
            El usuario podrá en todo momento ejercer sus derechos de acceso, rectificación, cancelación u oposición consagrados en la ley, escribiendo directamente a nuestro canal oficial de atención.
          </p>
        </div>

        {/* BOTÓN DE RETORNO */}
        <div className="pt-6 border-t border-slate-200 text-center">
          <Link 
            href="/" 
            className="inline-block bg-[#0f2e5a] hover:bg-cyan-700 text-white font-bold py-3 px-8 rounded-xl transition-all text-sm"
          >
            Volver a la Página Principal
          </Link>
        </div>

      </div>
    </div>
  );
}