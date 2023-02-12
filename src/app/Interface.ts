export interface Products {
  productId: number;
  productName: string;
  productCategoryId: string;
  productImage: string;
  productPrice: number;
}
export interface Category {
  categoryId: number;
  categoryName: string;
  categoryImage: string;
}
export interface Cart{
  cartId:number,
  userId:number,
  productId:number
}
export interface Orders{
  productId:number,
  productImage:string,
  productName:string,
  productPrice:number,
  orderTime:number
}
