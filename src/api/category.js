import BaseApi from './baseApi.js';

class CategoryApi extends BaseApi {
    getResourceName() {
        return 'categories';
    }
}
const categoryApi = new CategoryApi();
export default categoryApi;
