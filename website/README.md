# LoreBase — Website

Site oficial de documentação do projeto LoreBase.

## Stack

- [Astro](https://astro.build)
- [Starlight](https://starlight.astro.build)
- [GitHub Pages](https://pages.github.com)
- [GitHub Actions](https://github.com/features/actions)

## Desenvolvimento local

```bash
cd website
npm install
npm run dev
```

Abra http://localhost:4321 no navegador.

## Build

```bash
npm run build
npm run preview
```

## Deploy

O deploy é feito automaticamente pelo GitHub Actions quando há push na branch `main`
em arquivos dentro de `website/`, `assets/` ou `README.md`.

Workflow: `.github/workflows/deploy-site.yml`

## URL

https://DanielFreitas.github.io/superpowers-codebase-learn/

## Configuração do GitHub Pages

Após o primeiro deploy via Actions, configure em:

```
Settings → Pages → Build and deployment → Source: GitHub Actions
```
