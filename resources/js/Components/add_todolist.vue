<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="success"
          dark
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 primary ">
          Ajout d'une liste de tâche
        </v-card-title>

        <v-card-text>
          <v-text-field name="todo-name" label="Nom de la liste" v-model="todo_name"></v-text-field>
          
          <v-date-picker
            v-model="date"
            full-width
            class="mt-4"
          ><p>Entrer une date d'expiration pour cette liste</p></v-date-picker>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="add_todolist">
            Créer la liste
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./js/add_todolist.js"></script>
