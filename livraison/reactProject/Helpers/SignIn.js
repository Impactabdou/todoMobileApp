//mutation for singin
const API_URL = 'http://graphql.unicaen.fr:4000'
const SIGN_IN = `
mutation SignIn($username: String!, $password: String!) {
  signIn(username: $username, password: $password)
}`
export async function signIn(username, password) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: SIGN_IN,
                variables: {
                    username: username,
                    password: password
                }
            })
        })
        const jsonResponse = await response.json()
        if (jsonResponse.errors != null) {
            throw jsonResponse.errors[0]
        }
        return jsonResponse.data.signIn
    } catch (error) {
        throw error
    }
  }