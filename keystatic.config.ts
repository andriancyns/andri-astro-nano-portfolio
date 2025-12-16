import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  ui: {
    brand: {
      name: 'Andrian C. Putro Portfolio',
    },
  },
  collections: {
    blog: collection({
      label: 'Blog Posts',
      slugField: 'title',
      path: 'src/content/blog/*/',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        date: fields.date({ label: 'Date' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        image: fields.image({
          label: 'Cover Image',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        tags: fields.array(
          fields.text({ label: 'Tag' }),
          { label: 'Tags', itemLabel: (props) => props.value }
        ),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/blog',
            publicPath: '/images/blog/',
          },
        }),
      },
    }),
    projects: collection({
      label: 'Projects',
      slugField: 'title',
      path: 'src/content/projects/*/',
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description', multiline: true }),
        date: fields.date({ label: 'Date' }),
        draft: fields.checkbox({ label: 'Draft', defaultValue: false }),
        demoURL: fields.url({ label: 'Demo URL' }),
        repoURL: fields.url({ label: 'Repository URL' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: {
            directory: 'public/images/projects',
            publicPath: '/images/projects/',
          },
        }),
      },
    }),
    work: collection({
      label: 'Work Experience',
      slugField: 'company',
      path: 'src/content/work/*',
      format: { contentField: 'content' },
      schema: {
        company: fields.slug({ name: { label: 'Company' } }),
        role: fields.text({ label: 'Role' }),
        dateStart: fields.date({ label: 'Start Date' }),
        dateEnd: fields.text({ label: 'End Date (leave empty for "Present")' }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          links: true,
        }),
      },
    }),
  },
});
