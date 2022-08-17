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
