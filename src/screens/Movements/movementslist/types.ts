import { MovementsSection } from "../../../models/MovementsResponse";

export interface MovementsListProps {
    movements: MovementsSection[],
    getData: () => void,
    loading: boolean,
    moreData: boolean
}