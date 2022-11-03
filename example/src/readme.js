import * as component_1 from '@kne/react-city-select';
import * as component_2 from 'antd/lib/button';
const readmeConfig = {
    name: `@kne/react-city-select`,
    description: `城市选择器`,
    summary: `<p>城市选择器</p>
<ul>
<li>内置了城市数据</li>
<li>可以通过preset自定义城市数据</li>
<li>支持城市简称拼音拼音简称搜索</li>
</ul>`,
    api: `<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>城市选择弹框标题</td>
<td>string</td>
<td>请选择城市</td>
</tr>
<tr>
<td>size</td>
<td>最大可选数量，注意如果为1的情况交互和其他有些不同</td>
<td>number</td>
<td>1</td>
</tr>
<tr>
<td>defaultValue</td>
<td>初始值</td>
<td>array</td>
<td>[]</td>
</tr>
<tr>
<td>onChange</td>
<td>城市选择完成回调函数</td>
<td>function</td>
<td>-</td>
</tr>
<tr>
<td>showChinaQuan</td>
<td>是否显示国内城市的全加省市</td>
<td>boolean</td>
<td>false</td>
</tr>
<tr>
<td>showForeignQuan</td>
<td>是否显示国外大洲的全加洲</td>
<td>boolean</td>
<td>false</td>
</tr>
</tbody>
</table>
<h4>createCitySelect</h4>
<p>可以使用调用函数的方式弹出一个城市选择框，方法的参数会传递给CitySelect组件</p>
<h4>DisplayCity</h4>
<p>用于传入城市id显示城市名</p>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>城市id</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table>
<h4>preset</h4>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>options</td>
<td>需要覆盖的参数,具体参数参考下面api部分</td>
<td>object</td>
<td>-</td>
</tr>
</tbody>
</table>
<h4>api</h4>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>loadData</td>
<td>获取城市数据，默认采用内置数据</td>
<td>function</td>
<td>-</td>
</tr>
<tr>
<td>getChinaCities</td>
<td>获取中国的城市列表</td>
<td>function</td>
<td>-</td>
</tr>
<tr>
<td>getCountries</td>
<td>获取所有国家列表</td>
<td>funciton</td>
<td>-</td>
</tr>
<tr>
<td>getList</td>
<td>获取省份列表</td>
<td>function</td>
<td>-</td>
</tr>
<tr>
<td>getCity(id)</td>
<td>传入城市ID返回城市数据</td>
<td>function</td>
<td>-</td>
</tr>
<tr>
<td>getCityByName(name)</td>
<td>传入城市名返回城市数据</td>
<td>function</td>
<td>-</td>
</tr>
<tr>
<td>searchCities(searchStr)</td>
<td>通过关键字搜索城市，支持拼音首字母缩写</td>
<td>function</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3>NationalitySelect</h3>
<p>国籍，参数同createCitySelect</p>`,
    example: {
        isFull: false,
        className: `react_city_select_e2227`,
        style: ``,
        list: [{
    title: `城市单选`,
    description: `展示城市单选的情况`,
    code: `const {createCitySelect} = citySelect;
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

`,
    scope: [{
    name: "citySelect",
    packageName: "@kne/react-city-select",
    component: component_1
},{
    name: "button",
    packageName: "antd/lib/button",
    component: component_2
}]
},{
    title: `城市多选`,
    description: `展示城市多选的情况`,
    code: `const {createCitySelect} = citySelect;
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

`,
    scope: [{
    name: "citySelect",
    packageName: "@kne/react-city-select",
    component: component_1
},{
    name: "button",
    packageName: "antd/lib/button",
    component: component_2
}]
},{
    title: `城市名称显示`,
    description: `展示选择一个城市并显示出其城市名称`,
    code: `const {createCitySelect, DisplayCity} = citySelect;
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

`,
    scope: [{
    name: "citySelect",
    packageName: "@kne/react-city-select",
    component: component_1
},{
    name: "button",
    packageName: "antd/lib/button",
    component: component_2
}]
},{
    title: `国籍`,
    description: `展示国家`,
    code: `const {createNationalitySelect} = citySelect;
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
                createNationalitySelect({
                    title:"选择国籍",
                    defaultValue: value,
                    onChange: (value) => {
                        setValue(value);
                    }
                });
            }}>选择国籍</Button>
        </div>

    </div>;
};

render(<BaseExample/>);

`,
    scope: [{
    name: "citySelect",
    packageName: "@kne/react-city-select",
    component: component_1
},{
    name: "button",
    packageName: "antd/lib/button",
    component: component_2
}]
}]
    }
};
export default readmeConfig;
