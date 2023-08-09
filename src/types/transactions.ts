export type TItem = {
    entity: string,
    date: string,
    expiryDate?: string,
    points: number,
    operation: string,
    transactionNo: string,
    giftCode?: string,
    id: number,
};
export type TItems = TItem[];
export type GroupTIems = {
    title: string;
    data: TItems;
}
export type GroupsTItem = GroupTIems[];