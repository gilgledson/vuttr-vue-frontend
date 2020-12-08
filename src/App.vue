<template>
  <div id="app">
    <v-app>
        <v-main>
            <v-container fluid>
              <Home />
              <MakeToast />
            </v-container>
        </v-main>
    </v-app>
 
  </div>
</template>

<script>
import Home from './pages/home';
import MakeToast from "./components/make_toast";
export default {
  name: 'App', 
  components:{
    Home,
    MakeToast
  }
}
</script>
