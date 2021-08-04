<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" icon x-small>
            <v-icon v-if="Todolist" color="orange">mdi-pencil</v-icon>
            <v-icon v-else color="success">mdi-plus</v-icon>
        </v-btn>

      </template>

      <v-card>
          <v-card-title class="text-h5 ">
            <div v-if="Todolist">Détails de {{ todo_name }}</div>
            <div v-else>Ajout d'une todolist</div>
              <v-btn color="red" icon @click="delete_todolist" v-if="Todolist"> 
                <v-icon>mdi-minus</v-icon>
              </v-btn>
          </v-card-title>

          <v-container>
              <v-text-field v-model="todo_name" @keyup.enter.native="update_todolist" label="nom"></v-text-field>
              <v-select :items="['Faible', 'Moyenne', 'Forte']" v-model="priority" label="Priorité" @click="update_todolist"></v-select>
              <v-date-picker v-model="date" full-width></v-date-picker>
              
              <v-text-field label="Details" textarea v-model="details"  @keyup.enter.native="update_todolist">
              </v-text-field>

              <v-btn color="success" block v-if="!Todolist" @click="add_todolist">Créer</v-btn>
          </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script src="./js/details_todolist.js"></script>
