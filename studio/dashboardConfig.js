export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5ffb12410cc6c33608338b7c',
                  title: 'Sanity Studio',
                  name: 'hoffmeyerphoto-studio',
                  apiId: '2a00bbf7-ead3-48e2-8950-e4811c57cb0a'
                },
                {
                  buildHookId: '5ffb124120fc8746c481cebe',
                  title: 'Portfolio Website',
                  name: 'hoffmeyerphoto',
                  apiId: 'a03377ec-c46b-49cf-a100-d688314b9743'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hoffmeyer/hoffmeyerphoto',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://hoffmeyerphoto.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}