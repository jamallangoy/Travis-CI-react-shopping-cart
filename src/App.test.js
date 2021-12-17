import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { api } from './api'

const mockfetchProducts= (api.createItem = jest.fn())



test('fetch products from Strapi', async () => {
  const url = "http://localhost:1337/products"
  mockfetchProducts.mockResolvedValueOnce(url);

  const { getByText, getByPlaceholderText} = render(<App />);

  const input = getByPlaceholderText('http://localhost:1337/products')
  const button = getByText('Submit')
  fireEvent.change(input, {target:{value:{url}}})
  fireEvent.click(button)

  await waitFor(() => getByPlaceholderText('http://localhost:1337/products')) 

  // expect(mockfetchProducts).toBeCalledTimes(1);  
  // expect(mockfetchProducts).toBeCalled(
  //   expect.stringContaining('http://localhost:1337/products')
  // )
  
});
