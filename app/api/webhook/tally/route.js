import { NextResponse } from 'next/server';

const BREVO_API_KEY = process.env.BREVO_API_KEY;
const BREVO_API_URL = 'https://api.brevo.com/v3';

async function sendEmail({ to, toName, subject, htmlContent }) {
  try {
    const res = await fetch(`${BREVO_API_URL}/smtp/email`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Day1 Digital', email: 'moussatoure.mt.87@gmail.com' },
        to: [{ email: to, name: toName }],
        subject,
        htmlContent,
      }),
    });
    const data = await res.json();
    console.log('Email sent:', subject, res.ok ? 'OK' : JSON.stringify(data));
    return data;
  } catch (err) {
    console.error('Email error:', subject, err.message);
    return { error: err.message };
  }
}

function getConfirmationHTML(name, projectType, budget) {
  return '<div style="font-family:Segoe UI,Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;border-radius:12px;overflow:hidden"><div style="background:linear-gradient(135deg,#1a1a2e,#0a0a0a);padding:40px 30px;text-align:center"><h1 style="color:#c8ff00;margin:0;font-size:28px">Day1 Digital</h1><p style="color:#888;margin-top:8px">Agence web nouvelle generation</p></div><div style="padding:30px"><h2 style="color:#c8ff00;font-size:22px">Merci ' + name + ' !</h2><p style="color:#ccc;line-height:1.6">Nous avons bien recu votre demande de devis. Notre equipe l examine et vous recontactera sous <strong style="color:#fff">24 heures</strong>.</p><div style="background:#1a1a2e;border-radius:8px;padding:20px;margin:20px 0"><p style="color:#888;margin:0 0 8px"><strong style="color:#c8ff00">Projet :</strong> <span style="color:#fff">' + (projectType || 'Non specifie') + '</span></p><p style="color:#888;margin:0"><strong style="color:#c8ff00">Budget :</strong> <span style="color:#fff">' + (budget || 'Non specifie') + '</span></p></div><p style="color:#ccc;line-height:1.6">En attendant, reservez un appel decouverte gratuit :</p><a href="https://cal.com/moussa-toure-day1/30min" style="display:inline-block;background:#c8ff00;color:#0a0a0a;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:bold;margin-top:10px">Reserver un appel</a></div><div style="padding:20px 30px;text-align:center;border-top:1px solid #222"><p style="color:#666;font-size:13px;margin:0">2026 Day1 Digital - www.day1-digital.com</p></div></div>';
}

function getWelcomeHTML(name) {
  return '<div style="font-family:Segoe UI,Arial,sans-serif;max-width:600px;margin:0 auto;background:#0a0a0a;color:#fff;border-radius:12px;overflow:hidden"><div style="background:linear-gradient(135deg,#1a1a2e,#0a0a0a);padding:40px 30px;text-align:center"><h1 style="color:#c8ff00;margin:0;font-size:28px">Day1 Digital</h1><p style="color:#888;margin-top:8px">Bienvenue dans la communaute !</p></div><div style="padding:30px"><h2 style="color:#c8ff00;font-size:22px">Bonjour ' + name + ' !</h2><p style="color:#ccc;line-height:1.6">Merci de nous avoir contactes. Vous faites desormais partie de la communaute Day1 Digital.</p><p style="color:#ccc;line-height:1.6">Vous recevrez nos conseils exclusifs sur le web design, le SEO et les meilleures pratiques pour booster votre presence en ligne.</p><div style="text-align:center;margin-top:20px"><a href="https://www.day1-digital.com" style="display:inline-block;background:#c8ff00;color:#0a0a0a;text-decoration:none;padding:12px 28px;border-radius:8px;font-weight:bold">Decouvrir nos services</a></div></div><div style="padding:20px 30px;text-align:center;border-top:1px solid #222"><p style="color:#666;font-size:13px;margin:0">2026 Day1 Digital - www.day1-digital.com</p></div></div>';
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const fields = payload.data?.fields || [];

    const getField = (label) => {
      const field = fields.find((f) => f.label === label);
      return field?.value || '';
    };

    const name = getField('Nom complet') || 'Visiteur';
    const email = getField('Email');
    const projectType = getField('Type de projet');
    const budget = getField('Budget');
    const description = getField('Decrivez votre projet');

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    console.log('Webhook received for:', email, name);

    // Send all emails in PARALLEL to stay within 10s timeout
    const results = await Promise.allSettled([
      sendEmail({
        to: email,
        toName: name,
        subject: 'Votre demande de devis - Day1 Digital',
        htmlContent: getConfirmationHTML(name, projectType, budget),
      }),
      sendEmail({
        to: email,
        toName: name,
        subject: 'Bienvenue chez Day1 Digital !',
        htmlContent: getWelcomeHTML(name),
      }),
      sendEmail({
        to: 'moussatoure.mt.87@gmail.com',
        toName: 'Moussa',
        subject: 'Nouveau devis: ' + name + ' - ' + projectType,
        htmlContent: '<h2>Nouvelle demande de devis</h2><p><strong>Nom:</strong> ' + name + '</p><p><strong>Email:</strong> ' + email + '</p><p><strong>Type:</strong> ' + projectType + '</p><p><strong>Budget:</strong> ' + budget + '</p><p><strong>Description:</strong> ' + description + '</p>',
      }),
    ]);

    console.log('Email results:', JSON.stringify(results.map(r => r.status)));

    // Upsert contact non-blocking (fire and forget)
    fetch(`${BREVO_API_URL}/contacts`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': BREVO_API_KEY,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        email,
        attributes: { PRENOM: name },
        listIds: [2],
        updateEnabled: true,
      }),
    }).catch(() => {});

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error.message);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
