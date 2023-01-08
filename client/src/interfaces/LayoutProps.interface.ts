export interface ElementProps {
    children?: JSX.Element | JSX.Element[] | string;
    className?: string;
    style?: React.CSSProperties;
}

export interface ButtonProps extends ElementProps { 
    onClick?: () => void;
    disabled?: boolean;
    value?: string;
    circle?: boolean;
    height?: number;
}

export interface LayoutProps extends ElementProps {
}