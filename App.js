import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Button, ActivityIndicator } from "react-native"
import { getSomeRandom } from "popular-movie-quotes"

const App = () => {
  const [quote, setQuote] = useState(null)
  console.log("quote", quote)
  const getQuote = () => {
    setQuote(null)
    setQuote(getSomeRandom(1))
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
          {console.log("quote inside", quote[0].movie)}

          <Text style={styles.quoteText}>{quote[0].quote}</Text>
          <Text style={styles.captionText}>
            - {quote[0].movie}, {quote[0].year}
          </Text>
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
    fontWeight: "800"
  },
  captionText: {
    fontSize: 20,
    fontWeight: "600",
    margin: "5%"
  }
})

export default App
