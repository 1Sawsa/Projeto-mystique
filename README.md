[README.md](https://github.com/user-attachments/files/26312764/README.md)
# Mystique - Loja de Maquiagem Online

Site estático em HTML, CSS e JavaScript construído para exibir um catálogo de maquiagem com recursos de acessibilidade, responsividade e preferências de tema (light/dark).

## 📦 Estrutura do Projeto

- `index.html` - Página principal com conteúdo semântico e navegação.
- `style.css` - Estilos com variáveis CSS, tema dark/light, responsividade e design uniforme.
- `theme.js` - Script para alternar entre tema claro e tema escuro e salvar preferência em `localStorage`.
- `assets/` - Contém imagens dos produtos.
- `README.md` - Documentação do projeto.

## ✨ Funcionalidades

- Layout semântico (header, nav, main, section, article, figure, dl, footer, address).
- Menu fixo de navegação com âncoras internas (Home, Produtos, Sobre, Contato, Carrinho).
- Catálogo de produtos usando `<article>` + `<dl>` para listar descrição, preço e estoque.
- Botão de toggle de tema claro/escuro com preferência persistente (`localStorage`).
- Responsividade:
  - Mobile (<= 480px)
  - Tablet (481px a 768px)
  - Desktop médio (769px a 1024px)
- Formulário de contato com `<fieldset>` e `<legend>` para acessibilidade.
- Fundo agradável e iluminação suave no layout.

## 🛠️ Como usar localmente

1. Clone ou copie os arquivos para a pasta local.
2. Abra o terminal na pasta do projeto.
3. Execute um servidor local (recomendado).
4. Acesse `https://1sawsa.github.io/Projeto-mystique/` no navegador.

## 📝 Recursos do produto

Produtos incluídos (exemplo):
- Base Líquida Premium
- Corretivo Full Coverage
- Paleta de Sombras 12 Cores
- Máscara de Cílios Waterproof
- Blush em Pó Cintilante
- Batom Matte Longa Duração
- Lápis de Olho Preto Intenso
- Gel Fixador para Sobrancelha
- Iluminador Compacto

Cada produto inclui:
- imagem (assets)
- nome em `<h3>`
- descrição, preço e estoque com `<dl>` + `<data>`
- botão `Adicionar ao Carrinho`

## ♿ Acessibilidade

- Contraste de cores adequado nos temas.
- Foco visível em links e botões.
-  `aria-label` em navegação e botão de tema.
- `prefers-reduced-motion` respeitado.

## 🧩 Personalizações futuras

- Adicionar lógica real de carrinho em JavaScript.
- Mostrar produtos dinâmicos via API ou JSON.
- Formular pergunta por Ajax no contato.
- Armazenar carrinho no LocalStorage.
- Melhorar visual com animações, filtros e categorias.

## 📄 Licença

Projeto de exemplo sem restrições. Use como desejar.
