
export const EXCHANGE_RATES: 
{ [fromCurrency: string]: 
{ [toCurrency: string]: number } } = {
  "COP": {
    "USD": 0.00025, 
    "EUR": 0.00023, 
    "COP": 1,      
    "JPY": 0.039,  
    "CNY": 0.0018  
  },
  "USD": {
    "COP": 4000,   
    "EUR": 0.92,   
    "USD": 1,      
    "JPY": 155,    
    "CNY": 7.2     
  },
  "EUR": {
    "COP": 4350,   
    "USD": 1.08,   
    "EUR": 1,      
    "JPY": 168,    
    "CNY": 7.8     
  },
  "JPY": {
    "COP": 25.6,   
    "USD": 0.0064, 
    "EUR": 0.0059, 
    "JPY": 1,      
    "CNY": 0.046   
  },
  "CNY": {
    "COP": 555,    
    "USD": 0.14,   
    "EUR": 0.13,   
    "JPY": 21.7,   
    "CNY": 1       
  }
};

export const getDisplayCurrencyCode = (locale: string): string => {
  if (locale.startsWith("es")) return "COP";
  if (locale.startsWith("fr")) return "EUR";
  if (locale.startsWith("jp")) return "JPY";
  if (locale.startsWith("zh")) return "CNY";
  if (locale.startsWith("en")) return "USD";
  return "USD"; 
};


export const convertCurrency = (
  amount: number,
  fromCurrency: string,
  toCurrency: string
): number => {
  if (fromCurrency === toCurrency) {
    return amount;
  }

  const rate = EXCHANGE_RATES[fromCurrency]?.[toCurrency];

  if (rate) {
    return amount * rate;
  } else {
    console.warn(`No fixed exchange rate found for ${fromCurrency} to ${toCurrency}. Returning original amount.`);
    return amount; 
  }
};