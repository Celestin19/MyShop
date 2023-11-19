<template>
    <div>
      <h2>Gestion des Stocks</h2>
      <table>
        <!-- Structure similaire à UserList.vue pour afficher les stocks -->
      </table>
      <!-- Ajoutez des boutons ou des formulaires pour la gestion des stocks -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        stocks: []
      }
    },
    mounted() {
      this.getStocks();
    },
    methods: {
      getStocks() {
        // Utilisez axios pour récupérer les données des stocks
      }
    }
  }
  </script>
  