<template>
  <div id="app">
    <v-app>
        <v-main>
            <v-container fluid>
              <Home />
            </v-container>
        </v-main>
    </v-app>
 
  </div>
</template>

<script>
import Home from './pages/home';

export default {
  name: 'App', 
  components:{
    Home
  }
}
</script>
