import { getProjects } from '../API/project'
import { observable, action } from 'mobx'
class ProjectStore {
  @observable ProjectList = []

  @action
  public async loadProjects() {
    await getProjects().then(data => {
      console.log(data)
      this.ProjectList = data as []
    })
    return 0
  }
}
export default ProjectStore
