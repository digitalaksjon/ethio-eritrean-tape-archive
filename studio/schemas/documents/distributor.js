import { BiNetworkChart } from 'react-icons/bi'

export default {
  name: 'distributor',
  type: 'document',
  title: 'Distributors',
  icon: BiNetworkChart,
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name'
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}
