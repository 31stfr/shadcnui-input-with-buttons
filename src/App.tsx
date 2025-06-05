import { useState } from 'react';
import { FaEye, FaEyeSlash, FaMinus, FaPlus, FaXmark } from 'react-icons/fa6';
import InputWithButtons from './components/ui/custom/InputWithButtons';
import { Label } from './components/ui/label';

type PasswordType = 'password' | 'text';

type PasswordState = {
    type: PasswordType;
    value: string;
};

const App = () => {
    const [counter01, setCounter01] = useState(0);
    const [counter02, setCounter02] = useState(0);

    const [password01, setPassword01] = useState<PasswordState>({
        type: 'password',
        value: 'MyPassword',
    });
    const [password02, setPassword02] = useState<PasswordState>({
        type: 'password',
        value: 'MyPassword',
    });

    const [userName01, setUserName01] = useState('Billy Butcher');
    const [userName02, setUserName02] = useState('Hughie Campbell');

    return (
        <div className="min-w-screen min-h-screen flex flex-col justify-center items-center gap-12 p-6 bg-linear-to-bl from-rose-400 to-rose-500">
            <div className="relative flex flex-col items-center gap-6 p-12 rounded-3xl bg-white shadow-lg outline-8 outline-white/40">
                <div className="relative md:absolute top-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-full col-span-full flex flex-col items-center md:p-6 md:pb-0 rounded-3xl rounded-b-none bg-white outline-8 outline-white/40">
                    <h1 className="text-5xl">
                        Shadcn<span className="text-2xl text-neutral-300 font-normal">/ui</span>
                    </h1>
                    <p>Custom inputs with buttons</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-12">
                    <h2 className="order-1 md:order-1 text-center">Control inputs value</h2>
                    <h2 className="order-3 md:order-2 text-center">Toggle password visibility</h2>
                    <h2 className="order-5 md:order-3 text-center">Reset inputs</h2>
                    <div className="order-2 md:order-4 flex flex-col gap-4">
                        <Label htmlFor="counter-01">Counter n°01</Label>
                        <InputWithButtons
                            suffixButtons={[
                                {
                                    icon: <FaPlus />,
                                    onClick: () => setCounter01(counter01 + 1),
                                },
                                {
                                    icon: <FaMinus />,
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
                                    onClick: () => setCounter02(counter02 + 1),
                                },
                                {
                                    icon: <FaMinus />,
                                    onClick: () => setCounter02(counter02 - 1),
                                },
                            ]}
                            name="counter-02"
                            type="number"
                            value={counter02}
                        />
                    </div>
                    <div className="order-3 md:order-5 flex flex-col gap-4">
                        <Label htmlFor="password-01">Password</Label>
                        <InputWithButtons
                            suffixButtons={[
                                {
                                    icon:
                                        'password' === password01.type ? <FaEye /> : <FaEyeSlash />,
                                    onClick: () =>
                                        setPassword01({
                                            ...password01,
                                            type:
                                                'password' === password01.type
                                                    ? 'text'
                                                    : 'password',
                                        }),
                                },
                            ]}
                            name="password-01"
                            type={password01.type}
                            value={password01.value}
                            onChange={(e) =>
                                setPassword01({
                                    ...password01,
                                    value: e.target.value,
                                })
                            }
                        />
                        <Label htmlFor="password-02">Password confirm</Label>
                        <InputWithButtons
                            prefixButtons={[
                                {
                                    icon:
                                        'password' === password02.type ? <FaEye /> : <FaEyeSlash />,
                                    onClick: () =>
                                        setPassword02({
                                            ...password02,
                                            type:
                                                'password' === password02.type
                                                    ? 'text'
                                                    : 'password',
                                        }),
                                },
                            ]}
                            name="password-02"
                            type={password02.type}
                            value={password02.value}
                            onChange={(e) =>
                                setPassword02({
                                    ...password02,
                                    value: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="order-6 md:order-6 flex flex-col gap-4">
                        <Label htmlFor="user-name-01">First user name</Label>
                        <InputWithButtons
                            suffixButtons={[
                                {
                                    icon: <FaXmark />,
                                    onClick: () => setUserName01(''),
                                },
                            ]}
                            name="user-name-01"
                            type="text"
                            value={userName01}
                            placeholder="Enter first user name"
                            onChange={(e) => setUserName01(e.target.value)}
                        />
                        <Label htmlFor="user-name-02">Second user name</Label>
                        <InputWithButtons
                            prefixButtons={[
                                {
                                    icon: <FaXmark />,
                                    onClick: () => setUserName02(''),
                                },
                            ]}
                            name="user-name-02"
                            type="text"
                            value={userName02}
                            placeholder="Enter first user name"
                            onChange={(e) => setUserName02(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <div className="text-sm p-4 py-2 rounded-4xl bg-white shadow-lg outline-8 outline-white/40">
                A <a href="https://31st.fr">31st.fr</a> repository, using{' '}
                <a href="https://ui.shadcn.com">shadcn/ui</a> components, CSS powered by{' '}
                <a href="https://tailwindcss.com">TailwindCSS</a>, built with{' '}
                <a href="https://vite.dev">Vite</a>.
            </div>
        </div>
    );
};

export default App;
