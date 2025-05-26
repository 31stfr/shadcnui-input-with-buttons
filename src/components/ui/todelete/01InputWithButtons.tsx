import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps, ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import type { buttonVariants } from '../button';
import { Input } from '../input';

// Buttons' type
interface ButtonSettings extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    icon: ReactElement;
}

// "InputWithButtons" component props
interface InputWithButtonsProps extends ComponentProps<'input'> {
    className?: string;
    prefixButtons?: ButtonSettings[];
    suffixButtons?: ButtonSettings[];
}

const InputWithButtons = ({
    prefixButtons = undefined,
    suffixButtons = undefined,
    className = undefined,
    ...rest
}: InputWithButtonsProps) => {
    const inputCss = twMerge(
        'flex-1',
        prefixButtons ? 'rounded-l-none' : undefined,
        suffixButtons ? 'rounded-r-none' : undefined
    );

    return (
        <div className={twMerge('flex flex-wrap', className)}>
            <Input {...rest} className={inputCss} />
        </div>
    );
};

export default InputWithButtons;
