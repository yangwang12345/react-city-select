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
