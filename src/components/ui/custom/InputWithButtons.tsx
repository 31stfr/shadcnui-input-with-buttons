import { Input } from '@/components/ui/input';
import { twMerge } from 'tailwind-merge';
import { Button, buttonVariants } from '../button';
import { forwardRef, type ComponentProps, type ReactElement } from 'react';
import type { VariantProps } from 'class-variance-authority';

interface ButtonSettings extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    icon: ReactElement;
}

interface InputWithButtonsProps extends ComponentProps<'input'> {
    prefixButtons?: ButtonSettings[];
    suffixButtons?: ButtonSettings[];
    wrapperClassName?: string;
}

// Shadcn Ui custom Input avec des boutons en "prefix" et "suffix"
const InputWithButtons = forwardRef<HTMLInputElement, InputWithButtonsProps>(
    (
        {
            prefixButtons = undefined,
            suffixButtons = undefined,
            wrapperClassName = undefined,
            ...rest
        },
        ref
    ) => {
        const inputCss = twMerge(
            'flex-1',
            prefixButtons ? 'rounded-l-none' : undefined,
            suffixButtons ? 'rounded-r-none' : undefined
        );

        return (
            <div className={twMerge('flex flex-wrap', wrapperClassName)}>
                {!!prefixButtons?.length &&
                    prefixButtons.map((prefixButton, index) => {
                        const firstButton = index === 0;

                        return (
                            <Button
                                key={`prefix-button-${index}`}
                                {...prefixButton}
                                ref={undefined}
                                // Renseigne le type "button" par défaut pour éviter la soumission d'un éventuel formulaire lors du click
                                type={prefixButton.type ?? 'button'}
                                className={twMerge(
                                    'rounded-r-none',
                                    firstButton ? '' : 'rounded-l-none'
                                )}
                            >
                                {prefixButton.icon}
                            </Button>
                        );
                    })}
                <Input {...rest} ref={ref} className={inputCss} />
                {!!suffixButtons?.length &&
                    suffixButtons.map((suffixButton, index) => {
                        const lastButton = index === suffixButtons.length - 1;

                        return (
                            <Button
                                key={`suffix-button-${index}`}
                                {...suffixButton}
                                ref={undefined}
                                // Renseigne le type "button" par défaut pour éviter la soumission d'un éventuel formulaire lors du click
                                type={suffixButton.type ?? 'button'}
                                className={twMerge(
                                    'rounded-l-none',
                                    lastButton ? '' : 'rounded-r-none'
                                )}
                            >
                                {suffixButton.icon}
                            </Button>
                        );
                    })}
            </div>
        );
    }
);
InputWithButtons.displayName = 'InputWithButtons';

export default InputWithButtons;
