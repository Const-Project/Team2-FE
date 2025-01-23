// types.ts (타입 정의 파일)
export interface Drink {
    name: string;
    price: string;
    alt: string;
    }

    export interface NavbarProps {
    activeMenu: string;
    setActiveMenu: React.Dispatch<React.SetStateAction<string>>;
    menuItems: string[];
    }

    export interface MenuProps {
    drinks: Drink[];
    }

    export interface AddMenuFormProps {
    addDrink: (newDrink: Drink) => void;
    }