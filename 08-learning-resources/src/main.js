import {createApp} from "vue"
import App from "./app"
import BaseButton from "./components/uis/base-button"
import BaseCard from "./components/uis/base-card"
import BaseDialog from "./components/uis/base-dialog"

const application = createApp(App)
application.component("base-dialog", BaseDialog)
application.component("base-card", BaseCard)
application.component("base-button", BaseButton)
application.mount("#app")
