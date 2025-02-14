import { client } from './prismic.js'; // Certifique-se de que está importando o client corretamente

async function fetchPosts() {
    try {
        // Fazendo a requisição para o Prismic
        const posts = await client.getAllByType('blog_post'); // 'blog_post' é o API ID do seu tipo de conteúdo

        // Validando a resposta no console
        console.log("Posts recebidos:", posts); // Exibe os dados recebidos do Prismic

        renderPosts(posts); // Renderiza os posts
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
    }
}

function renderPosts(posts) {
    const container = document.getElementById("posts-container");
    container.innerHTML = ""; // Limpa a área antes de renderizar os posts

    posts.forEach((post) => {
        const title = post.data.titulo_da_pagina[0].text; // Acessa o título do post
        const uid = post.uid; // Acessa o UID (link da página)

        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2><a href="${uid}">${title}</a></h2>
        `;

        container.appendChild(postElement);
    });
}

// Chama a função quando a página for carregada
document.addEventListener("DOMContentLoaded", fetchPosts);
