/**
 * @name AutoImportDeps
 * @description 按需加载，自动引入
 */

import AutoImport from 'unplugin-auto-import/vite';
import { ElementPlusResolver, AntDesignVueResolver, ArcoResolver } from 'unplugin-vue-components/resolvers';
import { TDesignResolver } from '@tdesign-vue-next/auto-import-resolver';
import { VueRouterAutoImports } from 'unplugin-vue-router';

export const AutoImportDeps = () => {
  return AutoImport({
    dts: 'types/auto-imports.d.ts',
    imports: [
      'vue',
      'pinia',
      {
        '@vueuse/core': [],
      },
      {
        'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar'],
      },
      VueRouterAutoImports,
    ],
    resolvers: [
      ElementPlusResolver(),
      AntDesignVueResolver({ resolveIcons: true, importStyle: false, prefix: 'Ant' }),
      TDesignResolver({
        library: 'vue-next',
      }),
      ArcoResolver({
        sideEffect: true,
      }),
    ],
  });
};
