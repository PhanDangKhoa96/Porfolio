import BaseModel from "../BaseModel"

export default class Filter extends BaseModel {
    getResource() {
        return '/filter'
    }

    getFilter() {
        return this.$request.get(this.getResource())
    }
}