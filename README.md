# Browser Macro Extension

## Descrição

Esta é uma extensão de navegador que permite aos usuários criar, editar e excluir macros. As macros são trechos de texto predefinidos usados para respostas padrão, identificados por um título único para facilitar a organização e recuperação. O design minimalista garante uma interface limpa e intuitiva, proporcionando uma experiência de uso simples e eficiente.

A extensão também suporta temas claro e escuro, adaptando-se às preferências do usuário. Compatível com os principais navegadores, como Chrome, Firefox e Edge, prioriza um desempenho fluido e acesso rápido às macros.

## Tecnologias Utilizadas

- [Vite](https://vitejs.dev/) - Para construção rápida do projeto
- HTML, CSS e JavaScript
- [Manifest v3](https://developer.chrome.com/docs/extensions/mv3/) - Para desenvolvimento da extensão

## Instalação e Execução

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/browser-macro-extension.git
   ```
2. Acesse o diretório do projeto:
   ```sh
   cd browser-macro-extension
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
4. Inicie o ambiente de desenvolvimento:
   ```sh
   npm run dev
   ```

## Como Carregar a Extensão no Navegador

### Na pasta do projeto execue o comando
Realize o build para gerar a pasta dist:
   ```sh
   npm run build
   ```

### Chrome / Edge
1. Acesse `chrome://extensions/` ou `edge://extensions/`
2. Ative o "Modo do desenvolvedor"
3. Clique em "Carregar sem compactação" e selecione a pasta `dist`

### Firefox
1. Acesse `about:debugging`
2. Clique em "Este Firefox" e depois em "Carregar Add-on Temporário"
3. Selecione o arquivo `manifest.json` dentro da pasta `dist`

## Funcionalidades
- Criar, editar e excluir macros
- Interface minimalista e intuitiva
- Suporte a temas claro e escuro
- Compatibilidade com Chrome, Firefox e Edge
- Rápido acesso às macros

## Contribuição
Sinta-se à vontade para abrir issues e enviar pull requests para melhorias!

## Licença
Este projeto é licenciado sob a [MIT License](LICENSE).

