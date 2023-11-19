<template>
    <div>
      <h2>Liste des Utilisateurs</h2>
      <table>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Email</th>
        </tr>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        users: []
      }
    },
    mounted() {
      this.getUsers();
    },
    methods: {
      getUsers() {
        // Utilisez axios pour récupérer les données des utilisateurs
        // this.users = response.data;
      }
    }
  }
  </script>
  