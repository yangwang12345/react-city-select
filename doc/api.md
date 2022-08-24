| 属性名          | 说明                        | 类型     | 默认值   |
|--------------|---------------------------|--------|-------|
| title        | 城市选择弹框标题                  | string | 请选择城市 |
| size         | 最大可选数量，注意如果为1的情况交互和其他有些不同 | number | 1     |
| defaultValue | 初始值                       | array  | []    |
| onChange     | 城市选择完成回调函数|function| -     |
| showChinaQuan    |是否显示国内城市的全加省市|boolean|false|
| showForeignQuan |是否显示国外大洲的全加洲|boolean|false|

#### createCitySelect

可以使用调用函数的方式弹出一个城市选择框，方法的参数会传递给CitySelect组件

#### DisplayCity

用于传入城市id显示城市名

| 属性名          | 说明                        | 类型     | 默认值 |
|--------------|---------------------------|--------|-----|
|id|城市id|string| -   |

#### preset

| 属性名          | 说明                    | 类型     | 默认值 |
|--------------|-----------------------|--------|-----|
|options| 需要覆盖的参数,具体参数参考下面api部分 |object|-|

#### api

| 属性名                     | 说明                    | 类型     | 默认值 |
|-------------------------|-----------------------|--------|-----|
| loadData                | 获取城市数据，默认采用内置数据|function|-|
| getChinaCities          |获取中国的城市列表|function|-|
| getCountries            |获取所有国家列表|funciton|-|
| getList                 |获取省份列表|function|-|
| getCity(id)             |传入城市ID返回城市数据|function|-|
| getCityByName(name)     |传入城市名返回城市数据|function|-|
| searchCities(searchStr) |通过关键字搜索城市，支持拼音首字母缩写|function|-|


### NationalitySelect
国籍，参数同createCitySelect
