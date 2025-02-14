import { client } from './prismic.js'; // Importa o client do prismic.js

async function fetchPosts() {
    try {
        // Requisição ao Prismic para buscar os posts (substitua 'blog_post' pelo tipo de conteúdo desejado)
        const posts = await client.getAllByType('blog_post'); // Substitua 'blog_post' pelo tipo de documento no Prismic

        renderPosts(posts);
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
    }
}

function renderPosts(posts) {
    const container = document.getElementById("posts-container");
    container.innerHTML = ""; // Limpa a área antes de renderizar os posts

    posts.forEach((post) => {
        const title = post.data.title[0].text; // Acessa o título do post
        const content = post.data.content[0].text; // Acessa o conteúdo do post

        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.innerHTML = `
            <h2>${title}</h2>
            <p>${content}</p>
        `;

        container.appendChild(postElement);
    });
}

// Executa a função assim que a página carrega
document.addEventListener("DOMContentLoaded", fetchPosts);
