import type { APIRoute } from 'astro';
import { db, User, eq } from 'astro:db';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Obtener los datos del cuerpo del POST
    const data = await request.json();
    console.log(data);
    const user2edit = data.ident;
    const newQr = data.qr;

    await db.update(User)
    .set({ qr: newQr })
    .where(eq(User.ident, user2edit));

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
