// Gerencia a conexão com o Prismic e exporta o client.

import * as prismic from "@prismicio/client";

export const repositoryName = "siteacessivel"; // Nome do seu repositório no Prismic

export const client = prismic.createClient(repositoryName, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN, // Opcional para repositórios privados
});
