const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false
})

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         prependData: `
//           @import "@/style/global.scss";
//         `
//       }
//     }
//   }
// };