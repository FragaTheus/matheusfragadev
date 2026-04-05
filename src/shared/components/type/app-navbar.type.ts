export interface AppNavbarGridProps{
    link: string;
    label: string;
    isActive: boolean;
    Icon: React.ElementType;
}

export interface AppNavbarProps{
    gridItems: AppNavbarGridProps[];
}

