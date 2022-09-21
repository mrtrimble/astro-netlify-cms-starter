import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import image from '@astrojs/image';
import compress from 'astro-compress';
import NetlifyCMS from 'astro-netlify-cms';

// https://astro.build/config
export default defineConfig({
  integrations: [
    NetlifyCMS({
      config: {
        backend: {
          name: 'git-gateway',
          branch: 'main',
        },
        collections: [
          {
            name: 'posts',
            label: 'Blog Posts',
            folder: 'src/pages/posts',
            create: true,
            delete: true,
            fields: [
              {
                name: 'title',
                widget: 'string',
                label: 'Post Title',
              },
              {
                name: 'date',
                widget: 'datetime',
                label: 'Post Date',
                date_format: 'MM/DD/YYYY',
                time_format: 'HH:mm',
              },
              {
                name: 'description',
                widget: 'text',
                label: 'Post Description',
              },
              {
                name: 'image',
                widget: 'image',
                label: 'Post Image',
              },
              {
                name: 'body',
                widget: 'markdown',
                label: 'Post Body',
              },
              {
                name: 'tags',
                widget: 'list',
                label: 'Post Tags',
                hint: 'Add between one to five tags, comma separated.',
                max: 5,
                min: 1,
                default: ['post'],
              },
              {
                name: 'layout',
                widget: 'hidden',
                label: 'Post Layout',
                default: '../../layouts/Post.astro',
              },
            ],
          },
        ],
      },
    }),
    sitemap(),
    image(),
    compress(),
  ],
});
