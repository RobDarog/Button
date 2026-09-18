import { forwardRef, type ReactNode, type ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

/**
 * Button — 1:1 code implementation of the "Mygtukas" Figma component set.
 *
 * Figma variant properties map directly to props here:
 *   Type  -> `type`   (primary | secondary | ghost)
 *   State -> `state`  (default | hover | disabled)
 *   Size  -> `size`   (medium | large)
 *
 * `state` exists to mirror the Figma variants 1:1 for design review /
 * Storybook (so "Hover" can be inspected without a mouse). In real app
 * usage just render <Button type="primary" size="medium">, leave `state`
 * on its default, and let the native :hover / disabled attribute do the
 * work — that's what actually drives the interactive styles below.
 */

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonVisualState = 'default' | 'hover' | 'disabled';
export type ButtonSize = 'medium' | 'large';

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type'> {
  /** Visual variant. Figma property: Type. @default 'primary' */
  type?: ButtonVariant;
  /**
   * Forces a visual state, matching the Figma "State" variant.
   * Leave as 'default' for real usage — disabled buttons should instead
   * be controlled with the standard `disabled` behavior via `state="disabled"`.
   * @default 'default'
   */
  state?: ButtonVisualState;
  /** Figma property: Size. @default 'medium' */
  size?: ButtonSize;
  /** Optional leading icon slot. */
  icon?: ReactNode;
  children: ReactNode;
}

const sizeClasses: Record<ButtonSize, string> = {
  medium: 'px-4 py-2.5 text-sm gap-2',
  large: 'px-5 py-3 text-base gap-2',
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-on-primary border border-transparent hover:bg-primary-hover',
  secondary: 'bg-white text-primary border border-primary hover:bg-primary/5',
  ghost: 'bg-transparent text-primary border border-transparent hover:bg-primary/10',
};

// Applied on top of variantClasses when `state="hover"` is forced explicitly
// (e.g. from Storybook Controls), rather than relying on real :hover.
const forcedHoverClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary-hover',
  secondary: 'bg-primary/5',
  ghost: 'bg-primary/10',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { type = 'primary', state = 'default', size = 'medium', icon, children, className, onClick, ...rest },
    ref,
  ) => {
    const isDisabled = state === 'disabled';
    const isForcedHover = state === 'hover';

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        aria-disabled={isDisabled}
        onClick={isDisabled ? undefined : onClick}
        className={clsx(
          'inline-flex items-center justify-center rounded-md font-medium',
          'transition-colors duration-150',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          sizeClasses[size],
          isDisabled
            ? 'cursor-not-allowed border border-transparent bg-disabled-surface text-on-disabled'
            : clsx('cursor-pointer', variantClasses[type], isForcedHover && forcedHoverClasses[type]),
          className,
        )}
        {...rest}
      >
        {icon && (
          <span className="inline-flex shrink-0 items-center justify-center" aria-hidden="true">
            {icon}
          </span>
        )}
        <span>{children}</span>
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
