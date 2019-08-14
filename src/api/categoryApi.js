import BaseApi from './baseApi.js';
import fetchClient from './fetchClient.js';
import AppConstants from './../constants/appConstants';

class CategoryApi extends BaseApi {
    getResourceName() {
        return 'categories';
    }

    getProductFromCategoryId(category){
        const url = `${ AppConstants.API_URL }/${ this.getResourceName() }/${ category.id }/products`;
        return fetchClient.get(url);
    }
}
const categoryApi = new CategoryApi();
export default categoryApi;
