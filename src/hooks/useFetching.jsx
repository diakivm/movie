import React from 'react'

export default function useFetching(callback) {
      const [isLoading, setIsLoading] = React.useState(false)
      const [errorValue, setErrorValue] = React.useState(false)

     const fetching = async () => {
         try {
            setIsLoading(true)
            await callback()
         } catch (error) {
            setErrorValue(error)
         }
         finally{
            setIsLoading(false)
         }
     }

     return [fetching, isLoading, errorValue]
}
