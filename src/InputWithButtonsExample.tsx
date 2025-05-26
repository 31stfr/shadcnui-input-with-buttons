import { FaMinus, FaPlus } from 'react-icons/fa6';
import InputWithButtons from './components/ui/custom/InputWithButtons';

const InputWithButtonsExample = () => {
    return (
        <div className="flex flex-col gap-4">
            <InputWithButtons
                prefixButtons={[
                    {
                        icon: <FaPlus />,
                        onClick: () => alert('Button clicked!'),
                    },
                    {
                        icon: <FaMinus />,
                        onClick: () => alert('Button clicked!'),
                    },
                ]}
                name="input-01"
                type="text"
            />
            <InputWithButtons
                suffixButtons={[
                    {
                        icon: <FaPlus />,
                        onClick: () => alert('Button clicked!'),
                    },
                    {
                        icon: <FaMinus />,
                        onClick: () => alert('Button clicked!'),
                    },
                ]}
                name="input-01"
                type="text"
            />
        </div>
    );
};

export default InputWithButtonsExample;
