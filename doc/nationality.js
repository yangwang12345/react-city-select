const {createNationalitySelect} = citySelect;
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
