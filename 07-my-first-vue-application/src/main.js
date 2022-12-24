import {createApp} from "vue"
import App from "./app"
import {
  FriendForm,
  FriendHeader,
  FriendItem,
  FriendList
} from "./components/friend"

const application = createApp(App)
application.component("friend-header", FriendHeader)
application.component("friend-form", FriendForm)
application.component("friend-list", FriendList)
application.component("friend-item", FriendItem)
application.mount("#app")
