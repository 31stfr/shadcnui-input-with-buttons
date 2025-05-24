import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import InputWithButtons from './components/ui/custom/InputWithButtons';
import { Label } from './components/ui/label';

const App = () => {
    const [counter01, setCounter01] = useState(0);
    const [counter02, setCounter02] = useState(0);

    return (
        <div className="flex flex-col items-center gap-6">
            <h1>Shadcn/ui</h1>
            <p>Custom Input with buttons</p>
            <div className="flex flex-col gap-4 p-6 w-fit bg-slate-700 rounded-lg">
                <Label htmlFor="counter-01">Counter n°01</Label>
                <InputWithButtons
                    suffixButtons={[
                        {
                            icon: <FaPlus />,
                            variant: 'secondary',
                            onClick: () => setCounter01(counter01 + 1),
                        },
                        {
                            icon: <FaMinus />,
                            variant: 'secondary',
                            onClick: () => setCounter01(counter01 - 1),
                        },
                    ]}
                    name="counter-01"
                    type="number"
                    value={counter01}
                />
                <Label htmlFor="counter-02">Counter n°02</Label>
                <InputWithButtons
                    prefixButtons={[
                        {
                            icon: <FaPlus />,
                            variant: 'secondary',
                            onClick: () => setCounter02(counter02 + 1),
                        },
                        {
                            icon: <FaMinus />,
                            variant: 'secondary',
                            onClick: () => setCounter02(counter02 - 1),
                        },
                    ]}
                    name="counter-02"
                    type="number"
                    value={counter02}
                />
            </div>
        </div>
    );
};

export default App;
