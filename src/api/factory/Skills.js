import BaseModel from '../BaseModel';

export default class Skills extends BaseModel {
    getResource() {
        return '/skills'
    }

    getSkills() {
        return this.$request.get(this.getResource())
    }
}