import api from '../services/api'
import { useState, useEffect } from 'react'

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
        setDonuts(previous => ({
          ...previous,
          data: donuts.data,
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
