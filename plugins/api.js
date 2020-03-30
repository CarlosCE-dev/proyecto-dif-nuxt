import adonis from '~/api/adonis';
import catalogue from '~/api/catalogue';
import admin from '~/api/admin';

export default (ctx, inject) => {
  
  const adonisRep = adonis(ctx.$axios)
  inject('axios', adonisRep('axios'));

  const adminRep = admin(ctx.$axios)
  inject('admin', adminRep('admin'));

  const cataloguerRep = catalogue(ctx.$axios)
  inject('catalogue', cataloguerRep('catalogues'));
}