import BaseModel from "../BaseModel"

export default class Profile extends BaseModel {
    getResource() {
        return '/profile'
    }

    getProfile() {
        return this.$request.get(this.getResource())
    }
}