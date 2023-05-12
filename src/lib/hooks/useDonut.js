import { useEffect, useState } from 'react'
import api from '../services/api'

const TYPES = [{
  id: 1,
  prop: "is_vegan",
  title: "Vegan"
},
{
  id: 2,
  prop: "is_sugar_free",
  title: "Sugar free"
},{
  id: 3,
  prop: "is_gluten_free",
  title: "Gluten Free"
}]

const useDonut = () => {
  const [donuts, setDonuts] = useState({
    data: [],
    isLoading: true,
    error: false
  })

  useEffect(() => {
    api
      .from('donut')
      .select('*')
      .then(donuts => {

        const processed_data = donuts.data.map(donut => {

          // const donut_types = TYPES.reduce((acc, type) => {
          //   if (donut[type.prop]) return acc.concat(type.title)
          //   return acc
          // }, []);

          const donut_types = TYPES
            .filter(type => donut[type.prop])
            .map(type => {
              return {
                id: type.id,
                title: type.title
              }
            })

          return {
            ...donut,
            types: donut_types
          }

        })

        setDonuts(previous => ({
          ...previous,
          data: processed_data,
          error: false,
          isLoading: false
        }))
      })
      .catch(() => {
        setDonuts(previous => ({
          ...previous,
          error: true,
          isLoading: false
        }))
      })
  }, [])

  return {
    donuts: donuts.data,
    isLoading: donuts.isLoading,
    error: donuts.error
  }
}

export default useDonut
