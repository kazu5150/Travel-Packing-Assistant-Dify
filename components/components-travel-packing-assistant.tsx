'use client'

import { useState } from 'react'
import { TravelForm } from './travel-form'
import { PackingList } from './packing-list'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from 'lucide-react'

export function TravelPackingAssistantComponent() {
  const [packingList, setPackingList] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleGenerateList = async (formData) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('https://api.dify.ai/v1/chat-messages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${formData.apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: {
            destination: formData.destination,
            duration: formData.duration,
            season: formData.season,
          },
          query: "Create a packing list for this trip",
          user: "user-123",
          response_mode: "blocking",
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to fetch packing list')
      }

      const data = await response.json()
      const parsedAnswer = JSON.parse(data.answer)

      setPackingList(parsedAnswer.packingList)
    } catch (err) {
      console.error('Error generating packing list:', err)
      setError('Failed to generate packing list. Please check your API key and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center text-sky-800 mb-8">Travel Packing Assistant</h1>
      <TravelForm onSubmit={handleGenerateList} />
      {isLoading && (
        <div className="flex justify-center my-8">
          <Loader2 className="h-8 w-8 animate-spin text-sky-500" />
        </div>
      )}
      {error && (
        <Alert variant="destructive" className="mt-4">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      {packingList && <PackingList items={packingList} />}
    </div>
  )
}