import { memo, type FC } from "react";

type BaseProps = {
    label?: string;
    icon?: string;
    classes?: string;
};

type AnchorProps = BaseProps & {
    href: string;
    target?: "_self" | "_blank" | "_parent" | "_top";
};

type ButtonProps = BaseProps & {
    href?: undefined;
    target?: never;
};

type ButtonAllProps = (AnchorProps | ButtonProps) & {
    variant?: "primary" | "outline"
};


const ButtonBase: FC<ButtonAllProps> = memo(({
    href,
    target = "_self",
    label,
    icon,
    variant = "primary",
    classes = ""
}) => {
    const baseClass = variant === "primary" ? "btn-primary" : "btn-outline";

    if (href) {
        return (
            <a
                href={href}
                target={target}
                className={`btn ${baseClass} ` + classes}
            >
                {label}
                {icon && (
                    <span className="material-symbols-rounded" aria-hidden="true">
                        {icon}
                    </span>
                )}
            </a>
        );
    }

    return (
        <button type="button" className={`btn ${baseClass}` + classes}>
            {label}
            {icon && (
                <span className="material-symbols-rounded" aria-hidden="true">
                    {icon}
                </span>
            )}
        </button>
    );
})

export const ButtonPrimary = (props: ButtonAllProps) => (
    <ButtonBase {...props} variant="primary" />
)

export const ButtonOutline = (props: ButtonAllProps) => (
    <ButtonBase {...props} variant="outline" />
)

