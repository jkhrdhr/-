/***
 *   封装Storage
 *  */
const STORAGE_KEY = 'mall'

export default {
      // 存储数据
      setItem (key, value, moudleName) {
            if (moudleName) {
                  // 如果有模块，说明要在当前模块下面添加对应的属性
                  const moduleVal = this.getItem(moudleName)
                  if (moduleVal) {
                        moudleName[key] = value
                        this.setItem(moudleName, moduleVal)
                  }
            } else {
                  const val = this.getStorage()
                  val[key] = value
                  window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
            }
      },
      // 获取某一个值
      getItem (key, moudleName) {
            if (moudleName) {
                  const val = this.getItem(moudleName)
                  if (val) return val[key]
            }
            return this.getStorage()[key]
      },
      // 获取所有的值
      getStorage () {
            return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)) || {}
      },
      // 清除某个
      clear (key, moudleName) {
            const val = this.getStorage()
            if (moudleName) {
                  if (!val[moudleName]) return
                  delete val[moudleName][key]
            } else {
                  delete val[key]
            }
            window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
      }
}
