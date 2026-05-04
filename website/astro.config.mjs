// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
        site: 'https://DanielFreitas.github.io',
        base: '/web-lorebase',
        integrations: [
                starlight({
                        title: 'LoreBase',
                        description: 'Memória técnica viva para agentes de IA no seu codebase.',
                        customCss: ['./src/styles/custom.css'],
                        social: [
                                {
                                        icon: 'github',
                                        label: 'GitHub',
                                        href: 'https://github.com/DanielFreitas/web-lorebase',
                                },
                        ],
                        sidebar: [
                                {
                                        label: 'Comece aqui',
                                        items: [
                                                { label: 'Visão geral', slug: 'index' },
                                                { label: 'Instalação e Setup', slug: 'getting-started' },
                                        ],
                                },
                                {
                                        label: 'Uso Prático',
                                        items: [
                                                { label: 'Comandos Superpowers', slug: 'superpowers' },
                                        ],
                                },
                                {
                                        label: 'Fluxos (Workflows)',
                                        items: [
                                                { label: 'Projetos Novos', slug: 'workflows/new-project' },
                                                { label: 'Projetos Existentes', slug: 'workflows/existing-project' },
                                        ],
                                },
                        ],
                }),
        ],
});
