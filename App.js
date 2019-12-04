import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Button, ActivityIndicator } from "react-native"
import { getRandomQuote } from "popular-movie-quotes"

const App = () => {
  const [quote, setQuote] = useState(null)

  const getQuote = () => {
    setQuote(null)
    setQuote(getRandomQuote())
  }

  useEffect(() => {
    getQuote()
    return () => {
      cleanup
    }
  }, [])

  return (
    <View style={styles.container}>
      {!quote ? (
        <ActivityIndicator size="large" color="#151965" />
      ) : (
        <>
          <Text style={styles.quoteText}>{quote}</Text>
          <View style={{ position: "absolute", bottom: 0 }}>
            <Button title="New Quote!" onPress={() => getQuote()} />
          </View>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: "5%"
  },
  quoteText: {
    fontSize: 30,
    fontWeight: "600"
  }
})

export default App
