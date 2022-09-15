<template>
  <v-app id="inspire">
    <v-system-bar app>
      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon color="indigo" dark> mdi-account-circle </v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Lista de Tarefas</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-navigation-drawer permanent>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Application </v-list-item-title>
            <v-list-item-subtitle> subtext </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-navigation-drawer>

    <v-main class="pink lighten-5">
      <v-container>
        <v-row>
          <template v-for="n in 3">
            <v-col :key="n" class="mt-2" cols="12">
              <strong>Tarefa {{ n }}</strong>
            </v-col>

            <v-col v-for="j in 6" :key="`${n}${j}`" cols="6" md="2">
              <v-sheet height="180"></v-sheet>
            </v-col>
          </template>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ drawer: null }),
};
</script>
