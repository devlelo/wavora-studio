# Wavora Studio

Editor de vídeo gratuito, local e de código aberto, adaptado a partir do projeto [Cutaway](https://github.com/S07K/cutaway).

O Wavora Studio permite importar ficheiros de vídeo, áudio e imagem, organizar clipes numa linha temporal com várias faixas, pré-visualizar a edição e exportar o resultado directamente no navegador. Os ficheiros são processados localmente no dispositivo.

## Funcionalidades

- Importação de vídeo, áudio e imagens
- Linha temporal com várias faixas, divisão, corte, reposicionamento e remoção de clipes
- Pré-visualização em tempo real
- Legendas manuais e transcrição local quando suportada
- Máscaras, efeitos, ajustes de cor e transições
- Desfazer e refazer operações
- Guardar e abrir projectos
- Exportação para MP4 ou WebM, conforme o suporte do navegador e do dispositivo

## Desenvolvimento

Requisitos: Node.js 20 ou superior e pnpm 10.17.1.

Comandos: pnpm install, pnpm dev, pnpm typecheck, pnpm test e pnpm build.

A aplicação web encontra-se em apps/web. O projecto usa uma arquitectura monorepo com motores de edição separados da interface.

## Privacidade e limitações

A edição principal é executada no navegador. A compatibilidade de codecs, a memória disponível e o desempenho dependem do navegador e do equipamento. Recomenda-se manter cópias de segurança dos projectos e dos ficheiros originais.

## Créditos e licença

Este produto é uma adaptação do [Cutaway, de S07K e colaboradores](https://github.com/S07K/cutaway), distribuído sob a licença MIT. O aviso de copyright e o texto da licença original são preservados em LICENSE.

As dependências e os recursos de terceiros mantêm as respectivas licenças.
