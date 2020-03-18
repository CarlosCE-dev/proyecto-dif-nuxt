import createRepository from '~/api/adonis'

export default (ctx, inject) => {

  const repositoryWithAxios = createRepository( ctx.$axios )
  inject('guardianesApi', repositoryWithAxios('guardianes'));
 
}