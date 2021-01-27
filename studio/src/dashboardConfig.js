export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6011380b132aa2f41e1de37d',
                  title: 'Sanity Studio',
                  name: 'ethio-eritrean-tape-archive-studio',
                  apiId: '9aaad9ce-1d72-49ca-8473-bbbdf20a791c'
                },
                {
                  buildHookId: '6011380b4e9946fb67d7db8c',
                  title: 'Blog Website',
                  name: 'ethio-eritrean-tape-archive',
                  apiId: '9396f662-4839-4971-987e-8c5a7ffb5004'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/digitalaksjon/ethio-eritrean-tape-archive',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://ethio-eritrean-tape-archive.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
