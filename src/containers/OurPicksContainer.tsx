import React, { useState, useEffect, ReactElement } from 'react'
import { Loading } from '../components/Loading/Loading'
import { Drink } from '../api/Adapter'
import { fetchOurPicks, fetchOurPicksFromCache } from '../api/OurPicks'
import { Error } from '../components/Error/Error'

export interface ChildrenData {
  error?: string
  data?: Array<Drink>
}

export interface OurPicksContainerProps {
  isConnected?: boolean
  children: (data: Array<Drink>) => ReactElement
}

export const OurPicksContainer = ({
  isConnected = true,
  children,
}: OurPicksContainerProps) => {
  const [loading, setLoading] = useState(true)
  const [retryCount, setRetry] = useState(0)
  const [data, setData] = useState({} as ChildrenData)

  useEffect(() => {
    const fetchFn = isConnected ? fetchOurPicks : fetchOurPicksFromCache
    fetchFn()
      .then((drinks) => {
        setLoading(false)
        setData({
          data: drinks,
        })
      })
      .catch((e) => {
        setLoading(false)
        setData({
          error: e,
        })
      })
  }, [retryCount, isConnected])

  if (loading) {
    return <Loading text="Loading Our Picks..." />
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
