import { useContext } from "react"
import { LoginBox } from "./components/loginBox"
import { MessageList } from "./components/MessageList"
import { SendMessageForm } from "./components/SendMassageForm"
import { AuthContext } from "./contexts/auth"

import styles from "./styles/App.module.scss"

export function App() {
  const { user} = useContext(AuthContext);

  return (
    <main className={`${styles.contentWrapper} ${Boolean(user) ? styles.contentSigned : ''}`}>
      <MessageList />
      {
        Boolean(user) ? <SendMessageForm /> : <LoginBox />
      }
    </main>
  )
}


