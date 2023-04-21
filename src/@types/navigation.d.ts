import { MealStorageDTO } from "@storage/meals/MealStorageDTO";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            home: undefined;
            game: {
                level: string;
            };
        }
    }
}
