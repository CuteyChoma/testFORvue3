import { userState } from '@/store/modules/user'
import { tagsViewState } from '@/store/modules/tagsView'
import { errorLogState } from '@/store/modules/errorLog'
import { permissionType } from '@/store/modules/permission'
import { appState } from '@/store/modules/app'
import { settingsState } from '@/store/modules/settings'

export default interface RootStateTypes {}

export interface AllStateTypes extends RootStateTypes {
  user: userState
  tagsView: tagsViewState
  errorLog: errorLogState
  permission: permissionType
  app: appState
  settings: settingsState
}
