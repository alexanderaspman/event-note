export  type ClockworkNotes = {
    [x: string]: any
   
    name:string
    id:string
    createdAt:string
    belongsToId:string
    images?:string
}
export type ClockworkCategorisedNotes = {
    id: string
    createAt: string
    updatedAt: string
    title: string
    body: string
    updateStatus: string
    version?: null|string
    asset?: null|string
    productId: string
}