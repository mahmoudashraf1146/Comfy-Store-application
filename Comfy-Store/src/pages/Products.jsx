import { useLoaderData } from 'react-router-dom'
import { customFetch } from '../utils'
import { PaginationContainer, ProductsContainer, Filters } from '../Components'
export { PaginationContainer, Filters, ProductsContainer } from '../Components'
const url = '/products'

const allProductsQuery = (queryParams) => {
  const { search, category, company, sort, price, shipping, page } = queryParams
  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? '',
      company ?? '',
      sort ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch(url, { params: queryParams }),
  }
}

export const loader =
  (queryClient) =>
  async ({ request }) => {
    console.log(new URL(request.url).searchParams)
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])
    console.log(params)
    const response = await queryClient.ensureQueryData(allProductsQuery(params))
    const products = response.data.data
    const meta = response.data.meta
    return { products, meta, params }
  }
const Products = () => {
  return (
    <>
      <Filters /> <ProductsContainer /> <PaginationContainer />
    </>
  )
}

export default Products
