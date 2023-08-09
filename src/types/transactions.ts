export type TItem = {entity: string, id: number, date: string, points: number};
export type TItems = TItem[];
export type GroupTIems = {
    title: string;
    data: TItems;
}
export type GroupsTItem = GroupTIems[];