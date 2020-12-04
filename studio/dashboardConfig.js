export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5fca39f97968cc0123eb9073',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fkaekg2i',
                  apiId: '027179bf-5e2d-4153-93ea-95e07b245094'
                },
                {
                  buildHookId: '5fca39f9d460be00b8667074',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-k5ie9fqa',
                  apiId: 'c6355e88-f7c3-4d46-bdaa-deeef193dc2d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wilsonusman/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-k5ie9fqa.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
