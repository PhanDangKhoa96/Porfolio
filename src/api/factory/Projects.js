import BaseModel from "../BaseModel"

export default class Projects extends BaseModel {
    getResource() {
        return '/projects'
    }

    getProjects() {
        return this.$request.get(this.getResource())
    }
}