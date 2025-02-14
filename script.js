import { client } from './prismic.js'; // Importa o client do prismic.js

async function fetchPosts() {
    try {
        // Requisição ao Prismic para buscar os posts do tipo 'blog_post'
        const posts = await client.getAllByType('blog_post'); // 'blog_post' é o API ID do seu Custom Type

        renderPosts(posts);
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
    }
}

function renderPosts(posts) {
    const container = document.getElementById("posts-container");
    container.innerHTML = ""; // Limpa a área antes de renderizar os posts

    posts.forEach((post) => {
        // Acessando os campos 'titulo_da_pagina' e 'uid'
        const title = post.data.titulo_da_pagina[0].text; // Acessa o título (texto estruturado)
        const uid = post.uid; // Acessa o 'uid' (link da página)

        // Cria um novo elemento para cada post
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2><a href="${uid}">${title}</a></h2>
        `;

        container.appendChild(postElement);
    });
}

// Executa a função assim que a página carrega
document.addEventListener("DOMContentLoaded", fetchPosts);
