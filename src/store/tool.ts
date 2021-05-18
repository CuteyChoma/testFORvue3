import { computed } from 'vue'
import { ActionMethod, mapActions, mapGetters, Mapper } from 'vuex'
import type { MapperForAction, MapperForActionWithNamespace, MapperWithNamespace } from 'vuex'

export default ($store: any) => {
  const useGetters = (args: any) => {
    return Object.fromEntries(
      Object.entries(mapGetters(args)).map(([key, value]) => [
        key,
        computed(
          value.bind({
            $store,
          }),
        ),
      ]),
    )
  }

  const useActions = ((...args: [any, any]) => {
    return Object.fromEntries(
      Object.entries(mapActions(...args)).map(([key, value]: [string, ActionMethod]) => [
        key,
        value.bind({
          $store,
        }),
      ]),
    )
  }) as Mapper<ActionMethod> &
    MapperWithNamespace<ActionMethod> &
    MapperForAction &
    MapperForActionWithNamespace

  return { useActions, useGetters }
}
