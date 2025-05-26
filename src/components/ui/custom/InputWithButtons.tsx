import { Input } from '@/components/ui/input';
import type { VariantProps } from 'class-variance-authority';
import { type ComponentProps, type ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button, buttonVariants } from '../button';

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

// "ParsedButtons" component props
interface ParsedButtonsProps {
    buttonSettings?: ButtonSettings[];
    parsingSettings: typeof prefixSettings | typeof suffixSettings;
}

// Settings for parsing prefix buttons
const prefixSettings = {
    className: 'rounded-r-none',
    extremityCheck: (index: number) => index === 0,
    extremityClassName: 'rounded-l-none',
    key: 'prefix-button-',
} as const;

// Settings for parsing suffix buttons
const suffixSettings = {
    extremityClassName: 'rounded-r-none',
    className: 'rounded-l-none',
    key: 'suffix-button-',
    extremityCheck: (index: number, length: number) => index === length - 1,
} as const;

// "ParsedButtons" component to render button list based on settings
const ParsedButtons = ({ buttonSettings, parsingSettings }: ParsedButtonsProps) => {
    if (!buttonSettings?.length) return undefined;

    return buttonSettings.map((currentButton, index) => {
        const isExtremity = parsingSettings.extremityCheck(index, buttonSettings.length);

        return (
            <Button
                key={`${parsingSettings.key}-${index}`}
                {...currentButton}
                type={currentButton.type ?? 'button'}
                className={twMerge(
                    parsingSettings.className,
                    isExtremity ? '' : parsingSettings.extremityClassName
                )}
            >
                {currentButton.icon}
            </Button>
        );
    });
};

// Shadcn input component with buttons
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
            <ParsedButtons buttonSettings={prefixButtons} parsingSettings={prefixSettings} />
            <Input {...rest} className={inputCss} />
            <ParsedButtons buttonSettings={suffixButtons} parsingSettings={suffixSettings} />
        </div>
    );
};

export default InputWithButtons;
