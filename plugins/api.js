import catalogues from '~/api/catalogue';

export default (ctx, inject) => {
  const repCatalogues = catalogues(ctx.$axios)
  inject('cataloguesApi', repCatalogues('catalogues'));
}