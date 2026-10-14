/* =========================================================================
   CONFIGURAÇÃO CENTRAL DA PÁGINA
   -------------------------------------------------------------------------
   Tudo que você pode querer editar está AQUI, em um só lugar:
   perfil, número de WhatsApp, mensagens automáticas, Spotify e Instagram.
   ========================================================================= */

/* --- Perfil --- */
export const PROFILE = {
  name: 'Ludmilla',
  tagline: 'Biomedicina • Estética • Maquiagem',
  phrase: 'Beleza, cuidado e autoestima em cada detalhe.',
  // Foto de perfil (opcional). Coloque o arquivo em public/ com este nome.
  // Se não existir, aparece um monograma elegante no lugar.
  avatar: '/ludmilla-avatar.jpg',
};

/* --- WhatsApp --- */
// Apenas números, com DDI (55) + DDD (65) + número. Sem espaços ou símbolos.
export const WHATSAPP_NUMBER = '5565999552092';

// Mensagens pré-preenchidas de cada botão (edite o texto livremente)
export const MESSAGE_AVALIACAO =
  'Oiiee! Vim do Linktree e gostaria de marcar minha avaliação.';
export const MESSAGE_MAQUIAGEM =
  'Oiiee! Vim do Linktree e quero fazer minha maquiagem.';
export const MESSAGE_SOBRANCELHAS =
  'Oiiee! Vim do Linktree e quero fazer minha sobrancelha.';
export const MESSAGE_CURSO =
  'Oiiee! Vim do Linktree e quero o curso de automaquiagem.';

/* --- Spotify ---
   Cole aqui o link da sua playlist quando quiser trocar. */
export const SPOTIFY_URL =
  'https://open.spotify.com/playlist/3bwoD0f4UZvTNxWSlNs9M1';

/* --- Instagram --- */
export const INSTAGRAM_URL = 'https://www.instagram.com/ludmillabastosm/';

/* Monta o link do WhatsApp com a mensagem já codificada corretamente. */
const whatsapp = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/* =========================================================================
   BOTÕES PRINCIPAIS
   -------------------------------------------------------------------------
   type:            'link'   -> abre uma URL em nova aba
                    'toggle' -> abre/fecha a seção "Sobre mim" na página
   showDescription: true     -> mostra a descrição embaixo do nome
                                 (usado só na playlist; os demais ficam só com o nome)
   ========================================================================= */
export const LINKS = [
  {
    id: 'maquiagem',
    type: 'link',
    title: 'Maquiagem',
    href: whatsapp(MESSAGE_MAQUIAGEM),
    ariaLabel: 'Agendar maquiagem pelo WhatsApp',
  },
  {
    id: 'curso',
    type: 'link',
    title: 'Curso de automaquiagem',
    href: whatsapp(MESSAGE_CURSO),
    ariaLabel: 'Falar sobre o curso de automaquiagem pelo WhatsApp',
  },
  {
    id: 'sobrancelhas',
    type: 'link',
    title: 'Sobrancelhas',
    href: whatsapp(MESSAGE_SOBRANCELHAS),
    ariaLabel: 'Agendar sobrancelhas pelo WhatsApp',
  },
  {
    id: 'sobre',
    type: 'toggle',
    title: 'Sobre mim',
    ariaLabel: 'Abrir a seção Sobre mim',
  },
];
