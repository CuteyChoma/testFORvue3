import { AllStateTypes } from './interface'

const getters = {
  Token: (state: AllStateTypes) => state.user.Token,
  errorLogs: (state: AllStateTypes) => state.errorLog.logs,
  permission_routes: (state: AllStateTypes) => state.permission.routes,
  sidebar: (state: AllStateTypes) => state.app.sidebar,
  size: (state: AllStateTypes) => state.app.size,
  device: (state: AllStateTypes) => state.app.device,
}

export default getters
