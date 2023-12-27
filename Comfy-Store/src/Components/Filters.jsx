import { Form, useLoaderData, Link } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckbox from './FormCheckbox'
const Filters = () => {
  const { meta, params } = useLoaderData()
  const { search, company, category, shipping, order, price } = params
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search*/}
      <FormInput
        type="search"
        label="search product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        name="category"
        label="select category"
        size="select-sm"
        list={meta.categories}
        defaultValue={category}
      />
      <FormSelect
        name="company"
        label="select company"
        size="select-sm"
        list={meta.companies}
        defaultValue={company}
      />
      <FormSelect
        name="sort by"
        label="order"
        size="select-sm"
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
      />
      <FormRange
        label="select price"
        name="price"
        size="range-sm"
        price={price}
      />
      <FormCheckbox
        label="free shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      {/* Buttons*/}
      <button type="submit" className="btn btn-primary btn-sm">
        Search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm">
        {' '}
        Reset{' '}
      </Link>
    </Form>
  )
}

export default Filters
