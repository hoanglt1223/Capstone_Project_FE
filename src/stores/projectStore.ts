import { getProjects } from '../API/project'
import { observable, action } from 'mobx'
class ProjectStore {
  @observable ProjectList = [{}]
  rootStore: unknown

  constructor(rootStore: unknown) {
    this.rootStore = rootStore
  }
  @action 
  public async loadProjects() {
    await getProjects().then(data => {
        console.log(data)
        return this.ProjectList = data
    })
    return 0
  }

}
export default ProjectStore
