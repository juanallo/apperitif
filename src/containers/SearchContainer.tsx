import React, { useState, useEffect, ReactElement } from 'react'
import { Loading } from '../components/Loading/Loading'
import { Drink } from '../api/Adapter'
import { fetchSearch } from '../api/Search'
import { Error } from '../components/Error/Error'

export interface ChildrenData {
  error?: string
  data?: Array<Drink>
}

export interface SearchContainerProps {
  children: (data: Array<Drink>) => ReactElement
  search: string
}

export const SearchContainer = ({ children, search }: SearchContainerProps) => {
  const [loading, setLoading] = useState(true)
  const [retryCount, setRetry] = useState(0)
  const [data, setData] = useState({} as ChildrenData)

  useEffect(() => {
    fetchSearch(search)
      .then((drinks) => {
        setLoading(false)
        setData({
          data: drinks,
        })
      })
      .catch((e) => {
        console.log(e)
        setLoading(false)
        setData({
          error: e,
        })
      })
  }, [retryCount, search])

  if (loading) {
    return <Loading text="finding those cocktails..." />
  }

  if (data.error) {
    return (
      <Error
        retry={() => {
          setRetry(retryCount + 1)
          setLoading(true)
        }}
      />
    )
  }

  return children(data.data || [])
}
