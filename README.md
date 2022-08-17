
# react-city-select


### 描述

城市选择器


### 安装

```shell
npm i --save @kne/react-city-select
```


### 概述

城市选择器

* 内置了城市数据
* 可以通过preset自定义城市数据
* 支持城市简称拼音拼音简称搜索


### 示例

#### 示例代码

- 城市单选
- 展示城市单选的情况
- citySelect(@kne/react-city-select),button(antd/lib/button)

```jsx
const {createCitySelect} = citySelect;
const {default: Button} = button;
const {useState} = React;

const BaseExample = () => {
    const [value, setValue] = useState([]);
    return <div>
        <div>
            {JSON.stringify(value, null, 2)}
        </div>
        <div>
            <Button type="primary" onClick={() => {
                createCitySelect({
                    defaultValue: value,
                    onChange: (value) => {
                        setValue(value);
                    }
                });
            }}>点击选择城市</Button>
        </div>

    </div>;
};

render(<BaseExample/>);

```

- 城市多选
- 展示城市多选的情况
- citySelect(@kne/react-city-select),button(antd/lib/button)

```jsx
const {createCitySelect} = citySelect;
const {default: Button} = button;
const {useState} = React;

const BaseExample = () => {
    const [value, setValue] = useState([]);
    return <div>
        <div>
            {JSON.stringify(value, null, 2)}
        </div>
        <div>
            <Button type="primary" onClick={() => {
                createCitySelect({
                    defaultValue: value,
                    size: 5,
                    onChange: (value) => {
                        setValue(value);
                    }
                });
            }}>点击选择城市</Button>
        </div>

    </div>;
};

render(<BaseExample/>);

```

- 城市名称显示
- 展示选择一个城市并显示出其城市名称
- citySelect(@kne/react-city-select),button(antd/lib/button)

```jsx
const {createCitySelect, DisplayCity} = citySelect;
const {default: Button} = button;
const {useState} = React;

const BaseExample = () => {
    const [value, setValue] = useState([]);
    return <div>
        <div>
            {value.map((id)=><DisplayCity id={id} key={id}>{({city,parent})=>{
                return ((city) => {
                    if (!city) {
                        return '';
                    }
                    return parent ? parent.name + '·' + city.name : city.name;
                })(city);
            }}</DisplayCity>)}
        </div>
        <div>
            <Button type="primary" onClick={() => {
                createCitySelect({
                    defaultValue: value,
                    onChange: (value) => {
                        setValue(value);
                    }
                });
            }}>点击选择城市</Button>
        </div>

    </div>;
};

render(<BaseExample/>);

```


### API

| 属性名          | 说明                        | 类型     | 默认值   |
|--------------|---------------------------|--------|-------|
| title        | 城市选择弹框标题                  | string | 请选择城市 |
| size         | 最大可选数量，注意如果为1的情况交互和其他有些不同 | number | 1     |
| defaultValue | 初始值                       | array  | []    |
| onChange     | 城市选择完成回调函数|function| -     |

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

