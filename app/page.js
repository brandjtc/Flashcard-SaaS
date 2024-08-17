"use client"; // Ensures the component can use client-side features
import React from 'react';
import ResultPage from './result/page'; // or define ResultPage here
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Container, CircularProgress, Typography, Box } from '@mui/material'
import getStripe from '../utils/get-stripe'  // Ensure this is correctly imported

const handleSubmit = async () => {
  try {
    const checkoutSession = await fetch('/api/checkout_sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' }, // Correct header
    })

    const checkoutSessionJson = await checkoutSession.json()

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })

    if (error) {
      console.warn(error.message)
    }
  } catch (error) {
    console.error("Checkout session error:", error)
  }
}

export default ResultPage
