export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5f79f14db71464d9b6cbcefe',
                  title: 'Sanity Studio',
                  name: 'b-4-g-studio',
                  apiId: 'acf0c86d-dc6f-49fb-b546-6a204045bfd0'
                },
                {
                  buildHookId: '5f79f14d8888461936230f64',
                  title: 'Blog Website',
                  name: 'b-4-g',
                  apiId: 'bd9d1e9f-5074-4ad2-9d39-873416518e4d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ch3F24/B4G',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://b-4-g.netlify.app', category: 'apps'}
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
