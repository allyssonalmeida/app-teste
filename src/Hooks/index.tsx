
export const usePrice = (pokemon: string) => {

  const listPrice = (pokemon.length * 15).toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD'
  })
  const price = (pokemon.length * 14).toLocaleString('en-US', { 
    style: 'currency', 
    currency: 'USD'
  })

  return [price, listPrice];
}