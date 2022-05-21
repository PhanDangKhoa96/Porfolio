import Profile from "./factory/Profile"
import Filter from "./factory/Filter"
import Projects from "./factory/Projects"
import Skills from "./factory/Skills"

export default ($axios) => ({
    // eslint-disable-next-line
    profile: new Profile($axios),
    filter: new Filter($axios),
    projects: new Projects($axios),
    skills: new Skills($axios)
})