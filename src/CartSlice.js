import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartitems: [],
    totalAmount: 0,
};


const CartSlice = createSlice({
    name: 'cartadd',
    initialState,
    reducers: {
        addcart: (state, action) => {

            const {cartitems,totalAmount}=state;
            const {id,name,sell_price,quantity,images,image }=action.payload;
            let currentTotal=totalAmount;
            const item =cartitems?.find((item)=>item.id===id);
            if (item){
                item.qauntity+=1;
                currentTotal=parseFloat(currentTotal)+parseFloat(sell_price)
                
            }
            else{
                let sum=parseFloat(sell_price * quantity).toFixed(2);

                cartitems.push({
                    id:id,
                    name:name,
                    sell_price:sell_price,
                    quantity:quantity, 
                    images:images,
                    image:image,
                })

                console.log(cartitems,"adws")
                currentTotal=parseFloat(currentTotal)+parseFloat(sum)
            }

            state.totalAmount=parseFloat(currentTotal)


        },
        removecart:(state,action)=>{
            const {cartitems,totalAmount}=state;
            const {id,sell_price,allRemove}=action.payload
            let currentTotal=totalAmount;
            const item =cartitems?.find((item)=>item.id===id);
            if (allRemove){
                const index=cartitems.indexOf(item);
                cartitems.splice (index,1);
                currentTotal=0
               
                
            }
            else{
                if (cartitems.length===0){
                    currentTotal=0;
                    
                }
                else{
                    currentTotal-=sell_price;
                    item.qauntity-=1;
                    if (item.quantity <=0){
                        const index=cartitems.indexOf(item);
                        cartitems.splice(index,1);
                        if(cartitems.length===0){
                            currentTotal=0
                        }
                    }
                }
            }
            state.totalAmount=parseFloat(currentTotal);
        }
        
    },

})
export default CartSlice.reducer;
export const { addcart ,removecart} = CartSlice.actions; 