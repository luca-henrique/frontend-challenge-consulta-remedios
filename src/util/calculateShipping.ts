// O frete é grátis para compras acima de R$ 250,00
// A cada produto adicionado, deve-se somar R$ 10,00 ao frete

export const SHIPPING_PRICE_EACH_PRODUCT = 10;
export const MAX_PRICE_SHIPPING = 250;

// Colocar todas esses informações e fazer os calculos lá dentro

//Iria evitar repetir calculationOptions

export const calculateShipping = (subtotal: number, lengthCart: number) => {
  const calculationOptions = subtotal < MAX_PRICE_SHIPPING;
  const priceTotalShipping = lengthCart * SHIPPING_PRICE_EACH_PRODUCT;

  return calculationOptions ? priceTotalShipping : 0;
};

export const calculateTotal = (subTotal: number, lengthCart: number) => {
  const calculationOptions = subTotal < MAX_PRICE_SHIPPING;

  const priceTotalShipping = lengthCart * SHIPPING_PRICE_EACH_PRODUCT;

  const total = calculationOptions
    ? subTotal + priceTotalShipping
    : subTotal - priceTotalShipping;

  return total;
};
