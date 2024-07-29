import type { APIRoute } from 'astro';
import qrcodeTerminal from 'qrcode-terminal';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Obtener los datos del cuerpo del POST
    const data = await request.json();
    console.log(data);
    const qr = data.qrimage;

    // Generar QR code en formato ASCII y mostrarlo en la consola
    qrcodeTerminal.generate(qr, { small: true }, (qrAscii) => {
      console.log(qrAscii);
    });

    // Devolver una respuesta exitosa
    return new Response(JSON.stringify({ message: 'Datos recibidos' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error al procesar el POST:', error);
    return new Response('Error interno del servidor', { status: 500 });
  }
};
