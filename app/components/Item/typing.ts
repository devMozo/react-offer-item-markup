import { ItemDescriptionProps } from '../ItemDescription/typing';
import { ItemBonusProps } from '../ItemBonus/typing';
import { BrandItem } from '../ItemBrands/typing';

export interface ItemProps {
    description: ItemDescriptionProps;
    bonus: ItemBonusProps;
    brands: BrandItem[];
}
