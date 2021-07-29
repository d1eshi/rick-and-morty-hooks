import path from 'path'

import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
// import alias from '@rollup/plugin-alias'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  plugins: [
    reactRefresh(),
    // alias({
    //   entries: [
    //     { find: 'components', replacement: '../../components' },
    //     { find: 'services', replacement: '../services' },
    //     { find: 'hooks', replacement: '../../hooks' },
    //   ],
    // }),
  ],
})
